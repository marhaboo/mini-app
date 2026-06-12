import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 pt-6 pb-16 transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200"
            alt="Современная вилла"
            fill
            priority
            sizes="(max-w-7xl) 100vw, 1200px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-zinc-950/40 to-transparent md:bg-gradient-to-r md:from-zinc-950/90 md:via-zinc-950/50 md:to-transparent" />

          <div className="absolute inset-0 z-10 p-6 sm:p-10 lg:p-16 flex flex-col md:grid md:grid-cols-12 gap-6 items-end md:items-center justify-between">
            <div className="md:col-span-7 flex flex-col items-start gap-5 sm:gap-8 mt-auto md:mt-0">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] max-w-xl">
                Найдите место, которое назовете домом
              </h1>
              <button
                type="button"
                className="bg-white text-zinc-950 text-xs uppercase tracking-wider font-semibold px-6 py-3.5 transition-all hover:bg-zinc-100 active:scale-[0.98] rounded-sm shadow-md"
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
