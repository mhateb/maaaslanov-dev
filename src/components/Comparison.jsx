import { createContext, useContext, useId, useRef, useState } from 'react'
import { AfterPanel, BeforePanel } from './ComparisonPanels'

const ComparisonContext = createContext(null)

export function Comparison({ children, compactControls = false }) {
  const [position, setPosition] = useState(50)
  const previewId = useId()
  return (
    <ComparisonContext.Provider value={{ position, setPosition, previewId, compactControls }}>
      {children}
    </ComparisonContext.Provider>
  )
}

export function ComparisonViewport({ className, large }) {
  const { position, setPosition, previewId, compactControls } = useContext(ComparisonContext)
  const dialog = useRef(null)
  const viewport = useRef(null)
  const headingId = useId()
  const dragging = useRef(false)

  function moveDivider(event) {
    const { left, width } = viewport.current.getBoundingClientRect()
    const next = Math.round((event.clientX - left) / width * 100)
    setPosition(Math.max(0, Math.min(next, 100)))
  }

  return (
    <>
      <div
        className={`${className} comparison ${large ? 'comparison-large' : ''}`}
        id={previewId}
        ref={viewport}
        style={{ '--split': `${position}%` }}
      >
        <div className="comparison-side comparison-before" inert={position === 0}><BeforePanel /></div>
        <div className="comparison-side comparison-after" inert={position > 85}>
          <AfterPanel onPreview={() => dialog.current.showModal()} />
        </div>
        {position > 0 && position < 100 && <div className="comparison-divider" />}
        <input
          type="range"
          className="comparison-handle"
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
        <span className="comparison-knob" aria-hidden="true">‹ ›</span>
      </div>
      {compactControls && <ComparisonControls />}
      <dialog ref={dialog} aria-labelledby={headingId} className="preview-dialog">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id={headingId} className="text-2xl font-medium">Предпросмотр экрана</h2>
          <form method="dialog"><button className="pill bg-deep text-ink">Закрыть</button></form>
        </div>
        <p className="mt-4">Выберите готовые блоки и проверьте, как выглядит экран. Предпросмотр обновляется прямо в админке.</p>
      </dialog>
    </>
  )
}

export function ComparisonControls() {
  const { position, setPosition, previewId } = useContext(ComparisonContext)
  return (
    <div className="flex w-full items-center gap-2.5">
      <button aria-controls={previewId} aria-pressed={position === 100} className="pill bg-canvas text-ink" type="button" onClick={() => setPosition(100)}>До</button>
      <input aria-label="Сравнить версии" aria-controls={previewId} aria-valuetext={`${100 - position}% после`} className="comparison-range min-w-0 flex-1" type="range" value={100 - position} onChange={(event) => setPosition(100 - Number(event.target.value))} />
      <button aria-controls={previewId} aria-pressed={position === 0} className="pill bg-mint text-deep" type="button" onClick={() => setPosition(0)}>После</button>
    </div>
  )
}
