import ResumeProfile from '../components/ResumeProfile'
import ResumeAbout from '../components/ResumeAbout'
import ResumeExperience from '../components/ResumeExperience'
import ResumeSkills from '../components/ResumeSkills'
import ResumeEducation from '../components/ResumeEducation'
import ResumeAvailability from '../components/ResumeAvailability'
import ResumeContact from '../components/ResumeContact'

const Resume = () => {
  return (
    <main id="main" className="w-full resume-page">
      <ResumeProfile />
      <ResumeAbout />
      <ResumeExperience />
      <ResumeSkills />
      <ResumeEducation />
      <ResumeAvailability />
      <ResumeContact />
    </main>
  )
}

export default Resume
