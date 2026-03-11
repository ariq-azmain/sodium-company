import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// এখানে আপনার বর্তমান কোডটিকে কাস্টম লজিকের ভেতরে নিয়ে আসা হয়েছে
export default clerkMiddleware((auth, req) => {
  // যদি এনভায়রনমেন্ট ভেরিয়েবলে ক্লার্ক ডিজেবল করা থাকে, তবে বাইপাস করুন
  // এটি আপনার লোকাল ব্যাকএন্ড টেস্ট করার জন্য তৈরি
  if (process.env.NEXT_PUBLIC_CLERK_ENABLED === 'false') {
    return; // অথেন্টিকেশন চেক হবে না, সব রিকোয়েস্ট পারমিট পাবে
  }

  // অন্যথায়, ডিফল্ট ক্লার্ক মিডলওয়্যার সক্রিয় থাকবে
  return clerkMiddleware();
});

export const config = {
  // আপনার দেওয়া অরিজিনাল ম্যাচিং কনফিগারেশন, যা এখানে সুরক্ষিত আছে
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
