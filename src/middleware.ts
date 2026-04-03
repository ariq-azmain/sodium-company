// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// JWT_SECRET কে Uint8Array-এ convert করা হচ্ছে — jose-র requirement
function getSecret(): Uint8Array {
   const secret = process.env.JWT_SECRET;
   if (!secret) {
      throw new Error("JWT_SECRET environment variable is not set");
   }
   return new TextEncoder().encode(secret);
}

// Token verify করার core function
// সফল হলে payload return করে, ব্যর্থ হলে null
async function verifyToken(token: string): Promise<boolean> {
   try {
      await jwtVerify(token, getSecret());
      return true;
   } catch {
      // Token invalid, expired, tampered, বা signature mismatch — সব ক্ষেত্রেই false
      return false;
   }
}

// Protected routes যেখানে valid JWT token থাকা আবশ্যক
const PROTECTED_ROUTES = [
   "/member-dashboard",
   "/profile",
   "/role",
   "/application",
];

export async function middleware(request: NextRequest) {
   const { pathname } = request.nextUrl;

   // Check: এই path কি protected?
   const isProtected = PROTECTED_ROUTES.some((route) =>
      pathname.startsWith(route)
   );

   if (!isProtected) {
      return NextResponse.next();
   }

   // Step 1: request থেকে cookie পড়া (response থেকে নয়!)
   const token = request.cookies.get("token")?.value;

   // Step 2: Cookie নেই — redirect
   if (!token) {
      const loginUrl = new URL("/authentication", request.url);
      // কোথা থেকে redirect হয়েছে তা জানাতে callbackUrl যোগ করা হচ্ছে
      // যাতে login-এর পর সেই page-এ ফেরত যাওয়া যায়
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
   }

   // Step 3: Cookie আছে কিন্তু valid কিনা verify করো
   // এটাই মূল সুরক্ষা — manually set করা fake token এখানে ধরা পড়বে
   const isValid = await verifyToken(token);

   if (!isValid) {
      // Invalid বা expired token — cookie মুছে login-এ পাঠাও
      const loginUrl = new URL("/authentication", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);

      const response = NextResponse.redirect(loginUrl);

      // Expired/invalid cookie পরিষ্কার করে দাও
      response.cookies.set("token", "", {
         httpOnly: true,
         maxAge: 0,
         path: "/",
      });

      return response;
   }

   // Token valid — request proceed করতে দাও
   return NextResponse.next();
}

// Next.js-কে বলছি কোন path-এ এই middleware চালাতে হবে।
// `config.matcher` ছাড়া middleware সব route-এ চলে (static files সহ),
// যা performance এর জন্য ক্ষতিকর।
export const config = {
   matcher: [
      "/member-dashboard/:path*",
      "/profile/:path*",
      "/role/:path*",
      "/application/:path*",
   ],
};
