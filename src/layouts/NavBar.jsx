"use client";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import { navLinks } from "@/constant";

const NavBar = () => {
   const isMobile = useMediaQuery({ maxWidth: 677 });
   const [isOpen, setIsOpen] = useState(false);
   return (
      <header>
         <nav>
            <Link href="#">
               <div className="logo h-full bg-amber-300 overflow-y-hidden">
                  <img
                     src="/images/icons/logo.png"
                     alt="logo"
                     className="h-[65px]
            w-[65px] md:h-[80px] md:w-[80px] !ml-[30px]"
                  />
                  <span>SODUM</span>
               </div>
            </Link>

            <ul>
               {!isMobile ? (
                  navLinks.map(({ name, href, id }) => (
                     <li key={id}>
                        <Link href={href} className="NavLink">
                           {name}
                        </Link>
                     </li>
                  ))
               ) : (
                  <>
                     <button onClick={() => setIsOpen(!isOpen)}>
                        <img
                           src="/images/icons/hamburger.png"
                           alt="menu"
                           className="h-[70px] w-[70px] absolute top-[-10px] right-[-10px]"
                        />
                     </button>
                  </>
               )}
            </ul>
         </nav>
                     {isOpen && (
                        <div className="fixed bg-black p-4 w-[100vw] top-[100px]">
                           {navLinks.map(({ name, href, id }) => (
                              <li className="w-full h-fit bg-black text-center
                              !my-[20px]" key={id}>
                                 <Link href={href} className="block">
                                    {name}
                                 </Link>
                              </li>
                           ))}
                        </div>
                     )}
      </header>
   );
};

export default NavBar;
