import NoteCard from '../NoteCard'
import { notes } from '../../data/notes'

const NotesPreview = () => {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="notes">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        03 / ЗАМЕТКИ И ЭКСПЕРИМЕНТЫ
      </p>
      <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">
          Думаю вслух.
        </p>
        <p className="leading-[1.35]">
          Проверяю руками.
        </p>
      </div>
      <div className="flex gap-6 items-start overflow-clip relative shrink-0 w-full max-xl:flex-col">
        {notes.map(note => <NoteCard key={note.number} note={note} />)}
      </div>
    </section>
  )
}

export default NotesPreview
