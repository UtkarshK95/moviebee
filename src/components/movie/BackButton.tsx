"use client";

import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-amber-500 dark:text-slate-400 dark:hover:text-amber-400 transition-colors duration-150"
    >
      <MdArrowBack className="text-lg" aria-hidden="true" />
      Back
    </button>
  );
}
