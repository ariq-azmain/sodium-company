import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import User from '@/app/lib/models/User';

export async function POST(req) {
  const headerPayload = headers();
  const svixId = headerPayload.get('svix-id');
  const svixTimestamp = headerPayload.get('svix-timestamp');
  const svixSignature = headerPayload.get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new NextResponse('Missing svix headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  let evt;  
  try {
    evt = wh.verify(body, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    });
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return new NextResponse('Invalid signature', { status: 400 });
  }

  const eventType = evt.type;
  
  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, username, first_name, last_name, image_url } = evt.data;

    await dbConnect();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        clerkId: id,
        email: email_addresses[0]?.email_address,
        username: username || email_addresses[0]?.email_address.split('@')[0],
        firstName: first_name,
        lastName: last_name,
        profileImageUrl: image_url,
        provider: evt.data.provider || 'unknown',
        lastLogin: new Date(),
        updatedAt: new Date()
      },
      { upsert: true, new: true }
    );

    console.log('User synced to MongoDB:', user);
  }

  return NextResponse.json({ success: true });
}