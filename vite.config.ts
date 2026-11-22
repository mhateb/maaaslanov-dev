import { defineConfig, type PreviewServer } from 'vite'
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
        const route = url.pathname.replace(/\/+$/, '') || '/'
        if (route !== '/' && Object.hasOwn(pages, route)) {
          current.url = `${route}/index.html${url.search}`
        }
        next()
      })
    },
  }
}

export default defineConfig({ plugins: [react(), tailwindcss(), prerenderedPreview()] })
