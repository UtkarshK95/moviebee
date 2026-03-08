import { TRENDING_IDS, TOP_RATED_IDS } from "./constants";
import type { Movie } from "@/types/movie";

const OMDB_BASE_URL = "https://www.omdbapi.com";

interface OmdbRaw {
  imdbID: string;
  Title: string;
  Plot: string;
  Released: string;
  Year: string;
  imdbRating: string;
  Poster: string;
  Type: string;
  Genre: string;
  Director: string;
  Actors: string;
  Runtime: string;
  Rated: string;
  Metascore: string;
  imdbVotes: string;
  Awards: string;
  BoxOffice: string;
  Language: string;
  Country: string;
  totalSeasons: string;
  Response: string;
  Error?: string;
}

interface OmdbSearchItem {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

interface OmdbSearchResponse {
  Response: string;
  Search?: OmdbSearchItem[];
  Error?: string;
}

function normalizeDetail(raw: OmdbRaw): Movie {
  return {
    // Core fields (used by Card + Detail)
    id: raw.imdbID,
    title: raw.Title,
    overview: raw.Plot !== "N/A" ? raw.Plot : "No overview available.",
    releaseDate: raw.Released !== "N/A" ? raw.Released : (raw.Year ?? "Unknown"),
    rating: raw.imdbRating !== "N/A" ? raw.imdbRating : "N/A",
    posterUrl: raw.Poster !== "N/A" ? raw.Poster : "/placeholder.svg",
    year: raw.Year ?? null,
    type: raw.Type ?? "movie",
    // Genre — split "Action, Drama, Sci-Fi" into ["Action", "Drama", "Sci-Fi"]
    genre: raw.Genre && raw.Genre !== "N/A" ? raw.Genre.split(", ") : [],
    // Detail-only fields
    director: raw.Director !== "N/A" ? raw.Director : null,
    cast: raw.Actors && raw.Actors !== "N/A"
      ? raw.Actors.split(", ").slice(0, 3)
      : [],
    runtime: raw.Runtime !== "N/A" ? raw.Runtime : null,
    rated: raw.Rated && raw.Rated !== "N/A" && raw.Rated !== "Not Rated"
      ? raw.Rated
      : null,
    metascore: raw.Metascore !== "N/A" ? raw.Metascore : null,
    votes: raw.imdbVotes !== "N/A" ? raw.imdbVotes : null,
    awards: raw.Awards !== "N/A" ? raw.Awards : null,
    boxOffice: raw.BoxOffice !== "N/A" ? raw.BoxOffice : null,
    language: raw.Language !== "N/A" ? raw.Language : null,
    country: raw.Country !== "N/A" ? raw.Country : null,
    totalSeasons: raw.totalSeasons ?? null,
  };
}

function normalizeSearchResult(raw: OmdbSearchItem): Movie {
  return {
    id: raw.imdbID,
    title: raw.Title,
    overview: "No overview available.",
    releaseDate: raw.Year ?? "Unknown",
    rating: "N/A",
    posterUrl: raw.Poster !== "N/A" ? raw.Poster : "/placeholder.svg",
    year: raw.Year ?? null,
    type: raw.Type ?? "movie",
    genre: [],
    director: null,
    cast: [],
    runtime: null,
    rated: null,
    metascore: null,
    votes: null,
    awards: null,
    boxOffice: null,
    language: null,
    country: null,
    totalSeasons: null,
  };
}

async function fetchById(imdbId: string): Promise<Movie> {
  const apiKey = process.env.OMDB_API_KEY;
  if (!apiKey) throw new Error("OMDB_API_KEY is not configured");
  const res = await fetch(
    `${OMDB_BASE_URL}/?i=${imdbId}&apikey=${apiKey}`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) throw new Error(`Failed to fetch movie: ${imdbId}`);
  const data = (await res.json()) as OmdbRaw;
  if (data.Response === "False") throw new Error(data.Error ?? "Movie not found");
  return normalizeDetail(data);
}

export async function fetchMoviesByIds(ids: string[]): Promise<Movie[]> {
  return Promise.all(ids.map(fetchById));
}

export async function fetchTrending(): Promise<Movie[]> {
  return fetchMoviesByIds(TRENDING_IDS);
}

export async function fetchTopRated(): Promise<Movie[]> {
  return fetchMoviesByIds(TOP_RATED_IDS);
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const apiKey = process.env.OMDB_API_KEY;
  if (!apiKey) throw new Error("OMDB_API_KEY is not configured");
  const res = await fetch(
    `${OMDB_BASE_URL}/?s=${encodeURIComponent(query)}&apikey=${apiKey}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch search results");
  const data = (await res.json()) as OmdbSearchResponse;
  if (data.Response === "False") return [];
  // Filter out results with no poster to avoid blank cards
  return (data.Search ?? [])
    .filter((item) => item.Poster && item.Poster !== "N/A")
    .map(normalizeSearchResult);
}

export async function fetchMovieDetail(imdbId: string): Promise<Movie> {
  return fetchById(imdbId);
}
