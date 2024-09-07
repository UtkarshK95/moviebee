"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiSearch } from "react-icons/hi";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex  mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full h-10 p-5 m-5 rounded-3xl flex-1 bg-gray-100 text-gray-800"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-500 disabled:text-gray-400"
      >
        <HiSearch />
      </button>
    </form>
  );
}
