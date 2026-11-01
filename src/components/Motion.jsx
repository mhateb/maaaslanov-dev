import { createContext, useContext, useEffect, useState } from 'react'

const MotionContext = createContext(null)

export function MotionProvider({ children }) {
  const [reduced, setReduced] = useState(() => {
    try {
      const preference = localStorage.getItem('reduced-motion')
      if (preference !== null) return preference === 'true'
    } catch {
      // Fall back to the device preference when storage is unavailable.
    }
    return matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced)
  }, [reduced])

  function toggle() {
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

export function MotionToggle() {
  const { reduced, toggle } = useContext(MotionContext)
  return (
    <button className="action-link shrink-0 text-mint" type="button" aria-pressed={reduced} onClick={toggle}>
      {reduced ? '◉' : '○'} Без движения
    </button>
  )
}
