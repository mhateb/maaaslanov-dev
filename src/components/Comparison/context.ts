import { createContext, useContext } from 'react'

export type ComparisonContextValue = {
  position: number
  setPosition: (position: number) => void
  previewId: string
  compactControls: boolean
}

export const ComparisonContext = createContext<ComparisonContextValue | null>(null)

export const useComparison = () => {
  const value = useContext(ComparisonContext)
  if (!value) throw new Error('Comparison components must be used within Comparison')
  return value
}
