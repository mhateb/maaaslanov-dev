import { Link } from './Link'

export const projects = {
  club: [
    'Сократить время на сборку новых экранов.',
    'Tech Lead: конструктор UI-блоков, iframe-предпросмотр, Storybook и AI-инструменты.',
    'Команда собирает экраны из готовых компонентов и проверяет их прямо в админке.',
  ],
  related: [
    {
      title: 'X5 Пакет',
      subtitle: 'Партнёрские интеграции',
      metric: '×2',
      tone: 'bg-sand font-serif italic',
      facts: [
        'Быстрее запускать партнёрские интеграции.',
        'Разработал брендированные личные кабинеты; перенёс часть логики Redux в Zustand.',
        'Партнёрские интеграции запускаются в 2 раза быстрее.',
      ],
    },
    {
      title: 'AI-инструменты',
      subtitle: 'для команды',
      metric: '15 мин → 15 сек',
      tone: 'bg-lilac',
      facts: [
        'Убрать рутину в формах и ревью Merge Requests.',
        'Внедрил AI-агента для заполнения форм и AI-ревьюера в GitLab.',
        'Заполнение форм: 15 минут → 15 секунд.',
      ],
    },
  ],
}

const factLabels = ['Задача', 'Мой вклад', 'Результат']

export function ProjectFacts({ facts }) {
  return (
    <dl className="grid gap-6 leading-[1.3]">
      {facts.map((fact, index) => (
        <div key={factLabels[index]} className="grid gap-1.5">
            <dt className="text-[10px] font-medium text-mint uppercase">{factLabels[index]}</dt>
            <dd className="text-sm text-muted xl:text-[15px]">{fact}</dd>
        </div>
      ))}
    </dl>
  )
}

export function ProjectCard({ project }) {
  return (
    <article className="flex w-full flex-col gap-6 rounded-[20px] bg-surface p-5 xl:min-w-0 xl:flex-1 xl:self-stretch xl:p-7">
      <p className={`${project.tone} rounded-xl p-5 text-[clamp(1.75rem,8vw,2.375rem)] leading-[1.3] text-deep xl:p-7 xl:text-[54px]`}>
        {project.metric}
      </p>
      <h3 className="text-[26px] leading-[1.3] font-medium xl:text-[30px]">{project.title}<br />{project.subtitle}</h3>
      <ProjectFacts facts={project.facts} />
      <Link className="action-link mt-auto w-fit text-sm font-medium text-peach" to="/resume#experience">
        Подробнее в резюме ↗
      </Link>
    </article>
  )
}
