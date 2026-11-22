import { useLanguage } from '../../languageContext'
import Link from '../Link'

const CaseContact = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:px-6 max-xl:py-12 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <div className="bg-peach flex flex-col gap-7 items-start overflow-clip relative rounded-3xl shrink-0 text-deep w-full max-xl:p-6 xl:p-12">
        <div className="font-sans font-medium leading-0 relative shrink-0 w-full max-xl:text-[32px] xl:text-[50px]">
          <p className="leading-[1.35] mb-0">{t("Хорошее решение", "A good solution")}</p>
          <p className="leading-[1.35]">{t("начинается с разговора.", "starts with a conversation.")}</p>
        </div>
        <p className="font-sans font-normal leading-[1.35] relative shrink-0 w-full max-xl:text-[16px] xl:text-[19px]">{t("Есть похожая задача? Расскажите, что хотите изменить.", "Working on something similar? Tell me what you'd like to change.")}</p>
        <div className="flex font-sans font-medium gap-6 leading-[1.35] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:items-start xl:items-center">
          <Link className="relative max-xl:shrink-0 max-xl:text-[21px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[30px] transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="mailto:maaaslanov@gmail.com">
            maaaslanov@gmail.com ↗
          </Link>
          <Link className="relative shrink-0 text-[15px] max-xl:w-full xl:whitespace-nowrap transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/#projects">{t("← Все проекты", "← All projects")}</Link>
        </div>
      </div>
    </section>
  )
}

export default CaseContact
