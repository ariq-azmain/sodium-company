// src/app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('token', '', { maxAge: 0 });
  response.cookies.set('verification_token', '', { maxAge: 0 });
  return response;
}