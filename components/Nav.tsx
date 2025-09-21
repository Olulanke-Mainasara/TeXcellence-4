"use client";

import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeSwitcher } from "./theme-switcher";
import { useTheme } from "next-themes";
import TeXLogo from "./TeXLogo";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [top, setTop] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
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

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        className="flex items-center justify-between w-full absolute pr-2 md:pr-4 overflow-hidden"
      >
        <Link href="/">
          <div className="w-40 py-4 pl-4 bg-gradient-to-r from-white dark:from-background to-transparent">
            <TeXLogo />
          </div>
        </Link>

        <header className="gap-6 items-center hidden lg:flex">
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
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full border border-black dark:border-white hover:bg-background dark:hover:bg-background hover:text-black dark:hover:text-white transition-all duration-150 text-xl lg:text-base"
          >
            Register
          </Link>
          <span className="hidden lg:inline-block">
            <ThemeSwitcher />
          </span>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "flex" }}
            exit={{ opacity: 0, transitionEnd: { display: "none" } }}
            className="absolute h-screen w-screen bg-background flex flex-col"
          >
            <div className="flex items-center justify-between pr-1 md:pr-4">
              <Link href="/">
                <div className="w-40 py-4 pl-4 bg-gradient-to-r from-white dark:from-background to-transparent">
                  <TeXLogo />
                </div>
              </Link>
              <button onClick={() => setOpen(!open)}>
                <X className="size-8" />
              </button>
            </div>
            <div className="grow">
              <header className="gap-6 items-center flex flex-col justify-center h-full text-5xl">
                <Link href="/agenda" className="text-black dark:text-white">
                  Agenda
                </Link>
                <Link href="/speakers" className="text-black dark:text-white">
                  Speakers
                </Link>
                <Link href="/innovatex" className="text-black dark:text-white">
                  InnovateX
                </Link>
                <Link href="/explore" className="text-black dark:text-white">
                  Explore
                </Link>
                <Link href="/contact" className="text-black dark:text-white">
                  Contact
                </Link>
                <div className="flex gap-4 items-center text-base">
                  <Link
                    href="/register"
                    className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full border border-black dark:border-white hover:bg-background dark:hover:bg-background hover:text-black dark:hover:text-white transition-all duration-150 text-xl lg:text-base"
                  >
                    Register
                  </Link>
                  <ThemeSwitcher />
                </div>
              </header>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
