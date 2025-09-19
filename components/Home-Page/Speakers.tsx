import Adewale from "@/public/speakers/Adewale-Adeyipo.webp";
import Afolabi from "@/public/speakers/Afolabi-Sobande.webp";
import Ayotunde from "@/public/speakers/Ayotunde-Coker.webp";
import Onasanya from "@/public/speakers/Onasanya.webp";
import { Mic2, User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const speakersInfo = [
  {
    name: "Adewale Adeyipo",
    title: "Group Managing Director / CEO CWG Group Plc",
    image: Adewale,
  },
  {
    name: "Afolabi Sobande",
    title: "Chief Operating Officer (COO) CWG Group Plc",
    image: Afolabi,
  },
  {
    name: "Ayotunde Coker",
    title: "Chief Executive Officer (CEO) Open Access Data Centres",
    image: Ayotunde,
  },
  {
    name: "Jesudetan Onasanya",
    title: "Regional Partner Director, Sub-Saharan Africa, Aleph",
    image: Onasanya,
  },
];

const Speakers = () => {
  return (
    <section className="pb-24 rounded-b-[50px] bg-background">
      <div className="flex flex-col justify-center px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-8">
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

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {speakersInfo.map((speaker) => (
            <div key={speaker.name} className="relative group">
              <Image
                src={speaker.image}
                alt={speaker.name}
                className="w-full aspect-square rounded-lg object-cover bg-secondary"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black group-hover:opacity-100 opacity-0 transition-all duration-300 p-4">
                <h3 className="text-2xl font-semibold text-white">
                  {speaker.name}
                </h3>
                <p className="text-neutral-400">{speaker.title}</p>
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
