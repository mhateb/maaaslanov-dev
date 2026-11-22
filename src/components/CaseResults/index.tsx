import { useLanguage } from '../../languageContext'
const CaseResults = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">{t("03 / РЕЗУЛЬТАТ И ВЫВОДЫ", "03 / RESULTS")}</p>
      <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">{t("Что изменилось", "What changed")}</p>
        <p className="leading-[1.35]">{t("в работе команды.", "for the team")}</p>
      </div>
      <div className="flex gap-6 items-start leading-[1.35] overflow-clip relative shrink-0 w-full max-xl:flex-col">
        <div className="bg-surface flex flex-col gap-5 items-start overflow-clip p-6 relative rounded-2xl max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">{t("Предпросмотр", "Live preview")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("Собранный экран можно проверить прямо в админке.", "The team can check assembled screens directly in the admin panel.")}</p>
        </div>
        <div className="bg-surface flex flex-col gap-5 items-start overflow-clip p-6 relative rounded-2xl max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">{t("4 разработчика", "4 developers")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("Лидировал frontend-команду; сейчас принимаю ключевые архитектурные решения.", "I led the frontend team and continue to make key architecture decisions.")}</p>
        </div>
        <div className="bg-surface flex flex-col gap-5 items-start overflow-clip p-6 relative rounded-2xl max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">{t("Единый UI", "Consistent UI")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("Конструктор унифицировал дизайн. Storybook стал витриной компонентов для менеджеров, дизайнеров и разработчиков.", "The builder made the design more consistent. Storybook gave product managers, designers, and developers a shared component catalog.")}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
        <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[25px]">{t("AI-инструменты рядом с платформой", "AI tools for the platform")}</p>
        <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">{t("Добавил генерацию контента по макетам Figma, чтобы команда меньше времени тратила на ручное заполнение экранов.", "I added content generation from Figma designs to reduce the time the team spent filling in screens by hand.")}</p>
      </div>
    </section>
  )
}

export default CaseResults
