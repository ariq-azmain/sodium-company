import type { Metadata } from "next";
import React from "react";

import { Alert } from "@/components";
import "./globals.css";
import "@/css/animations.css";

export const metadata: Metadata = {
   title: "SODIUM • %s"
};
export default async function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            {" "}
            <Alert />
            {children}
         </body>
      </html>
   );
}
