import { useLanguage } from '../../languageContext'
import { useLocation } from 'react-router-dom'
import Link from '../Link'
import LanguageSwitch from '../LanguageSwitch'

const Header = () => {
  const { t } = useLanguage()
  const navigation: [string, string][] = [
    [t("Проекты", "Projects"), '/#projects'],
    [t("Опыт", "Experience"), '/#experience'],
    [t("Заметки", "Notes"), '/notes'],
    [t("Резюме", "Résumé"), '/resume'],
    [t("Контакты", "Contact"), '/#contacts'],
  ]
  const { pathname } = useLocation()

  return (
    <header className="mx-auto w-full max-w-[1440px] px-6 py-6 md:max-w-[800px] xl:max-w-[1440px] xl:px-24 xl:py-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-5.5 xl:gap-x-5 border-b border-line pb-5.5">
        <Link className="min-w-0 flex-1 text-xl leading-[1.3] font-medium transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] xl:text-[21px]" to="/">{t("Дмитрий Масланов", "Dmitry Maslanov")}<span className="hidden xl:inline">{t(" / фронтенд", " / frontend")}</span>
        </Link>
        <nav aria-label={t("Основная навигация", "Main navigation")} className="order-last flex w-full flex-wrap gap-x-5 gap-y-2 text-xs leading-[1.3] text-muted xl:order-0 xl:w-auto xl:gap-x-6 xl:text-[15px]">
          {navigation.map(([label, to]) => (
            <Link key={to} className="transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to={to} aria-current={pathname === to ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <LanguageSwitch />
        <Link className="text-[28px] leading-[1.3] text-mint transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] xl:hidden" to="/#contacts" aria-label={t("На связи", "Get in touch")}>∗</Link>
        <Link className="hidden min-h-10.5 shrink-0 items-center justify-center rounded-full bg-mint px-4.5 py-3 text-sm leading-[1.3] font-medium text-deep transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] xl:inline-flex" to="/#contacts">{t("На связи ↗", "Get in touch ↗")}</Link>
      </div>
    </header>
  )
}

export default Header
