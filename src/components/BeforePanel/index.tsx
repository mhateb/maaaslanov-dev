import ComparisonPanel from '../ComparisonPanel'
import MockField from '../MockField'

const BeforePanel = () => {
  return (
    <ComparisonPanel title="С нуля">
      {['Заголовок', 'Механика', 'Оформление'].map(label => <MockField key={label} label={label} value="Вручную" />)}
    </ComparisonPanel>
  )
}

export default BeforePanel
