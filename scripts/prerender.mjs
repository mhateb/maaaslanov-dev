import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build, loadEnv } from 'vite'
import { getPageSeo, pages, siteName } from '../src/seo.ts'

const { SITE_URL } = { ...loadEnv('production', process.cwd(), 'SITE_'), ...process.env }
const siteUrl = SITE_URL ? new URL(SITE_URL) : null
if (siteUrl && (!['https:', 'http:'].includes(siteUrl.protocol) || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password)) {
  throw new Error('SITE_URL must be an HTTP(S) origin such as https://example.com')
}

const template = await readFile('dist/index.html', 'utf8')
const temporary = await mkdtemp(resolve('node_modules/.prerender-'))

function escape(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character])
}

function metadata(path) {
  const page = getPageSeo(path)
  const address = page.path && siteUrl ? new URL(page.path, siteUrl).href : null
  const image = siteUrl ? new URL('/social-preview.jpg', siteUrl).href : '/social-preview.jpg'
  const meta = (key, value, property = false) => `<meta ${property ? 'property' : 'name'}="${key}" content="${escape(value)}">`
  return [
    `<title>${escape(page.title)}</title>`,
    meta('description', page.description),
    page.noindex ? meta('robots', 'noindex') : '',
    siteUrl ? meta('site-origin', siteUrl.origin) : '',
    address && !page.noindex ? `<link rel="canonical" href="${escape(address)}">` : '',
    meta('og:type', 'website', true),
    meta('og:locale', 'ru_RU', true),
    meta('og:site_name', siteName, true),
    meta('og:title', page.title, true),
    meta('og:description', page.description, true),
    address ? meta('og:url', address, true) : '',
    meta('og:image', image, true),
    meta('og:image:alt', 'Главная страница портфолио Дмитрия Масланова', true),
    meta('twitter:card', 'summary_large_image'),
  ].filter(Boolean).join('\n    ')
}

try {
  await build({
    publicDir: false,
    build: {
      ssr: 'src/prerender.tsx',
      outDir: temporary,
      rollupOptions: { output: { entryFileNames: 'render.mjs' } },
    },
  })
  const { render } = await import(pathToFileURL(join(temporary, 'render.mjs')).href)
  for (const path of [...Object.keys(pages), '/404']) {
    const file = path === '/404' ? 'dist/404.html' : join('dist', path, 'index.html')
    const html = template
      .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, () => metadata(path))
      .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="${path}">${render(path)}</div>`)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, html)
    console.log(`Prerendered ${file}`)
  }

  let robots = 'User-agent: *\nAllow: /\n'
  if (siteUrl) {
    const urls = Object.keys(pages).filter(path => !pages[path].noindex)
      .map(path => `  <url><loc>${escape(new URL(path, siteUrl).href)}</loc></url>`)
    await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`)
    robots += `Sitemap: ${new URL('/sitemap.xml', siteUrl).href}\n`
  }
  await writeFile('dist/robots.txt', robots)
} finally {
  await rm(temporary, { recursive: true, force: true })
}
