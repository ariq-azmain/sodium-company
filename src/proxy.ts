import { NextResponse as res } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
   if (req.nextUrl.pathname === "/member-dashboard") {
      const response = res.json({ success: true });
      const tocken = response.cookies.get("token")?.value;
      if (!tocken) {
         return res.redirect(new URL("/authentication", req.nextUrl));
      }
   }
   if (req.nextUrl.pathname === "/role") {
      const response = res.json({ success: true });
      const tocken = response.cookies.get("token")?.value;
      if (!tocken) {
         return res.redirect(new URL("/authentication", req.nextUrl));
      }
   }
   if (req.nextUrl.pathname === "/application") {
      const response = res.json({ success: true });
      const tocken = response.cookies.get("token")?.value;
      if (!tocken) {
         return res.redirect(new URL("/authentication", req.nextUrl));
      }
   }
   if (req.nextUrl.pathname === "/profile") {
      const response = res.json({ success: true });
      const tocken = response.cookies.get("token")?.value;
      if (!tocken) {
         return res.redirect(new URL("/authentication", req.nextUrl));
      }
   }
}
