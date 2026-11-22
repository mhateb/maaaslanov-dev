import { useLanguage } from '../../languageContext'
import Link from '../Link'

const CaseIntroduction = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-9 xl:gap-12 xl:px-24 xl:py-18 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <Link className="font-sans font-normal leading-tight relative shrink-0 text-mint text-[14px] w-full transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/#projects">{t("← Все проекты", "← All projects")}</Link>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-7 xl:gap-16">
        <div className="flex flex-col items-start overflow-clip relative max-xl:gap-5 max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-7 xl:min-w-px">
          <p className="font-sans font-medium leading-tight relative shrink-0 text-peach text-[11px] w-full">{t("КЕЙС / ВНУТРЕННЯЯ ПЛАТФОРМА", "CASE STUDY / INTERNAL PLATFORM")}</p>
          <h1 className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[43px] xl:text-[76px]">
            <span className="block leading-tight mb-0">
              X5 Club
            </span>
            <span className="block leading-tight">{t("Конструктор", "Screen")}</span>
          </h1>
          <p className="font-serif font-normal italic leading-tight relative shrink-0 text-mint w-full max-xl:text-[43px] xl:text-[76px]">{t("интерфейсов.", "builder.")}</p>
        </div>
        <div className="flex flex-col font-sans font-normal gap-6 items-start leading-tight overflow-clip relative shrink-0 text-muted max-xl:w-full xl:pt-14.5 xl:w-90">
          <p className="relative shrink-0 w-full max-xl:text-[18px] xl:text-[21px]">{t("Для X5 Club я разработал админку, в которой команда собирает экраны из готовых блоков. Руководил четырьмя фронтенд-разработчиками.", "I built an admin panel for X5 Club that lets the team build screens from reusable blocks. I led four frontend developers.")}</p>
          <p className="relative shrink-0 w-full max-xl:text-[15px] xl:text-[16px]">{t("Компоненты можно посмотреть в Storybook, а собранный экран — проверить прямо в админке.", "The team can browse components in Storybook and check completed screens directly in the admin panel.")}</p>
        </div>
      </div>
      <div className="flex items-start leading-tight overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-5 xl:gap-10">
        <div className="flex flex-col gap-2 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">{t("МОЯ РОЛЬ", "MY ROLE")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">{t("Tech Lead · frontend-архитектура", "Tech Lead · Frontend architecture")}</p>
        </div>
        <div className="flex flex-col gap-2 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">{t("В КОМПАНИИ", "AT THE COMPANY SINCE")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">{t("С мая 2019 · X5 Group", "May 2019 · X5 Group")}</p>
        </div>
        <div className="flex flex-col gap-2 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">{t("КОМАНДА", "TEAM")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">{t("4 frontend-разработчика", "4 frontend developers")}</p>
        </div>
        <div className="flex flex-col gap-2 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">{t("РЕАЛИЗАЦИЯ", "IMPLEMENTATION")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">{t("UI-блоки · iframe · Storybook", "UI blocks · iframe · Storybook")}</p>
        </div>
      </div>
    </section>
  )
}

export default CaseIntroduction
