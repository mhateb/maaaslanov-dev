import { createContext, useContext, useState } from 'react'

const CopyContext = createContext(null)

export function ContactCopy({ children }) {
  const [status, setStatus] = useState('')
  return <CopyContext.Provider value={{ status, setStatus }}>{children}</CopyContext.Provider>
}

export function CopyEmail({ className }) {
  const { setStatus } = useContext(CopyContext)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('maaaslanov@gmail.com')
      setStatus('✓ Email скопирован')
    } catch {
      setStatus('Выделите адрес выше, чтобы скопировать его вручную.')
    }
  }

  return <button className={`${className} action-link text-sm font-medium text-ink`} type="button" onClick={copyEmail}>Копировать email</button>
}

export function CopyStatus() {
  const { status } = useContext(CopyContext)
  return <p className="min-h-[16px] text-[12px] text-deep" role="status">{status}</p>
}
