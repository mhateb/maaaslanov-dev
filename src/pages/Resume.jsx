import { ResumeDownload } from '../components/ResumeDownload'
import { Link } from '../components/Link'
import portrait from '../assets/profile.jpg'

function ResumeProfile() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[40px] xl:gap-[40px] xl:px-[96px] xl:py-[64px] layout-section">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach w-full max-xl:text-[10px] xl:text-[12px]">
        РЕЗЮМЕ / ОБНОВЛЕНО 18 НОЯБРЯ 2026
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[28px] xl:gap-[96px]">
        <div className="flex flex-col items-start overflow-clip relative shrink-0 max-xl:gap-[24px] max-xl:w-full xl:gap-[28px] xl:min-w-0 xl:flex-1">
          <h1 className="flex flex-col items-start overflow-clip relative shrink-0 w-full">
            <span className="font-sans font-medium leading-[1.1] relative shrink-0 text-ink w-full max-xl:text-[44px] xl:text-[76px]">
              Дмитрий
            </span>
            <span className="font-serif font-normal italic leading-[1.2] relative shrink-0 text-mint w-full max-xl:text-[46px] xl:text-[78px]">
              Масланов
            </span>
          </h1>
          <div className="flex flex-col gap-[8px] items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[25px] xl:text-[34px]">
              Senior Frontend Developer
            </p>
            <p className="font-sans font-normal relative shrink-0 text-peach w-full max-xl:text-[15px] xl:text-[19px]">
              AI-tooling · Platform Engineering
            </p>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[21px]">
            Создаю сложные внутренние инструменты и платформы. Последние 7+ лет — в X5 Group, где вырос до технического лидера.
          </p>
          <div className="flex overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[16px] max-xl:items-start xl:gap-[24px] xl:items-center">
            <ResumeDownload className="bg-peach text-deep" />
            <Link className="font-sans font-normal leading-[1.35] relative shrink-0 text-ink text-[14px] whitespace-nowrap action-link" to="#profile">
              Читать на странице ↘
            </Link>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-muted text-[11px] w-full">
            PDF · 3 страницы
          </p>
        </div>
        <div className="flex gap-[16px] overflow-clip relative shrink-0 max-xl:items-center max-xl:w-full xl:flex-col xl:items-start xl:w-[352px]">
          <div className="relative shrink-0 max-xl:h-[132px] max-xl:rounded-[12px] max-xl:w-[100px] xl:h-[440px] xl:rounded-[20px] xl:w-[352px] portrait">
            <div className="absolute inset-0 overflow-hidden pointer-events-none max-xl:rounded-[12px] xl:rounded-[20px]">
              <img className="absolute left-0 max-w-none top-0 w-full max-xl:h-[135.96%] xl:h-[143.33%]" alt="Дмитрий Масланов" src={portrait} />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start leading-[1.35] overflow-clip relative max-xl:flex-[1_0_0] max-xl:min-w-px xl:shrink-0 xl:w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[15px]">
              Москва · удалённо
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[11px] xl:text-[12px]">
              Готов к командировкам
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] items-start leading-[1.35] overflow-clip relative shrink-0 w-full max-xl:flex-col">
        <div className="bg-surface flex flex-col items-start overflow-clip relative rounded-[14px] max-xl:gap-[8px] max-xl:p-[20px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-[12px] xl:min-w-px xl:p-[24px]">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[36px]">
            8 лет 8 месяцев
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[13px] xl:text-[14px]">
            Общий опыт по резюме
          </p>
        </div>
        <div className="bg-surface flex flex-col items-start overflow-clip relative rounded-[14px] max-xl:gap-[8px] max-xl:p-[20px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-[12px] xl:min-w-px xl:p-[24px]">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[36px]">
            ×2
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[13px] xl:text-[14px]">
            Скорость запуска партнёрских интеграций
          </p>
        </div>
        <div className="bg-surface flex flex-col items-start overflow-clip relative rounded-[14px] max-xl:gap-[8px] max-xl:p-[20px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-[12px] xl:min-w-px xl:p-[24px]">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[36px]">
            15 мин → 15 сек
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[13px] xl:text-[14px]">
            Заполнение форм AI-агентом
          </p>
        </div>
      </div>
    </section>
  )
}

