"use client";

import { createContext, useCallback, useContext, useState } from "react";
import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "@/lib/storage";

interface WatchlistContextType {
  watchlist: string[];
  toggleWatchlist: (imdbId: string) => void;
  isInWatchlist: (imdbId: string) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | null>(null);

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
  const [watchlist, setWatchlist] = useState<string[]>(() => getWatchlist());

  const toggleWatchlist = useCallback((imdbId: string) => {
    setWatchlist((prev) =>
      prev.includes(imdbId)
        ? removeFromWatchlist(imdbId)
        : addToWatchlist(imdbId)
    );
  }, []);

  const isInWatchlist = useCallback(
    (imdbId: string) => watchlist.includes(imdbId),
    [watchlist]
  );

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist(): WatchlistContextType {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error("useWatchlist must be used within WatchlistProvider");
  return ctx;
}
