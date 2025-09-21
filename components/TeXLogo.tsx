import Image from "next/image";
import React from "react";
import Logo from "@/public/Texcellence-logo.webp";

const TeXLogo = () => {
  return (
    <Image src={Logo} alt="logo" className="w-full invert dark:invert-0" />
  );
};

export default TeXLogo;
