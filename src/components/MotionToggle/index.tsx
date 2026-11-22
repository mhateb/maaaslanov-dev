import { useMotion } from '../MotionProvider/context'

const MotionToggle = () => {
  const { reduced, toggle } = useMotion()
  return (
    <button className="shrink-0 text-mint transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" type="button" aria-pressed={reduced} onClick={toggle}>
      {reduced ? '◉' : '○'} Без движения
    </button>
  )
}

export default MotionToggle
