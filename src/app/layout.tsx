import type { Metadata } from "next"
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";


import "./globals.css"
import "@/css/animations.css"

export const metadata: Metadata = {
  title: "SODIUM • %s"
};

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
