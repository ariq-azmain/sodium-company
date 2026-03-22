'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import { textVariant} from "@/utils/motion";
import { motion } from "framer-motion";

import '@/css/hero.css'
import {CTA} from '@/components';

const Hero = () => {
  
  
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
	const heroSplit = new SplitText(".hero-title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".hero-subtitle", {
	 type: "lines",
	});
	
	gsap.from(heroSplit.chars, {
	 opacity: 0,
	 duration: 0.1,
	 yPercent: 100,
	 ease: "expo.out",
	 stagger: 0.04,
	 delay: 0
	}); 
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
// 	gsap
// 	.timeline({
// 	 scrollTrigger: {
// 		trigger: "#hero",
// 		start: "top top",
// 		end: "bottom top",
// 		scrub: true,
// 	 },
// 	})
// 	.to(".right-leaf", { y: 200 }, 0)
// 	.to(".left-leaf", { y: -200 }, 0)
// 	.to(".arrow", { y: 100 }, 0);
	
// 	const startValue = isMobile ? "top 50%" : "center 60%";
// 	const endValue = isMobile ? "120% top" : "bottom top";
	
// 	let tl = gsap.timeline({
// 	 scrollTrigger: {
// 		trigger: "video",
// 		start: startValue,
// 		end: endValue,
// 		scrub: true,
// 		pin: true,
// 	 },
// 	});
	
// 	videoRef.current.onloadedmetadata = () => {
// 	 tl.to(videoRef.current, {
// 		currentTime: videoRef.current.duration,
// 	 });
// 	};
 }, []);
  
  
  return (
  <section id="home" className="hero overflow-hidden relative">
  <div className="text-content">
    <div className="eyebrow">SODIUM • Modern Tech Community Hub</div>
    <h1
      className="overflow-hidden"
    ><div className="hero-title opacity-100">Building the <span>Future</span><br />Through
    Innovation</div></h1>
    <p
     className='!opacity-100  overflow-hidden selection:bg-[#53f6ff]
     selection:text-[#02031b]'
    ><div className="overflow-hidden hero-subtitle">
    We manage IT, Media, and Gaming departments while empowering members through competitions, content creation, and
      tech development.
    </div>
      </p>
      <div className="flex justify-left items-start h-[180px]
      w-[350px] overflow-hidden">
    <CTA 
    text="Become a part of our community"
    href="/ragister"/>
      </div>
    <img src="images/hero.png" className="hero-logo" alt="Floating SODIUM logo"/>
    </div>
  </section>
  )
}

export default Hero