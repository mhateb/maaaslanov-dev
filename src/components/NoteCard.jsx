import { Link } from './Link'

export const notes = [
  { number: '01 / ↓', topic: 'Интерфейсы', lines: ['Как собирать экраны', 'из готовых блоков'], description: 'Компоненты и предпросмотр в админке.', tone: 'text-peach' },
  { number: '02 / ~', topic: 'Состояние', lines: ['Зачем переносить', 'часть Redux в Zustand'], description: 'Опыт работы над X5 Пакет.', tone: 'text-mint' },
  { number: '03 / Aa', topic: 'Webpack', lines: ['Как я ускорил', 'сборку в 5 раз'], description: 'С ~5 минут до 1 минуты в Ru-center.', tone: 'text-peach' },
]

export function NoteCard({ note }) {
  return (
    <article className="flex w-full flex-col gap-6 rounded-[18px] bg-surface p-6 xl:min-w-0 xl:flex-1 xl:self-stretch">
      <p aria-hidden="true" className={`font-serif text-[30px] leading-[1.35] italic xl:text-[38px] ${note.tone}`}>{note.number}</p>
      <p className="text-[10px] leading-[1.35] font-medium text-muted uppercase">Скоро · {note.topic}</p>
      <h3 className="text-[23px] leading-[1.35] font-medium xl:text-2xl">{note.lines[0]}<br />{note.lines[1]}</h3>
      <p className="text-sm leading-[1.35] text-muted">{note.description}</p>
      <Link className="action-link mt-auto w-fit text-[11px] leading-[1.35] text-mint" to="/notes">
        Заметка готовится · скоро ↗
      </Link>
    </article>
  )
}
