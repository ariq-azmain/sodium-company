import type { Metadata } from "next"
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";


import "./globals.css"
import "@/css/animations.css"
import NavBar from '@/layouts/NavBar.jsx'
import Footer from '@/layouts/Footer.jsx'
import BG from '@/layouts/BG.tsx'

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
        <NavBar />
        <BG />
        {children}
        <Footer />
      </body>
    </html>
  );
}
