const CaseResults = () => {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        03 / РЕЗУЛЬТАТ И ВЫВОДЫ
      </p>
      <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">
          Что изменилось
        </p>
        <p className="leading-[1.35]">
          в работе команды.
        </p>
      </div>
      <div className="flex gap-6 items-start leading-[1.35] overflow-clip relative shrink-0 w-full max-xl:flex-col">
        <div className="bg-surface flex flex-col gap-5 items-start overflow-clip p-6 relative rounded-2xl max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">
            Предпросмотр
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            Собранный экран можно проверить прямо в админке.
          </p>
        </div>
        <div className="bg-surface flex flex-col gap-5 items-start overflow-clip p-6 relative rounded-2xl max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">
            4 разработчика
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            Лидировал frontend-команду; сейчас принимаю ключевые архитектурные решения.
          </p>
        </div>
        <div className="bg-surface flex flex-col gap-5 items-start overflow-clip p-6 relative rounded-2xl max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">
            Единый UI
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            Конструктор унифицировал дизайн. Storybook стал витриной компонентов для менеджеров, дизайнеров и разработчиков.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
        <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[25px]">
          AI-инструменты рядом с платформой
        </p>
        <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">
          Добавил генерацию контента по макетам Figma, чтобы команда меньше времени тратила на ручное заполнение экранов.
        </p>
      </div>
    </section>
  )
}

export default CaseResults
