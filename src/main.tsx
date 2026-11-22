import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/golos-text'
import '@fontsource-variable/lora/wght-italic.css'
import '@fontsource/caveat/400.css'
import './styles.css'
import App from './components/App'

const root = document.getElementById('root')
if (!root) throw new Error('Root element is missing')

const page = <BrowserRouter><App /></BrowserRouter>
const pathname = location.pathname.replace(/\/+$/, '') || '/'

if (root.dataset.prerendered === pathname) hydrateRoot(root, page)
else createRoot(root).render(page)
