import ComparisonPanel from '../ComparisonPanel'
import MockField from '../MockField'

type AfterPanelPropsType = {
  onPreview: () => void
}

const AfterPanel = ({ onPreview }: AfterPanelPropsType) => {
  return (
    <ComparisonPanel after title="Из блоков">
      <p className="shrink-0 text-[9px] leading-[1.3] text-[#455e56] xl:text-xs">UI-блоки и AI.</p>
      <MockField label="Готовый блок" value="UI-блок" />
      <button className="inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full bg-deep px-4.5 py-3 text-sm leading-[1.3] font-medium whitespace-nowrap text-ink transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" type="button" onClick={onPreview}>Отправить ↗</button>
    </ComparisonPanel>
  )
}

export default AfterPanel
