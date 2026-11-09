import { Link } from '../components/Link'
import { Comparison, ComparisonViewport } from '../components/Comparison'

function CaseIntroduction() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[36px] xl:gap-[48px] xl:px-[96px] xl:py-[72px] layout-section">
      <Link className="font-sans font-normal leading-[1.25] relative shrink-0 text-mint text-[14px] w-full action-link" to="/#projects">
        ← Все проекты
      </Link>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[28px] xl:gap-[64px]">
        <div className="flex flex-col items-start overflow-clip relative max-xl:gap-[20px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:gap-[28px] xl:min-w-px">
          <p className="font-sans font-medium leading-[1.25] relative shrink-0 text-peach text-[11px] w-full">
            КЕЙС / X5 GROUP
          </p>
          <h1 className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[43px] xl:text-[76px]">
            <span className="block leading-[1.25] mb-0">
              X5 Group
            </span>
            <span className="block leading-[1.25]">
              Конструктор
            </span>
          </h1>
          <p className="font-serif font-normal italic leading-[1.25] relative shrink-0 text-mint w-full max-xl:text-[43px] xl:text-[76px]">
            интерфейсов.
          </p>
        </div>
        <div className="flex flex-col font-sans font-normal gap-[24px] items-start leading-[1.25] overflow-clip relative shrink-0 text-muted max-xl:w-full xl:pt-[58px] xl:w-[360px]">
          <p className="relative shrink-0 w-full max-xl:text-[18px] xl:text-[21px]">
            В X5 я разработал админку, в которой команда собирает экраны из готовых блоков. Руководил четырьмя фронтенд-разработчиками.
          </p>
          <p className="relative shrink-0 w-full max-xl:text-[15px] xl:text-[16px]">
            Компоненты можно посмотреть в Storybook, а собранный экран — проверить прямо в админке.
          </p>
        </div>
      </div>
      <div className="flex items-start leading-[1.25] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[20px] xl:gap-[40px]">
        <div className="flex flex-col gap-[8px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">
            МОЯ РОЛЬ
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">
            Tech Lead · frontend-архитектура
          </p>
        </div>
        <div className="flex flex-col gap-[8px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">
            В КОМПАНИИ
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">
            С мая 2019 · X5 Group
          </p>
        </div>
        <div className="flex flex-col gap-[8px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">
            КОМАНДА
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">
            4 frontend-разработчика
          </p>
        </div>
        <div className="flex flex-col gap-[8px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-peach text-[10px] w-full">
            РЕАЛИЗАЦИЯ
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted text-[14px] w-full">
            UI-блоки · iframe · Storybook
          </p>
        </div>
      </div>
    </section>
  )
}

function CaseDemo() {
  return (
    <Comparison compactControls>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:p-[24px] xl:px-[96px] xl:py-[40px] layout-section">
        <div className="bg-mint flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[20px] max-xl:p-[16px] max-xl:rounded-[18px] xl:gap-[32px] xl:p-[48px] xl:rounded-[24px]">
          <div className="flex gap-[12px] items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:leading-[0] max-xl:text-deep">
            <div className="font-sans font-medium relative max-xl:shrink-0 max-xl:text-[28px] max-xl:w-full xl:flex-[1_0_0] xl:leading-[0] xl:min-w-px xl:text-deep xl:text-[46px]">
              <p className="leading-[1.25] mb-0">
                Новый экран.
              </p>
              <p className="leading-[1.25]">
                Из готовых блоков.
              </p>
            </div>
            <div className="relative shrink-0 max-xl:font-hand max-xl:font-normal max-xl:text-[23px] max-xl:w-full xl:flex xl:h-[91.597px] xl:items-center xl:justify-center xl:w-[303.566px]">
              <div className="-rotate-3 flex-none">
                <div className="font-hand font-normal leading-[0] relative text-deep text-[30px] w-[300px]">
                  <p className="leading-[1.25] mb-0">
                    Меньше рутины.
                  </p>
                  <p className="leading-[1.25]">
                    Больше переиспользования.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ComparisonViewport className="bg-[#eeede8] items-start overflow-clip relative shrink-0 w-full max-xl:h-[270px] max-xl:rounded-[12px] xl:h-[576px] xl:rounded-[21.6px]" large={true} />
          <p className="font-sans font-medium leading-[1.25] relative shrink-0 text-deep w-full max-xl:text-[15px] xl:text-[19px]">
            Знакомые блоки можно использовать повторно, а результат сразу проверить в предпросмотре.
          </p>
          <p className="font-sans font-normal leading-[1.25] relative shrink-0 text-[#3b6153] w-full max-xl:text-[10px] xl:text-[12px]">
            Демонстрация того, как устроена сборка экрана.
          </p>
        </div>
      </section>
    </Comparison>
  )
}

