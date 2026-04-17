// src/app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function GET() {
      return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 200 }
    );
}