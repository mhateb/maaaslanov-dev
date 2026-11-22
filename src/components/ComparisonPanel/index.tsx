import { useLanguage } from '../../languageContext'
import type { ReactNode } from 'react'

type ComparisonPanelPropsType = {
  after?: boolean
  title: string
  children: ReactNode
}

const ComparisonPanel = ({ after = false, title, children }: ComparisonPanelPropsType) => {
  const { t } = useLanguage()
  return (
    <div className={`flex h-full flex-col items-start gap-2.5 overflow-hidden px-3 py-4.5 xl:gap-4 xl:px-5.5 ${after ? 'bg-[#d7efe3]' : 'bg-[#e6e6e1]'}`}>
      <p className={`shrink-0 rounded-full px-2.5 py-1.25 text-sm leading-[1.3] font-medium ${after ? 'bg-deep text-mint' : 'bg-[#d2d6d3] text-[#48585d]'}`}>
        {after ? t("ПОСЛЕ", "AFTER") : t("ДО", "BEFORE")}
      </p>
      <p className="text-sm leading-[1.3] font-medium text-deep xl:text-[21px]">{title}</p>
      {children}
    </div>
  )
}

export default ComparisonPanel
