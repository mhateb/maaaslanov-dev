import { useLanguage } from '../../languageContext'
import ComparisonPanel from '../ComparisonPanel'
import MockField from '../MockField'

const BeforePanel = () => {
  const { t } = useLanguage()
  return (
    <ComparisonPanel title={t("С нуля", "From scratch")}>
      {[t("Заголовок", "Title"), t("Механика", "Mechanics"), t("Оформление", "Appearance")].map(label => <MockField key={label} label={label} value={t("Вручную", "Manually")} />)}
    </ComparisonPanel>
  )
}

export default BeforePanel
