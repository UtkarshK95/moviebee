import Card from "./Card";
import type { Movie } from "@/types/movie";

export default function Results({ results }: { results: Movie[] }) {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4">
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
