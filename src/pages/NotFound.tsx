import Link from '../components/Link'

const NotFound = () => {
  return (
    <main id="main" className="mx-auto w-full max-w-[1440px] px-6 py-20 md:max-w-[800px] xl:max-w-[1440px] xl:px-24">
      <h1 className="mb-6 text-4xl font-medium">Страница не найдена</h1>
      <Link className="inline-flex min-h-10.5 shrink-0 items-center justify-center rounded-full bg-mint px-4.5 py-3 text-sm leading-[1.3] font-medium text-deep transition-[filter,opacity] duration-150 hover:underline hover:underline-offset-[3px] hover:brightness-[1.12]" to="/">На главную</Link>
    </main>
  )
}

export default NotFound
