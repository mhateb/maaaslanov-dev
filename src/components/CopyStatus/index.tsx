import { useCopy } from '../ContactCopy/context'

const CopyStatus = () => {
  const { status } = useCopy()
  return <p className="min-h-4 text-[12px] text-deep" role="status">{status}</p>
}

export default CopyStatus
