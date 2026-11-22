import type { Translate } from '../../language'

type ScreenBlock =
  | { type: 'header'; title: string }
  | { type: 'balance'; value: number }
  | { type: 'offer'; title: string; detail: string }

export const getInitialBlocks = (t: Translate): ScreenBlock[] => [
  { type: 'header', title: t("Мои бонусы", "My rewards") },
  { type: 'balance', value: 450 },
  { type: 'offer', title: t("Кешбэк 10%", "10% cashback"), detail: t("На любимую категорию", "In your favorite category") },
]

const fields = {
  header: { title: 'string' },
  balance: { value: 'number' },
  offer: { title: 'string', detail: 'string' },
} as const

export const parseScreen = (source: string, t: Translate): { blocks: ScreenBlock[] } | { error: string } => {
  let value: unknown
  try {
    value = JSON.parse(source)
  } catch {
    return { error: t("Некорректный JSON. Проверьте кавычки, запятые и скобки.", "Invalid JSON. Check quotation marks, commas, and brackets.") }
  }

  if (!Array.isArray(value)) return { error: t("JSON должен содержать массив блоков.", "The JSON must contain an array of blocks.") }

  for (const [index, block] of value.entries()) {
    const label = `${t("Блок ", "Block ")}${index + 1}`
    if (!block || typeof block !== 'object' || Array.isArray(block)) {
      return { error: `${label}${t(" должен быть объектом.", " must be an object.")}` }
    }

    const { type } = block
    if (type !== 'header' && type !== 'balance' && type !== 'offer') {
      return { error: `${label}${t(": допустимые типы — header, balance и offer.", ": supported types are header, balance, and offer.")}` }
    }

    const allowed = fields[type as keyof typeof fields]
    const extra = Object.keys(block).find(key => key !== 'type' && !Object.hasOwn(allowed, key))
    if (extra !== undefined) {
      return { error: t(`${label}: неизвестное поле «${extra}».`, `${label}: unknown field “${extra}”.`) }
    }

    for (const [key, expected] of Object.entries(allowed)) {
      if (typeof block[key] !== expected || (expected === 'number' && !Number.isFinite(block[key]))) {
        return {
          error: t(
            `${label}: поле «${key}» должно содержать ${expected === 'number' ? 'число' : 'строку'}.`,
            `${label}: field “${key}” must contain ${expected === 'number' ? 'a number' : 'a string'}.`,
          ),
        }
      }
    }
  }

  return { blocks: value }
}
