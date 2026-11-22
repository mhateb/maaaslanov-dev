import { translate } from './language.ts'
import type { Language, Translate } from './language.ts'

const getSiteName = (t: Translate) => t("Дмитрий Масланов · фронтенд", "Dmitry Maslanov · Frontend")

type PageSeo = {
  title: string
  description: string
  noindex?: boolean
}

const getPages = (t: Translate): Record<string, PageSeo> => ({
  '/': {
    title: getSiteName(t),
    description: t("Дмитрий Масланов, фронтенд-разработчик и техлид. Делаю личные кабинеты, админки и рабочие инструменты на React и TypeScript.", "Dmitry Maslanov, frontend developer and tech lead. I build customer portals, admin panels, and internal tools with React and TypeScript."),
  },
  '/cases/x5-club': {
    title: t("X5 Club · Конструктор интерфейсов", "X5 Club · Screen Builder"),
    description: t("Как я разработал конструктор экранов для X5 Club: готовые UI-компоненты, предпросмотр в админке и каталог компонентов в Storybook.", "How I built a screen editor for X5 Club with reusable UI blocks, a live preview in the admin panel, and a Storybook component catalog."),
  },
  '/notes': {
    title: t("Заметки о фронтенде", "Frontend notes"),
    description: t("Заметки Дмитрия Масланова о компонентах, управлении состоянием и автоматизации работы фронтенд-команды.", "Dmitry Maslanov’s notes on components, state management, and frontend automation."),
    noindex: true,
  },
  '/resume': {
    title: t("Резюме фронтенд-разработчика", "Frontend Developer Résumé"),
    description: t("Опыт Дмитрия Масланова: Tech Lead в X5 Group, React, TypeScript и внутренние платформы. Резюме доступно в PDF.", "Dmitry Maslanov’s experience as a tech lead at X5 Group, working with React, TypeScript, and internal platforms. PDF available."),
  },
})

export const siteName = getSiteName(translate.ru)
export const pages = getPages(translate.ru)

export type ResolvedPageSeo = PageSeo & {
  path: string | null
}

export function getPageSeo(pathname: string, language: Language = 'ru'): ResolvedPageSeo {
  const t = translate[language]
  const pages = getPages(t)
  const path = pathname.replace(/\/+$/, '') || '/'
  if (Object.hasOwn(pages, path)) {
    const page = pages[path]
    return { ...page, path, title: path === '/' ? page.title : `${page.title}${t(" · Дмитрий Масланов", " · Dmitry Maslanov")}` }
  }

  return {
    title: t("Страница не найдена · Дмитрий Масланов", "Page not found · Dmitry Maslanov"),
    description: t("Страница портфолио не найдена.", "This portfolio page could not be found."),
    path: null,
    noindex: true,
  }
}
