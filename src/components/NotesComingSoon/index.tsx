import Link from '../Link'

const NotesComingSoon = () => {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-9 max-xl:min-h-144.5 max-xl:px-6 max-xl:py-12 xl:gap-12 xl:min-h-191.5 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium leading-[1.4] min-w-full relative shrink-0 text-peach w-min max-xl:text-[10px] xl:text-[12px]">
        ЗАМЕТКИ И ЭКСПЕРИМЕНТЫ / СКОРО
      </p>
      <div className="flex items-center overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-10 xl:gap-24">
        <div className="flex flex-col items-start overflow-clip relative shrink-0 max-xl:gap-6 max-xl:w-full xl:gap-7.5 xl:w-[min(55%,688px)]">
          <h1 className="flex flex-col gap-1 items-start overflow-clip relative shrink-0 w-full">
            <span className="font-sans font-medium leading-[1.12] relative shrink-0 text-ink w-full max-xl:text-[42px] xl:text-[76px]">
              Заметки
            </span>
            <span className="font-serif font-normal italic leading-[1.2] relative shrink-0 text-mint w-full max-xl:text-[39px] xl:text-[68px]">
              о фронтенде.
            </span>
          </h1>
          <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[21px]">
            Буду писать о работе с компонентами, состоянии приложений и автоматизации.
          </p>
          <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
            Первые заметки готовятся. В проектах уже есть примеры и разборы технических решений.
          </p>
          <div className="flex overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-4.5 max-xl:items-start xl:gap-6 xl:items-center">
            <Link className="bg-peach flex items-start overflow-clip px-5.5 py-3.5 relative rounded-[50px] shrink-0 transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/#projects">
              <p className="font-sans font-medium leading-[1.4] relative shrink-0 text-deep text-[14px] whitespace-nowrap">
                А пока — к проектам ↗
              </p>
            </Link>
            <Link className="font-sans font-normal leading-[1.4] relative shrink-0 text-ink text-[14px] whitespace-nowrap transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/">
              На главную
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="bg-peach flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:gap-6 max-xl:p-6 xl:gap-7 xl:p-8">
            <div className="flex gap-3 items-start leading-[1.4] overflow-clip relative shrink-0 text-deep w-full">
              <p className="flex-[1_0_0] font-sans font-medium min-w-px relative max-xl:text-[10px] xl:text-[11px]">
                ЧЕРНОВИК_01
              </p>
              <p className="font-sans font-normal relative shrink-0 text-[20px] whitespace-nowrap">
                ···
              </p>
            </div>
            <div className="font-serif font-normal italic leading-0 relative shrink-0 text-deep w-full max-xl:text-[35px] xl:text-[43px]">
              <p className="leading-[1.15] mb-0">
                Черновики
              </p>
              <p className="leading-[1.15] mb-0">
                набираются
              </p>
              <p className="leading-[1.15]">
                смелости.
              </p>
            </div>
            <div className="bg-[rgba(23,41,46,0.25)] h-px relative shrink-0 w-full" />
            <div className="flex flex-col gap-4 items-start leading-[1.4] overflow-clip relative shrink-0 text-deep w-full">
              <div className="flex gap-3 items-start overflow-clip relative shrink-0 w-full">
                <p className="font-sans font-medium relative shrink-0 text-[11px] w-5">
                  01
                </p>
                <p className="flex-[1_0_0] font-sans font-normal min-w-px relative max-xl:text-[13px] xl:text-[14px]">
                  О конструкторе интерфейсов
                </p>
              </div>
              <div className="flex gap-3 items-start overflow-clip relative shrink-0 w-full">
                <p className="font-sans font-medium relative shrink-0 text-[11px] w-5">
                  02
                </p>
                <p className="flex-[1_0_0] font-sans font-normal min-w-px relative max-xl:text-[13px] xl:text-[14px]">
                  О Redux и Zustand
                </p>
              </div>
              <div className="flex gap-3 items-start overflow-clip relative shrink-0 w-full">
                <p className="font-sans font-medium relative shrink-0 text-[11px] w-5">
                  03
                </p>
                <p className="flex-[1_0_0] font-sans font-normal min-w-px relative max-xl:text-[13px] xl:text-[14px]">
                  Об AI-инструментах команды
                </p>
              </div>
            </div>
          </div>
          <p className="font-hand font-normal leading-[1.4] relative shrink-0 text-peach text-right w-full max-xl:text-[23px] xl:text-[25px]">
            Без обещаний на понедельник.
          </p>
        </div>
      </div>
      <div className="bg-surface flex items-start overflow-clip px-4 py-2.5 relative rounded-lg shrink-0">
        <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-mint whitespace-nowrap max-xl:text-[11px] xl:text-[12px]">
          Статус: собираюсь с мыслями
        </p>
      </div>
    </section>
  )
}

export default NotesComingSoon
