"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Home-Page/Hero";
import InnovateX from "@/components/Home-Page/InnovateX";
import PreviousConferences from "@/components/Home-Page/PreviousConferences";
import Speakers from "@/components/Home-Page/Speakers";
import Sponsors from "@/components/Home-Page/Sponsors";
import WhatToExpect from "@/components/Home-Page/WhatToExpect";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [splashing, setSplashing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashing(false);
    }, 3000);
  }, []);

  return (
    <main className={`h-screen ${splashing ? "h-screen overflow-hidden" : ""}`}>
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.8 }}
        className="space-y-32 mt-32"
      >
        <WhatToExpect />
        <Speakers />
      </motion.div>
      <InnovateX />
      <div className="space-y-32">
        <PreviousConferences />
        <Sponsors />
        <Footer />
      </div>
    </main>
  );
}
