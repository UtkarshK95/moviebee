"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GENRE_LIST } from "@/lib/constants";

export default function GenreStrip() {
  const pathname = usePathname();

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-x-auto">
      <div className="flex gap-2 px-4 py-3 min-w-max">
        {GENRE_LIST.map(({ label, slug }) => {
          const isActive = pathname === `/genre/${slug}`;
          return (
            <Link
              key={slug}
              href={`/genre/${slug}`}
              aria-current={isActive ? "page" : undefined}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                isActive
                  ? "bg-amber-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-amber-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-amber-900/40 dark:hover:text-amber-300"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
