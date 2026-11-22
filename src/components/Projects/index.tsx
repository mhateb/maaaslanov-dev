import { useLanguage } from '../../languageContext'
import Link from '../Link'
import ScreenAssembly from '../ScreenAssembly'
import ProjectCard from '../ProjectCard'
import ProjectFacts from '../ProjectFacts'
import RepositoryCase from '../RepositoryCase'
import { getRepositoryProjects } from '../../data/repositoryProjects'
import { getProjects } from '../../data/projects'

const Projects = () => {
  const { language, t } = useLanguage()
  const projects = getProjects(t)
  const repositoryProjects = getRepositoryProjects(t)
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:pt-6 max-xl:pb-12 xl:gap-12 xl:px-24 xl:pt-8 xl:pb-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="projects">
      <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-peach text-[11px] w-full">{t("01 / ИЗБРАННЫЕ ПРОЕКТЫ", "01 / SELECTED PROJECTS")}</p>
      <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.3] mb-0">{t("Проекты", "Projects")}</p>
        <p className="leading-[1.3]">{t("и моя роль в них.", "and my role in them.")}</p>
      </div>
      <div className="bg-surface flex gap-8 items-start overflow-clip relative rounded-3xl shrink-0 w-full max-xl:flex-col max-xl:p-5 xl:p-8">
        <div className="flex flex-col gap-6 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-105">
          <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[11px] w-full">{t("ВНУТРЕННЯЯ ПЛАТФОРМА", "INTERNAL PLATFORM")}</p>
          <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[28px] xl:text-[35px]">
            <p className="leading-[1.3] mb-0">
              X5 Club
            </p>
            <p className="leading-[1.3]">{t("Конструктор интерфейсов", "Screen builder")}</p>
          </div>
          <ProjectFacts facts={projects.club} />
          <Link className="font-sans font-medium leading-[1.3] relative shrink-0 text-peach text-[15px] w-full transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/cases/x5-club">{t("Разобрать кейс ↗", "Read the case study ↗")}</Link>
        </div>
        <ScreenAssembly key={language} />
      </div>
      <div className="flex gap-6 items-start overflow-clip relative shrink-0 w-full max-xl:flex-col">
        {projects.related.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
      <div className="grid w-full gap-5">
        <h2 className="text-2xl font-medium text-ink xl:text-3xl">{t("Самостоятельные проекты", "Independent projects")}</h2>
        <div className="grid gap-6 xl:grid-cols-3">
          {repositoryProjects.map(project => <RepositoryCase key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
