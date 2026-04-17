import type { Metadata } from "next";

import "../../globals.css";
import "@/css/animations.css";
import { Footer, RegisterHeader } from "@/layouts";

export const metadata: Metadata = {
   title: "authentication admin"
};
export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <RegisterHeader />
            <br />
            <br />
            <br />
            <br />
            {children}
            <Footer />
         </body>
      </html>
   );
}
