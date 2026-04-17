'use client';
import { textVariant, showIn } from '@/utility/motion.ts'

import { motion } from "framer-motion"
import '@/css/summary.css';

const Summary = () => {
  // const pRef = useRef();
/*   const randerBodyText = (text) => {
    const wards = text.split(' ');
    return wards.map((ward) => (
      <motion.span 
      variants={zoomIn(0.2999, 0.8 )}
      className="ward"
      >{ward + "\u00A0" }</motion.span>
    ));
  };
useGSAP(()=>{
     const timeline = gsap.timeline({
       scrollTrigger: {
        trigger: "#body-text",
        srub: 1.5,
      }
    });
    timeline.to(".ward", {
        color: "#fff",
        fontWidth: 900,
        textAling: 'center',
        opacity: 1,
        start: 'center center',
        end: "center 70%",
        ease: 'power1.inOut'
    })
  },[])
 
  /* useGSAP(() => {
//     const laters = gsap.utils.toArray(pRef.current.children);
//     laters.forEach((later) => {
      gsap.to("#body-text span", {
        // fontWidth: 900,
//         color: "#fff",
        opacity: 1,
        scrollTrigger: {
          trigger: later,
          start: 'center center',
          end: 'top 70%',
          scrub: true
        },
        ease: 'power1.inOut'
      })
  }, [])
  */
  
  return (
    <section>
      <br />
      <br />
      <br />
      <div className="summary-container">
        <div className="summary-img-container relative overflow-hidden">
          <img
            src="/images/bg-outlines.svg"
            width={960}
            height={380}
            alt="outline"
            className="relative z-2"
          />
          <img
            src="/images/bg-outlines-fill.png"
            width={960}
            height={380}
            alt="outline"
            className="absolute inset-1 opacity-25 mix-blend-soft-light"
          />
        </div>
        <div className="summary-text-container relative">
        <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider text-center">Overview</p>
          <motion.h1 
          className="summary-head-text"
          variants={textVariant("bottom",0.3)}
          >
            <span className="text-gradient">SODIUM:</span> Morden Tech Hub
          </motion.h1>
          <br />
          <motion.p
          className="summary-body-text"
          id="body-text"
          variants={showIn(0.6, 1.3)}
          >Lorem ipsum dolor sit, amet consecteturadipisicing elit. Adipisci, qui ab! Commodi quam maiores,harum velit vitae impedit consequuntur a blanditiis distinctio, quisquam dolores id atque veritatis adipisci qui modi delectus est corrupti sunt quasi? Unde tempora quisquam nam voluptatum numquam. Similique itaque ex  tenetur, hic id commodi laborum voluptatum quo consequatur blanditiis in voluptates unde reiciendis?</motion.p>
        </div>
      </div>
    </section>
  )
}

export default Summary