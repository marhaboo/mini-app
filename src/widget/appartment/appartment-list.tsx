import ApartmentCard from "@/src/features/aparment-card/apartment-card";
import { getApartments } from "@/src/entities/apartment/api/apartment-api";
import { Apartment } from "@/src/entities/apartment/model/types";
import Hero from "../hero/hero";

const ApartmentList = async () => {
  const apartments: Apartment[] = await getApartments();

  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl dark:bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ApartmentList;
