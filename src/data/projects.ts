import type { Translate } from '../language'

export type Project = {
  title: string
  subtitle: string
  metric: string
  tone: string
  resumeLink: string
  facts: [string, string, string]
}

export const getProjects = (t: Translate): { club: [string, string, string]; related: Project[] } => ({
  club: [
    t("Сократить время на сборку новых экранов.", "Shorten the time it takes to build a new screen."),
    t("Tech Lead: конструктор UI-блоков, iframe-предпросмотр, Storybook и AI-инструменты.", "Tech Lead: UI block builder, iframe preview, Storybook, and AI tools."),
    t("Команда собирает экраны из готовых компонентов и проверяет их прямо в админке.", "The team assembles screens from reusable components and checks them directly in the admin panel."),
  ],
  related: [
    {
      title: t("X5 Пакет", "X5 Paket"),
      subtitle: t("Партнёрские интеграции", "Partner integrations"),
      metric: t("Скорость запуска ×2", "2× faster launches"),
      tone: 'bg-sand',
      resumeLink: '/resume#x5-package',
      facts: [
        t("Быстрее запускать партнёрские интеграции.", "Launch partner integrations faster."),
        t("Разработал брендированные личные кабинеты; перенёс часть логики Redux в Zustand.", "Built branded customer portals and migrated part of the Redux logic to Zustand."),
        t("Партнёрские интеграции запускаются в 2 раза быстрее.", "Partner integrations now launch twice as fast."),
      ],
    },
    {
      title: t("AI-инструменты", "AI tools"),
      subtitle: t("для команды", "for the team"),
      metric: t("15 мин → 15 сек", "15 min → 15 sec"),
      tone: 'bg-lilac',
      resumeLink: '/resume#ai-tools',
      facts: [
        t("Убрать рутину в формах и ревью Merge Requests.", "Reduce manual work in form completion and merge request reviews."),
        t("Внедрил AI-агента для заполнения форм и AI-ревьюера в GitLab.", "Introduced an AI form-filling agent and an AI reviewer for GitLab."),
        t("Заполнение форм: 15 минут → 15 секунд.", "Form completion dropped from 15 minutes to 15 seconds."),
      ],
    },
  ],
})
