import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroBanner from "@/public/hero-banner.png";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="xl:min-h-screen pt-28 relative md:px-6">
      <div className="text-center w-full space-y-2">
        <motion.h1
          initial={{ y: "25dvh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 2, ease: "anticipate" }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[180px] bg-center bg-clip-text overflow-hidden"
        >
          Te<span className="text-blue-900 dark:text-blue-700">X</span>cellence
          <span className="text-blue-900 dark:text-blue-700">&apos;</span>4.0
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="md:text-lg lg:text-2xl max-w-4xl mx-auto text-neutral-600 dark:text-neutral-400 px-3 md:px-10 xl:px-0"
        >
          Connect with visionary African{" "}
          <motion.span
            initial={{ color: "#737373" }}
            animate={{
              color: theme === "dark" ? "#ffffff" : "#000000",
              fontWeight: 800,
              transition: { duration: 0.5, delay: 3.5 },
            }}
          >
            founders
          </motion.span>{" "}
          and C-suite{" "}
          <motion.span
            initial={{ color: "#737373" }}
            animate={{
              color: theme === "dark" ? "#ffffff" : "#000000",
              fontWeight: "bold",
              transition: { duration: 0.5, delay: 3.5 },
            }}
          >
            executives
          </motion.span>{" "}
          at Texcellence 2025! This year, our carefully curated sessions will
          explore different perspectives as we tackle the challenges of scaling{" "}
          <motion.span
            initial={{ color: "#737373" }}
            animate={{
              color: theme === "dark" ? "#ffffff" : "#000000",
              fontWeight: "bold",
              transition: { duration: 0.5, delay: 3.5 },
            }}
          >
            African
          </motion.span>{" "}
          businesses and technology{" "}
          <motion.span
            initial={{ color: "#737373" }}
            animate={{
              color: theme === "dark" ? "#ffffff" : "#000000",
              fontWeight: "bold",
              transition: { duration: 0.5, delay: 3.5 },
            }}
          >
            innovation
          </motion.span>{" "}
          to international markets and{" "}
          <motion.span
            initial={{ color: "#737373" }}
            animate={{
              color: theme === "dark" ? "#ffffff" : "#000000",
              fontWeight: "bold",
              transition: { duration: 0.5, delay: 3.5 },
            }}
          >
            global
          </motion.span>{" "}
          audiences.
        </motion.p>
      </div>
      <div className="w-full px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="xl:h-screen w-full max-w-(--breakpoint-2xl) mx-auto mt-10 rounded-2xl overflow-hidden relative shadow-2xl shadow-black dark:shadow-neutral-400/30"
        >
          <Image
            src={heroBanner}
            alt="hero-banner"
            className="w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
