"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-zinc-900 font-sans px-4 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="max-w-md text-center flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 font-medium">
          Ошибка 404
        </span>
        <h1 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
          Похоже, этой страницы больше не существует
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light max-w-xs mb-6">
          Объект недвижимости мог быть снят с публикации или перемещен в другой
          раздел системы.
        </p>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="text-sm font-medium text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-1 decoration-zinc-400 dark:decoration-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors whitespace-nowrap"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;
