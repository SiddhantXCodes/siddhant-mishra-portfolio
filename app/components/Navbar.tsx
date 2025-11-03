"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`
        fixed bottom-3 left-1/2 -translate-x-1/2 z-50
        flex justify-center items-center gap-3 sm:gap-5 md:gap-7
        px-3 sm:px-5 py-2 sm:py-2.5
        rounded-2xl border-2 border-black
        bg-white/60 backdrop-blur-md shadow-[2px_2px_0_#000000a0]
        transition-transform duration-700 ease-out
        ${animate ? "translate-y-0 rotate-0" : "translate-y-8 rotate-1"}
        animate-wobble
        max-w-[95%]
      `}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="
            relative font-medium text-gray-800
            text-xs sm:text-sm md:text-base
            px-2 sm:px-3 md:px-4 py-1 sm:py-1.5
            rounded-md transition-all duration-300
            hover:bg-[#fff3bf] hover:-translate-y-[1.5px]
            hover:shadow-[1px_1px_0_#000]
          "
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
