'use client';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { warks } from "@/constant";
import { textVariant } from "@/utils/motion";

const WarkCard = ({ wark }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#cec1aa",
        borderRadus: '50px'
      }}
      contentArrowStyle={{ borderRight: "7px solid  #531a54" }}
      iconStyle={{ background: wark.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={wark.icon}
            alt={wark.title}
            className='w-[50%] h-[50%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{wark.title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {wark.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#f3fffc] font-serif font-extralight text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Wark = () => {
  return (
    <>
      <motion.div variants={textVariant(null, 0)}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase
        tracking-wider text-center selection:text-[#ffffff00]
        selection:bg-[#ffffff00]'>
          What We have done so far
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px]
        xs:text-[40px] text-[30px] text-center selection:bg-black
        selection:text-[#cefeff]'>
          Our Works.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {warks.map((wark, index) => (
            <WarkCard
              key={`wark-${index}`}
              wark={wark}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Wark