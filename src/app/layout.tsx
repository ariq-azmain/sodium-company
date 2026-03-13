import type { Metadata } from "next"
import React from 'react'

import "./globals.css"
import "@/css/animations.css"
import NavBar from '@/layouts/NavBar.jsx'
import Footer from '@/layouts/Footer.jsx'
import BG from '@/layouts/BG.jsx'

export const metadata: Metadata = {
  title: "SODIUM • Morden Tech Hub",
  description: "A Website for SODIUM Company",
};


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
