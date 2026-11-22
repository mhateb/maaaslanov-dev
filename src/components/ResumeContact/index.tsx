import ResumeDownload from '../ResumeDownload'
import Link from '../Link'

const ResumeContact = () => {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:px-6 max-xl:py-10 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <div className="bg-peach flex flex-col items-start overflow-clip relative rounded-3xl shrink-0 w-full max-xl:gap-7 max-xl:p-6 xl:gap-9 xl:p-12">
        <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col xl:gap-6 xl:leading-0 xl:text-deep">
          <div className="flex-[1_0_0] font-sans font-medium min-w-px relative text-[54px]">
            <p className="leading-[1.35] mb-0">
              Возьмёмся
            </p>
            <p className="leading-[1.35]">
              за сложную задачу?
            </p>
          </div>
          <div className="font-hand font-normal relative shrink-0 text-[28px] w-[320px]">
            <p className="leading-[1.35] mb-0">
              Резюме — с собой.
            </p>
            <p className="leading-[1.35]">
              Детали — в разговоре.
            </p>
          </div>
        </div>
        <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[16px] xl:text-[19px]">
          Сохраните резюме или напишите мне — обсудим, чем я могу быть полезен вашей команде.
        </p>
        <div className="flex overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-5 max-xl:items-start xl:gap-8 xl:items-center">
          <ResumeDownload className="bg-deep text-ink">Скачать PDF ↓</ResumeDownload>
          <Link className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep max-xl:min-w-full max-xl:text-[17px] max-xl:w-min xl:text-[22px] xl:whitespace-nowrap transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="mailto:maaaslanov@gmail.com">
            maaaslanov@gmail.com
          </Link>
        </div>
        <div className="font-sans font-normal leading-0 relative shrink-0 text-[#604a3f] text-[11px] w-full">
          <p className="leading-[1.35] mb-0">
            PDF · 3 страницы
          </p>
          <p className="leading-[1.35]">
            Обновлено 18 ноября 2026 в 00:35
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResumeContact
