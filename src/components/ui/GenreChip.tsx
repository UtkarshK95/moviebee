import Link from "next/link";

export default function GenreChip({ genre }: { genre: string }) {
  // "Sci-Fi" → "scifi", "Action" → "action"
  const slug = genre.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (
    <Link
      href={`/genre/${slug}`}
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 dark:bg-slate-700 dark:hover:bg-amber-900/60 dark:text-slate-300 dark:hover:text-amber-300 transition-colors duration-150"
    >
      {genre}
    </Link>
  );
}
