// src/app/lib/auth/middleware.js
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export function verifyToken(request) {
  const token = request.cookies.get('token')?.value;
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

export function withAuth(handler, options = {}) {
  return async (request, context) => {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    request.user = user;
    return handler(request, context);
  };
}