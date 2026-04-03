import type { Metadata } from "next"
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";


import "../globals.css"
import "@/css/animations.css"
import {Footer, BG, RegisterHeader} from '@/layouts'

export const metadata: Metadata = {
  title: "authentication"
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
      <RegisterHeader/>
        <BG />
        {children}
        <Footer />
      </body>
    </html>
  );
}
