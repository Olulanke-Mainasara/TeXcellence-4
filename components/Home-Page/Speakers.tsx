import { Mic2, User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { speakersInfo } from "../staticData";

const Speakers = () => {
  return (
    <section className="pb-10 md:pb-24 rounded-b-[50px] bg-background">
      <div className="flex flex-col justify-center px-4 md:px-6 max-w-(--breakpoint-xl) mx-auto gap-8">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-center text-neutral-600 dark:text-neutral-400 font-semibold uppercase flex items-center justify-center gap-2">
            <Mic2 className="text-blue-900 dark:text-blue-700" />
            Featured Voices
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter">
            Meet The Speakers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Discover the thought leaders and innovators sharing their insights,
            experiences, and visions to inspire and shape the future.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {speakersInfo.slice(0, 6).map((speaker) => (
            <div
              key={speaker.name}
              className="relative group rounded-lg overflow-hidden"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                className="w-full aspect-square object-cover bg-secondary"
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

        <Link href="/speakers" className="mx-auto">
          <Button className="text-lg py-6 cursor-pointer">
            <User className="size-6 text-blue-700" />
            See all Speakers
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Speakers;
