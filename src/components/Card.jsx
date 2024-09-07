import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  // Provide fallback values if data is missing
  const title = result.title || result.name || "Unknown Title";
  const overview = result.overview || "No overview available.";
  const releaseDate = result.release_date || result.first_air_date || "Unknown";
  const voteCount = result.vote_count || "N/A";
  const imageUrl =
    result.backdrop_path || result.poster_path
      ? `https://image.tmdb.org/t/p/original/${
          result.backdrop_path || result.poster_path
        }`
      : "/placeholder.svg"; // Provide a placeholder image

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group p-8">
      <Link href={`/movie/${result.id || "#"}`}>
        <Image
          src={imageUrl}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            height: "300px",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{overview}</p>
          <h2 className="truncate text-lg font-bold">{title}</h2>
          <p className="flex items-center">
            {releaseDate}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {voteCount}
          </p>
        </div>
      </Link>
    </div>
  );
}
