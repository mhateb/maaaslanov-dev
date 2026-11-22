export type Note = {
  number: string
  topic: string
  lines: [string, string]
  description: string
  tone: string
}

export const notes: Note[] = [
  { number: '01 / ↓', topic: 'Интерфейсы', lines: ['Как собирать экраны', 'из готовых блоков'], description: 'Компоненты и предпросмотр в админке.', tone: 'text-peach' },
  { number: '02 / ~', topic: 'Состояние', lines: ['Зачем переносить', 'часть Redux в Zustand'], description: 'Опыт работы над X5 Пакет.', tone: 'text-mint' },
  { number: '03 / Aa', topic: 'Webpack', lines: ['Как я ускорил', 'сборку в 5 раз'], description: 'С ~5 минут до 1 минуты в Ru-center.', tone: 'text-peach' },
]
