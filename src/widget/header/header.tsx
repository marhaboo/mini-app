"use client";

import { Search, House } from "lucide-react";
import { ThemeToggle } from "@/src/shared/theme/theme-toggle";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <header className="sticky top-0 z-50  dark:bg-zinc-950 w-full px-3 pt-3 sm:px-5 sm:pt-5 transition-colors">
     <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-2xl bg-white dark:bg-zinc-950 px-4 text-zinc-900 dark:text-zinc-50 shadow-md dark:shadow-zinc-950/50 sm:gap-6 sm:px-7 border border-zinc-100 dark:border-zinc-800/50">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <House
            className="size-6 text-zinc-900 dark:text-zinc-50"
            aria-hidden="true"
          />
          <span className="font-serif text-2xl font-medium italic tracking-tight">
            MiniApp
          </span>
        </Link>

        <div className="relative hidden flex-1 sm:block sm:max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
            aria-hidden="true"
          />
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search Product..."
            aria-label="Search products"
            className="w-full rounded-full bg-zinc-100 dark:bg-zinc-800 py-2.5 pl-11 pr-4 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none transition-all focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
          />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button
            type="button"
            aria-label="Open search"
            className="flex size-9 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors sm:hidden"
          >
            <Search className="size-5" />
          </button>

          <span
            className="h-5 w-px bg-zinc-200 dark:bg-zinc-800"
            aria-hidden="true"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
