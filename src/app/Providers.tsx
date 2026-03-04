"use client";

import { ThemeProvider } from "next-themes";
import { WatchlistProvider } from "@/context/WatchlistContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <WatchlistProvider>
        <div className="transition-colors duration-300 min-h-screen">
          {children}
        </div>
      </WatchlistProvider>
    </ThemeProvider>
  );
}
