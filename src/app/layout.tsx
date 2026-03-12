'use client';
import { useEffect } from 'react';
import type { Metadata } from "next"
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css"
import "@/css/animations.css"
import NavBar from '@/layouts/NavBar.jsx'
import Footer from '@/layouts/Footer.jsx'
import BG from '@/layouts/BG.jsx'

export const metadata: Metadata = {
  title: "SODIUM • Morden Tech Hub",
  description: "A Website for SODIUM Company",
};


useEffect(() => {
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  const handleKeyDown = (e: KeyboardEvent) => {

    if (e.key === 'F12') {
      e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  };

  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <NavBar />
        <BG />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
