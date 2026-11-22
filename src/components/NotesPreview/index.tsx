import { useLanguage } from '../../languageContext'
import NoteCard from '../NoteCard'
import { getNotes } from '../../data/notes'

const NotesPreview = () => {
  const { t } = useLanguage()
  const notes = getNotes(t)
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="notes">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">{t("03 / ЗАМЕТКИ И ЭКСПЕРИМЕНТЫ", "03 / NOTES AND EXPERIMENTS")}</p>
      <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">{t("Думаю вслух.", "Thinking out loud.")}</p>
        <p className="leading-[1.35]">{t("Проверяю руками.", "Testing ideas in practice.")}</p>
      </div>
      <div className="flex gap-6 items-start overflow-clip relative shrink-0 w-full max-xl:flex-col">
        {notes.map(note => <NoteCard key={note.number} note={note} />)}
      </div>
    </section>
  )
}

export default NotesPreview
