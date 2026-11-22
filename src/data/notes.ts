import type { Translate } from '../language'

export type Note = {
  number: string
  topic: string
  lines: [string, string]
  description: string
  tone: string
}

export const getNotes = (t: Translate): Note[] => [
  { number: '01 / ↓', topic: t("Интерфейсы", "Interfaces"), lines: [t("Как собирать экраны", "Building screens"), t("из готовых блоков", "from reusable blocks")], description: t("Компоненты и предпросмотр в админке.", "Components and live previews in the admin panel."), tone: 'text-peach' },
  { number: '02 / ~', topic: t("Состояние", "State management"), lines: [t("Зачем переносить", "Why migrate some state"), t("часть Redux в Zustand", "from Redux to Zustand?")], description: t("Опыт работы над X5 Пакет.", "Lessons from X5 Paket."), tone: 'text-mint' },
  { number: '03 / Aa', topic: 'Webpack', lines: [t("Как я ускорил", "How I made"), t("сборку в 5 раз", "builds five times faster")], description: t("С ~5 минут до 1 минуты в Ru-center.", "From about five minutes to one at Ru-center."), tone: 'text-peach' },
]
