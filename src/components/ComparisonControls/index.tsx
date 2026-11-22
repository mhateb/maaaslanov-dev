import { useComparison } from '../Comparison/context'

const rangeClassName = 'h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-[20px] [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-deep [&::-moz-range-thumb]:bg-peach [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-deep [&::-webkit-slider-thumb]:bg-peach'

const ComparisonControls = () => {
  const { position, setPosition, previewId, compactControls } = useComparison()
  return (
    <div className="flex w-full items-center gap-2.5">
      <button aria-controls={previewId} aria-pressed={position === 100} className="inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full bg-canvas px-4.5 py-3 text-sm leading-[1.3] font-medium text-ink transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" type="button" onClick={() => setPosition(100)}>До</button>
      <input aria-label="Сравнить версии" aria-controls={previewId} aria-valuetext={`${100 - position}% после`} className={`${rangeClassName} ${compactControls ? 'bg-deep' : 'bg-mint'}`} type="range" value={100 - position} onChange={(event) => setPosition(100 - Number(event.target.value))} />
      <button aria-controls={previewId} aria-pressed={position === 0} className="inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full bg-mint px-4.5 py-3 text-sm leading-[1.3] font-medium text-deep transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" type="button" onClick={() => setPosition(0)}>После</button>
    </div>
  )
}

export default ComparisonControls
