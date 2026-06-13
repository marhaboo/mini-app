"use client";

import { useFilters } from "../model/use-filters";
import { useDebounce } from "@/src/shared/hooks/useDebounce";
import { useEffect, useState, useRef } from "react";
import { Search, X } from "lucide-react";

const ROOMS_OPTIONS = [1, 2, 3, 4];

const ApartmentFilters = () => {
  const { search, rooms, minPrice, maxPrice, setParam } = useFilters();

  const [searchInput, setSearchInput] = useState(search);
  const [minInput, setMinInput] = useState(minPrice);
  const [maxInput, setMaxInput] = useState(maxPrice);

  const debouncedSearch = useDebounce(searchInput, 500);
  const debouncedMin = useDebounce(minInput, 500);
  const debouncedMax = useDebounce(maxInput, 500);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    setParam("search", debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    if (!isMounted.current) return;
    setParam("minPrice", debouncedMin);
  }, [debouncedMin]);

  useEffect(() => {
    if (!isMounted.current) return;
    setParam("maxPrice", debouncedMax);
  }, [debouncedMax]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const clearFilters = () => {
    setSearchInput("");
    setMinInput("");
    setMaxInput("");
    setParam("rooms", "");
  };

  const hasFilters = search || rooms || minPrice || maxPrice;

  return (
    <div className="mx-auto  dark:bg-zinc-950 max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 py-3 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Поиск квартир..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 pl-8 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
          />
        </div>

        <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />

        <div className="flex items-center gap-1.5">
          <span className="text-xs text-zinc-400 mr-1">Комнат</span>
          {ROOMS_OPTIONS.map((r) => (
            <button
              key={r}
              onClick={() =>
                setParam("rooms", rooms === String(r) ? "" : String(r))
              }
              className={`w-8 h-8 rounded-lg text-sm font-medium border transition-colors ${
                rooms === String(r)
                  ? "bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-50"
                  : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">Цена</span>
          <input
            type="number"
            placeholder="От"
            value={minInput}
            onChange={(e) => setMinInput(e.target.value)}
            className="w-24 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
          />
          <span className="text-zinc-300 text-sm">—</span>
          <input
            type="number"
            placeholder="До"
            value={maxInput}
            onChange={(e) => setMaxInput(e.target.value)}
            className="w-24 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
          />
        </div>

        {hasFilters && (
          <>
            <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <X className="size-3.5" />
              Сбросить
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ApartmentFilters;
