import { useLanguage } from '../../languageContext'
const ResumeExperience = () => {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-7 max-xl:px-6 max-xl:py-10 xl:gap-10 xl:px-24 xl:py-16 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="experience">
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">{t("02 / ОПЫТ РАБОТЫ", "02 / WORK EXPERIENCE")}</p>
      <div className="font-sans font-medium leading-0 relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.45] mb-0">{t("От интерфейсов —", "From interfaces")}</p>
        <p className="leading-[1.45]">{t("к платформам и инструментам.", "to platforms and tools.")}</p>
      </div>
      <div className="bg-surface flex items-start leading-[1.45] overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-7 max-xl:p-5 xl:gap-12 xl:p-8">
        <div className="flex flex-col gap-3.5 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-57.5">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[34px]">
            X5 Group
          </p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">{t("Май 2019 — настоящее время", "May 2019 – Present")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">{t("7 лет 7 месяцев", "7 years, 7 months")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">{t("Россия · www.X5.ru", "Russia · www.X5.ru")}</p>
        </div>
        <div className="flex flex-col gap-8 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[30px]">{t("Frontend-разработчик", "Frontend Developer")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">{t("X5 Group — крупнейшая в России продуктовая розничная компания: «Пятёрочка», «Перекрёсток». За 7+ лет прошёл путь до технического лидера, отвечал за ключевые frontend-проекты и инициировал внедрение AI-инструментов.", "X5 Group is Russia’s largest grocery retailer, with brands including Pyaterochka and Perekrestok. Over more than seven years I grew into a tech lead role, took ownership of key frontend projects, and introduced AI tools.")}</p>
          <div className="flex flex-col gap-4 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">{t("Ключевые достижения", "Key achievements")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Собрал конструктор интерфейсов из готовых блоков и добавил генерацию контента по макетам Figma.", "• Built a screen editor from reusable blocks and added content generation from Figma designs.")}</p>
            <p id="ai-tools" className="scroll-mt-4 font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Автоматизировал рутинные задачи команды: внедрил AI-агента для заполнения форм (с 15 минут до 15 секунд) и AI-ревьюера для Merge Requests в GitLab.", "• Automated routine work with an AI agent that cut form completion from 15 minutes to 15 seconds and an AI reviewer for GitLab merge requests.")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Ускорил онбординг новых разработчиков, создав и внедрив детальный план адаптации, чтобы новички быстрее выходили на продуктивную работу.", "• Created and rolled out a structured onboarding plan to help new developers become productive sooner.")}</p>
          </div>
          <div className="flex flex-col gap-4 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">{t("X5 Club · Конструктор интерфейсов · Tech Lead", "X5 Club · Screen Builder · Tech Lead")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Лидировал команду из 4 frontend-разработчиков; сейчас принимаю ключевые архитектурные решения в команде.", "• Led four frontend developers and continue to make key architecture decisions.")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Разработал админку, в которой команда собирает новые экраны из готовых UI-блоков.", "• Built an admin panel for assembling screens from reusable UI blocks.")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Встроил предпросмотр экранов в админку через iframe. Компоненты остались в общем коде приложения.", "• Embedded an iframe preview in the admin panel. The components stayed in the main application.")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Запустил Storybook как витрину компонентов, упростив коммуникацию между менеджерами, дизайнерами и разработчиками.", "• Set up Storybook as a component catalog for product managers, designers, and developers.")}</p>
          </div>
          <div className="flex flex-col gap-4 items-start overflow-clip relative shrink-0 w-full">
            <p id="x5-package" className="scroll-mt-4 font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">{t("Подписка лояльности «X5 Пакет»", "X5 Paket loyalty subscription")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Ускорил запуск партнёрских интеграций в 2 раза за счёт разработки брендированных личных кабинетов.", "• Halved partner integration launch times by building branded customer portals.")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Оптимизировал управление состоянием: мигрировал часть логики с Redux на Zustand, уменьшив boilerplate-код и упростив поддержку.", "• Migrated part of the Redux state logic to Zustand, reducing boilerplate and simplifying maintenance.")}</p>
          </div>
          <div className="flex flex-col gap-4 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">{t("Внутренние инструменты и производительность", "Internal tools and performance")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Разработал инструмент для пакетной оптимизации изображений и анализатор страниц, который автоматически подбирает форматы AVIF/WebP и размеры 1x/2x.", "• Built a batch image optimizer and a page analyzer that recommends AVIF or WebP and 1× or 2× sizes.")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Улучшил ключевые метрики Lighthouse до «зелёной зоны», внедрив Vite-плагин для LQIP-плейсхолдеров.", "• Brought key Lighthouse scores into the green by introducing a Vite plugin for low-quality image placeholders.")}</p>
          </div>
          <div className="flex flex-col gap-2.5 items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">{t("СФЕРЫ ДЕЯТЕЛЬНОСТИ", "INDUSTRIES")}</p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[12px] xl:text-[13px]">{t("ИТ: разработка ПО; системная интеграция, автоматизация технологических и бизнес-процессов, ИТ-консалтинг. Розничная торговля: продуктовая сеть и drogerie (товары повседневного спроса).", "Software development, systems integration, process automation, IT consulting, grocery retail, and everyday consumer goods.")}</p>
          </div>
        </div>
      </div>
      <div className="bg-line h-px relative shrink-0 w-full" />
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-5 xl:gap-12 xl:px-8">
        <div className="flex flex-col gap-3 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-57.5">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[26px] xl:text-[28px]">
            Ru-center
          </p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">{t("Ноябрь 2018 — июнь 2019", "November 2018 – June 2019")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">{t("8 месяцев", "8 months")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">{t("Москва", "Moscow")}</p>
        </div>
        <div className="flex flex-col gap-4.5 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[23px] xl:text-[27px]">{t("Frontend-разработчик", "Frontend Developer")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Оптимизировал сборку проекта: сократил время с ~5 минут до 1 минуты (в 5 раз) за счёт реконфигурации Webpack.", "• Reconfigured Webpack to cut build times from about five minutes to one.")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Разработал ключевые компоненты интерфейса при полном редизайне nic.ru, включая личный кабинет и форму оплаты заказа, на React, Redux и Redux-Saga.", "• Built key parts of the redesigned nic.ru site, including the customer portal and checkout form, using React, Redux, and Redux-Saga.")}</p>
        </div>
      </div>
      <div className="bg-line h-px relative shrink-0 w-full" />
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-5 xl:gap-12 xl:px-8">
        <div className="flex flex-col gap-3 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-57.5">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[26px] xl:text-[28px]">
            Key Group
          </p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">{t("Июль 2018 — ноябрь 2018", "July 2018 – November 2018")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">{t("5 месяцев", "5 months")}</p>
        </div>
        <div className="flex flex-col gap-4.5 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[23px] xl:text-[27px]">{t("Frontend-разработчик", "Frontend Developer")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Разработал ключевые модули фронтенда для MVP сервиса аренды автомобилей на Vue.js.", "• Built core Vue.js modules for the MVP of a car rental service.")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Участвовал в разделении монолита на Ruby on Rails: переносил и реализовывал фронтенд на Vue, взаимодействующий с новым Rails API.", "• Helped split a Ruby on Rails monolith by moving the frontend to Vue and integrating it with a new Rails API.")}</p>
        </div>
      </div>
      <div className="bg-line h-px relative shrink-0 w-full" />
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-5 xl:gap-12 xl:px-8">
        <div className="flex flex-col gap-3 items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-57.5">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[26px] xl:text-[28px]">{t("Вайлдберриз, ООО", "Wildberries LLC")}</p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">{t("Апрель 2018 — июль 2018", "April 2018 – July 2018")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">{t("4 месяца", "4 months")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            career.wb.ru
          </p>
        </div>
        <div className="flex flex-col gap-4.5 items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[23px] xl:text-[27px]">{t("Fullstack-разработчик", "Full-Stack Developer")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Присоединился к команде как Go-разработчик, затем переключился на fullstack-роль для ускорения запуска нового внутреннего продукта.", "• Joined as a Go developer and moved into a full-stack role to speed up the launch of a new internal product.")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">{t("— Разработал MVP внутреннего сервиса управления медиаконтентом в точках ПВЗ: бэкенд на Go и фронтенд на Vue.", "• Built an MVP for managing media at pickup points, with a Go backend and a Vue frontend.")}</p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">{t("ИТ: разработка программного обеспечения. Розничная торговля: интернет-магазин.", "Software development and online retail.")}</p>
        </div>
      </div>
    </section>
  )
}

export default ResumeExperience
