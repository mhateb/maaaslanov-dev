import { useState, type ReactNode } from 'react'
import { CopyContext } from './context'

type ContactCopyPropsType = {
  children: ReactNode
}

const ContactCopy = ({ children }: ContactCopyPropsType) => {
  const [status, setStatus] = useState('')
  return <CopyContext.Provider value={{ status, setStatus }}>{children}</CopyContext.Provider>
}

export default ContactCopy
