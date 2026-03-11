import Image from 'next/image';
import clsx from "clsx";
import { Marker } from "@/components";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
  type
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] min-w-fit px-4 g5 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden hov">
        <span className="absolute left-[1px]">
          <Marker markerFill={markerFill} />
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
  return href ? (
    <a
      className={clsx(
        "relative g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>) : (
    <button
      className={clsx(
        "relative rounded-2xl shadow-lg group",
        containerClassName,
      )}
      onClick={onClick}
      type={type}
    >
      <span className="relative flex items-center min-h-[60px] min-w-fit px-4 g5 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden hov">
        <span className="absolute left-[1px]">
          <Marker markerFill={markerFill} />
        </span>

        {icon && (
          <Image
            fill
            src={icon}
            alt="✨"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-poppins base-bold text-[25px]
        uppercase !m-[7px]">
          {children}
        </span>
      </span>
    </button>
  );
};
export default Button;
