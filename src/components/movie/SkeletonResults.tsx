import SkeletonCard from "@/components/ui/SkeletonCard";

export default function SkeletonResults({ count = 10 }: { count?: number }) {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-0 py-4">
        {Array.from({ length: count }, (_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
