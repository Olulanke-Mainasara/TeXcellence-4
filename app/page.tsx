"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Home-Page/Hero";
import InnovateX from "@/components/Home-Page/InnovateX";
import PreviousConferences from "@/components/Home-Page/PreviousConferences";
import Speakers from "@/components/Home-Page/Speakers";
import Sponsors from "@/components/Home-Page/Sponsors";
import WhatToExpect from "@/components/Home-Page/WhatToExpect";
import { useEffect, useState } from "react";

export default function Home() {
  const [splashing, setSplashing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashing(false);
    }, 3000);
  }, []);

  return (
    <main className={`h-screen ${splashing ? "h-screen overflow-hidden" : ""}`}>
      <div className="space-y-32">
        <Hero />
        <WhatToExpect />
        <Speakers />
      </div>
      <InnovateX />
      <div className="space-y-32">
        <PreviousConferences />
        <Sponsors />
        <Footer />
      </div>
    </main>
  );
}
