import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "@/public/texcellence/1.jpeg";
import Image2 from "@/public/texcellence/2.webp";
import Image3 from "@/public/texcellence/3.webp";
import Image4 from "@/public/texcellence/4.webp";
import Image5 from "@/public/texcellence/5.webp";
import Image6 from "@/public/texcellence/6.jpeg";
import Image7 from "@/public/texcellence/7.jpeg";
import { motion } from "framer-motion";

const PreviousConferences = () => {
  return (
    <section className="rounded-t-[50px] bg-gradient-to-b from-background via-background to-white to-95% pt-10 md:pt-24 mb-0">
      <div className="w-full h-full max-w-(--breakpoint-xl) mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter">
            Relive the Moments from
            <br />
            Previous Texcellences.
          </h2>
          <Link
            href={"/explore"}
            className="uppercase flex items-center gap-2 font-semibold"
          >
            view all <ArrowRight className="text-blue-900 dark:text-blue-700" />
          </Link>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[70%] max-h-96 overflow-hidden rounded-md dark:border border-neutral-800"
            >
              <Image
                src={Image1}
                className="object-cover h-full"
                alt="TeXcellence 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[30%] max-h-96 overflow-hidden rounded-md dark:border border-neutral-800"
            >
              <Image
                src={Image2}
                className="object-cover h-full"
                alt="TeXcellence 2024"
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-md overflow-hidden max-h-96 col-span-2 hidden md:block"
            >
              <Image
                src={Image3}
                className="object-cover h-full"
                alt="TeXcellence 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-md overflow-hidden max-h-96 col-span-2 hidden md:block"
            >
              <Image
                src={Image4}
                className="object-cover h-full"
                alt="TeXcellence 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-md overflow-hidden max-h-96 col-span-2 hidden md:block"
            >
              <Image
                src={Image5}
                className="object-cover h-full"
                alt="TeXcellence 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-md overflow-hidden max-h-96 col-span-3"
            >
              <Image
                src={Image6}
                className="object-cover h-full"
                alt="TeXcellence 2024"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-3 bg-gray-300 rounded-md overflow-hidden max-h-96"
            >
              <Image
                src={Image7}
                className="object-cover h-full"
                alt="TeXcellence 2024"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousConferences;
