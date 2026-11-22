const CaseContext = () => {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        01 / КОНТЕКСТ
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-7 xl:gap-24">
        <div className="flex flex-col gap-5 items-start leading-0 overflow-clip relative shrink-0 max-xl:w-full xl:w-85">
          <div className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.35] mb-0">
              Как упростить
            </p>
            <p className="leading-[1.35]">
              сборку экранов
            </p>
          </div>
          <div className="font-hand font-normal relative shrink-0 text-mint w-full max-xl:text-[24px] xl:text-[28px]">
            <p className="leading-[1.35] mb-0">
              Меньше рутины.
            </p>
            <p className="leading-[1.35]">
              Больше переиспользования.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="flex flex-col gap-2.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">
              ЗАДАЧА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
              Ускорить сборку новых экранов и сохранить единый дизайн. Для этого команда должна видеть, какие блоки уже есть и как их использовать.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">
              ТЕХНИЧЕСКИЙ КОНТЕКСТ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
              Предпросмотр реализован через iframe в админ-панели, без вынесения компонентов в отдельный npm-пакет.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">
              МОЙ ВКЛАД
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
              Лидировал команду из 4 frontend-разработчиков. Создал конструктор, встроенный предпросмотр и Storybook; принимаю ключевые архитектурные решения.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseContext
