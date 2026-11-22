export const siteName = 'Дмитрий Масланов · фронтенд'

type PageSeo = {
  title: string
  description: string
  noindex?: boolean
}

export const pages: Record<string, PageSeo> = {
  '/': {
    title: siteName,
    description: 'Дмитрий Масланов, фронтенд-разработчик и техлид. Делаю личные кабинеты, админки и рабочие инструменты на React и TypeScript.',
  },
  '/cases/x5-club': {
    title: 'Конструктор интерфейсов в X5',
    description: 'Как я разработал конструктор экранов в X5: готовые UI-компоненты, предпросмотр в админке и каталог компонентов в Storybook.',
  },
  '/notes': {
    title: 'Заметки о фронтенде',
    description: 'Заметки Дмитрия Масланова о компонентах, управлении состоянием и автоматизации работы фронтенд-команды.',
    noindex: true,
  },
  '/resume': {
    title: 'Резюме фронтенд-разработчика',
    description: 'Опыт Дмитрия Масланова: Tech Lead в X5 Group, React, TypeScript и внутренние платформы. Резюме доступно в PDF.',
  },
}

export type ResolvedPageSeo = PageSeo & {
  path: string | null
}

export function getPageSeo(pathname: string): ResolvedPageSeo {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (Object.hasOwn(pages, path)) {
    const page = pages[path]
    return { ...page, path, title: path === '/' ? page.title : `${page.title} · Дмитрий Масланов` }
  }

  return {
    title: 'Страница не найдена · Дмитрий Масланов',
    description: 'Страница портфолио не найдена.',
    path: null,
    noindex: true,
  }
}
