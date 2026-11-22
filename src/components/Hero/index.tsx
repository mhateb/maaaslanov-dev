import { useLanguage } from '../../languageContext'
import ResumeDownload from '../ResumeDownload'
import Link from '../Link'
import InterfaceDemo from '../InterfaceDemo'

const Hero = () => {
  const { language, t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:px-6 max-xl:pt-9 max-xl:pb-6 xl:px-24 xl:pt-16 xl:pb-8 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-10 xl:gap-16">
        <div className="flex flex-col items-start overflow-clip relative shrink-0 max-xl:gap-6 max-xl:w-full xl:gap-7.5 xl:w-141">
          <div className="font-sans font-medium leading-0 relative shrink-0 text-peach text-[12px] w-full">
            <p className="leading-[1.3] mb-0">{t("ПРИВЕТ, Я ДМИТРИЙ", "HI, I'M DMITRY")}</p>
            <p className="leading-[1.3]">
              SENIOR FRONTEND DEVELOPER
            </p>
          </div>
          <h1 className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:text-[43px] xl:text-[76px]">
            <span className="font-sans font-medium leading-[1.1] relative shrink-0 text-ink w-full">{t("Интерфейсы,", "Interfaces")}</span>
            <span className="font-serif font-normal italic leading-[1.2] relative shrink-0 text-mint w-full">{t("где всё ясно.", "that make sense.")}</span>
          </h1>
          <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[17px] w-full xl:text-[21px]">{t("Делаю интерфейсы для сложных задач: личные кабинеты, админки и рабочие инструменты. Продумываю сценарии, собираю на React и TypeScript и довожу до запуска.", "I build interfaces for complex tasks, from customer portals to admin panels and internal tools. I map out user flows, build with React and TypeScript, and take the work through launch.")}</p>
          <div className="flex items-start overflow-clip relative shrink-0 w-full gap-x-3 gap-y-2 flex-wrap">
            <Link className="bg-peach flex items-start overflow-clip px-4.5 py-3 relative rounded-[50px] shrink-0 transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/#projects">
              <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-deep text-[14px] whitespace-nowrap">{t("Смотреть проекты ↘", "Explore projects ↘")}</p>
            </Link>
            <ResumeDownload className="bg-canvas text-ink" />
          </div>
          <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[13px] w-full">{t("8+ лет во фронтенде · X5 Group", "8+ years in frontend · X5 Group")}</p>
        </div>
        <InterfaceDemo key={language} />
      </div>
    </section>
  )
}

export default Hero
