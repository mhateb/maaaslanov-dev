import { useLanguage } from '../../languageContext'
import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { getPageSeo } from '../../seo'
import Footer from '../Footer'
import Header from '../Header'

const Layout = () => {
  const { language, t } = useLanguage()
  const { pathname, hash } = useLocation()
  const initialScroll = useRef(true)

  useLayoutEffect(() => {
    const page = getPageSeo(pathname, language)
    document.title = page.title
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'en' ? 'en_US' : 'ru_RU')
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description)
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (page.noindex) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.name = 'robots'
        document.head.append(robots)
      }
      robots.content = 'noindex'
    } else {
      robots?.remove()
    }

    const siteUrl = document.querySelector<HTMLMetaElement>('meta[name="site-origin"]')?.content
    if (siteUrl) {
      const socialUrl = document.querySelector('meta[property="og:url"]')
      if (page.path) socialUrl?.setAttribute('content', new URL(page.path.slice(1), siteUrl).href)
      else socialUrl?.removeAttribute('content')
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (page.path && !page.noindex) {
        if (!canonical) {
          canonical = document.createElement('link')
          canonical.rel = 'canonical'
          document.head.append(canonical)
        }
        canonical.href = new URL(page.path.slice(1), siteUrl).href
      } else {
        canonical?.remove()
      }
    }
  }, [pathname, language])

  useLayoutEffect(() => {
    if (initialScroll.current) {
      initialScroll.current = false
      const [navigation] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
      if (navigation?.type === 'reload') return
    }

    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="fixed top-3 left-3 z-50 -translate-y-30 rounded-lg bg-mint p-3 text-deep focus:translate-y-0" href="#main">{t("К содержанию", "Skip to content")}</a>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
