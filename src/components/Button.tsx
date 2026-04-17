import React from "react";
import Image from "next/image";
import cn from "@/utility/cn";
import { Marker } from "@/components";

type Props = {
   icon: string;
   children: React.ReactNode;
   href: string;
   containerClassName: string;
   onClick: () => void;
   buttonType: "button" | "submit" | "reset";
};

const Inner = () => (
      <>
         <span className="relative flex items-center min-h-[60px] min-w-fit px-4 g5 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden hov">
            <span className="absolute left-[1px]">
               <Marker/>
            </span>

            {icon && (
               <Image
                  fill
                  src={icon}
                  alt="(⁠•⁠‿⁠•⁠)"
                  className="size-10 mr-5 object-contain z-10"
               />
            )}

            <span className="relative z-2 font-poppins base-bold text-[25px] uppercase right-0">
               {children}
            </span>
         </span>

         <span className="glow-before glow-after" />
      </>
   );
const Button = ({
   icon,
   children,
   href,
   containerClassName,
   onClick,
   buttonType
}: Props) => {
   return href ? (
      <a
         className={cn(
            "relative g5 rounded-2xl shadow-500 group",
            containerClassName
         )}
         href={href}
      >
         <Inner />
      </a>
   ) : (
      <button
         className={cn(
            "relative rounded-2xl shadow-lg group",
            containerClassName
         )}
         onClick={onClick}
         type={buttonType}
      >
         <span className="relative flex items-center min-h-[60px] min-w-fit px-4 g5 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden hov">
            <span className="absolute left-[1px]">
               <Marker/>
            </span>

            {icon && (
               <Image
                  fill
                  src={icon}
                  alt="✨"
                  className="size-10 mr-5 object-contain z-10"
               />
            )}

            <span
               className="relative z-2 font-poppins base-bold text-[25px]
        uppercase !m-[7px]"
            >
               {children}
            </span>
         </span>
      </button>
   );
};
export default Button;
