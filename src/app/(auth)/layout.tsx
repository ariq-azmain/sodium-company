import type { Metadata } from "next";
import React from "react";

import "../globals.css";
import "@/css/animations.css";
import { Footer, BG, RegisterHeader } from "@/layouts";

export const metadata: Metadata = {
   title: "authentication"
};
export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <RegisterHeader />
         <BG />
         {children}
         <Footer />
      </>
   );
}
