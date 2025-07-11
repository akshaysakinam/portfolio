"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileCv,
} from "@tabler/icons-react";
import { FloatingDock } from "./floating-dock";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      if (scrollTop + windowHeight >= fullHeight - 50) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/akshaysakinam",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/in/akshay-sakinam-516502255",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/akshay_sakinam_",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1-bbXTk_JvFb52z5ONe0JHcJVhMSfNZHm/view?usp=sharing",
      target: "_blank", // 👈 add this
    },
  ];

  return (
    <footer
      className={`relative w-full flex flex-col items-center justify-center pt-4 ${
        showDock ? "pb-24" : "pb-8"
      } bg-white dark:bg-black transition-all duration-300`}
    >
      {showDock && (
        <FloatingDock
          items={links}
          desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-lg"
          mobileClassName="fixed bottom-4 right-4 z-50"
        />
      )}

      <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-4">
        &copy; {new Date().getFullYear()} Akshay Kumar. All rights reserved.
      </p>
    </footer>
  );
}
