import { createContext, useContext } from 'react'
import type { Language, Translate } from './language'

type LanguageContextValue = {
  language: Language
  t: Translate
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export const useLanguage = () => {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('LanguageProvider is missing')
  return value
}
