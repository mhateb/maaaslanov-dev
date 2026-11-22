import { useLanguage } from '../../languageContext'
import Link from '../Link'
import ContactCopy from '../ContactCopy'
import CopyEmail from '../CopyEmail'
import CopyStatus from '../CopyStatus'

const Contact = () => {
  const { t } = useLanguage()
  return (
    <ContactCopy>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:px-6 max-xl:py-12 xl:px-24 xl:py-20 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]" id="contacts">
        <div className="bg-peach flex flex-col items-start overflow-clip relative rounded-3xl shrink-0 w-full max-xl:gap-7 max-xl:p-6 xl:gap-10 xl:p-14">
          <p className="font-sans font-medium leading-[1.35] relative shrink-0 text-deep text-[11px] w-full">{t("04 / КОНТАКТЫ", "04 / CONTACT")}</p>
          <div className="flex items-start overflow-clip relative shrink-0 w-full max-xl:flex-col xl:gap-6">
            <div className="flex-[1_0_0] font-sans font-medium leading-0 min-w-px relative text-deep text-[60px]">
              <p className="leading-[1.35] mb-0">{t("Есть задача?", "Have a project in mind?")}</p>
              <p className="leading-[1.35]">{t("Давайте разберёмся.", "Let's talk.")}</p>
            </div>
            <div className="flex h-[91.356px] items-center justify-center relative shrink-0 w-[284.34px]">
              <div className="-rotate-4 flex-none">
                <div className="font-hand font-normal leading-0 relative text-deep text-[27px] w-70">
                  <p className="leading-[1.35] mb-0">{t("С хорошего вопроса", "Good work starts")}</p>
                  <p className="leading-[1.35]">{t("начинается хорошая работа.", "with a good question.")}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-sans font-normal leading-[1.35] relative shrink-0 text-deep w-full max-xl:text-[16px] xl:text-[19px]">{t("Напишите, что нужно запустить или переделать. Обсудим задачу, сроки и с чего стоит начать. Работаю удалённо, беру проекты и открыт к работе в команде.", "Tell me what you'd like to launch or improve. We can talk through the scope, timing, and where to start. I work remotely and am open to projects and team roles.")}</p>
          <div className="flex gap-4 overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:items-start xl:items-center max-xl:flex-wrap">
            <Link className="font-sans font-medium leading-[1.35] relative text-deep max-xl:min-w-full max-xl:shrink-0 max-xl:text-[21px] max-xl:w-min xl:flex-[1_0_0] xl:min-w-px xl:text-[36px] transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="mailto:maaaslanov@gmail.com">
              maaaslanov@gmail.com
            </Link>
            <CopyEmail className="bg-deep flex items-start overflow-clip px-5.5 py-3.75 relative rounded-[50px] shrink-0" />
          </div>
          <div className="flex font-sans font-medium items-start leading-[1.35] overflow-clip relative shrink-0 text-deep w-full whitespace-nowrap max-xl:gap-4 max-xl:text-[12px] xl:gap-8 xl:text-[15px]">
            <Link className="relative shrink-0 transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="https://t.me/Dmitry_Maslanov">
              Telegram ↗
            </Link>
            <Link className="relative shrink-0 transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="https://www.linkedin.com/in/dmitry-maslanov/">
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

export default Contact
