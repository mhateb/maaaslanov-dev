export type Language = 'ru' | 'en'
export type Translate = (russian: string, english: string) => string

export const translate: Record<Language, Translate> = {
  ru: russian => russian,
  en: (_russian, english) => english,
}
