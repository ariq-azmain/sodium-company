// src/app/api/auth/me/route.js
// useCurrentUser hook এই route কল করে কারেন্ট ইউজারের ডেটা আনে।
// Token httpOnly cookie-তে থাকে, তাই client থেকে পড়া যায় না —
// server-side এই route-এই verify করতে হয়।

import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth/middleware';
import dbConnect from '@/lib/dbConnect';
import User from '@/lib/models/User';

export async function GET(request) {
  // ১. Cookie থেকে token পড়ে verify করো
  const decoded = verifyToken(request);

  if (!decoded) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    await dbConnect();

    // ২. Token-এর userId দিয়ে DB থেকে fresh user data আনো
    //    (password বাদ দিয়ে — select('-password'))
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Me route error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}