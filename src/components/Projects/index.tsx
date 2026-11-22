import Link from '../Link'
import Comparison from '../Comparison'
import ComparisonViewport from '../ComparisonViewport'
import ProjectCard from '../ProjectCard'
import ProjectFacts from '../ProjectFacts'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <Comparison>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="projects">
        <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-peach text-[11px] w-full">
          01 / ИЗБРАННЫЕ ПРОЕКТЫ
        </p>
        <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
          <p className="leading-[1.3] mb-0">
            Проекты
          </p>
          <p className="leading-[1.3]">
            и моя роль в них.
          </p>
        </div>
        <div className="bg-surface flex gap-8 items-start overflow-clip relative rounded-3xl shrink-0 w-full max-xl:flex-col max-xl:p-5 xl:p-8">
          <div className="flex flex-col gap-6 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-105">
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[11px] w-full">
              X5 GROUP / ВНУТРЕННЯЯ ПЛАТФОРМА
            </p>
            <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[28px] xl:text-[35px]">
              <p className="leading-[1.3] mb-0">
                X5 Group
              </p>
              <p className="leading-[1.3]">
                Конструктор интерфейсов
              </p>
            </div>
            <ProjectFacts facts={projects.club} />
            <Link className="font-sans font-medium leading-[1.3] relative shrink-0 text-peach text-[15px] w-full transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/cases/x5-club">
              Разобрать кейс ↗
            </Link>
          </div>
          <div className="bg-mint flex flex-col gap-5 items-start overflow-clip relative rounded-2xl max-xl:p-4 max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:p-7">
            <div className="font-sans font-medium leading-0 relative shrink-0 text-deep w-full max-xl:text-[27px] xl:text-[40px]">
              <p className="leading-[1.3] mb-0">
                ОТ МАКЕТА
              </p>
              <p className="leading-[1.3]">
                ДО ЗАПУСКА.
              </p>
            </div>
            <ComparisonViewport className="bg-[#eeede8] items-start overflow-clip relative rounded-xl shrink-0 w-full max-xl:h-67.5 xl:h-80" large={false} />
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-deep text-[12px] w-full">
              Пример сборки экрана
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-start overflow-clip relative shrink-0 w-full max-xl:flex-col">
          {projects.related.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
    </Comparison>
  )
}

export default Projects
