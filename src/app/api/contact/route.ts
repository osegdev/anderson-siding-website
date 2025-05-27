// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY in environment');
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { name, email, phone, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Website Contact <onboarding@resend.dev>',
      to: 'andersonsidingconstruction@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Inquiry from AndersonSidingConstruction.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email with Resend:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 502 });
  }
}
