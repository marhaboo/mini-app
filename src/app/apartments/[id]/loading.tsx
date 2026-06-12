import Skeleton from "@/src/shared/ui/skeleton/skeleton"

export default function Loading() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Skeleton className="h-4 w-16 mb-6" />
      <Skeleton className="w-full h-72 rounded-2xl" />
      <div className="p-6 flex flex-col gap-4">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-24 w-full" />
      </div>
    </main>
  )
}