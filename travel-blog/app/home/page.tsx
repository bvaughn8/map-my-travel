import Link from 'next/link'

export default function Welcome() {
  return (
    <div className="grid grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div>
          <h2 className="text-6xl text-center">Welcome to Our Travel Blog</h2>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
          <Link className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-lg py-5 px-8" href="/trips/create">
            Plan a trip
          </Link>
          <Link className="rounded-full border border-solid border-black/[.5] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-lg py-5 px-8" href="/trips/view">
            View a trip
          </Link>
        </div>
      </main>
    </div>
  )
}
