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
    <section className="relative bg-white mb-0">
      <div className="py-28 flex items-center justify-center px-6">
        <div className="overflow-hidden space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-center text-neutral-600 dark:text-neutral-400 font-semibold uppercase flex items-center justify-center gap-2">
              <PartyPopper className="text-blue-900 dark:text-blue-700" />
              our sponsors
            </p>
            <h2 className="text-3xl sm:text-5xl text-center tracking-tighter font-semibold text-black">
              Together We Build <br />
              the Future of Texcellence.
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-(--breakpoint-lg)">
            <Image src={Sponsor1} alt="Sponsor" className="w-40 md:w-60" />
            <Image src={Sponsor2} alt="Sponsor" className="w-40 md:w-60" />
            <Image src={Sponsor3} alt="Sponsor" className="w-40 md:w-60" />
            <Image src={Sponsor4} alt="Sponsor" className="w-40 md:w-60" />
            <Image src={Sponsor5} alt="Sponsor" className="w-40 md:w-60" />
            <Image src={Sponsor6} alt="Sponsor" className="w-40 md:w-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
