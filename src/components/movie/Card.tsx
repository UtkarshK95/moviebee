import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import RatingBadge from "@/components/ui/RatingBadge";
import GenreChip from "@/components/ui/GenreChip";
import WatchlistButton from "./WatchlistButton";
import type { Movie } from "@/types/movie";

export default function Card({ result }: { result: Movie }) {
  const genres = result.genre?.slice(0, 2) ?? [];
  const typeVariant = result.type === "series" ? "series" : "movie";
  const typeLabel = result.type === "series" ? "Series" : "Movie";

  return (
    <article className="group relative cursor-pointer sm:p-3 sm:hover:shadow-xl sm:shadow-md rounded-xl sm:border sm:border-slate-200 dark:sm:border-slate-700 sm:m-2 transition-all duration-200 p-4 bg-white dark:bg-slate-800">
      <Link href={`/movie/${result.id}`} aria-label={result.title}>
        <div className="relative overflow-hidden sm:rounded-t-lg">
          <Image
            src={result.posterUrl}
            width={500}
            height={300}
            className="w-full object-cover group-hover:opacity-90 transition-opacity duration-200"
            style={{ height: "300px" }}
            alt={`${result.title} poster`}
          />
          <div className="absolute top-2 left-2">
            <Badge variant={typeVariant}>{typeLabel}</Badge>
          </div>
        </div>

        <div className="p-2 pt-3 space-y-1">
          <h2 className="truncate text-base font-bold text-slate-900 dark:text-white">
            {result.title}
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {result.releaseDate}
            </span>
            <RatingBadge rating={result.rating} />
          </div>
          <p className="line-clamp-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
            {result.overview}
          </p>
        </div>
      </Link>

      {/* Genre chips are outside the movie link to avoid nested <a> tags */}
      {genres.length > 0 && (
        <div className="flex flex-wrap gap-1 px-2 pb-2">
          {genres.map((g) => (
            <GenreChip key={g} genre={g} />
          ))}
        </div>
      )}

      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <WatchlistButton id={result.id} title={result.title} />
      </div>
    </article>
  );
}
