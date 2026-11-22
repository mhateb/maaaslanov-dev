import { useLanguage } from '../../languageContext'
const ResumeSkills = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-10 xl:gap-10 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">{t("03 / НАВЫКИ", "03 / SKILLS")}</p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-8 xl:gap-24">
        <div className="flex flex-col gap-5 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-85">
          <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.45] mb-0">{t("Инструменты", "Tools I use")}</p>
            <p className="leading-[1.45]">{t("для решения задач.", "to solve problems.")}</p>
          </div>
          <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[10px] w-full">{t("ЯЗЫКИ", "LANGUAGES")}</p>
          <div className="font-sans font-normal leading-0 relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[17px]">
            <p className="leading-[1.45] mb-0">{t("Русский — родной", "Russian · Native")}</p>
            <p className="leading-[1.45]">{t("Английский — B1, средний", "English · B1 (intermediate)")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start leading-[1.45] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="bg-surface flex flex-col gap-2.5 items-start overflow-clip px-5 py-4 relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ОСНОВА", "CORE")}</p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              React · TypeScript · JavaScript · Node.js
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-2.5 items-start overflow-clip px-5 py-4 relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("СОСТОЯНИЕ И СБОРКА", "STATE MANAGEMENT AND BUILD TOOLS")}</p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Zustand · Redux · Vite · Webpack
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-2.5 items-start overflow-clip px-5 py-4 relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ТЕСТИРОВАНИЕ", "TESTING")}</p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Jest · React Testing Library
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-2.5 items-start overflow-clip px-5 py-4 relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ИНФРАСТРУКТУРА", "INFRASTRUCTURE")}</p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Git · CI/CD (GitLab) · Docker
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-2.5 items-start overflow-clip px-5 py-4 relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ПРОИЗВОДИТЕЛЬНОСТЬ", "PERFORMANCE")}</p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Performance Optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSkills
