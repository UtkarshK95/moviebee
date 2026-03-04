import Results from "@/components/movie/Results";
import { fetchTrending, fetchTopRated } from "@/lib/omdb";

export default async function Home({ searchParams }) {
  const { genre = "fetchTrending" } = await searchParams;
  const isTopRated = genre === "fetchTopRated";

  const results = isTopRated ? await fetchTopRated() : await fetchTrending();

  const sectionTitle = isTopRated ? "Top Rated All Time" : "Trending This Week";
  const sectionSubtitle = isTopRated
    ? "The greatest films of all time, curated for you."
    : "What everyone's watching right now.";

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto px-4 pt-6 pb-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{sectionTitle}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{sectionSubtitle}</p>
      </div>
      <Results results={results} />
    </main>
  );
}
