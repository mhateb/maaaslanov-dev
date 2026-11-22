import CaseIntroduction from '../components/CaseIntroduction'
import CaseDemo from '../components/CaseDemo'
import CaseContext from '../components/CaseContext'
import CaseDecisions from '../components/CaseDecisions'
import CaseResults from '../components/CaseResults'
import CaseContact from '../components/CaseContact'

const CaseStudy = () => {
  return (
    <main id="main" className="w-full">
      <CaseIntroduction />
      <CaseDemo />
      <CaseContext />
      <CaseDecisions />
      <CaseResults />
      <CaseContact />
    </main>
  )
}

export default CaseStudy
