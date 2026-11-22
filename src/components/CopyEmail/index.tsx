import { useCopy } from '../ContactCopy/context'

type CopyEmailPropsType = {
  className?: string
}

const CopyEmail = ({ className = '' }: CopyEmailPropsType) => {
  const { setStatus } = useCopy()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('maaaslanov@gmail.com')
      setStatus('✓ Email скопирован')
    } catch {
      setStatus('Выделите адрес выше, чтобы скопировать его вручную.')
    }
  }

  return <button className={`${className} text-sm font-medium text-ink transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]`} type="button" onClick={copyEmail}>Копировать email</button>
}

export default CopyEmail
