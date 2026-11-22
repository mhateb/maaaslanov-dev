import { useLanguage } from '../../languageContext'
import type { ReactNode } from 'react'

type ResumeDownloadPropsType = {
  className?: string
  children?: ReactNode
}

const ResumeDownload = ({ className = '', children }: ResumeDownloadPropsType) => {
  const { language, t } = useLanguage()
  const filename = language === 'en' ? 'dmitry-maslanov-resume-en.pdf' : 'dmitry-maslanov-resume.pdf'
  return (
    <a className={`inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full px-4.5 py-3 text-sm leading-[1.3] font-medium transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] ${className}`} href={`${import.meta.env.BASE_URL}${filename}`} download>
      {children ?? t("Скачать резюме ↓", "Download résumé ↓")}
    </a>
  )
}

export default ResumeDownload
