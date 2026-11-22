import ResumeDownload from '../ResumeDownload'
import Link from '../Link'
import portrait from '../../assets/profile.jpg'

const ResumeProfile = () => {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-10 xl:gap-10 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach w-full max-xl:text-[10px] xl:text-[12px]">
        РЕЗЮМЕ / ОБНОВЛЕНО 18 НОЯБРЯ 2026
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-7 xl:gap-24">
        <div className="flex flex-col items-start overflow-clip relative shrink-0 max-xl:gap-6 max-xl:w-full xl:gap-7 xl:min-w-0 xl:flex-1">
          <h1 className="flex flex-col items-start overflow-clip relative shrink-0 w-full">
            <span className="font-sans font-medium leading-[1.1] relative shrink-0 text-ink w-full max-xl:text-[44px] xl:text-[76px]">
              Дмитрий
            </span>
            <span className="font-serif font-normal italic leading-[1.2] relative shrink-0 text-mint w-full max-xl:text-[46px] xl:text-[78px]">
              Масланов
            </span>
          </h1>
          <div className="flex flex-col gap-2 items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[25px] xl:text-[34px]">
              Senior Frontend Developer
            </p>
            <p className="font-sans font-normal relative shrink-0 text-peach w-full max-xl:text-[15px] xl:text-[19px]">
              AI-tooling · Platform Engineering
            </p>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[21px]">
            Создаю сложные внутренние инструменты и платформы. Последние 7+ лет — в X5 Group, где вырос до технического лидера.
          </p>
          <div className="flex overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-4 max-xl:items-start xl:gap-6 xl:items-center">
            <ResumeDownload className="bg-peach text-deep" />
            <Link className="font-sans font-normal leading-[1.35] relative shrink-0 text-ink text-[14px] whitespace-nowrap transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="#profile">
              Читать на странице ↘
            </Link>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-muted text-[11px] w-full">
            PDF · 3 страницы
          </p>
        </div>
        <div className="flex gap-4 overflow-clip relative shrink-0 max-xl:items-center max-xl:w-full xl:flex-col xl:items-start xl:w-88">
          <div className="relative shrink-0 max-xl:h-33 max-xl:rounded-xl max-xl:w-25 xl:h-110 xl:rounded-[20px] xl:w-88 portrait">
            <div className="absolute inset-0 overflow-hidden pointer-events-none max-xl:rounded-xl xl:rounded-[20px]">
              <img className="absolute left-0 max-w-none top-0 w-full max-xl:h-[135.96%] xl:h-[143.33%]" alt="Дмитрий Масланов" src={portrait} />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start leading-[1.35] overflow-clip relative max-xl:flex-[1_0_0] max-xl:min-w-px xl:shrink-0 xl:w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[15px]">
              Москва · удалённо
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[11px] xl:text-[12px]">
              Готов к командировкам
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-start leading-[1.35] overflow-clip relative shrink-0 w-full max-xl:flex-col">
        <div className="bg-surface flex flex-col items-start overflow-clip relative rounded-[14px] max-xl:gap-2 max-xl:p-5 max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-3 xl:min-w-px xl:p-6">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[36px]">
            8 лет 8 месяцев
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[13px] xl:text-[14px]">
            Общий опыт по резюме
          </p>
        </div>
        <div className="bg-surface flex flex-col items-start overflow-clip relative rounded-[14px] max-xl:gap-2 max-xl:p-5 max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-3 xl:min-w-px xl:p-6">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[36px]">
            ×2
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[13px] xl:text-[14px]">
            Скорость запуска партнёрских интеграций
          </p>
        </div>
        <div className="bg-surface flex flex-col items-start overflow-clip relative rounded-[14px] max-xl:gap-2 max-xl:p-5 max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-3 xl:min-w-px xl:p-6">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[36px]">
            15 мин → 15 сек
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[13px] xl:text-[14px]">
            Заполнение форм AI-агентом
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResumeProfile
