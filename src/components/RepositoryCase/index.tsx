import { useLanguage } from '../../languageContext'
import type { RepositoryProject } from '../../data/repositoryProjects'
import Link from '../Link'
import ProjectFacts from '../ProjectFacts'
import LoadingImage from '../LoadingImage'

type RepositoryCasePropsType = {
  project: RepositoryProject
}

const RepositoryCase = ({ project }: RepositoryCasePropsType) => {
  const { t } = useLanguage()
  const previewUrl = project.demo ?? project.walkthrough ?? project.repository
  const previewLabel = project.demo ? t("Открыть демо", "Open demo") : t("Посмотреть, как работает", "See how it works")

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-[20px] bg-surface">
      <div className="px-4 pt-4 xl:px-5 xl:pt-5">
        <Link
          to={previewUrl}
          target="_blank"
          rel="noopener"
          aria-label={`${previewLabel} · ${project.title}${t(" (новая вкладка)", " (new tab)")}`}
          className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-muted/20 bg-canvas p-3 transition-colors hover:border-mint/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
        >
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <LoadingImage src={project.image} alt={project.imageAlt} loading="lazy" className="relative h-full w-full object-contain" />
          </div>
          <span aria-hidden="true" className="absolute top-2 right-2 grid size-7 place-items-center rounded-full bg-surface text-sm text-ink group-hover:bg-mint group-hover:text-deep">↗</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-5 xl:p-6">
        <div>
          <h3 className="text-2xl font-medium text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        </div>
        <ProjectFacts facts={project.facts} />
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-muted/20 pt-4 text-sm font-medium">
          <Link className="text-peach hover:underline" to={previewUrl} target="_blank" rel="noopener" aria-label={`${previewLabel} · ${project.title}`}>{previewLabel} ↗</Link>
          <Link className="text-muted hover:underline" to={project.repository} target="_blank" rel="noopener" aria-label={`${t("Открыть код проекта ", "View the source for ")}${project.title}${t(" на GitHub", " on GitHub")}`}>{t("Код на GitHub ↗", "Source on GitHub ↗")}</Link>
        </div>
      </div>
    </article>
  )
}

export default RepositoryCase
