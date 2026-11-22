import { useLanguage } from '../../languageContext'

const languages = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
] as const

const LanguageSwitch = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div role="group" aria-label={t('Язык сайта', 'Site language')} className="flex shrink-0 rounded-full border border-line p-0.5 text-xs font-medium">
      {languages.map(({ code, name }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={name}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
          className="rounded-full px-2 py-1.5 text-muted hover:text-ink aria-pressed:bg-mint aria-pressed:text-deep"
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