function CaseContext() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[48px] xl:gap-[48px] xl:px-[96px] xl:py-[80px] layout-section">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        01 / КОНТЕКСТ
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[28px] xl:gap-[96px]">
        <div className="flex flex-col gap-[20px] items-start leading-[0] overflow-clip relative shrink-0 max-xl:w-full xl:w-[340px]">
          <div className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.35] mb-0">
              Как упростить
            </p>
            <p className="leading-[1.35]">
              сборку экранов
            </p>
          </div>
          <div className="font-hand font-normal relative shrink-0 text-mint w-full max-xl:text-[24px] xl:text-[28px]">
            <p className="leading-[1.35] mb-0">
              Меньше рутины.
            </p>
            <p className="leading-[1.35]">
              Больше переиспользования.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[28px] items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">
              ЗАДАЧА
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
              Ускорить сборку новых экранов и сохранить единый дизайн. Для этого команда должна видеть, какие блоки уже есть и как их использовать.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">
              ТЕХНИЧЕСКИЙ КОНТЕКСТ
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
              Предпросмотр реализован через iframe в админ-панели, без вынесения компонентов в отдельный npm-пакет.
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full">
            <p className="font-sans font-medium relative shrink-0 text-mint text-[11px] w-full">
              МОЙ ВКЛАД
            </p>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[16px] xl:text-[19px]">
              Лидировал команду из 4 frontend-разработчиков. Создал конструктор, встроенный предпросмотр и Storybook; принимаю ключевые архитектурные решения.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseDecisions() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[48px] xl:gap-[48px] xl:px-[96px] xl:py-[80px] layout-section">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        02 / КЛЮЧЕВЫЕ РЕШЕНИЯ
      </p>
      <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">
          Что я сделал
        </p>
        <p className="leading-[1.35]">
          для команды.
        </p>
      </div>
      <div className="bg-surface flex items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-[24px] max-xl:p-[24px] xl:gap-[40px] xl:p-[32px]">
        <p className="font-serif font-normal italic leading-[1.35] relative shrink-0 text-mint max-xl:text-[42px] max-xl:w-full xl:text-[60px] xl:w-[105px]">
          01
        </p>
        <div className="flex flex-col gap-[18px] items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[29px]">
            Конструктор из UI-блоков
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">
            Разработал админку, в которой экран собирается из готовых UI-блоков. Одинаковые элементы выглядят и ведут себя одинаково на разных экранах.
          </p>
          <p className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[14px]">
            Типовые блоки команда использует в новых экранах повторно.
          </p>
        </div>
        <div className="bg-[#d0e9dd] flex flex-col gap-[14px] items-start overflow-clip relative rounded-[12px] shrink-0 max-xl:p-[20px] max-xl:w-full xl:p-[24px] xl:w-[310px]">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[25px] xl:text-[24px]">
            Блоки → Экран
          </p>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-[#3b6153] text-[12px] w-full">
            Админка-конструктор
          </p>
          <div className="bg-deep h-[6px] relative rounded-[3px] shrink-0 w-full" />
        </div>
      </div>
      <div className="bg-surface flex items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-[24px] max-xl:p-[24px] xl:gap-[40px] xl:p-[32px]">
        <p className="font-serif font-normal italic leading-[1.35] relative shrink-0 text-peach max-xl:text-[42px] max-xl:w-full xl:text-[60px] xl:w-[105px]">
          02
        </p>
        <div className="flex flex-col gap-[18px] items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[29px]">
            Предпросмотр через iframe
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">
            Встроил предпросмотр экранов в админку через iframe. Компоненты не пришлось выносить в отдельный npm-пакет.
          </p>
          <p className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[14px]">
            Результат виден рядом с настройками экрана.
          </p>
        </div>
        <div className="bg-sand flex flex-col gap-[14px] items-start overflow-clip relative rounded-[12px] shrink-0 max-xl:p-[20px] max-xl:w-full xl:p-[24px] xl:w-[310px]">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[25px] xl:text-[24px]">
            Админка → iframe
          </p>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-[#3b6153] text-[12px] w-full">
            Без отдельного npm-пакета
          </p>
          <div className="bg-deep h-[6px] relative rounded-[3px] shrink-0 w-full" />
        </div>
      </div>
      <div className="bg-surface flex items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:flex-col max-xl:gap-[24px] max-xl:p-[24px] xl:gap-[40px] xl:p-[32px]">
        <p className="font-serif font-normal italic leading-[1.35] relative shrink-0 text-mint max-xl:text-[42px] max-xl:w-full xl:text-[60px] xl:w-[105px]">
          03
        </p>
        <div className="flex flex-col gap-[18px] items-start leading-[1.35] overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <p className="font-sans font-medium relative shrink-0 text-ink w-full max-xl:text-[24px] xl:text-[29px]">
            Storybook для команды
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">
            Запустил Storybook как витрину компонентов. Это упростило коммуникацию между менеджерами, дизайнерами и разработчиками.
          </p>
          <p className="font-sans font-normal relative shrink-0 text-mint w-full max-xl:text-[13px] xl:text-[14px]">
            Единая витрина компонентов для всей продуктовой команды.
          </p>
        </div>
        <div className="bg-[#d0e9dd] flex flex-col gap-[14px] items-start overflow-clip relative rounded-[12px] shrink-0 max-xl:p-[20px] max-xl:w-full xl:p-[24px] xl:w-[310px]">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[25px] xl:text-[24px]">
            UI → Storybook
          </p>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-[#3b6153] text-[12px] w-full">
            Витрина компонентов
          </p>
          <div className="bg-deep h-[6px] relative rounded-[3px] shrink-0 w-full" />
        </div>
      </div>
    </section>
  )
}

function CaseResults() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[48px] xl:gap-[48px] xl:px-[96px] xl:py-[80px] layout-section">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        03 / РЕЗУЛЬТАТ И ВЫВОДЫ
      </p>
      <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">
          Что изменилось
        </p>
        <p className="leading-[1.35]">
          в работе команды.
        </p>
      </div>
      <div className="flex gap-[24px] items-start leading-[1.35] overflow-clip relative shrink-0 w-full max-xl:flex-col">
        <div className="bg-surface flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[16px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">
            Предпросмотр
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            Собранный экран можно проверить прямо в админке.
          </p>
        </div>
        <div className="bg-surface flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[16px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">
            4 разработчика
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            Лидировал frontend-команду; сейчас принимаю ключевые архитектурные решения.
          </p>
        </div>
        <div className="bg-surface flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[16px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:self-stretch">
          <p className="font-sans font-medium relative shrink-0 text-mint w-full max-xl:text-[25px] xl:text-[28px]">
            Единый UI
          </p>
          <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
            Конструктор унифицировал дизайн. Storybook стал витриной компонентов для менеджеров, дизайнеров и разработчиков.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
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

function CaseContact() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:px-[24px] max-xl:py-[48px] xl:px-[96px] xl:py-[64px] layout-section">
      <div className="bg-peach flex flex-col gap-[28px] items-start overflow-clip relative rounded-[24px] shrink-0 text-deep w-full max-xl:p-[24px] xl:p-[48px]">
        <div className="font-sans font-medium leading-[0] relative shrink-0 w-full max-xl:text-[32px] xl:text-[50px]">
          <p className="leading-[1.35] mb-0">
            Хорошее решение
          </p>
          <p className="leading-[1.35]">
            начинается с разговора.
          </p>
        </div>
        <p className="font-sans font-normal leading-[1.35] relative shrink-0 w-full max-xl:text-[16px] xl:text-[19px]">
          Есть похожая задача? Расскажите, что хотите изменить.
        </p>
        <div className="flex font-sans font-medium gap-[24px] leading-[1.35] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:items-start xl:items-center">
          <Link className="relative max-xl:shrink-0 max-xl:text-[21px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[30px] action-link" to="mailto:maaaslanov@gmail.com">
            maaaslanov@gmail.com ↗
          </Link>
          <Link className="relative shrink-0 text-[15px] max-xl:w-full xl:whitespace-nowrap action-link" to="/#projects">
            ← Все проекты
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function CaseStudy() {
  return (
    <main id="main" className="w-full">
      <CaseIntroduction />
      <CaseDemo />
      <CaseContext />
      <CaseDecisions />
      <CaseResults />
      <CaseContact />
    </main>
  )
}
