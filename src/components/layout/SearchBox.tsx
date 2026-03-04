"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiSearch } from "react-icons/hi";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = search.trim();
    if (!trimmed) return;
    router.push(`/search/${encodeURIComponent(trimmed)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search movies and shows..."
        aria-label="Search movies and shows"
        className="w-full h-10 p-5 m-5 rounded-3xl flex-1 bg-gray-100 dark:bg-slate-700 dark:text-white text-gray-800 placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors duration-150"
      />
      <button
        disabled={!search.trim()}
        type="submit"
        aria-label="Submit search"
        className="text-amber-500 disabled:text-gray-400 transition-colors duration-150"
      >
        <HiSearch className="text-xl" />
      </button>
    </form>
  );
}
