"use client";

import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Agenda",
    href: "/agenda",
  },
  {
    title: "Speakers",
    href: "/speakers",
  },
  {
    title: "InnovateX",
    href: "/innovatex",
  },
  {
    title: "Explore",
    href: "/explore",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="py-8 flex flex-col xl:flex-row justify-between items-center gap-6">
          <Link href="/">
            <motion.h3 className="text-5xl md:text-8xl xl:text-9xl bg-center bg-clip-text overflow-hidden">
              Te<span className="text-blue-900 dark:text-blue-700">X</span>
              cellence
              <span className="text-blue-900 dark:text-blue-700">&apos;</span>
              4.0
            </motion.h3>
          </Link>

          <ul className="flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              TeXcellence Conference
            </Link>
          </span>

          <div className="flex items-center gap-3">
            <p>Brought to you by</p>
            <Link href={"https://cwg-plc.com/"} target="_blank">
              <Logo />
            </Link>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link
              href="https://www.youtube.com/@TheTexcellenceConference/videos"
              target="_blank"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/texcellenceconference/"
              target="_blank"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/Texcellenceconference/"
              target="_blank"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="tel:07074699822" target="_blank">
              <Phone className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
