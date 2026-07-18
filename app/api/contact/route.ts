import { NextRequest, NextResponse } from "next/server";

// Contact form handler. Sends via Resend when RESEND_API_KEY is configured;
// falls back to a server log otherwise so the build/deploy never breaks if
// the env var isn't set yet — but you should set it before relying on this
// in production (see README / deployment notes for setup).
export async function POST(req: NextRequest) {
  try {
    const { name, email, message, company } = await req.json();

    // Honeypot: a hidden field real users never fill in. Bots that
    // auto-fill every input will populate it, so silently accept but
    // discard instead of spending an email send on them.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
      // Not configured yet — log so it's still visible in Vercel's
      // function logs, but don't fail the request for the visitor.
      console.log("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set. Submission:", {
        name,
        email,
        message,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send message right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
