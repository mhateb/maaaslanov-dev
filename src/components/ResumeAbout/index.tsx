import { useLanguage } from '../../languageContext'
import Link from '../Link'

const ResumeAbout = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-10 xl:gap-10 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="profile">
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">{t("01 / КОНТАКТЫ И ПРОФИЛЬ", "01 / CONTACT AND PROFILE")}</p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-8 xl:gap-16">
        <div className="bg-surface flex flex-col gap-6 items-start leading-[1.45] overflow-clip relative rounded-[20px] shrink-0 max-xl:p-6 max-xl:w-full xl:p-8 xl:w-md">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[25px] xl:text-[28px]">{t("Связаться напрямую", "Get in touch")}</p>
          <div className="flex flex-col gap-1.25 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">{t("EMAIL · ПРЕДПОЧТИТЕЛЬНО", "EMAIL · PREFERRED")}</p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="mailto:maaaslanov@gmail.com">
              maaaslanov@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-1.25 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">{t("ТЕЛЕФОН", "PHONE")}</p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="tel:+79969654507">
              +7 (996) 965-45-07
            </Link>
          </div>
          <div className="flex flex-col gap-1.25 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">
              TELEGRAM
            </p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="https://t.me/Dmitry_Maslanov">
              @Dmitry_Maslanov
            </Link>
          </div>
          <div className="flex flex-col gap-1.25 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">
              LINKEDIN
            </p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="https://www.linkedin.com/in/dmitry-maslanov/">
              linkedin.com/in/dmitry-maslanov
            </Link>
          </div>
          <div className="flex flex-col gap-1.25 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">{t("СЕТКА", "NETWORK")}</p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="https://set.ki/account/kuTnksN">
              {`https://set.ki/account/kuTnksN`}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.45] mb-0">{t("Фронтенд, который", "Frontend that")}</p>
            <p className="leading-[1.45]">{t("помогает команде.", "helps the team.")}</p>
          </div>
          <p className="font-sans font-normal leading-[1.45] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">{t("Senior Frontend Developer с опытом более 8 лет, специализирующийся на создании сложных внутренних инструментов и платформ. Последние 7+ лет в X5 Group, где вырос до технического лидера.", "Senior Frontend Developer with over eight years of experience, focused on complex internal tools and platforms. I’ve spent more than seven years at X5 Group, where I grew into a tech lead role.")}</p>
          <p className="font-sans font-normal leading-[1.45] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">{t("Создал конструктор интерфейсов с предпросмотром и внедрил генерацию контента по макетам Figma.", "Built a screen editor with a preview and added content generation from Figma designs.")}</p>
          <p className="font-sans font-normal leading-[1.45] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">{t("Разработал и внедрил AI-агентов для автоматизации рутинных задач, таких как ревью кода и работа с таск-трекерами.", "Built and introduced AI agents to automate routine work, including code review and issue tracking.")}</p>
          <div className="flex flex-col gap-3 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[10px] w-full">{t("СПЕЦИАЛИЗАЦИИ", "SPECIALIZATIONS")}</p>
            <div className="font-sans font-normal leading-0 relative shrink-0 text-ink w-full max-xl:text-[15px] xl:text-[17px]">
              <p className="leading-[1.45] mb-0">{t("Программист, разработчик", "Software developer")}</p>
              <p className="leading-[1.45]">{t("Руководитель группы разработки", "Development team lead")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeAbout
