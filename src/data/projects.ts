export type Project = {
  title: string
  subtitle: string
  metric: string
  tone: string
  facts: [string, string, string]
}

export const projects: { club: [string, string, string]; related: Project[] } = {
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
