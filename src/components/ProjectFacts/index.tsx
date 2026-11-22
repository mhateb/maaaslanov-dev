type ProjectFactsPropsType = {
  facts: readonly string[]
}

const factLabels = ['Задача', 'Мой вклад', 'Результат']

const ProjectFacts = ({ facts }: ProjectFactsPropsType) => {
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
