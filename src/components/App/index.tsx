import { Route, Routes } from 'react-router-dom'
import CaseStudy from '../../pages/CaseStudy'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'
import Notes from '../../pages/Notes'
import Resume from '../../pages/Resume'
import Layout from '../Layout'
import LanguageProvider from '../LanguageProvider'
import MotionProvider from '../MotionProvider'

const App = () => {
  return (
    <LanguageProvider>
      <MotionProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cases/x5-club" element={<CaseStudy />} />
            <Route path="notes" element={<Notes />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MotionProvider>
    </LanguageProvider>
  )
}

export default App
