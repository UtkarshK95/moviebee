const WATCHLIST_KEY = "moviebee_watchlist";

function safeRead(key: string): string[] | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as string[]) : null;
  } catch {
    return null;
  }
}

function safeWrite(key: string, value: string[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage quota exceeded or private browsing — fail silently
  }
}

export function getWatchlist(): string[] {
  return safeRead(WATCHLIST_KEY) ?? [];
}

export function addToWatchlist(imdbId: string): string[] {
  const current = getWatchlist();
  if (current.includes(imdbId)) return current;
  const updated = [imdbId, ...current];
  safeWrite(WATCHLIST_KEY, updated);
  return updated;
}

export function removeFromWatchlist(imdbId: string): string[] {
  const updated = getWatchlist().filter((id) => id !== imdbId);
  safeWrite(WATCHLIST_KEY, updated);
  return updated;
}
