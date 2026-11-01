import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource-variable/golos-text'
import '@fontsource-variable/lora/wght-italic.css'
import '@fontsource/caveat/400.css'
import './styles.css'
import { Layout } from './components/Layout'
import { Link } from './components/Link'
import { MotionProvider } from './components/Motion'

function NotFound() {
  return (
    <main id="main" className="layout-section px-6 py-20 xl:px-24">
      <h1 className="mb-6 text-4xl font-medium">Страница не найдена</h1>
      <Link className="pill bg-mint text-deep" to="/">На главную</Link>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MotionProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<main id="main" className="layout-section px-6 py-20 xl:px-24"><h1>Дмитрий Масланов</h1></main>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MotionProvider>
  </BrowserRouter>,
)
