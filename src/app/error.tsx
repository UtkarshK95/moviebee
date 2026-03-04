"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center"
      aria-live="assertive"
    >
      <p className="text-5xl mb-4">⚠️</p>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Something went wrong
      </h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm transition-colors duration-150"
      >
        Try again
      </button>
    </main>
  );
}
