import { Link } from '../components/Link'

function NotesComingSoon() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[36px] max-xl:min-h-[578px] max-xl:px-[24px] max-xl:py-[48px] xl:gap-[48px] xl:min-h-[766px] xl:px-[96px] xl:py-[80px] layout-section">
      <p className="font-sans font-medium leading-[1.4] min-w-full relative shrink-0 text-peach w-[min-content] max-xl:text-[10px] xl:text-[12px]">
        ЗАМЕТКИ И ЭКСПЕРИМЕНТЫ / СКОРО
      </p>
      <div className="flex items-center overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[40px] xl:gap-[96px]">
        <div className="flex flex-col items-start overflow-clip relative shrink-0 max-xl:gap-[24px] max-xl:w-full xl:gap-[30px] xl:w-[min(55%,688px)]">
          <h1 className="flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
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
          <div className="flex overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[18px] max-xl:items-start xl:gap-[24px] xl:items-center">
            <Link className="bg-peach flex items-start overflow-clip px-[22px] py-[14px] relative rounded-[50px] shrink-0 action-link" to="/#projects">
              <p className="font-sans font-medium leading-[1.4] relative shrink-0 text-deep text-[14px] whitespace-nowrap">
                А пока — к проектам ↗
              </p>
            </Link>
            <Link className="font-sans font-normal leading-[1.4] relative shrink-0 text-ink text-[14px] whitespace-nowrap action-link" to="/">
              На главную
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="bg-peach flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:gap-[24px] max-xl:p-[24px] xl:gap-[28px] xl:p-[32px]">
            <div className="flex gap-[12px] items-start leading-[1.4] overflow-clip relative shrink-0 text-deep w-full">
              <p className="flex-[1_0_0] font-sans font-medium min-w-px relative max-xl:text-[10px] xl:text-[11px]">
                ЧЕРНОВИК_01
              </p>
              <p className="font-sans font-normal relative shrink-0 text-[20px] whitespace-nowrap">
                ···
              </p>
            </div>
            <div className="font-serif font-normal italic leading-[0] relative shrink-0 text-deep w-full max-xl:text-[35px] xl:text-[43px]">
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
            <div className="flex flex-col gap-[16px] items-start leading-[1.4] overflow-clip relative shrink-0 text-deep w-full">
              <div className="flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
                <p className="font-sans font-medium relative shrink-0 text-[11px] w-[20px]">
                  01
                </p>
                <p className="flex-[1_0_0] font-sans font-normal min-w-px relative max-xl:text-[13px] xl:text-[14px]">
                  О конструкторе интерфейсов
                </p>
              </div>
              <div className="flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
                <p className="font-sans font-medium relative shrink-0 text-[11px] w-[20px]">
                  02
                </p>
                <p className="flex-[1_0_0] font-sans font-normal min-w-px relative max-xl:text-[13px] xl:text-[14px]">
                  О Redux и Zustand
                </p>
              </div>
              <div className="flex gap-[12px] items-start overflow-clip relative shrink-0 w-full">
                <p className="font-sans font-medium relative shrink-0 text-[11px] w-[20px]">
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
      <div className="bg-surface flex items-start overflow-clip px-[16px] py-[10px] relative rounded-[8px] shrink-0">
        <p className="font-sans font-normal leading-[1.4] relative shrink-0 text-mint whitespace-nowrap max-xl:text-[11px] xl:text-[12px]">
          Статус: собираюсь с мыслями
        </p>
      </div>
    </section>
  )
}

export default function Notes() {
  return (
    <main id="main" className="w-full">
      <NotesComingSoon />
    </main>
  )
}
