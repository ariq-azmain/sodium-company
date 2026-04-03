"use client";

import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { navLinks } from "@/constant";

const NavBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      <nav className="flex justify-between items-center !p-4">
        <Link href="/">
          <div className="logo h-full flex items-center overflow-y-hidden">
            <img
              src="/images/icons/logo.png"
              alt="SODIUM logo"
              className="h-[65px] w-[65px] md:h-[80px] md:w-[80px]"
            />
            <span className="font-bold">SODUM</span>
          </div>
        </Link>

        {!isMobile ? (
          <ul className="flex !mr-2">
            {navLinks.map(({ name, href, id }) => (
              <li key={id}>
                <Link href={href} className="NavLink !overflow-visible">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[5001] flex flex-col justify-center items-center w-10 h-10 gap-[6px] !mr-3"
            aria-label="Toggle menu"
          >
            <span
              className={`
                block h-[3px] w-6 rounded-full
                bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                transition-all duration-300 origin-center
                ${isOpen ? "rotate-45 translate-y-[8.8px]" : ""}
              `}
            />
            <span
              className={`
                block h-[3px] w-6 rounded-full
                bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                transition-all duration-300
                ${isOpen ? "opacity-0 scale-x-0" : ""}
              `}
            />
            <span
              className={`
                block h-[3px] w-6 rounded-full
                bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                transition-all duration-300 origin-center
                ${isOpen ? "-rotate-45 -translate-y-[8.8px]" : ""}
              `}
            />
          </button>
        )}
      </nav>

      {isMobile && (
        <div
          className={`
            fixed left-0 right-0 w-full
            z-[4999]
            transition-all duration-300 ease-in-out
            ${isOpen
              ? "top-[100px] opacity-100 pointer-events-auto"
              : "top-[80px] opacity-0 pointer-events-none"
            }
          `}
        >
          <div
            className="
              mx-3 rounded-2xl overflow-hidden
              border border-[var(--glass-border)]
              backdrop-blur-[16px]
              bg-[rgba(0,0,0,0.6)]
              shadow-[0_8px_32px_rgba(0,0,0,0.5)]
            "
          >

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--purple)] to-transparent opacity-70" />

            <ul className="list-none !py-2">
              {navLinks.map(({ name, href, id }, index) => (
                <li key={id} onClick={() => setIsOpen(false)}>
                  <Link
                    href={href}
                    className="
                      group relative flex items-center gap-3
                      !px-6 !py-4 w-full
                      text-white/70 text-lg font-black
                      hover:text-white
                      transition-colors duration-200
                    "
                  >

                    <span
                      className="
                        absolute left-0 top-1/2 -translate-y-1/2
                        w-0 h-6 rounded-r-full
                        bg-gradient-to-b from-[var(--purple)] to-[var(--blue)]
                        group-hover:w-[3px]
                        transition-all duration-300
                      "
                    />

                    <span className="text-xs font-bold text-[var(--purple)] opacity-60 w-4 shrink-0">
                      0{index + 1}
                    </span>

                    {name}

                    <span className="
                      !ml-auto !opacity-100
                      translate-x-0
                      transition-all duration-200 text-white text-sm
                    ">
                      →
                    </span>
                  </Link>

                  {index < navLinks.length - 1 && (
                    <div className="!mx-6 h-px bg-[var(--glass-border)]" />
                  )}
                </li>
              ))}
            </ul>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent opacity-40" />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
