import { useLanguage } from '../../languageContext'
type ProjectFactsPropsType = {
  facts: readonly string[]
}

const ProjectFacts = ({ facts }: ProjectFactsPropsType) => {
  const { t } = useLanguage()
  const factLabels = [t("Задача", "Challenge"), t("Мой вклад", "My contribution"), t("Результат", "Outcome")]
  return (
    <dl className="grid gap-6 leading-[1.3]">
      {facts.map((fact, index) => (
        <div key={factLabels[index]} className="grid gap-1.5">
            <dt className="text-[10px] font-medium text-mint uppercase">{factLabels[index]}</dt>
            <dd className="text-sm text-muted xl:text-[15px]">{fact}</dd>
        </div>
      ))}
    </dl>
  )
}

export default ProjectFacts
