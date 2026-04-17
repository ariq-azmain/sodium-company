// src/app/api/auth/send-verification/route.js
import { NextResponse } from 'next/server';
import { z } from 'zod';

import dbConnect from '@/lib/dbConnect';
import VerificationCode from '@/lib/models/VerificationCode';
import { generateVerificationCode } from '@/lib/auth/generateCode';
import { sendVerificationEmail } from '@/lib/email/sendEmail';
import User from '@/app/lib/models/User';

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const validation = emailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.errors },
        { status: 400 }
      );
    }

    const { email } = validation.data;
    await dbConnect();

    // const User = (await import('@/lib/models/User')).default;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 409 }
      );
    }

    // কোড জেনারেট
    const code = generateVerificationCode();

    // পুরনো কোড ডিলিট
    await VerificationCode.deleteMany({ email });

    // নতুন কোড সেভ
    await VerificationCode.create({
      email,
      code,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });

    // ইমেইল পাঠাও
    await sendVerificationEmail(email, code);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Send verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}