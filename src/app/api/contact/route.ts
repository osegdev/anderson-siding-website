import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

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
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
