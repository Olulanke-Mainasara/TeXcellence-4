import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowRight,
  Cast,
  Lectern,
  Presentation,
  Waypoints,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Keynote from "@/public/whatToExpect/keynote.webp";
import Panel from "@/public/whatToExpect/panel.webp";
import Networking from "@/public/whatToExpect/networking.webp";
import LiveDemo from "@/public/whatToExpect/live-demo.webp";

const WhatToExpect = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-(--breakpoint-xl) mx-auto py-12 px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tighter">
            Transform Your Business <br />
            at Texcellence 2025.
          </h2>
          <p className="uppercase flex items-center gap-2 font-semibold">
            what to expect{" "}
            <ArrowDown className="text-blue-900 dark:text-blue-700" />
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6 items-center">
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl"></div>

            <span className="text-3xl font-semibold tracking-tight">
              Keynotes
            </span>

            <div className="flex items-start gap-3 mt-6">
              <Presentation className="shrink-0 text-blue-900 dark:text-blue-700" />
              <p className="-mt-0.5 text-2xl">
                Gain insights from global tech leaders—explore trends,
                strategies, and innovations shaping the future.
              </p>
            </div>

            <Button className="mt-8 w-full py-6 text-lg">
              View the Agenda <ArrowRight className="size-6 text-blue-700" />
            </Button>
          </div>
          {/* Media 1 Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden h-[550px] dark:border"
          >
            <Image
              src={Keynote}
              alt="Keynote"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Media 2 Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden h-[550px] dark:border"
          >
            <Image
              src={Panel}
              alt="Keynote"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl"></div>

            <span className="text-3xl font-semibold tracking-tight">
              Panel Sessions
            </span>

            <div className="flex items-start gap-3 mt-6">
              <Lectern className="shrink-0 text-blue-900 dark:text-blue-700" />
              <p className="-mt-0.5 text-2xl">
                Join engaging conversations with tech and business
                experts—unlock ideas, solutions, and fresh perspectives.
              </p>
            </div>

            <Button className="mt-8 w-full py-6 text-lg">
              View the Agenda <ArrowRight className="size-6 text-blue-700" />
            </Button>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6 items-center">
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 3 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl"></div>

            <span className="text-3xl font-semibold tracking-tight">
              Networking
            </span>

            <div className="flex items-start gap-3 mt-6">
              <Waypoints className="shrink-0 text-blue-900 dark:text-blue-700" />
              <p className="-mt-0.5 text-2xl">
                Connect with key industry decision-makers—build relationships,
                exchange ideas, and open doors to new opportunities.
              </p>
            </div>

            <Button className="mt-8 w-full py-6 text-lg">
              View the Agenda <ArrowRight className="size-6 text-blue-700" />
            </Button>
          </div>
          {/* Media 3 Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden h-[550px] dark:border"
          >
            <Image
              src={Networking}
              alt="Keynote"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Media 4 Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden h-[550px] dark:border"
          >
            <Image
              src={LiveDemo}
              alt="Keynote"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 4 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background rounded-xl"></div>

            <span className="text-3xl font-semibold tracking-tight">
              Live Demos
            </span>

            <div className="flex items-start gap-3 mt-6">
              <Cast className="shrink-0 text-blue-900 dark:text-blue-700" />
              <p className="-mt-0.5 text-2xl">
                Get hands-on experience with cutting-edge technology—explore
                tools, demos, and real-world applications in action.
              </p>
            </div>

            <Button className="mt-8 w-full py-6 text-lg">
              View the Agenda <ArrowRight className="size-6 text-blue-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
