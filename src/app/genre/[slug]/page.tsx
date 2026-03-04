import { notFound } from "next/navigation";
import Results from "@/components/movie/Results";
import { fetchMoviesByIds } from "@/lib/omdb";
import { GENRE_COLLECTIONS, GENRE_LIST } from "@/lib/constants";

export const revalidate = 86400;

export function generateStaticParams() {
  return GENRE_LIST.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = GENRE_LIST.find((g) => g.slug === slug);
  if (!config) return { title: "Genre Not Found" };
  return {
    title: `${config.label} Movies`,
    description: `Browse the best ${config.label.toLowerCase()} movies curated for you.`,
  };
}

export default async function GenrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ids = GENRE_COLLECTIONS[slug];

  if (!ids) notFound();

  const config = GENRE_LIST.find((g) => g.slug === slug);
  const title = config?.label ?? slug;

  const results = await fetchMoviesByIds(ids);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto px-4 pt-6 pb-2">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {results.length} curated picks
        </p>
      </div>
      <Results results={results} />
    </main>
  );
}
