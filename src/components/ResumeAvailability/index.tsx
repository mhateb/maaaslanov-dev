import { useLanguage } from '../../languageContext'
const ResumeAvailability = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-10 xl:gap-10 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
      <div className="bg-line h-px relative shrink-0 w-full" />
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">{t("05 / УСЛОВИЯ И ЛИЧНЫЕ ДАННЫЕ", "05 / WORK PREFERENCES AND PERSONAL DETAILS")}</p>
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-9 xl:gap-16">
        <div className="flex flex-col gap-6 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[29px] xl:text-[36px]">{t("Личные данные", "Personal details")}</p>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ПОЛНОЕ ИМЯ", "FULL NAME")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Масланов Дмитрий Евгеньевич", "Dmitry Evgenyevich Maslanov")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ПОЛ", "GENDER")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Мужчина", "Male")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ДАТА РОЖДЕНИЯ И ВОЗРАСТ", "DATE OF BIRTH AND AGE")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("26 октября 1998 · 28 лет", "26 October 1998 · Age 28")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("МЕСТО ПРОЖИВАНИЯ", "LOCATION")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Москва", "Moscow")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ГРАЖДАНСТВО", "CITIZENSHIP")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Россия", "Russia")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("РАЗРЕШЕНИЕ НА РАБОТУ", "WORK AUTHORIZATION")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Россия", "Russia")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ВОДИТЕЛЬСКИЕ ПРАВА", "DRIVING LICENCE")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Категория B", "Category B")}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[29px] xl:text-[36px]">{t("Формат сотрудничества", "Work preferences")}</p>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ЗАНЯТОСТЬ", "EMPLOYMENT")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Полная, частичная, проектная работа / разовое задание", "Full-time, part-time, or project-based")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ФОРМАТ РАБОТЫ", "WORK ARRANGEMENT")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Удалённо", "Remote")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("КОМАНДИРОВКИ", "BUSINESS TRAVEL")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Готов к командировкам", "Open to travel")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ВРЕМЯ В ПУТИ ДО РАБОТЫ", "COMMUTE")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Не имеет значения", "No preference")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("САМОЗАНЯТОСТЬ", "SELF-EMPLOYMENT")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Есть", "Registered")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("МЕДКНИЖКА", "OCCUPATIONAL HEALTH RECORD")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Есть", "Available")}</p>
          </div>
          <div className="flex flex-col gap-1.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">{t("ЖЕЛАЕМАЯ ЗАРПЛАТА", "SALARY EXPECTATION")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">{t("Не указана в резюме", "Available on request")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeAvailability
