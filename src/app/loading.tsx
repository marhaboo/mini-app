import ApartmentCardSkeleton from "../shared/ui/skeleton/apartment-card-skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ApartmentCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}
