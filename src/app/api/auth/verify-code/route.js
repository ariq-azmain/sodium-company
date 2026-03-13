// src/app/api/auth/verify-code/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import VerificationCode from '@/app/lib/models/VerificationCode';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

const verifySchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const validation = verifySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.errors },
        { status: 400 }
      );
    }

    const { email, code } = validation.data;
    await dbConnect();

    const record = await VerificationCode.findOne({
      email,
      code,
      expiresAt: { $gt: new Date() },
    });

    if (!record) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired code' },
        { status: 400 }
      );
    }

    await VerificationCode.deleteOne({ _id: record._id });

    // Create short-lived verification token (15 min)
    const verificationToken = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    const response = NextResponse.json({ success: true, verified: true });
    response.cookies.set('verification_token', verificationToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60, // 15 minutes
    });

    return response;
  } catch (error) {
    console.error('Verify code error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}