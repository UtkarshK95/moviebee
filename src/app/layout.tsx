import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import SearchBox from "@/components/layout/SearchBox";
import GenreStrip from "@/components/layout/GenreStrip";
import MobileNav from "@/components/layout/MobileNav";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: {
    default: "MovieBee — Movie & TV Discovery",
    template: "%s | MovieBee",
  },
  description:
    "Discover trending movies, top-rated films, and TV shows. Search, browse by genre, and build your personal watchlist.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pb-16 sm:pb-0">
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          <GenreStrip />
          {children}
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
