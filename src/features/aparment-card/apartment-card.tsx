"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Apartment } from "@/src/entities/apartment/model/types";
import { Maximize, Layout, DoorOpen, MapPin } from "lucide-react";

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/apartments/${apartment.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="group cursor-pointer bg-white dark:bg-transparent overflow-hidden transition-all flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={apartment.image}
          alt={apartment.title}
          fill
          sizes="(max-w-7xl) 33vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="py-5 flex flex-col flex-1 gap-1">
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 tracking-tight truncate flex-1">
            {apartment.title}
          </h3>
          <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">
            {apartment.price.toLocaleString()} смн.
          </p>
        </div>

        <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 mb-4">
          <MapPin className="size-3.5 text-zinc-400" />
          <p className="text-sm">Таджикистан, г. Душанбе</p>
        </div>
        <div className="flex items-center justify-between gap-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5">
            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <Maximize className="size-4 opacity-70" />
              <span className="text-sm font-medium">{apartment.area} м²</span>
            </div>

            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <DoorOpen className="size-4 opacity-70" />
              <span className="text-sm font-medium">
                {apartment.rooms} комн.
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
              <Layout className="size-4 opacity-70" />
              <span className="text-sm font-medium">1 этаж</span>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate();
            }}
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-1 decoration-zinc-400 dark:decoration-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors whitespace-nowrap"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
