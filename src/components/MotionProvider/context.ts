import { createContext, useContext } from 'react'

type MotionContextValue = {
  reduced: boolean
  toggle: () => void
}

export const MotionContext = createContext<MotionContextValue | null>(null)

export const useMotion = () => {
  const value = useContext(MotionContext)
  if (!value) throw new Error('Motion components must be used within MotionProvider')
  return value
}
