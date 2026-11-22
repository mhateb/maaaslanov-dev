import { useLanguage } from '../../languageContext'
const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-6 py-6 md:max-w-[800px] xl:max-w-[1440px] xl:px-24">
      <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-7 text-[12px] text-muted xl:pt-12">
        <p>{t("Дмитрий Масланов · 2026", "Dmitry Maslanov · 2026")}</p>
        <p>{t("С вниманием к деталям. И к людям.", "With care for the details and the people using them.")}</p>
      </div>
    </footer>
  )
}

export default Footer
