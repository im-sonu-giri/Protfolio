import { NextRequest, NextResponse } from "next/server";

// This route validates and forwards the contact form payload. It's wired
// with a placeholder for Resend (https://resend.com) — the simplest way to
// get transactional email working on Vercel without running your own SMTP.
//
// To make this fully live:
// 1. `npm install resend`
// 2. Create a Resend account, verify a sending domain, and get an API key.
// 3. Add RESEND_API_KEY to your Vercel project's environment variables.
// 4. Uncomment the Resend block below and remove the console.log fallback.
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // --- Fallback used until Resend (or another provider) is wired in ---
    console.log("New contact form submission:", { name, email, message });

    // --- Uncomment once RESEND_API_KEY is set ---
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio Contact <contact@sonugiri.com.np>",
    //   to: "hello@sonugiri.com.np",
    //   replyTo: email,
    //   subject: `New message from ${name}`,
    //   text: message,
    // });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
