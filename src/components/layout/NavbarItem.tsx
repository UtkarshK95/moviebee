"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }: { title: string; param: string }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const isActive = genre === param || (!genre && param === "fetchTrending");

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-700 font-semibold p-2 transition-colors duration-150 ${
          isActive
            ? "underline underline-offset-8 decoration-4 decoration-amber-700 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
        aria-current={isActive ? "page" : undefined}
      >
        {title}
      </Link>
    </div>
  );
}
