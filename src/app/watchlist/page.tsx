"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useWatchlist } from "@/context/WatchlistContext";
import Results from "@/components/movie/Results";
import SkeletonCard from "@/components/ui/SkeletonCard";
import type { Movie } from "@/types/movie";

export default function WatchlistPage() {
  const { watchlist } = useWatchlist();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(watchlist.length > 0);

  useEffect(() => {
    if (watchlist.length === 0) {
      return;
    }

    setLoading(true);
    Promise.all(
      watchlist.map((id) =>
        fetch(`/api/movie/${id}`).then((r) => r.json())
      )
    ).then((results: (Movie & { error?: string })[]) => {
      setMovies(results.filter((m) => !m.error));
      setLoading(false);
    });
  }, [watchlist]);

  if (loading) {
    return (
      <main className="max-w-screen-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          My Watchlist
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    );
  }

  if (watchlist.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center py-24 text-center px-4">
        <p className="text-6xl mb-4" aria-hidden="true">🎬</p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Your watchlist is empty
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Browse movies and save the ones you want to watch later.
        </p>
        <Link
          href="/"
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold transition-colors duration-150"
        >
          Browse Movies
        </Link>
      </main>
    );
  }

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto px-4 pt-6 pb-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          My Watchlist
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {movies.length} saved {movies.length === 1 ? "title" : "titles"}
        </p>
      </div>
      <Results results={movies} />
    </main>
  );
}
