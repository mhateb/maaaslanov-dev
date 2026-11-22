import type { Note } from '../../data/notes'
import Link from '../Link'

type NoteCardPropsType = {
  note: Note
}

const NoteCard = ({ note }: NoteCardPropsType) => {
  return (
    <article className="flex w-full flex-col gap-6 rounded-[18px] bg-surface p-6 xl:min-w-0 xl:flex-1 xl:self-stretch">
      <p aria-hidden="true" className={`font-serif text-[30px] leading-[1.35] italic xl:text-[38px] ${note.tone}`}>{note.number}</p>
      <p className="text-[10px] leading-[1.35] font-medium text-muted uppercase">Скоро · {note.topic}</p>
      <h3 className="text-[23px] leading-[1.35] font-medium xl:text-2xl">{note.lines[0]}<br />{note.lines[1]}</h3>
      <p className="text-sm leading-[1.35] text-muted">{note.description}</p>
      <Link className="mt-auto w-fit text-[11px] leading-[1.35] text-mint transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/notes">
        Заметка готовится · скоро ↗
      </Link>
    </article>
  )
}

export default NoteCard