function ResumeAbout() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[40px] xl:gap-[40px] xl:px-[96px] xl:py-[64px] layout-section" id="profile">
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">
        01 / КОНТАКТЫ И ПРОФИЛЬ
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[32px] xl:gap-[64px]">
        <div className="bg-surface flex flex-col gap-[24px] items-start leading-[1.45] overflow-clip relative rounded-[20px] shrink-0 max-xl:p-[24px] max-xl:w-full xl:p-[32px] xl:w-[448px]">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[25px] xl:text-[28px]">
            Связаться напрямую
          </p>
          <div className="flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">
              EMAIL · ПРЕДПОЧТИТЕЛЬНО
            </p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] action-link" to="mailto:maaaslanov@gmail.com">
              maaaslanov@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">
              ТЕЛЕФОН
            </p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] action-link" to="tel:+79969654507">
              +7 (996) 965-45-07
            </Link>
          </div>
          <div className="flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">
              TELEGRAM
            </p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] action-link" to="https://t.me/Dmitry_Maslanov">
              @Dmitry_Maslanov
            </Link>
          </div>
          <div className="flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">
              LINKEDIN
            </p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] action-link" to="https://www.linkedin.com/in/dmitry-maslanov/">
              linkedin.com/in/dmitry-maslanov
            </Link>
          </div>
          <div className="flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-muted text-[10px] w-full">
              СЕТКА
            </p>
            <Link className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[14px] xl:text-[16px] action-link" to="https://set.ki/account/kuTnksN">
              {`https://set.ki/account/kuTnksN`}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.45] mb-0">
              Фронтенд, который
            </p>
            <p className="leading-[1.45]">
              помогает команде.
            </p>
          </div>
          <p className="font-sans font-normal leading-[1.45] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
            Senior Frontend Developer с опытом более 8 лет, специализирующийся на создании сложных внутренних инструментов и платформ. Последние 7+ лет в X5 Group, где вырос до технического лидера.
          </p>
          <p className="font-sans font-normal leading-[1.45] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
            Создал конструктор интерфейсов с предпросмотром и внедрил генерацию контента по макетам Figma.
          </p>
          <p className="font-sans font-normal leading-[1.45] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
            Разработал и внедрил AI-агентов для автоматизации рутинных задач, таких как ревью кода и работа с таск-трекерами.
          </p>
          <div className="flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[10px] w-full">
              СПЕЦИАЛИЗАЦИИ
            </p>
            <div className="font-sans font-normal leading-[0] relative shrink-0 text-ink w-full max-xl:text-[15px] xl:text-[17px]">
              <p className="leading-[1.45] mb-0">
                Программист, разработчик
              </p>
              <p className="leading-[1.45]">
                Руководитель группы разработки
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResumeExperience() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[40px] xl:gap-[40px] xl:px-[96px] xl:py-[64px] layout-section" id="experience">
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">
        02 / ОПЫТ РАБОТЫ
      </p>
      <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.45] mb-0">
          От интерфейсов —
        </p>
        <p className="leading-[1.45]">
          к платформам и инструментам.
        </p>
      </div>
      <div className="bg-surface flex items-start leading-[1.45] overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-[28px] max-xl:p-[20px] xl:gap-[48px] xl:p-[32px]">
        <div className="flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-[230px]">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[28px] xl:text-[34px]">
            X5 Group
          </p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">
            Май 2019 — настоящее время
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            7 лет 7 месяцев
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            Россия · www.X5.ru
          </p>
        </div>
        <div className="flex flex-col gap-[32px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[30px]">
            Frontend-разработчик
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">
            X5 Group — крупнейшая в России продуктовая розничная компания: «Пятёрочка», «Перекрёсток». За 7+ лет прошёл путь до технического лидера, отвечал за ключевые frontend-проекты и инициировал внедрение AI-инструментов.
          </p>
          <div className="flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">
              Ключевые достижения
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Собрал конструктор интерфейсов из готовых блоков и добавил генерацию контента по макетам Figma.
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Автоматизировал рутинные задачи команды: внедрил AI-агента для заполнения форм (с 15 минут до 15 секунд) и AI-ревьюера для Merge Requests в GitLab.
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Ускорил онбординг новых разработчиков, создав и внедрив детальный план адаптации, чтобы новички быстрее выходили на продуктивную работу.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">
              Конструктор интерфейсов · Tech Lead
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Лидировал команду из 4 frontend-разработчиков; сейчас принимаю ключевые архитектурные решения в команде.
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Разработал админку, в которой команда собирает новые экраны из готовых UI-блоков.
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Встроил предпросмотр экранов в админку через iframe. Компоненты остались в общем коде приложения.
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Запустил Storybook как витрину компонентов, упростив коммуникацию между менеджерами, дизайнерами и разработчиками.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">
              Подписка лояльности «X5 Пакет»
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Ускорил запуск партнёрских интеграций в 2 раза за счёт разработки брендированных личных кабинетов.
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Оптимизировал управление состоянием: мигрировал часть логики с Redux на Zustand, уменьшив boilerplate-код и упростив поддержку.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[21px] xl:text-[24px]">
              Внутренние инструменты и производительность
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Разработал инструмент для пакетной оптимизации изображений и анализатор страниц, который автоматически подбирает форматы AVIF/WebP и размеры 1x/2x.
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              — Улучшил ключевые метрики Lighthouse до «зелёной зоны», внедрив Vite-плагин для LQIP-плейсхолдеров.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">
              СФЕРЫ ДЕЯТЕЛЬНОСТИ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[12px] xl:text-[13px]">
              ИТ: разработка ПО; системная интеграция, автоматизация технологических и бизнес-процессов, ИТ-консалтинг. Розничная торговля: продуктовая сеть и drogerie (товары повседневного спроса).
            </p>
          </div>
        </div>
      </div>
      <div className="bg-line h-px relative shrink-0 w-full" />
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[20px] xl:gap-[48px] xl:px-[32px]">
        <div className="flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-[230px]">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[26px] xl:text-[28px]">
            Ru-center
          </p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">
            Ноябрь 2018 — июнь 2019
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            8 месяцев
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            Москва
          </p>
        </div>
        <div className="flex flex-col gap-[18px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[23px] xl:text-[27px]">
            Frontend-разработчик
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            — Оптимизировал сборку проекта: сократил время с ~5 минут до 1 минуты (в 5 раз) за счёт реконфигурации Webpack.
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            — Разработал ключевые компоненты интерфейса при полном редизайне nic.ru, включая личный кабинет и форму оплаты заказа, на React, Redux и Redux-Saga.
          </p>
        </div>
      </div>
      <div className="bg-line h-px relative shrink-0 w-full" />
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[20px] xl:gap-[48px] xl:px-[32px]">
        <div className="flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-[230px]">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[26px] xl:text-[28px]">
            Key Group
          </p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">
            Июль 2018 — ноябрь 2018
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            5 месяцев
          </p>
        </div>
        <div className="flex flex-col gap-[18px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[23px] xl:text-[27px]">
            Frontend-разработчик
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            — Разработал ключевые модули фронтенда для MVP сервиса аренды автомобилей на Vue.js.
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            — Участвовал в разделении монолита на Ruby on Rails: переносил и реализовывал фронтенд на Vue, взаимодействующий с новым Rails API.
          </p>
        </div>
      </div>
      <div className="bg-line h-px relative shrink-0 w-full" />
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[20px] xl:gap-[48px] xl:px-[32px]">
        <div className="flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-[230px]">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[26px] xl:text-[28px]">
            Вайлдберриз, ООО
          </p>
          <p className="font-sans font-normal relative shrink-0 text-ink text-[13px] w-full">
            Апрель 2018 — июль 2018
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            4 месяца
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            career.wb.ru
          </p>
        </div>
        <div className="flex flex-col gap-[18px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[23px] xl:text-[27px]">
            Fullstack-разработчик
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            — Присоединился к команде как Go-разработчик, затем переключился на fullstack-роль для ускорения запуска нового внутреннего продукта.
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            — Разработал MVP внутреннего сервиса управления медиаконтентом в точках ПВЗ: бэкенд на Go и фронтенд на Vue.
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[12px] w-full">
            ИТ: разработка программного обеспечения. Розничная торговля: интернет-магазин.
          </p>
        </div>
      </div>
    </section>
  )
}

