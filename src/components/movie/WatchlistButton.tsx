"use client";

import { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useWatchlist } from "@/context/WatchlistContext";

export default function WatchlistButton({ id, title }: { id: string; title: string }) {
  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount, treat as unsaved to match server-rendered HTML
  const saved = mounted && isInWatchlist(id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // prevent Link navigation on card
        e.stopPropagation();
        toggleWatchlist(id);
      }}
      aria-label={saved ? `Remove ${title} from watchlist` : `Add ${title} to watchlist`}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md hover:scale-110 transition-transform duration-150"
    >
      {saved ? (
        <BsBookmarkFill className="text-amber-500 text-sm" />
      ) : (
        <BsBookmark className="text-slate-500 dark:text-slate-400 text-sm" />
      )}
    </button>
  );
}
