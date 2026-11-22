import { useEffect, useState, type ReactNode } from 'react'
import { MotionContext } from './context'

type MotionProviderPropsType = {
  children: ReactNode
}

const MotionProvider = ({ children }: MotionProviderPropsType) => {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    let preference: string | null = null
    try {
      preference = localStorage.getItem('reduced-motion')
    } catch {
      // Fall back to the device preference when storage is unavailable.
    }
    setReduced(preference === null ? matchMedia('(prefers-reduced-motion: reduce)').matches : preference === 'true')
  }, [])

  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced)
  }, [reduced])

  const toggle = () => {
    const next = !reduced
    setReduced(next)
    try {
      localStorage.setItem('reduced-motion', String(next))
    } catch {
      // The preference still applies in this session.
    }
  }

  return <MotionContext.Provider value={{ reduced, toggle }}>{children}</MotionContext.Provider>
}

export default MotionProvider
