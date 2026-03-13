// src/app/api/auth/send-verification/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import VerificationCode from '@/app/lib/models/VerificationCode';
import { generateVerificationCode } from '@/app/lib/auth/generateCode';
import { sendVerificationEmail } from '@/app/lib/email/sendEmail';
import { z } from 'zod';

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

    // ইউজার আগে থেকে রেজিস্টার্ড কিনা চেক (ঐচ্ছিক)
    const User = (await import('@/app/lib/models/User')).default;
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