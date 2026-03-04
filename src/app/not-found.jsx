import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-7xl font-extrabold text-amber-500 tracking-tight">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-sm">
        We couldn&apos;t find the page you were looking for. It may have moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm transition-colors duration-150"
      >
        Back to home
      </Link>
    </main>
  );
}
