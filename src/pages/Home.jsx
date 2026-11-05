import { Link } from '../components/Link'
import { Comparison, ComparisonViewport, ComparisonControls } from '../components/Comparison'
import { ContactCopy, CopyEmail, CopyStatus } from '../components/ContactCopy'
import { MotionToggle } from '../components/Motion'
import { ProjectCard, ProjectFacts, projects } from '../components/ProjectCard'
import { NoteCard, notes } from '../components/NoteCard'

function Hero() {
  return (
    <Comparison>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[36px] xl:gap-[48px] xl:px-[96px] xl:py-[64px] layout-section">
        <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[40px] xl:gap-[64px]">
          <div className="flex flex-col items-start overflow-clip relative shrink-0 max-xl:gap-[24px] max-xl:w-full xl:gap-[30px] xl:w-[564px]">
            <div className="font-sans font-medium leading-[0] relative shrink-0 text-peach text-[12px] w-full">
              <p className="leading-[1.3] mb-0">
                ПРИВЕТ, Я ДМИТРИЙ
              </p>
              <p className="leading-[1.3]">
                SENIOR FRONTEND DEVELOPER
              </p>
            </div>
            <h1 className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:text-[43px] xl:text-[76px]">
              <span className="font-sans font-medium leading-[1.1] relative shrink-0 text-ink w-full">
                Интерфейсы,
              </span>
              <span className="font-serif font-normal italic leading-[1.2] relative shrink-0 text-mint w-full">
                где всё ясно.
              </span>
            </h1>
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[17px] w-full xl:text-[21px]">
              Делаю интерфейсы для сложных задач: личные кабинеты, админки и рабочие инструменты. Продумываю сценарии, собираю на React и TypeScript и довожу до запуска.
            </p>
            <div className="flex items-start overflow-clip relative shrink-0 w-full gap-x-3 gap-y-2 flex-wrap">
              <Link className="bg-peach flex items-start overflow-clip px-[18px] py-[12px] relative rounded-[50px] shrink-0 action-link" to="/#projects">
                <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-deep text-[14px] whitespace-nowrap">
                  Смотреть проекты ↘
                </p>
              </Link>
            </div>
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[13px] w-full">
              8+ лет во фронтенде · Tech Lead в X5 Group
            </p>
          </div>
          <div className="flex flex-col gap-[12px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
            <div className="bg-surface flex flex-col gap-[18px] items-start overflow-clip relative rounded-[20px] shrink-0 w-full max-xl:px-[16px] max-xl:py-[20px] xl:p-[24px]">
              <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-muted w-full max-xl:text-[10px] xl:text-[11px]">
                01 / КАК Я РАБОТАЮ
              </p>
              <ComparisonViewport className="bg-[#eeede8] items-start overflow-clip relative rounded-[12px] shrink-0 w-full max-xl:h-[270px] xl:h-[320px]" large={false} />
              <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-ink w-full max-xl:text-[15px] xl:text-[17px]">
                Один раз собрать. Дальше — использовать.
              </p>
              <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted w-full max-xl:text-[11px] xl:text-[12px]">
                На примере конструктора экранов для команды X5.
              </p>
              <ComparisonControls />
            </div>
            <p className="font-hand font-normal leading-[1.3] relative shrink-0 text-peach text-right w-full max-xl:text-[23px] xl:text-[25px]">
              Из готовых блоков проще собрать новый экран ↑
            </p>
          </div>
        </div>
        <div className="flex font-sans font-normal items-start leading-[1.3] overflow-clip relative shrink-0 w-full max-xl:gap-[12px] max-xl:text-[10px] xl:gap-[32px] xl:text-[12px] flex-wrap">
          <p className="flex-[1_0_0] min-w-px relative text-muted">
            TAB — фокус / ← → — сравнить версии
          </p>
          <MotionToggle />
        </div>
      </section>
    </Comparison>
  )
}

