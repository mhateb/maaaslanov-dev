import { useId, useState, type ReactNode } from 'react'
import { ComparisonContext } from './context'

type ComparisonPropsType = {
  children: ReactNode
  compactControls?: boolean
}

const Comparison = ({ children, compactControls = false }: ComparisonPropsType) => {
  const [position, setPosition] = useState(50)
  const previewId = useId()
  return (
    <ComparisonContext.Provider value={{ position, setPosition, previewId, compactControls }}>
      {children}
    </ComparisonContext.Provider>
  )
}

export default Comparison
