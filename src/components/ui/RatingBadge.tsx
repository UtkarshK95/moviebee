import { AiFillStar } from "react-icons/ai";

export default function RatingBadge({ rating }: { rating: string | null | undefined }) {
  if (!rating || rating === "N/A") return null;

  const score = parseFloat(rating);
  const colorClass =
    score >= 7.5
      ? "text-green-600 dark:text-green-400"
      : score >= 6
      ? "text-amber-500"
      : "text-slate-500 dark:text-slate-400";

  return (
    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${colorClass}`}>
      <AiFillStar className="text-amber-400" />
      {rating}
    </span>
  );
}
