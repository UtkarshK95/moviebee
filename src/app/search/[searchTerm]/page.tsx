import Results from "@/components/movie/Results";
import { searchMovies } from "@/lib/omdb";

export async function generateMetadata({ params }: { params: Promise<{ searchTerm: string }> }) {
  const { searchTerm } = await params;
  const term = decodeURIComponent(searchTerm);
  return {
    title: `Search results for "${term}"`,
    description: `Browse MovieBee search results for "${term}". Find movies and TV shows matching your query.`,
  };
}

export default async function SearchPage({ params }: { params: Promise<{ searchTerm: string }> }) {
  const { searchTerm } = await params;
  const results = await searchMovies(decodeURIComponent(searchTerm));

  return (
    <main>
      {results.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-4xl mb-4">🔍</p>
          <h1 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
            No results found
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Try a different title or check your spelling.
          </p>
        </div>
      )}
      {results.length > 0 && <Results results={results} />}
    </main>
  );
}
