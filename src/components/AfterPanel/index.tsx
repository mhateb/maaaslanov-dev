import { useLanguage } from '../../languageContext'
import ComparisonPanel from '../ComparisonPanel'
import MockField from '../MockField'

type AfterPanelPropsType = {
  onPreview: () => void
}

const AfterPanel = ({ onPreview }: AfterPanelPropsType) => {
  const { t } = useLanguage()
  return (
    <ComparisonPanel after title={t("Из блоков", "From blocks")}>
      <p className="shrink-0 text-[9px] leading-[1.3] text-[#455e56] xl:text-xs">{t("UI-блоки и AI.", "UI blocks and AI.")}</p>
      <MockField label={t("Готовый блок", "Reusable block")} value={t("UI-блок", "UI block")} />
      <button className="inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full bg-deep px-4.5 py-3 text-sm leading-[1.3] font-medium whitespace-nowrap text-ink transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" type="button" onClick={onPreview}>{t("Отправить ↗", "Submit ↗")}</button>
    </ComparisonPanel>
  )
}

export default AfterPanel
