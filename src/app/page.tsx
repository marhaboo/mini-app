import ApartmentList from "@/src/widget/appartment/appartment-list"

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string
    rooms?: string
    minPrice?: string
    maxPrice?: string
  }>
}) {
  const params = await searchParams

  return (
    <ApartmentList
      search={params.search}
      rooms={params.rooms}
      minPrice={params.minPrice}
      maxPrice={params.maxPrice}
    />
  )
}