"use client";

import { useState } from "react";
import { gsap } from "@/lib/gsap";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      company: (form.elements.namedItem("company") as HTMLInputElement)
        ?.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
      gsap.fromTo(
        "[data-form-success]",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Honeypot — hidden from sighted users and skipped in tab order;
          bots that auto-fill every field will populate it and get
          silently discarded server-side. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />

      <div>
        <label htmlFor="name" className="eyebrow block mb-3">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-transparent border-b border-gray-700 focus:border-white transition-colors py-3 outline-none text-lg"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="eyebrow block mb-3">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border-b border-gray-700 focus:border-white transition-colors py-3 outline-none text-lg"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border-b border-gray-700 focus:border-white transition-colors py-3 outline-none text-lg resize-none"
          placeholder="What are you building?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start px-8 py-4 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p data-form-success className="text-sm text-gray-400">
          Thanks — that landed in my inbox. I&apos;ll reply within a couple of
          days.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-gray-400">
          Something went wrong on my end. Feel free to email me directly
          instead — the address is below.
        </p>
      )}
    </form>
  );
}
