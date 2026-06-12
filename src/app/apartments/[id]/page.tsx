import { getApartmentById } from "@/src/entities/apartment/api/apartment-api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize,
  Layout,
  DoorOpen,
  MapPin,
  ArrowLeft,
  Phone,
} from "lucide-react";

interface PageProps {
  params: { id: string };
}

export default async function ApartmentPage({ params }: PageProps) {
  const { id } = await params;
  const apartment = await getApartmentById(id);

  if (!apartment) notFound();

  return (
    <main className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Назад</span>
        </Link>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-900 p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start shadow-sm">
          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-800">
              <Image
                src={apartment.image}
                alt={apartment.title}
                fill
                priority
                sizes="(max-w-6xl) 50vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex items-center rounded-md bg-zinc-50 dark:bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-700/50">
                + недвижимость
              </span>
              <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                {apartment.title}
              </h1>
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
              {apartment.description}
            </p>

            <div className="flex flex-col text-sm border-t border-zinc-100 dark:border-zinc-800/80">
              <div className="flex justify-between items-center py-3.5 border-b border-zinc-100 dark:border-zinc-800/80">
                <span className="text-zinc-400 dark:text-zinc-500 font-light flex items-center gap-2">
                  <MapPin className="size-4 opacity-70" /> Локация
                </span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  г. Душанбе
                </span>
              </div>

              <div className="flex justify-between items-center py-3.5 border-b border-zinc-100 dark:border-zinc-800/80">
                <span className="text-zinc-400 dark:text-zinc-500 font-light flex items-center gap-2">
                  <DoorOpen className="size-4 opacity-70" /> Количество комнат
                </span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {apartment.rooms} комн.
                </span>
              </div>

              <div className="flex justify-between items-center py-3.5 border-b border-zinc-100 dark:border-zinc-800/80">
                <span className="text-zinc-400 dark:text-zinc-500 font-light flex items-center gap-2">
                  <Maximize className="size-4 opacity-70" /> Общая площадь
                </span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {apartment.area} м²
                </span>
              </div>

              <div className="flex justify-between items-center py-3.5 border-b border-zinc-100 dark:border-zinc-800/80">
                <span className="text-zinc-400 dark:text-zinc-500 font-light flex items-center gap-2">
                  <Layout className="size-4 opacity-70" /> Этаж
                </span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  1 этаж
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 pt-2">
              <button
                type="button"
                className="flex-1 inline-flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-transparent px-4 py-3.5 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                В избранное
              </button>

              <a className="flex-[1.5] inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 dark:bg-zinc-50 px-4 py-3.5 text-sm font-semibold text-white dark:text-zinc-950 hover:opacity-90 transition-all shadow-sm">
                <Phone className="size-4 fill-current" />
                <span>Позвонить</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
