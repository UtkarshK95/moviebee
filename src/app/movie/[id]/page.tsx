import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchMovieDetail } from "@/lib/omdb";
import Badge from "@/components/ui/Badge";
import RatingBadge from "@/components/ui/RatingBadge";
import GenreChip from "@/components/ui/GenreChip";
import WatchlistButton from "@/components/movie/WatchlistButton";
import BackButton from "@/components/movie/BackButton";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const movie = await fetchMovieDetail(id);
    return {
      title: movie.title,
      description: movie.overview,
      openGraph: { images: [{ url: movie.posterUrl }] },
    };
  } catch {
    return { title: "Movie Not Found" };
  }
}

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let movie;
  try {
    movie = await fetchMovieDetail(id);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <BackButton />
        <WatchlistButton id={movie.id} title={movie.title} />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <div className="shrink-0 mx-auto md:mx-0">
          <Image
            src={movie.posterUrl}
            width={300}
            height={445}
            className="rounded-xl shadow-lg"
            style={{ width: "300px", height: "auto" }}
            alt={`${movie.title} poster`}
            priority
          />
        </div>

        {/* Details */}
        <div className="flex-1 space-y-5">
          {/* Title + meta row */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              {movie.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {movie.year && (
                <span className="text-slate-500 dark:text-slate-400 text-sm">{movie.year}</span>
              )}
              {movie.rated && <Badge variant="rated">{movie.rated}</Badge>}
              {movie.runtime && (
                <span className="text-slate-500 dark:text-slate-400 text-sm">{movie.runtime}</span>
              )}
              {movie.type === "series" && <Badge variant="series">Series</Badge>}
              {movie.totalSeasons && (
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {movie.totalSeasons} Season{movie.totalSeasons !== "1" ? "s" : ""}
                </span>
              )}
            </div>
          </div>

          {/* Ratings */}
          <div className="flex items-start gap-8 py-4 border-y border-slate-200 dark:border-slate-700">
            {movie.rating !== "N/A" && (
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                  IMDb Rating
                </p>
                <RatingBadge rating={movie.rating} />
                {movie.votes && (
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{movie.votes} votes</p>
                )}
              </div>
            )}
            {movie.metascore && (
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                  Metascore
                </p>
                <span
                  className={`text-2xl font-bold ${
                    parseInt(movie.metascore) >= 70
                      ? "text-green-600 dark:text-green-400"
                      : parseInt(movie.metascore) >= 50
                      ? "text-amber-500"
                      : "text-red-500"
                  }`}
                >
                  {movie.metascore}
                </span>
              </div>
            )}
          </div>

          {/* Genres */}
          {movie.genre?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {movie.genre.map((g) => (
                <GenreChip key={g} genre={g} />
              ))}
            </div>
          )}

          {/* Overview */}
          <div>
            <h2 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
              Overview
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{movie.overview}</p>
          </div>

          {/* Director & Cast */}
          {(movie.director || movie.cast?.length > 0) && (
            <div className="space-y-1.5 text-sm">
              {movie.director && (
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Director: </span>
                  <span className="text-slate-600 dark:text-slate-400">{movie.director}</span>
                </p>
              )}
              {movie.cast?.length > 0 && (
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Cast: </span>
                  <span className="text-slate-600 dark:text-slate-400">{movie.cast.join(", ")}</span>
                </p>
              )}
            </div>
          )}

          {/* Supplemental metadata */}
          <div className="space-y-1.5 text-sm">
            {movie.releaseDate && (
              <p>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Released: </span>
                <span className="text-slate-600 dark:text-slate-400">{movie.releaseDate}</span>
              </p>
            )}
            {movie.language && (
              <p>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Language: </span>
                <span className="text-slate-600 dark:text-slate-400">{movie.language}</span>
              </p>
            )}
            {movie.country && (
              <p>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Country: </span>
                <span className="text-slate-600 dark:text-slate-400">{movie.country}</span>
              </p>
            )}
            {movie.boxOffice && (
              <p>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Box Office: </span>
                <span className="text-slate-600 dark:text-slate-400">{movie.boxOffice}</span>
              </p>
            )}
          </div>

          {/* Awards */}
          {movie.awards && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 rounded-xl p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">
                Awards
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{movie.awards}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
