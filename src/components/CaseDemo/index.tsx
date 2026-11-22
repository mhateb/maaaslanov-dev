import Comparison from '../Comparison'
import ComparisonViewport from '../ComparisonViewport'

const CaseDemo = () => {
  return (
    <Comparison compactControls>
      <section className="flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:p-6 xl:px-24 xl:py-10 mx-auto w-full max-w-[1440px] md:max-w-[800px] xl:max-w-[1440px]">
        <div className="bg-mint flex flex-col items-start overflow-clip relative shrink-0 w-full max-xl:gap-5 max-xl:p-4 max-xl:rounded-[18px] xl:gap-8 xl:p-12 xl:rounded-3xl">
          <div className="flex gap-3 items-start overflow-clip relative shrink-0 w-full max-xl:flex-col max-xl:leading-0 max-xl:text-deep">
            <div className="font-sans font-medium relative max-xl:shrink-0 max-xl:text-[28px] max-xl:w-full xl:flex-[1_0_0] xl:leading-0 xl:min-w-px xl:text-deep xl:text-[46px]">
              <p className="leading-tight mb-0">
                Новый экран.
              </p>
              <p className="leading-tight">
                Из готовых блоков.
              </p>
            </div>
            <div className="relative shrink-0 max-xl:font-hand max-xl:font-normal max-xl:text-[23px] max-xl:w-full xl:flex xl:h-[91.597px] xl:items-center xl:justify-center xl:w-[303.566px]">
              <div className="-rotate-3 flex-none">
                <div className="font-hand font-normal leading-0 relative text-deep text-[30px] w-75">
                  <p className="leading-tight mb-0">
                    Меньше рутины.
                  </p>
                  <p className="leading-tight">
                    Больше переиспользования.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ComparisonViewport className="bg-[#eeede8] items-start overflow-clip relative shrink-0 w-full max-xl:h-67.5 max-xl:rounded-xl xl:h-144 xl:rounded-[21.6px]" large={true} />
          <p className="font-sans font-medium leading-tight relative shrink-0 text-deep w-full max-xl:text-[15px] xl:text-[19px]">
            Знакомые блоки можно использовать повторно, а результат сразу проверить в предпросмотре.
          </p>
          <p className="font-sans font-normal leading-tight relative shrink-0 text-[#3b6153] w-full max-xl:text-[10px] xl:text-[12px]">
            Демонстрация того, как устроена сборка экрана.
          </p>
        </div>
      </section>
    </Comparison>
  )
}

export default CaseDemo
