"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinks, navLinks } from "@/constant";

const Footer = () => {
   const copyEmail = () => {
      navigator.clipboard.writeText("company@sodium.com");
   };

   return (
      <footer className="relative bg-amber-950j w-full !mt-32 overflow-hidden">
         <div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r
      from-transparent via-[var(--purple)] to-transparent opacity-75"
         />

         <div className="pointer-events-none absolute -top-32 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--gold)] opacity-[0.06] blur-[1px]" />
         <div className="pointer-events-none absolute -top-20 right-1/4 w-[300px] h-[300px] rounded-full bg-[var(--blue)]  bg-[#383cf2]u opacity-[0.06] blur-[1px]" />

         <div className="container relative z-10 !pt-16 !pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 !pb-12 border-b border-[var(--glass-border)]">
               <div className="flex justify-center">
                  <div className="flex flex-col gap-5">
                     <div className="flex items-center gap-3">
                        <Image
                           src="/images/icons/logo.png"
                           alt="Sodium logo"
                           width={40}
                           height={40}
                           className="object-contain"
                        />
                        <span className="sodium text-2xl font-black tracking-[4px] uppercase">
                           SODIUM
                        </span>
                     </div>
                     <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
                        A modern tech community hub driving innovation across
                        IT, Media, and Gaming.
                     </p>

                     <button
                        onClick={copyEmail}
                        className="
                group flex items-center gap-2 w-fit
                !px-4 !py-2 rounded-xl
                border border-[var(--glass-border)]
                bg-[var(--glass)] backdrop-blur-sm
                text-sm text-white/70
                hover:border-[var(--purple)] hover:text-white
                transition-all duration-300
              "
                        title="Click to copy email"
                     >
                        <svg
                           className="w-4 h-4 text-[var(--purple)] shrink-0"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth={2}
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
                           />
                        </svg>
                        <span>
                           company@<span className="sodium">sodium</span>.com
                        </span>
                        <svg
                           className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity duration-200 shrink-0"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth={2}
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                           />
                        </svg>
                     </button>
                  </div>
               </div>

               <div className="flex justify-center">
                  <div className="flex flex-col gap-4">
                     <h4 className="text-xs font-bold tracking-[3px] uppercase text-[var(--purple)] !mb-2">
                        Quick Links
                     </h4>
                     <ul className="flex flex-col gap-3">
                        {navLinks.map(({ id, name, href }) => (
                           <li key={id}>
                              <Link
                                 href={href}
                                 className="
                      group flex items-center gap-2
                      text-white/60 text-sm font-medium
                      hover:text-white transition-colors duration-200
                    "
                              >
                                 <span className="w-4 h-px bg-[var(--purple)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-6" />
                                 {name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="flex justify-center">
                  <div className="flex flex-col gap-4">
                     <h4 className="text-xs font-bold tracking-[3px] uppercase text-[var(--purple)] !mb-2">
                        Find Us On
                     </h4>
                     <ul className="flex flex-col gap-3">
                        {socialLinks.map(({ id, name, icon, link }) => (
                           <li key={id}>
                              <Link
                                 href={link}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="
                      group flex items-center gap-3 w-fit
                      text-white/60 text-sm font-medium
                      hover:text-white transition-colors duration-200
                    "
                              >
                                 <span
                                    className="
                        flex items-center justify-center
                        w-8 h-8 rounded-lg
                        border border-[var(--glass-border)]
                        bg-[var(--glass)]
                        group-hover:border-[var(--purple)]
                        group-hover:bg-[rgba(168,85,247,0.1)]
                        transition-all duration-300
                      "
                                 >
                                    <Image
                                       src={icon}
                                       alt={name}
                                       width={18}
                                       height={18}
                                       className="object-contain"
                                    />
                                 </span>
                                 {name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 !pt-8">
               <p className="text-white/30 text-xs tracking-wide">
                  © {new Date().getFullYear()}{" "}
                  <span className="sodium">SODIUM</span>. All rights reserved.
               </p>
               <p className="text-white/20 text-xs">
                  Built with passion by <b>Ariq Azmain</b> (professional web
                  devoluper of SODIUM)
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
