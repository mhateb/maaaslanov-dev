import { useLanguage } from '../../languageContext'
import type { Project } from '../../data/projects'
import Link from '../Link'
import ProjectFacts from '../ProjectFacts'

type ProjectCardPropsType = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardPropsType) => {
  const { t } = useLanguage()
  return (
    <article className="flex w-full flex-col gap-6 rounded-[20px] bg-surface p-5 xl:min-w-0 xl:flex-1 xl:self-stretch xl:p-7">
      <p className={`${project.tone} rounded-xl p-5 font-serif italic text-[clamp(1.75rem,8vw,2.375rem)] leading-[1.3] text-deep xl:p-7 xl:whitespace-nowrap xl:text-[clamp(32px,2.75vw,40px)]`}>
        {project.metric}
      </p>
      <h3 className="text-[26px] leading-[1.3] font-medium xl:text-[30px]">{project.title}<br />{project.subtitle}</h3>
      <ProjectFacts facts={project.facts} />
      <Link className="mt-auto w-fit text-sm font-medium text-peach transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to={project.resumeLink}>{t("Подробнее в резюме ↗", "More in my résumé ↗")}</Link>
    </article>
  )
}

export default ProjectCard
