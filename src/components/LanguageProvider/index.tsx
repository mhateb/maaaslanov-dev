import { useEffect, useState, type ReactNode } from 'react'
import { translate, type Language } from '../../language'
import { LanguageContext } from '../../languageContext'

type LanguageProviderPropsType = {
  children: ReactNode
}

const preferenceKey = 'portfolio-language'

const LanguageProvider = ({ children }: LanguageProviderPropsType) => {
  const [language, setActiveLanguage] = useState<Language>('ru')

  useEffect(() => {
    const preferences = navigator.languages.length ? navigator.languages : [navigator.language]
    const supported = preferences.map(locale => locale.toLowerCase().split('-')[0])
      .find(locale => locale === 'ru' || locale === 'en')
    let saved: string | null = null
    try {
      saved = localStorage.getItem(preferenceKey)
    } catch {
      // The browser preference still works when storage is unavailable.
    }
    setActiveLanguage(saved === 'ru' || saved === 'en' ? saved : supported ?? 'en')
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (nextLanguage: Language) => {
    setActiveLanguage(nextLanguage)
    try {
      localStorage.setItem(preferenceKey, nextLanguage)
    } catch {
      // The choice still applies to the current visit.
    }
  }

  return (
    <LanguageContext.Provider value={{ language, t: translate[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
