import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import NotesPreview from '../components/NotesPreview'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main id="main" className="w-full">
      <Hero />
      <Projects />
      <Experience />
      <NotesPreview />
      <Contact />
    </main>
  )
}

export default Home
