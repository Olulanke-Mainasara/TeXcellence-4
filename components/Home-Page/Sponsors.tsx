import Image from "next/image";
import React from "react";
import Sponsor1 from "@/public/sponsors/sponsor1.webp";
import Sponsor2 from "@/public/sponsors/sponsor2.webp";
import Sponsor3 from "@/public/sponsors/sponsor3.webp";
import Sponsor4 from "@/public/sponsors/sponsor4.webp";
import Sponsor5 from "@/public/sponsors/sponsor5.webp";
import Sponsor6 from "@/public/sponsors/sponsor6.webp";
import { PartyPopper } from "lucide-react";

const Sponsors = () => {
  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-5 md:grid-cols-5 grid-rows-3 md:grid-rows-3 max-w-(--breakpoint-xl) mx-auto">
        <div className="col-start-2 row-start-1 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center">
          <Image src={Sponsor1} alt="Sponsor" className="scale-125" />
        </div>
        <div className="col-start-4 row-start-1 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center">
          <Image src={Sponsor2} alt="Sponsor" className="scale-125" />
        </div>
        <div className="col-start-5 row-start-2 md:col-start-5 md:row-start-2 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center">
          <Image src={Sponsor3} alt="Sponsor" className="scale-125" />
        </div>
        <div className="col-start-4 row-start-3 md:col-start-4 md:row-start-3 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center">
          <Image src={Sponsor4} alt="Sponsor" className="scale-125" />
        </div>
        <div className="col-start-2 row-start-3 md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center">
          <Image src={Sponsor5} alt="Sponsor" className="scale-125" />
        </div>
        <div className="col-start-1 row-start-2 md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center">
          <Image src={Sponsor6} alt="Sponsor" className="scale-125" />
        </div>
        <div className="col-start-3 row-start-2 md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1 rounded-md flex items-center justify-center h-48"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
        <p className="text-center text-neutral-600 dark:text-neutral-400 font-semibold uppercase flex items-center justify-center gap-2">
          <PartyPopper className="text-blue-900 dark:text-blue-700" />
          our sponsors
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center tracking-tighter font-semibold text-black">
          Together We Build <br />
          the Future of Texcellence.
        </h2>
      </div>
    </section>
  );
};

export default Sponsors;
