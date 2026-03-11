'use client'
import { textVariant} from "@/utils/motion";
import { motion } from "framer-motion";

import '@/css/hero.css'
import {CTA} from '@/components';

const Hero = () => {
  return (
  <section id="home" className="hero overflow-hidden">
  <div className="text-content">
    <div className="eyebrow">SODIUM • Modern Tech Hub</div>
    <motion.h1
      variants={textVariant("bottom",0.3)}
    >Building the <span>Future</span><br />Through Innovation</motion.h1>
    <motion.p
     variants={textVariant("bottom",0.3)} 
     className='!opacity-100'
    >We manage IT, Media, and Gaming departments while empowering members through competitions, content creation, and
      tech development.</motion.p>
    <CTA text="Become a part of our community" href="/login" />
    <img src="images/hero.png" className="hero-logo" alt="Floating SODIUM logo"/>
    </div>
    <img src="/images/herobg.png" alt="bg img" className="hero-bg"/>
  </section>
  )
}

export default Hero