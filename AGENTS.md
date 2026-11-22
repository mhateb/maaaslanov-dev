# AGENTS.md

## Структура проекта

- Компоненты должны лежать в папке components в формате Название_компонента/index.tsx
- Компонент не должен сильно разрастаться - если компонент огромный, декомпозируй его
- В одном файле не должны объявляться несколько компонентов, только один.
- Каждая страница находится в папке pages/

## Структура кода

- Компоненты должны объявляться в формате 
```js
type ComponentNamePropsType = {
    prop1: number;
    prop2: number;
    prop3: () => {}
}

const ComponentName({ prop1, prop2, prop3 }) => {
    const condition = prop1 === prop2

    return (...)
}

export default ComponentName
```
- Все стили должны быть в tailwind, css и css modules не должно быть

## Проверки

- Перед коммитом запускай 
```bash
npm run typecheck
npm run build
npm run preview
```

## Git
- Коммиты должны писать в формает "feat: text" "fix: text" 