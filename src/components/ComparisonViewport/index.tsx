import { useId, useRef, type CSSProperties, type PointerEvent } from 'react'
import AfterPanel from '../AfterPanel'
import BeforePanel from '../BeforePanel'
import ComparisonControls from '../ComparisonControls'
import { useComparison } from '../Comparison/context'

type ComparisonViewportPropsType = {
  className?: string
  large?: boolean
}

const ComparisonViewport = ({ className = '', large = false }: ComparisonViewportPropsType) => {
  const { position, setPosition, previewId, compactControls } = useComparison()
  const dialog = useRef<HTMLDialogElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const headingId = useId()
  const dragging = useRef(false)

  const moveDivider = (event: PointerEvent<HTMLInputElement>) => {
    if (!viewport.current) return
    const { left, width } = viewport.current.getBoundingClientRect()
    const next = Math.round((event.clientX - left) / width * 100)
    setPosition(Math.max(0, Math.min(next, 100)))
  }

  return (
    <>
      <div
        className={`${className} isolate grid items-stretch [--knob-size:44px] [container-type:inline-size] [grid-template-columns:minmax(0,var(--split))_minmax(0,1fr)] max-[30rem]:[--knob-size:36px] ${large ? 'xl:[--knob-size:64px]' : ''}`}
        id={previewId}
        ref={viewport}
        style={{ '--split': `${position}%` } as CSSProperties}
      >
        <div className={`min-w-0 h-full overflow-hidden [&>div]:min-w-[min(140px,48cqw)] ${large ? 'xl:[&>div]:min-w-0 xl:[&>div]:zoom-[1.8]' : ''}`} inert={position === 0}><BeforePanel /></div>
        <div className={`min-w-0 h-full overflow-hidden [&>div]:min-w-[min(140px,48cqw)] ${large ? 'xl:[&>div]:min-w-0 xl:[&>div]:zoom-[1.8]' : ''}`} inert={position > 85}>
          <AfterPanel onPreview={() => dialog.current?.showModal()} />
        </div>
        {position > 0 && position < 100 && <div className="pointer-events-none absolute inset-y-0 left-[var(--split)] w-0.5 -translate-x-1/2 bg-deep" />}
        <input
          type="range"
          className="absolute top-1/2 z-[1] size-[var(--knob-size)] -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none rounded-full opacity-0 left-[clamp(calc(var(--knob-size)/2),var(--split),calc(100%-var(--knob-size)/2))] focus-visible:[&+span]:outline-[3px] focus-visible:[&+span]:outline-offset-3 focus-visible:[&+span]:outline-deep"
          aria-controls={previewId}
          aria-label="Граница сравнения до и после"
          aria-valuetext={`${position}% до, ${100 - position}% после`}
          value={position}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault()
              setPosition(Math.min(100, Math.max(0, position + (event.key === 'ArrowLeft' ? -5 : 5))))
            }
          }}
          onChange={(event) => setPosition(Number(event.target.value))}
          onPointerDown={(event) => {
            event.preventDefault()
            event.currentTarget.focus()
            dragging.current = true
            event.currentTarget.setPointerCapture(event.pointerId)
            moveDivider(event)
          }}
          onPointerMove={(event) => { if (dragging.current) moveDivider(event) }}
          onLostPointerCapture={() => { dragging.current = false }}
        />
        <span className="pointer-events-none absolute top-1/2 grid size-[var(--knob-size)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-deep bg-peach text-xl font-medium text-deep left-[clamp(calc(var(--knob-size)/2),var(--split),calc(100%-var(--knob-size)/2))]" aria-hidden="true">‹ ›</span>
      </div>
      {compactControls && <ComparisonControls />}
      <dialog ref={dialog} aria-labelledby={headingId} className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-2xl bg-mint p-6 text-deep [&::backdrop]:bg-[rgb(17_29_37/75%)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id={headingId} className="text-2xl font-medium">Предпросмотр экрана</h2>
          <form method="dialog"><button className="inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full bg-deep px-4.5 py-3 text-sm leading-[1.3] font-medium text-ink transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]">Закрыть</button></form>
        </div>
        <p className="mt-4">Выберите готовые блоки и проверьте, как выглядит экран. Предпросмотр обновляется прямо в админке.</p>
      </dialog>
    </>
  )
}

export default ComparisonViewport
