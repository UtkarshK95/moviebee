const VARIANTS: Record<string, string> = {
  movie:   "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
  series:  "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  rated:   "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
  default: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: "movie" | "series" | "rated" | "default";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${
        VARIANTS[variant] ?? VARIANTS.default
      }`}
    >
      {children}
    </span>
  );
}
