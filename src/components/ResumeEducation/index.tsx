import { useLanguage } from '../../languageContext'
const ResumeEducation = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-10 xl:gap-10 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium relative shrink-0 text-peach text-[11px] w-full">{t("04 / ОБРАЗОВАНИЕ И РАЗВИТИЕ", "04 / EDUCATION AND TRAINING")}</p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-8 xl:gap-16">
        <div className="flex flex-col gap-5 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[40px]">{t("Образование", "Education")}</p>
          <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">{t("2020 · ВЫСШЕЕ · МОСКВА", "2020 · HIGHER EDUCATION · MOSCOW")}</p>
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[30px]">{t("Национальный исследовательский технологический университет «МИСиС»", "National University of Science and Technology MISIS")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Автоматизация процессов проектирования", "Computer-Aided Design Automation")}</p>
        </div>
        <div className="bg-surface flex flex-col gap-6 items-start overflow-clip relative rounded-[20px] max-xl:p-6 max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:p-8">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[28px] xl:text-[32px]">{t("Курсы", "Courses")}</p>
          <div className="flex flex-col gap-2 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[12px] w-full">
              2025
            </p>
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[27px]">{t("Хекслет", "Hexlet")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted text-[16px] w-full">
              Frontend-Develop
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[12px] w-full">
              2020
            </p>
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[27px]">
              GoPractice
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted text-[16px] w-full">
              Product-managment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeEducation
