import { useLanguage } from '../../languageContext'
import ScreenAssembly from '../ScreenAssembly'

const CaseDemo = () => {
  const { language, t } = useLanguage()
  return (
    <section className="mx-auto grid w-full max-w-[1440px] gap-4 px-6 py-6 md:max-w-[800px] xl:max-w-[1440px] xl:px-24 xl:py-10">
      <h2 className="text-2xl font-medium text-ink sm:text-3xl">{t("Как устроена сборка экранов", "How screen assembly works")}</h2>
      <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{t("В админке X5 Club команда собирала экраны из готовых UI-блоков и проверяла результат в iframe прямо рядом с настройками. Предпросмотр использовал компоненты из общего кода приложения. В этом примере можно изменить баланс или порядок блоков в JSON и сразу увидеть результат.", "In the X5 Club admin panel, the team assembled screens from reusable UI blocks and checked the result in an iframe next to the settings. The preview used components from the main application. In this example, change the balance or reorder the blocks in the JSON to see the result.")}</p>
      <ScreenAssembly key={language} />
    </section>
  )
}

export default CaseDemo
