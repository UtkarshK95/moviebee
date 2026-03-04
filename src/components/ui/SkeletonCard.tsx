export default function SkeletonCard() {
  return (
    <div className="sm:p-3 sm:shadow-md rounded-xl sm:border sm:border-slate-200 dark:sm:border-slate-700 sm:m-2 p-4 bg-white dark:bg-slate-800">
      <div className="animate-pulse">
        <div
          className="rounded-lg bg-slate-200 dark:bg-slate-700"
          style={{ height: "300px" }}
        />
        <div className="p-2 pt-3 space-y-2">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
          <div className="flex gap-1 pt-1">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-12" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-14" />
          </div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
}
