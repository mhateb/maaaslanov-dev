import type { ReactNode } from 'react'

type ResumeDownloadPropsType = {
  className?: string
  children?: ReactNode
}

const ResumeDownload = ({ className = '', children = 'Скачать резюме ↓' }: ResumeDownloadPropsType) => {
  return (
    <a className={`inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full px-4.5 py-3 text-sm leading-[1.3] font-medium transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] ${className}`} href={`${import.meta.env.BASE_URL}dmitry-maslanov-resume.pdf`} download>
      {children}
    </a>
  )
}

export default ResumeDownload
