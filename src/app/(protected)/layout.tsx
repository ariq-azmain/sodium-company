import type { Metadata } from "next"
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";


import "../globals.css"
import "@/css/animations.css"
import {NavBar, Footer, BG, ProtectedNav} from '@/layouts'


export const metadata: Metadata = {
  title: "SODIUM • Morden Tech Hub",
  description: "A Website for SODIUM Company",
};

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProtectedNav/>
        <BG />
        {children}
        <Footer />
      </body>
    </html>
  );
}
