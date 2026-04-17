"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import "@/css/hero.css";
import { CTA } from "@/components";
import useCurrentUser from "@/hooks/useCurrentUser";
// import { useAlert } from "@/store/alert";

const Hero = () => {
   useGSAP(() => {
      // gsap.registerPlugin(SplitText);
      const heroSplit = new SplitText(".hero-title", {
         type: "chars, words"
      });
      const paragraphSplit = new SplitText(".hero-subtitle", {
         type: "lines"
      });
      heroSplit.chars.forEach(chr => {
         chr.classList.add("gt");
         console.log(chr);
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
         delay: 1
      });
   }, []);
  // const { show, hide } = useAlert();
   const { user, loading, error, isLoggedIn } = useCurrentUser();
   return (
      <section id="home" className="hero overflow-hidden relative">
         {isLoggedIn && (
            <div>
               <Link href="/member-dashboard">Go To Dashboard</Link>
            </div>
         )}
         <div className="text-content">
            <div className="eyebrow">SODIUM • Modern Tech Community Hub</div>
            <h1 className="overflow-hidden">
               <div
                  className="hero-title opacity-100 selection:!bg-[#ffffff00]
    selection:!text-[#15e4ff]"
               >
                  <b>Building the</b>{" "}
                  <span className="marke shadow-slate-500">Future</span>
                  <br />
                  <b>Through Innovation</b>
               </div>
            </h1>
            <p
               className="!opacity-100  overflow-hidden selection:!bg-[#53f6ff] selection:!text-[#02031b]"
            >
               <span className="overflow-hidden hero-subtitle">
                  We manage IT, Media, and Gaming departments while empowering
                  members through competitions, content creation, and tech
                  development.
               </span>
            </p>
            <div
               className="flex justify-left items-start h-[180px]
      w-[350px] !overflow-visible"
            >
               <CTA
                  text="Become a part of our community"
                  href="/authentication"
               />
            </div>
            <img
               src="/images/hero.png"
               className="hero-logo"
               alt="Floating SODIUM logo"
            />
         </div>
{
//         <div className="">
//             <button
//               className="!p-4 !m-10 text-2xl !bg-indigo-800 font-black rounded-full"
//               onClick={() =>
//                   show(
//                     `
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione iusto cumque quam. Iure accusantium dicta pariatur debitis, sunt quaerat aperiam commodi quidem nobis atque asperiores ratione, harum blanditiis, ab aut.
// `,
//                     15000,
//                     "warn"
//                   )
//               }
//             >
//               Show msg
//             </button>
//         </div>
}
      </section>
   );
};

export default Hero;
