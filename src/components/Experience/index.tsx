import Link from '../Link'

const Experience = () => {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="experience">
      <div className="bg-line h-px relative shrink-0 w-full" />
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        02 / ОПЫТ
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-7 xl:gap-24">
        <div className="flex flex-col gap-4 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-85">
          <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.35] mb-0">
              Что я приношу
            </p>
            <p className="leading-[1.35]">
              в команду
            </p>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">
            8+ лет в разработке. Архитектура фронтенда, внутренние платформы и AI-инструменты. Полный опыт — <Link className="transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12] underline underline-offset-2" to="/resume">в резюме</Link>.
          </p>
        </div>
        <div className="flex flex-col gap-7 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="flex flex-col gap-3 items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-1.5 xl:gap-6">
              <p className="font-sans font-medium relative text-ink max-xl:shrink-0 max-xl:text-[20px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[22px]">
                Frontend / Tech Lead · X5 Group
              </p>
              <p className="font-sans font-normal relative shrink-0 text-mint text-[12px] max-xl:w-full xl:whitespace-nowrap">
                05.2019 — сейчас
              </p>
            </div>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              Разработал конструктор интерфейсов и встроил предпросмотр. Руководил командой из четырёх фронтенд-разработчиков.
            </p>
          </div>
          <div className="bg-line h-px relative shrink-0 w-full" />
          <div className="flex flex-col gap-3 items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-1.5 xl:gap-6">
              <p className="font-sans font-medium relative text-ink max-xl:shrink-0 max-xl:text-[20px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[22px]">
                Frontend · Ru-center
              </p>
              <p className="font-sans font-normal relative shrink-0 text-mint text-[12px] max-xl:w-full xl:whitespace-nowrap">
                11.2018 — 06.2019
              </p>
            </div>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              Ускорил сборку Webpack с ~5 минут до 1 минуты. Участвовал в редизайне nic.ru на React, Redux и Redux-Saga.
            </p>
          </div>
          <div className="bg-line h-px relative shrink-0 w-full" />
          <div className="flex flex-col gap-3 items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-1.5 xl:gap-6">
              <p className="font-sans font-medium relative text-ink max-xl:shrink-0 max-xl:text-[20px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[22px]">
                Frontend · Key Group
              </p>
              <p className="font-sans font-normal relative shrink-0 text-mint text-[12px] max-xl:w-full xl:whitespace-nowrap">
                07.2018 — 11.2018
              </p>
            </div>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              Разработал ключевые модули MVP сервиса аренды автомобилей и участвовал в переносе фронтенда с Rails-монолита на Vue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
