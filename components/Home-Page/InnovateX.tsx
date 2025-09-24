import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { X } from "lucide-react";

const InnovateX = () => {
  return (
    <section className="xl:h-screen py-24 xl:py-0 relative">
      <div className="h-screen xl:h-[150dvh] absolute -top-1/4 bg-black dark:bg-white w-full -z-10 flex items-center justify-center"></div>
      <X className="xl:w-[2000px] xl:h-[2000px] md:w-[1500px] md:h-[1500px] lg:w-[1800px] lg:h-[1800px] w-[900px] h-[900px] absolute top-1/2 right-0 2xl:w-[2700px] 2xl:h-[2700px] -translate-y-1/2 -z-10 text-white dark:text-black opacity-5" />
      <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-center">
        <h2 className="text-7xl md:text-8xl lg:text-9xl text-white dark:text-black font-semibold tracking-tighter">
          Innovate<span className="dark:text-blue-900 text-blue-700">X</span>
        </h2>
        <p className="text-neutral-400 dark:text-neutral-600 px-4 text-xl md:text-3xl lg:text-4xl md:max-w-2xl lg:max-w-3xl">
          InnovateX Africa is a structured startup pitch competition designed to
          discover, showcase, and accelerate the most promising tech innovation
          across the African continent.
        </p>

        <Link href="/innovatex">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg mt-4 py-6 cursor-pointer"
          >
            Learn more
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default InnovateX;