function ResumeSkills() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[40px] xl:gap-[40px] xl:px-[96px] xl:py-[64px] layout-section">
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">
        03 / НАВЫКИ
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[32px] xl:gap-[96px]">
        <div className="flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-[340px]">
          <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.45] mb-0">
              Инструменты
            </p>
            <p className="leading-[1.45]">
              для решения задач.
            </p>
          </div>
          <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[10px] w-full">
            ЯЗЫКИ
          </p>
          <div className="font-sans font-normal leading-[0] relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[17px]">
            <p className="leading-[1.45] mb-0">
              Русский — родной
            </p>
            <p className="leading-[1.45]">
              Английский — B1, средний
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] items-start leading-[1.45] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="bg-surface flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ОСНОВА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              React · TypeScript · JavaScript · Node.js
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              СОСТОЯНИЕ И СБОРКА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Zustand · Redux · Vite · Webpack
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ТЕСТИРОВАНИЕ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Jest · React Testing Library
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ИНФРАСТРУКТУРА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Git · CI/CD (GitLab) · Docker
            </p>
          </div>
          <div className="bg-surface flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ПРОИЗВОДИТЕЛЬНОСТЬ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-ink w-full max-xl:text-[17px] xl:text-[20px]">
              Performance Optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResumeEducation() {
  return (
    <section className="flex flex-col items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[40px] xl:gap-[40px] xl:px-[96px] xl:py-[64px] layout-section">
      <p className="font-sans font-medium relative shrink-0 text-peach text-[11px] w-full">
        04 / ОБРАЗОВАНИЕ И РАЗВИТИЕ
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[32px] xl:gap-[64px]">
        <div className="flex flex-col gap-[20px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[40px]">
            Образование
          </p>
          <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">
            2020 · ВЫСШЕЕ · МОСКВА
          </p>
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[30px]">
            Национальный исследовательский технологический университет «МИСиС»
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
            Автоматизация процессов проектирования
          </p>
        </div>
        <div className="bg-surface flex flex-col gap-[24px] items-start overflow-clip relative rounded-[20px] max-xl:p-[24px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:p-[32px]">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[28px] xl:text-[32px]">
            Курсы
          </p>
          <div className="flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[12px] w-full">
              2025
            </p>
            <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[27px]">
              Хекслет
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted text-[16px] w-full">
              Frontend-Develop
            </p>
          </div>
          <div className="flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
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

function ResumeAvailability() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[40px] xl:gap-[40px] xl:px-[96px] xl:py-[64px] layout-section">
      <div className="bg-line h-px relative shrink-0 w-full" />
      <p className="font-sans font-medium leading-[1.45] relative shrink-0 text-peach text-[11px] w-full">
        05 / УСЛОВИЯ И ЛИЧНЫЕ ДАННЫЕ
      </p>
      <div className="flex items-start leading-[1.45] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[36px] xl:gap-[64px]">
        <div className="flex flex-col gap-[24px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[29px] xl:text-[36px]">
            Личные данные
          </p>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ПОЛНОЕ ИМЯ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Масланов Дмитрий Евгеньевич
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ПОЛ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Мужчина
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ДАТА РОЖДЕНИЯ И ВОЗРАСТ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              26 октября 1998 · 28 лет
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              МЕСТО ПРОЖИВАНИЯ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Москва
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ГРАЖДАНСТВО
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Россия
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              РАЗРЕШЕНИЕ НА РАБОТУ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Россия
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ВОДИТЕЛЬСКИЕ ПРАВА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Категория B
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[29px] xl:text-[36px]">
            Формат сотрудничества
          </p>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ЗАНЯТОСТЬ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Полная, частичная, проектная работа / разовое задание
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ФОРМАТ РАБОТЫ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Удалённо
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              КОМАНДИРОВКИ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Готов к командировкам
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ВРЕМЯ В ПУТИ ДО РАБОТЫ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Не имеет значения
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              САМОЗАНЯТОСТЬ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Есть
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              МЕДКНИЖКА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Есть
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[10px] w-full">
              ЖЕЛАЕМАЯ ЗАРПЛАТА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[18px]">
              Не указана в резюме
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResumeContact() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:px-[24px] max-xl:py-[40px] xl:px-[96px] xl:py-[64px] layout-section">
      <div className="bg-peach flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-full max-xl:gap-[28px] max-xl:p-[24px] xl:gap-[36px] xl:p-[48px]">
        <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col xl:gap-[24px] xl:leading-[0] xl:text-deep">
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
        <div className="flex overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[20px] max-xl:items-start xl:gap-[32px] xl:items-center">
          <ResumeDownload className="bg-deep text-ink">Скачать PDF ↓</ResumeDownload>
          <Link className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep max-xl:min-w-full max-xl:text-[17px] max-xl:w-[min-content] xl:text-[22px] xl:whitespace-nowrap action-link" to="mailto:maaaslanov@gmail.com">
            maaaslanov@gmail.com
          </Link>
        </div>
        <div className="font-sans font-normal leading-[0] relative shrink-0 text-[#604a3f] text-[11px] w-full">
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

export default function Resume() {
  return (
    <main id="main" className="w-full resume-page">
      <ResumeProfile />
      <ResumeAbout />
      <ResumeExperience />
      <ResumeSkills />
      <ResumeEducation />
      <ResumeAvailability />
      <ResumeContact />
    </main>
  )
}
