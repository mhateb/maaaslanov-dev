export function ResumeDownload({ className = '', children = 'Скачать резюме ↓' }) {
  return (
    <a className={`pill ${className}`} href={`${import.meta.env.BASE_URL}dmitry-maslanov-resume.pdf`} download>
      {children}
    </a>
  )
}
