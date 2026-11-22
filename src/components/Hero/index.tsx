import ResumeDownload from '../ResumeDownload'
import Link from '../Link'
import Comparison from '../Comparison'
import ComparisonViewport from '../ComparisonViewport'
import ComparisonControls from '../ComparisonControls'
import MotionToggle from '../MotionToggle'

const Hero = () => {
  return (
    <Comparison>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-9 xl:gap-12 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
        <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-10 xl:gap-16">
          <div className="flex flex-col items-start overflow-clip relative shrink-0 max-xl:gap-6 max-xl:w-full xl:gap-7.5 xl:w-141">
            <div className="font-sans font-medium leading-0 relative shrink-0 text-peach text-[12px] w-full">
              <p className="leading-[1.3] mb-0">
                ПРИВЕТ, Я ДМИТРИЙ
              </p>
              <p className="leading-[1.3]">
                SENIOR FRONTEND DEVELOPER
              </p>
            </div>
            <h1 className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:text-[43px] xl:text-[76px]">
              <span className="font-sans font-medium leading-[1.1] relative shrink-0 text-ink w-full">
                Интерфейсы,
              </span>
              <span className="font-serif font-normal italic leading-[1.2] relative shrink-0 text-mint w-full">
                где всё ясно.
              </span>
            </h1>
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[17px] w-full xl:text-[21px]">
              Делаю интерфейсы для сложных задач: личные кабинеты, админки и рабочие инструменты. Продумываю сценарии, собираю на React и TypeScript и довожу до запуска.
            </p>
            <div className="flex items-start overflow-clip relative shrink-0 w-full gap-x-3 gap-y-2 flex-wrap">
              <Link className="bg-peach flex items-start overflow-clip px-4.5 py-3 relative rounded-[50px] shrink-0 transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/#projects">
                <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-deep text-[14px] whitespace-nowrap">
                  Смотреть проекты ↘
                </p>
              </Link>
              <ResumeDownload className="bg-canvas text-ink" />
            </div>
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[13px] w-full">
              8+ лет во фронтенде · Tech Lead в X5 Group
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
            <div className="bg-surface flex flex-col gap-4.5 items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:px-4 max-xl:py-5 xl:p-6">
              <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-muted w-full max-xl:text-[10px] xl:text-[11px]">
                01 / КАК Я РАБОТАЮ
              </p>
              <ComparisonViewport className="bg-[#eeede8] items-start overflow-clip relative rounded-xl shrink-0 w-full max-xl:h-67.5 xl:h-80" large={false} />
              <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-ink w-full max-xl:text-[15px] xl:text-[17px]">
                Один раз собрать. Дальше — использовать.
              </p>
              <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted w-full max-xl:text-[11px] xl:text-[12px]">
                На примере конструктора экранов для команды X5.
              </p>
              <ComparisonControls />
            </div>
            <p className="font-hand font-normal leading-[1.3] relative shrink-0 text-peach text-right w-full max-xl:text-[23px] xl:text-[25px]">
              Из готовых блоков проще собрать новый экран ↑
            </p>
          </div>
        </div>
        <div className="flex font-sans font-normal items-start leading-[1.3] overflow-clip relative shrink-0 w-full max-xl:gap-3 max-xl:text-[10px] xl:gap-8 xl:text-[12px] flex-wrap">
          <p className="flex-[1_0_0] min-w-px relative text-muted">
            TAB — фокус / ← → — сравнить версии
          </p>
          <MotionToggle />
        </div>
      </section>
    </Comparison>
  )
}

export default Hero
