export interface Movie {
  id: string;
  title: string;
  overview: string;
  releaseDate: string;
  rating: string;
  posterUrl: string;
  year: string | null;
  type: string;
  genre: string[];
  director: string | null;
  cast: string[];
  runtime: string | null;
  rated: string | null;
  metascore: string | null;
  votes: string | null;
  awards: string | null;
  boxOffice: string | null;
  language: string | null;
  country: string | null;
  totalSeasons: string | null;
}

export interface GenreItem {
  label: string;
  slug: string;
}
