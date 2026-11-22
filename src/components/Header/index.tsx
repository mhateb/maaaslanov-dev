import { useLocation } from 'react-router-dom'
import Link from '../Link'

const navigation: [string, string][] = [
  ['Проекты', '/#projects'],
  ['Опыт', '/#experience'],
  ['Заметки', '/notes'],
  ['Резюме', '/resume'],
  ['Контакты', '/#contacts'],
]

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className="mx-auto w-full max-w-[1440px] px-6 py-6 md:max-w-[800px] xl:max-w-[1440px] xl:px-24 xl:py-7">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-5.5 border-b border-line pb-5.5">
        <Link className="min-w-0 flex-1 text-xl leading-[1.3] font-medium transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] xl:text-[21px]" to="/">
          Дмитрий Масланов<span className="hidden xl:inline"> / фронтенд</span>
        </Link>
        <nav aria-label="Основная навигация" className="order-last flex w-full flex-wrap gap-x-5 gap-y-2 text-xs leading-[1.3] text-muted xl:order-0 xl:w-auto xl:gap-x-6 xl:text-[15px]">
          {navigation.map(([label, to]) => (
            <Link key={to} className="transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to={to} aria-current={pathname === to ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="text-[28px] leading-[1.3] text-mint transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] xl:hidden" to="/#contacts" aria-label="На связи">∗</Link>
        <Link className="hidden min-h-10.5 shrink-0 items-center justify-center rounded-full bg-mint px-4.5 py-3 text-sm leading-[1.3] font-medium text-deep transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] xl:inline-flex" to="/#contacts">На связи ↗</Link>
      </div>
    </header>
  )
}

export default Header
