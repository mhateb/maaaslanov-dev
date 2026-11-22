import { useLanguage } from '../../languageContext'
import { useCopy } from '../ContactCopy/context'

type CopyEmailPropsType = {
  className?: string
}

const CopyEmail = ({ className = '' }: CopyEmailPropsType) => {
  const { t } = useLanguage()
  const { setStatus } = useCopy()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('maaaslanov@gmail.com')
      setStatus(t("✓ Email скопирован", "✓ Email copied"))
    } catch {
      setStatus(t("Выделите адрес выше, чтобы скопировать его вручную.", "Select the address above to copy it manually."))
    }
  }

  return <button className={`${className} text-sm font-medium text-ink transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]`} type="button" onClick={copyEmail}>{t("Копировать email", "Copy email")}</button>
}

export default CopyEmail
