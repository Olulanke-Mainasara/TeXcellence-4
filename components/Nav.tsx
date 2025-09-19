"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./theme-switcher";
import Logo from "@/public/Texcellence-logo.webp";
import Image from "next/image";
import { useTheme } from "next-themes";

const Nav = () => {
  const [top, setTop] = React.useState(true);
  const { theme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 0) {
          setTop(false);
        } else {
          setTop(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.8 }}
      className="fixed w-full top-0 z-50"
    >
      <motion.div
        initial={{ top: 0, width: "100%" }}
        animate={{
          top: top ? 0 : 20,
          width: top ? "100%" : "98%",
          left: top ? 0 : "1%",
          backdropFilter: top ? "blur(0px)" : "blur(15px)",
          borderRadius: top ? 0 : 35,
          border: top
            ? "none"
            : theme === "dark"
            ? "1px solid rgba(48, 45, 45, 0.5)"
            : "1px solid rgba(255, 255, 255, 0.5)",
        }}
        className="flex items-center justify-between w-full absolute pr-4 overflow-hidden"
      >
        <div className="w-40 py-4 pl-4 bg-gradient-to-r from-white dark:from-background to-transparent">
          <Image
            src={Logo}
            alt="logo"
            className="w-full invert dark:invert-0"
          />
        </div>

        <header className="flex gap-6 items-center">
          <Link
            href="/agenda"
            className="hover:text-black dark:hover:text-white hover:bg-background px-3 py-2 rounded-lg transition-colors duration-300 text-muted-foreground"
          >
            Agenda
          </Link>
          <Link
            href="/speakers"
            className="hover:text-black dark:hover:text-white hover:bg-background px-3 py-2 rounded-lg transition-colors duration-300 text-muted-foreground"
          >
            Speakers
          </Link>
          <Link
            href="/innovatex"
            className="hover:text-black dark:hover:text-white hover:bg-background px-3 py-2 rounded-lg transition-colors duration-300 text-muted-foreground"
          >
            InnovateX
          </Link>
          <Link
            href="/explore"
            className="hover:text-black dark:hover:text-white hover:bg-background px-3 py-2 rounded-lg transition-colors duration-300 text-muted-foreground"
          >
            Explore
          </Link>
          <Link
            href="/contact"
            className="hover:text-black dark:hover:text-white hover:bg-background px-3 py-2 rounded-lg transition-colors duration-300 text-muted-foreground"
          >
            Contact
          </Link>
        </header>

        <div className="flex gap-4 items-center">
          <Link
            href="/register"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full border border-black dark:border-white hover:bg-background dark:hover:bg-background hover:text-black dark:hover:text-white transition-all duration-150"
          >
            Register
          </Link>
          <ThemeSwitcher />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
