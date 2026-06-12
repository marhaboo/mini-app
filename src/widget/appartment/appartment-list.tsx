import ApartmentCard from "@/src/features/aparment-card/apartment-card";
import { getApartments } from "@/src/entities/apartment/api/apartment-api";
import { Apartment } from "@/src/entities/apartment/model/types";
import Hero from "../hero/hero";
import ApartmentFilters from "@/src/features/apartment-filter/ui/apartment-filters";
import { Home } from "lucide-react";

interface ApartmentListProps {
  search?: string;
  rooms?: string;
  minPrice?: string;
  maxPrice?: string;
}

const ApartmentList = async ({
  search,
  rooms,
  minPrice,
  maxPrice,
}: ApartmentListProps) => {
  const apartments: Apartment[] = await getApartments({
    search,
    rooms,
    minPrice,
    maxPrice,
  });

  const isFiltering = Boolean(search || rooms || minPrice || maxPrice);

  return (
    <>
      <Hero />
      <ApartmentFilters />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-baseline justify-between border-b border-zinc-100 dark:border-zinc-900 pb-4">
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
            {isFiltering ? "Результаты поиска" : "Каталог недвижимости"}
          </h2>

          {apartments.length > 0 && (
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-light">
              Найдено объектов: {apartments.length}
            </span>
          )}
        </div>

        {apartments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center bg-white dark:bg-zinc-900/30 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 px-4">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-full text-zinc-400 dark:text-zinc-500">
              <Home className="size-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mt-2">
              Квартиры не найдены
            </h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 max-w-xs font-light leading-relaxed">
              Попробуйте изменить параметры поиска, расширить диапазон цен или
              сбросить активные фильтры.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {apartments.map((apt) => (
              <ApartmentCard key={apt.id} apartment={apt} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ApartmentList;
