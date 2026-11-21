import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Link } from './Link'

const navigation = [
  ['Проекты', '/#projects'],
  ['Опыт', '/#experience'],
  ['Заметки', '/notes'],
  ['Резюме', '/resume'],
  ['Контакты', '/#contacts'],
]

const pageTitles = {
  '/cases/x5-club': 'Конструктор интерфейсов в X5',
  '/notes': 'Заметки',
  '/resume': 'Резюме',
}

function Header() {
  const { pathname } = useLocation()

  return (
    <header className="layout-section px-6 py-6 xl:px-24 xl:py-7">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-[22px] border-b border-line pb-[22px]">
        <Link className="action-link min-w-0 flex-1 text-xl leading-[1.3] font-medium xl:text-[21px]" to="/">
          Дмитрий Масланов<span className="hidden xl:inline"> / фронтенд</span>
        </Link>
        <nav aria-label="Основная навигация" className="order-last flex w-full flex-wrap gap-x-5 gap-y-2 text-xs leading-[1.3] text-muted xl:order-none xl:w-auto xl:gap-x-6 xl:text-[15px]">
          {navigation.map(([label, to]) => (
            <Link key={to} className="action-link" to={to} aria-current={pathname === to ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="action-link text-[28px] leading-[1.3] text-mint xl:hidden" to="/#contacts" aria-label="На связи">∗</Link>
        <Link className="pill hidden bg-mint text-deep xl:inline-flex" to="/#contacts">На связи ↗</Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="layout-section px-6 py-6 xl:px-24">
      <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-7 text-[12px] text-muted xl:pt-12">
        <p>Дмитрий Масланов · 2026</p>
        <p>С вниманием к деталям. И к людям.</p>
      </div>
    </footer>
  )
}

export function Layout() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const title = pageTitles[pathname]
    document.title = title ? `${title} · Дмитрий Масланов` : 'Дмитрий Масланов / фронтенд'
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main">К содержанию</a>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
