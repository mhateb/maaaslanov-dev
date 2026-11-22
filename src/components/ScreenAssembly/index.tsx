import { useLanguage } from '../../languageContext'
import { useId, useState } from 'react'
import { getInitialBlocks, parseScreen } from './config'

const editorText = 'font-mono text-xs leading-relaxed whitespace-pre-wrap wrap-anywhere'

const ScreenAssembly = () => {
  const { t } = useLanguage()
  const initialBlocks = getInitialBlocks(t)
  const initialJson = JSON.stringify(initialBlocks, null, 2)
  const errorId = useId()
  const [source, setSource] = useState(initialJson)
  const [blocks, setBlocks] = useState(initialBlocks)
  const [error, setError] = useState('')
  const updateSource = (next: string) => {
    const result = parseScreen(next, t)
    setSource(next)
    setError('error' in result ? result.error : '')
    if ('blocks' in result) setBlocks(result.blocks)
  }

  const jsonTokens = source.split(/("(?:\\.|[^"\\])*"|-?\d+(?:\.\d+)?(?:e[+-]?\d+)?|[{}\[\],:])/gi)

  return (
    <figure className="w-full min-w-0 rounded-2xl bg-mint p-4 text-deep sm:p-6">
      <figcaption className="mb-4">
        <h3 className="text-2xl font-medium leading-tight sm:text-3xl">{t("От макета до запуска", "From design to launch")}</h3>
        <p className="mt-1 text-sm text-deep/75">{t("Конфигурация задаёт состав и порядок блоков.", "The configuration defines which blocks appear and in what order.")}</p>
      </figcaption>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="min-w-0 rounded-xl bg-canvas p-3 text-ink sm:p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 border-b border-muted/25 pb-2">
            <p className="font-mono text-xs text-mint">screen.json</p>
            <button
              type="button"
              onClick={() => updateSource(initialJson)}
              className="text-xs text-muted underline underline-offset-4 hover:text-ink"
            >{t("Сбросить пример", "Reset example")}</button>
          </div>
          <div className={`relative mt-2 rounded-lg border p-2 focus-within:ring-1 ${error ? 'border-red-400 ring-red-400' : 'border-transparent ring-mint/60'}`}>
            <pre aria-hidden="true" className={editorText}>
            <code>
              {jsonTokens.map((token, index) => {
                if (!token) return null
                if (!token.trim()) return token

                const isKey = token.startsWith('"') && jsonTokens[index + 2] === ':'
                const color = isKey
                  ? 'text-mint'
                  : token.startsWith('"')
                    ? 'text-peach'
                    : /^-?\d/.test(token)
                      ? 'text-lilac'
                      : 'text-muted'

                return <span key={index} className={color}>{token}</span>
              })}
            </code>
            {'\u200b'}
            </pre>
            <textarea
              aria-label={t("Конфигурация экрана в JSON", "Screen configuration in JSON")}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className={`absolute inset-0 size-full resize-none overflow-hidden bg-transparent p-2 text-transparent caret-ink outline-none selection:bg-mint/25 forced-colors:text-[CanvasText] ${editorText}`}
              spellCheck={false}
              autoCapitalize="off"
              value={source}
              onChange={event => updateSource(event.target.value)}
            />
          </div>
          <p id={errorId} role="status" className="mt-2 break-words text-xs text-red-300">{error}</p>
        </div>
        <div className="min-w-0 rounded-xl bg-[#f7faf7] p-3 sm:p-4">
          <p className="border-b border-deep/15 pb-2 text-xs font-medium text-deep/75">{t("Предпросмотр экрана", "Screen preview")}</p>
          <div className="mt-3 grid gap-2">
            {blocks.map((block, index) => {
              switch (block.type) {
                case 'header':
                  return <h4 key={index} className="wrap-anywhere text-lg font-semibold">{block.title}</h4>
                case 'balance':
                  return (
                    <div key={index} className="rounded-lg bg-mint/55 px-3 py-2">
                      <p className="text-xs text-deep/75">{t("Баланс", "Balance")}</p>
                      <p className="text-xl font-semibold tabular-nums">{block.value}{t(" баллов", " points")}</p>
                    </div>
                  )
                case 'offer':
                  return (
                    <div key={index} className="rounded-lg border border-deep/15 px-3 py-2">
                      <p className="wrap-anywhere text-sm font-medium">{block.title}</p>
                      <p className="wrap-anywhere text-xs text-deep/75">{block.detail}</p>
                    </div>
                  )
              }
            })}
          </div>
        </div>
      </div>
    </figure>
  )
}

export default ScreenAssembly
