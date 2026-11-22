import { defineConfig, loadEnv, type PreviewServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { pages } from './src/seo'

function prerenderedPreview() {
  return {
    name: 'prerendered-preview',
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use((request, _response, next) => {
        const current = request as { url?: string }
        const url = new URL(current.url ?? '/', 'http://localhost')
        const base = server.config.base.replace(/\/$/, '')
        if (base && !url.pathname.startsWith(`${base}/`)) return next()
        const route = url.pathname.slice(base.length).replace(/\/+$/, '') || '/'
        if (route !== '/' && Object.hasOwn(pages, route)) {
          current.url = `${base}${route}/index.html${url.search}`
        }
        next()
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const siteUrl = loadEnv(mode, '.', 'SITE_').SITE_URL
  const base = siteUrl ? new URL(siteUrl).pathname.replace(/\/+$/, '') + '/' : '/'
  return { base, plugins: [react(), tailwindcss(), prerenderedPreview()] }
})
