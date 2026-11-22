import { useLanguage } from '../../languageContext'
import { useId, useState } from 'react'
import { useMotion } from '../MotionProvider/context'

const actionClass = 'cursor-pointer rounded-full px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peach'

const InterfaceDemo = () => {
  const { t } = useLanguage()
  const versions = [t("До", "Before"), t("После", "After")] as const
  const originalSlot = t("Сегодня, 14:00–16:00", "Today, 14:00–16:00")
  const slots = [t("Завтра, 10:00–12:00", "Tomorrow, 10:00–12:00"), t("Завтра, 15:00–17:00", "Tomorrow, 15:00–17:00"), t("Завтра, 19:00–21:00", "Tomorrow, 19:00–21:00")]
  const id = useId()
  const { reduced } = useMotion()
  const [version, setVersion] = useState<string>(t("После", "After"))
  const [step, setStep] = useState<'order' | 'menu' | 'slots' | 'receipt'>('order')
  const [slot, setSlot] = useState(originalSlot)
  const [previousSlot, setPreviousSlot] = useState<string | null>(null)
  const [selection, setSelection] = useState(slots[2])
  const improved = version === t("После", "After")
  const showConfirmation = improved && previousSlot !== null && step === 'order'

  return (
    <section className="flex w-full min-w-0 flex-col gap-4 rounded-[20px] bg-surface p-4 sm:p-6 xl:w-auto xl:flex-1" aria-labelledby={`${id}-title`}>
      <p className="text-xs font-medium text-mint">{t("01 / КАК Я РАБОТАЮ", "01 / HOW I WORK")}</p>
      <h2 id={`${id}-title`} className="text-xl leading-tight font-medium text-ink sm:text-[28px]">{t("Перенести доставку", "Reschedule a delivery")}</h2>
      <p className="text-sm text-muted">{t("Выберите новое время и сравните, как два интерфейса показывают результат.", "Pick a new time and compare how the two interfaces show the result.")}</p>

      <div className="flex flex-col gap-4 rounded-2xl bg-canvas p-4">
        <fieldset className="grid grid-cols-2 gap-1 rounded-full bg-surface p-1">
          <legend className="sr-only">{t("Версия интерфейса доставки", "Delivery interface version")}</legend>
          {versions.map(option => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name={`${id}-version`}
                checked={version === option}
                onChange={() => {
                  setVersion(option)
                  setStep('order')
                  setSlot(originalSlot)
                  setPreviousSlot(null)
                  setSelection(slots[2])
                }}
                className="peer sr-only"
              />
              <span className="block rounded-full px-3 py-2 text-center text-sm font-medium text-muted peer-checked:bg-mint peer-checked:text-deep peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-peach">
                {option}
              </span>
            </label>
          ))}
        </fieldset>

        <div className="flex flex-col gap-4 rounded-xl border border-muted/20 bg-surface p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-medium text-ink">{t("Заказ № 4826", "Order #4826")}</h3>
            {!improved && (step === 'order' || step === 'menu') && (
              <button
                type="button"
                aria-label={t("Действия с заказом", "Order actions")}
                aria-expanded={step === 'menu'}
                onClick={() => setStep(step === 'menu' ? 'order' : 'menu')}
                className={`${actionClass} bg-canvas text-ink`}
              >
                ···
              </button>
            )}
          </div>
          {step === 'receipt' ? (
            <div className="flex flex-col items-start gap-3">
              <p role="status" className="text-sm text-ink">{t("Изменения сохранены.", "Changes saved.")}</p>
              <button type="button" onClick={() => setStep('order')} className={`${actionClass} bg-canvas text-ink`}>{t("Вернуться к заказу", "Back to order")}</button>
            </div>
          ) : (
            <>
              <div className={`flex flex-wrap items-center justify-between gap-3 rounded-lg bg-canvas p-3 ${showConfirmation ? 'ring-1 ring-mint/50' : ''}`}>
                <div>
                  <p className="text-xs text-muted">{t("Доставка", "Delivery")}</p>
                  <p
                    key={slot}
                    className={`mt-1 font-medium ${showConfirmation ? 'text-lg text-mint sm:text-xl' : 'text-base text-ink'} ${showConfirmation && !reduced ? 'motion-safe:animate-[pulse_600ms_ease-in-out_1]' : ''}`}
                  >
                    {slot}
                  </p>
                  {showConfirmation && <p className="mt-1 text-xs text-muted">{t("Было: ", "Previously: ")}{previousSlot}</p>}
                </div>
                {improved && step === 'order' && (
                  <button type="button" onClick={() => setStep('slots')} className={`${actionClass} bg-mint text-deep`}>{t("Перенести", "Reschedule")}</button>
                )}
              </div>
              {step === 'menu' && (
                <button type="button" onClick={() => setStep('slots')} className={`${actionClass} self-start bg-canvas text-ink`}>{t("Изменить время доставки", "Change delivery time")}</button>
              )}
              {step === 'slots' && (
                <div className="flex flex-col gap-3">
                  <fieldset className="flex flex-col gap-2">
                    <legend className="mb-2 text-sm font-medium text-ink">{t("Выберите новое время", "Choose a new time")}</legend>
                    {slots.map(option => (
                      <label key={option} className="flex cursor-pointer items-center gap-2 rounded-lg border border-muted/25 px-3 py-2.5 text-sm text-ink has-checked:border-mint has-checked:bg-canvas">
                        <input type="radio" name={`${id}-slot`} checked={selection === option} onChange={() => setSelection(option)} className="accent-mint" />
                        {option}
                      </label>
                    ))}
                  </fieldset>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" disabled={selection === slot} onClick={() => {
                      setPreviousSlot(slot)
                      setSlot(selection)
                      setStep(improved ? 'order' : 'receipt')
                    }} className={`${actionClass} bg-mint text-deep disabled:cursor-default disabled:opacity-50`}>{t("Подтвердить перенос", "Confirm change")}</button>
                    <button type="button" onClick={() => setStep('order')} className={`${actionClass} text-muted`}>{t("Назад", "Back")}</button>
                  </div>
                </div>
              )}
              {showConfirmation && (
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <p role="status" className="text-sm text-mint">{t("✓ Доставка перенесена", "✓ Delivery rescheduled")}</p>
                  <button type="button" onClick={() => {
                    setSlot(previousSlot)
                    setPreviousSlot(null)
                  }} className={`${actionClass} text-ink underline underline-offset-4`}>{t("Отменить перенос", "Undo change")}</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default InterfaceDemo
