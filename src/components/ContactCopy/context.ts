import { createContext, useContext } from 'react'

type CopyContextValue = {
  status: string
  setStatus: (status: string) => void
}

export const CopyContext = createContext<CopyContextValue | null>(null)

export const useCopy = () => {
  const value = useContext(CopyContext)
  if (!value) throw new Error('Copy components must be used within ContactCopy')
  return value
}
