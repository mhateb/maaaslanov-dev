import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { getPageSeo } from '../../seo'
import Footer from '../Footer'
import Header from '../Header'

const Layout = () => {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    const page = getPageSeo(pathname)
    document.title = page.title
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
      if (page.path) socialUrl?.setAttribute('content', new URL(page.path, siteUrl).href)
      else socialUrl?.removeAttribute('content')
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (page.path && !page.noindex) {
        if (!canonical) {
          canonical = document.createElement('link')
          canonical.rel = 'canonical'
          document.head.append(canonical)
        }
        canonical.href = new URL(page.path, siteUrl).href
      } else {
        canonical?.remove()
      }
    }
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="fixed top-3 left-3 z-50 -translate-y-30 rounded-lg bg-mint p-3 text-deep focus:translate-y-0" href="#main">К содержанию</a>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
