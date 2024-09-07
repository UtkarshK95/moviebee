import Image from "next/image";

async function getMovie(movieId) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) {
      // If response is not OK, return dummy content
      return {
        title: "Unknown Title",
        overview: "No overview available.",
        release_date: "Unknown",
        vote_count: "N/A",
        backdrop_path: null,
        poster_path: null,
      };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // If there's an error during fetching, return dummy content
    return {
      title: "Unknown Title",
      overview: "No overview available.",
      release_date: "Unknown",
      vote_count: "N/A",
      backdrop_path: null,
      poster_path: null,
    };
  }
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center mx-auto md:space-x-6">
        <Image
          src={
            movie.backdrop_path || movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }`
              : "/placeholder.svg" // Provide a placeholder image
          }
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            width: "auto", // Add this line
            height: "auto", // Add this line
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || "Unknown Title"}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview || "No overview available."}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || "Unknown"}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
