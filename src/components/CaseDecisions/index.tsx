import { useLanguage } from '../../languageContext'
const CaseDecisions = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">{t("02 / КЛЮЧЕВЫЕ РЕШЕНИЯ", "02 / KEY DECISIONS")}</p>
      <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">{t("Что я сделал", "What I built")}</p>
        <p className="leading-[1.35]">{t("для команды.", "for the team")}</p>
      </div>
      <div className="bg-surface flex items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-6 max-xl:p-6 xl:gap-10 xl:p-8">
        <p className="font-serif font-normal italic leading-[1.35] relative shrink-0 text-mint max-xl:text-[42px] max-xl:w-full xl:text-[60px] xl:w-26.25">
          01
        </p>
        <div className="flex flex-col gap-4.5 items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[29px]">{t("Конструктор из UI-блоков", "A builder using UI blocks")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">{t("Разработал админку, в которой экран собирается из готовых UI-блоков. Одинаковые элементы выглядят и ведут себя одинаково на разных экранах.", "I built an admin panel that assembles screens from reusable UI blocks. The same elements look and behave consistently across screens.")}</p>
          <p className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[14px]">{t("Типовые блоки команда использует в новых экранах повторно.", "The team reuses common blocks on new screens.")}</p>
        </div>
        <div className="bg-[#d0e9dd] flex flex-col gap-3.5 items-start overflow-clip relative rounded-xl shrink-0 max-xl:p-5 max-xl:w-full xl:p-6 xl:w-77.5">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[25px] xl:text-[24px]">{t("Блоки → Экран", "Blocks → Screen")}</p>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-[#3b6153] text-[12px] w-full">{t("Админка-конструктор", "Screen builder")}</p>
          <div className="bg-deep h-1.5 relative rounded-[3px] shrink-0 w-full" />
        </div>
      </div>
      <div className="bg-surface flex items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-6 max-xl:p-6 xl:gap-10 xl:p-8">
        <p className="font-serif font-normal italic leading-[1.35] relative shrink-0 text-peach max-xl:text-[42px] max-xl:w-full xl:text-[60px] xl:w-26.25">
          02
        </p>
        <div className="flex flex-col gap-4.5 items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[29px]">{t("Предпросмотр через iframe", "Iframe preview")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">{t("Встроил предпросмотр экранов в админку через iframe. Компоненты не пришлось выносить в отдельный npm-пакет.", "I embedded the screen preview directly in the admin panel using an iframe. The components stayed in the main application.")}</p>
          <p className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[14px]">{t("Результат виден рядом с настройками экрана.", "The result is visible next to the screen settings.")}</p>
        </div>
        <div className="bg-sand flex flex-col gap-3.5 items-start overflow-clip relative rounded-xl shrink-0 max-xl:p-5 max-xl:w-full xl:p-6 xl:w-77.5">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[25px] xl:text-[24px]">{t("Админка → iframe", "Admin panel → iframe")}</p>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-[#3b6153] text-[12px] w-full">{t("Без отдельного npm-пакета", "No separate npm package")}</p>
          <div className="bg-deep h-1.5 relative rounded-[3px] shrink-0 w-full" />
        </div>
      </div>
      <div className="bg-surface flex items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-6 max-xl:p-6 xl:gap-10 xl:p-8">
        <p className="font-serif font-normal italic leading-[1.35] relative shrink-0 text-mint max-xl:text-[42px] max-xl:w-full xl:text-[60px] xl:w-26.25">
          03
        </p>
        <div className="flex flex-col gap-4.5 items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[29px]">{t("Storybook для команды", "Storybook for the team")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">{t("Запустил Storybook как витрину компонентов. Это упростило коммуникацию между менеджерами, дизайнерами и разработчиками.", "I set up Storybook as a component catalog, making it easier for product managers, designers, and developers to work together.")}</p>
          <p className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[14px]">{t("Единая витрина компонентов для всей продуктовой команды.", "One component catalog for the whole product team.")}</p>
        </div>
        <div className="bg-[#d0e9dd] flex flex-col gap-3.5 items-start overflow-clip relative rounded-xl shrink-0 max-xl:p-5 max-xl:w-full xl:p-6 xl:w-77.5">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[25px] xl:text-[24px]">
            UI → Storybook
          </p>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-[#3b6153] text-[12px] w-full">{t("Витрина компонентов", "Component catalog")}</p>
          <div className="bg-deep h-1.5 relative rounded-[3px] shrink-0 w-full" />
        </div>
      </div>
    </section>
  )
}

export default CaseDecisions