function Projects() {
  return (
    <Comparison>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[48px] xl:gap-[48px] xl:px-[96px] xl:py-[80px] layout-section" id="projects">
        <p className="font-sans font-medium leading-[1.3] relative shrink-0 text-peach text-[11px] w-full">
          01 / ИЗБРАННЫЕ ПРОЕКТЫ
        </p>
        <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
          <p className="leading-[1.3] mb-0">
            Проекты
          </p>
          <p className="leading-[1.3]">
            и моя роль в них.
          </p>
        </div>
        <div className="bg-surface flex gap-[32px] items-start overflow-clip relative rounded-[24px] shrink-0 w-full max-xl:flex-col max-xl:p-[20px] xl:p-[32px]">
          <div className="flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-[420px]">
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-muted text-[11px] w-full">
              X5 GROUP / ВНУТРЕННЯЯ ПЛАТФОРМА
            </p>
            <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[28px] xl:text-[35px]">
              <p className="leading-[1.3] mb-0">
                X5 Group
              </p>
              <p className="leading-[1.3]">
                Конструктор интерфейсов
              </p>
            </div>
            <ProjectFacts facts={projects.club} />
            <Link className="font-sans font-medium leading-[1.3] relative shrink-0 text-peach text-[15px] w-full action-link" to="/cases/x5-club">
              Разобрать кейс ↗
            </Link>
          </div>
          <div className="bg-mint flex flex-col gap-[20px] items-start overflow-clip relative rounded-[16px] max-xl:p-[16px] max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:p-[28px]">
            <div className="font-sans font-medium leading-[0] relative shrink-0 text-deep w-full max-xl:text-[27px] xl:text-[40px]">
              <p className="leading-[1.3] mb-0">
                ОТ МАКЕТА
              </p>
              <p className="leading-[1.3]">
                ДО ЗАПУСКА.
              </p>
            </div>
            <ComparisonViewport className="bg-[#eeede8] items-start overflow-clip relative rounded-[12px] shrink-0 w-full max-xl:h-[270px] xl:h-[320px]" large={false} />
            <p className="font-sans font-normal leading-[1.3] relative shrink-0 text-deep text-[12px] w-full">
              Пример сборки экрана
            </p>
          </div>
        </div>
        <div className="flex gap-[24px] items-start overflow-clip relative shrink-0 w-full max-xl:flex-col">
          {projects.related.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
    </Comparison>
  )
}

function Experience() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[48px] xl:gap-[48px] xl:px-[96px] xl:py-[80px] layout-section" id="experience">
      <div className="bg-line h-px relative shrink-0 w-full" />
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        02 / ОПЫТ
      </p>
      <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[28px] xl:gap-[96px]">
        <div className="flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 max-xl:w-full xl:w-[340px]">
          <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[44px]">
            <p className="leading-[1.35] mb-0">
              Что я приношу
            </p>
            <p className="leading-[1.35]">
              в команду
            </p>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[17px]">
            8+ лет в разработке. Архитектура фронтенда, внутренние платформы и AI-инструменты. Полный опыт — <Link className="action-link underline underline-offset-2" to="/resume">в резюме</Link>.
          </p>
        </div>
        <div className="flex flex-col gap-[28px] items-start overflow-clip relative max-xl:shrink-0 max-xl:w-full xl:flex-[1_0_0] xl:min-w-px">
          <div className="flex flex-col gap-[12px] items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[6px] xl:gap-[24px]">
              <p className="font-sans font-medium relative text-ink max-xl:shrink-0 max-xl:text-[20px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[22px]">
                Frontend / Tech Lead · X5 Group
              </p>
              <p className="font-sans font-normal relative shrink-0 text-mint text-[12px] max-xl:w-full xl:whitespace-nowrap">
                05.2019 — сейчас
              </p>
            </div>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              Разработал конструктор интерфейсов и встроил предпросмотр. Руководил командой из четырёх фронтенд-разработчиков.
            </p>
          </div>
          <div className="bg-line h-px relative shrink-0 w-full" />
          <div className="flex flex-col gap-[12px] items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[6px] xl:gap-[24px]">
              <p className="font-sans font-medium relative text-ink max-xl:shrink-0 max-xl:text-[20px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[22px]">
                Frontend · Ru-center
              </p>
              <p className="font-sans font-normal relative shrink-0 text-mint text-[12px] max-xl:w-full xl:whitespace-nowrap">
                11.2018 — 06.2019
              </p>
            </div>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              Ускорил сборку Webpack с ~5 минут до 1 минуты. Участвовал в редизайне nic.ru на React, Redux и Redux-Saga.
            </p>
          </div>
          <div className="bg-line h-px relative shrink-0 w-full" />
          <div className="flex flex-col gap-[12px] items-start leading-[1.35] overflow-clip relative shrink-0 w-full">
            <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:gap-[6px] xl:gap-[24px]">
              <p className="font-sans font-medium relative text-ink max-xl:shrink-0 max-xl:text-[20px] max-xl:w-full xl:flex-[1_0_0] xl:min-w-px xl:text-[22px]">
                Frontend · Key Group
              </p>
              <p className="font-sans font-normal relative shrink-0 text-mint text-[12px] max-xl:w-full xl:whitespace-nowrap">
                07.2018 — 11.2018
              </p>
            </div>
            <p className="font-sans font-normal relative shrink-0 text-muted w-full max-xl:text-[15px] xl:text-[16px]">
              Разработал ключевые модули MVP сервиса аренды автомобилей и участвовал в переносе фронтенда с Rails-монолита на Vue.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function NotesPreview() {
  return (
    <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-[28px] max-xl:px-[24px] max-xl:py-[48px] xl:gap-[48px] xl:px-[96px] xl:py-[80px] layout-section" id="notes">
      <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-peach text-[11px] w-full">
        03 / ЗАМЕТКИ И ЭКСПЕРИМЕНТЫ
      </p>
      <div className="font-sans font-medium leading-[0] relative shrink-0 text-ink w-full max-xl:text-[32px] xl:text-[48px]">
        <p className="leading-[1.35] mb-0">
          Думаю вслух.
        </p>
        <p className="leading-[1.35]">
          Проверяю руками.
        </p>
      </div>
      <div className="flex gap-[24px] items-start overflow-clip relative shrink-0 w-full max-xl:flex-col">
        {notes.map(note => <NoteCard key={note.number} note={note} />)}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <ContactCopy>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:px-[24px] max-xl:py-[48px] xl:px-[96px] xl:py-[80px] layout-section" id="contacts">
        <div className="bg-peach flex flex-col items-start overflow-clip relative rounded-[24px] shrink-0 w-full max-xl:gap-[28px] max-xl:p-[24px] xl:gap-[40px] xl:p-[56px]">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep text-[11px] w-full">
            04 / КОНТАКТЫ
          </p>
          <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col xl:gap-[24px]">
            <div className="flex-[1_0_0] font-sans font-medium leading-[0] min-w-px relative text-deep text-[60px]">
              <p className="leading-[1.35] mb-0">
                Есть задача?
              </p>
              <p className="leading-[1.35]">
                Давайте разберёмся.
              </p>
            </div>
            <div className="flex h-[91.356px] items-center justify-center relative shrink-0 w-[284.34px]">
              <div className="-rotate-4 flex-none">
                <div className="font-hand font-normal leading-[0] relative text-deep text-[27px] w-[280px]">
                  <p className="leading-[1.35] mb-0">
                    С хорошего вопроса
                  </p>
                  <p className="leading-[1.35]">
                    начинается хорошая работа.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[16px] xl:text-[19px]">
            Напишите, что нужно запустить или переделать. Обсудим задачу, сроки и с чего стоит начать. Работаю удалённо, беру проекты и открыт к работе в команде.
          </p>
          <div className="flex gap-[16px] overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:items-start xl:items-center max-xl:flex-wrap">
            <Link className="font-sans font-medium leading-[1.35] relative text-deep max-xl:min-w-full max-xl:shrink-0 max-xl:text-[21px] max-xl:w-[min-content] xl:flex-[1_0_0] xl:min-w-px xl:text-[36px] action-link" to="mailto:maaaslanov@gmail.com">
              maaaslanov@gmail.com
            </Link>
            <CopyEmail className="bg-deep flex items-start overflow-clip px-[22px] py-[15px] relative rounded-[50px] shrink-0" />
          </div>
          <div className="flex font-sans font-medium items-start leading-[1.35] overflow-clip relative shrink-0 text-deep w-full whitespace-nowrap max-xl:gap-[16px] max-xl:text-[12px] xl:gap-[32px] xl:text-[15px]">
            <Link className="relative shrink-0 action-link" to="https://t.me/Dmitry_Maslanov">
              Telegram ↗
            </Link>
            <Link className="relative shrink-0 action-link" to="https://www.linkedin.com/in/dmitry-maslanov/">
              LinkedIn ↗
            </Link>
          </div>
          <CopyStatus />
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-[#60473b] text-[10px] w-full">
            @Dmitry_Maslanov · +7 (996) 965-45-07
          </p>
        </div>
      </section>
    </ContactCopy>
  )
}

export default function Home() {
  return (
    <main id="main" className="w-full">
      <Hero />
      <Projects />
      <Experience />
      <NotesPreview />
      <Contact />
    </main>
  )
}
