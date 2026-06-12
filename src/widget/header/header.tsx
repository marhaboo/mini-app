"use client";

import { House } from "lucide-react";
import { ThemeToggle } from "@/src/shared/theme/theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 dark:bg-zinc-950 w-full px-3 pt-3 sm:px-5 sm:pt-5 transition-colors">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
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
