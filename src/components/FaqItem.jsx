'use client'
import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";


const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  const active = activeId === item.id;

  return (
    <div className="relative z-[2] !mb-16 !m-[20px]">
      <div
        className="group relative flex cursor-pointer items-center
        justify-between gap-10 !px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact text-[#C8EA80] lg:hidden">
          <br />
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              `h6 text-[#EAEDFF] transition-colors duration-500 md:flex
              md:min-h-20 md:items-center`,
              active && "text-[#2EF2FF]",
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-[#0C1838] shadow-400 transition-all duration-500 group-hover:border-[#1959AD]",
            active && "before:bg-[#2EF2FF] after:rotate-0 after:bg-[#2EF2FF]",
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>


      <SlideDown>
        {activeId === item.id && (
          <div className="body-3 !px-7 !py-3.5 ">
          {item.answer}
          </div>
        )}
      </SlideDown>
      <div
        className={clsx(
          "g5 bottom-0 top-0 left-0 right-0 z-[-1] rounded-3xl opacity-0 ransition-opacity duration-500 absolute h-auto",
          active && "opacity-100",
        )}
      >
        <div className="g4 absolute inset-0.5 z-[-1] rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-[#2EF2FF]" />
      </div>
    </div>
  );
};

export default FaqItem;
