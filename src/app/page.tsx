import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-100 via-zinc-50 to-white font-sans dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <main className="flex min-h-[600px] w-full max-w-4xl flex-col gap-12 rounded-3xl border border-zinc-200 bg-white/90 p-12 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-black/70">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <span className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
            トップページ
          </span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
            Next.js × Tailwind CSS スターター
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            ここがアプリのトップページです。Tailwind CSS のユーティリティクラスを使って自由にデザインを拡張してください。
          </p>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900/40 sm:flex-row">
          <Image
            className="mx-auto h-16 w-28 dark:invert sm:mx-0"
            src="/next.svg"
            alt="Next.js logo"
            width={112}
            height={64}
            priority
          />
          <div className="flex flex-1 flex-col gap-2 text-center sm:text-left">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Tailwind で素早くスタイル
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              コンポーネントのレイアウトや配色は Tailwind の実用的なクラスでコントロールできます。`src/app/page.tsx` を編集して、トップページ固有の UI を作ってみてください。
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            className="group flex h-28 flex-col justify-between rounded-2xl border border-zinc-200 bg-white px-6 py-4 transition hover:border-zinc-900 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-zinc-50"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Templates</p>
            <p className="text-lg font-semibold text-zinc-900 transition group-hover:text-black dark:text-zinc-50">
              デザインのヒントを探す →
            </p>
          </a>
          <a
            className="group flex h-28 flex-col justify-between rounded-2xl border border-zinc-200 bg-white px-6 py-4 transition hover:border-zinc-900 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-zinc-50"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Learning Center</p>
            <p className="text-lg font-semibold text-zinc-900 transition group-hover:text-black dark:text-zinc-50">
              Next.js を深く学ぶ →
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
