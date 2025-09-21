import React from "react";
import Image from "next/image";
import { speakersInfo } from "@/components/staticData";
import Footer from "@/components/Footer";

const Speakers = () => {
  return (
    <>
      <section className="pt-20 rounded-b-[50px] bg-background">
        <div className="flex flex-col justify-center px-4 md:px-6 xl:px-0 max-w-(--breakpoint-xl) mx-auto gap-8">
          <h2 className="text-6xl md:text-9xl text-center font-semibold tracking-tighter">
            The Speakers
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {speakersInfo.map((speaker) => (
              <div key={speaker.name} className="relative group">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-square rounded-lg object-cover bg-secondary"
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black group-hover:opacity-100 xl:opacity-0 transition-all duration-300 p-4">
                  <h3 className="text-3xl lg:text-2xl font-semibold text-white">
                    {speaker.name}
                  </h3>
                  <p className="text-xl lg:text-base text-neutral-400">
                    {speaker.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Speakers;
