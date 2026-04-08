"use client";

import { useState, type FormEvent } from "react";

/**
 * Contact form using formsubmit.co.
 * No PII stored on our infrastructure.
 */
const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/info@sagamorefinancialgroup.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          _subject: `New inquiry from ${name}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-rule-light p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-success" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12l5 5L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-navy mb-2">Message sent</h2>
        <p className="text-ink-secondary text-sm">
          We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-rule-light p-6 sm:p-8"
    >
      <h2 className="text-lg font-bold text-navy mb-6">Send us a message</h2>

      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-ink mb-1.5">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 text-sm bg-white border border-rule-light rounded-lg text-ink placeholder:text-ink-faint focus:border-amber focus:ring-0 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-ink mb-1.5">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@company.com"
            className="w-full px-4 py-3 text-sm bg-white border border-rule-light rounded-lg text-ink placeholder:text-ink-faint focus:border-amber focus:ring-0 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-ink mb-1.5">
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 text-sm bg-white border border-rule-light rounded-lg text-ink placeholder:text-ink-faint focus:border-amber focus:ring-0 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-ink mb-1.5">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="w-full px-4 py-3 text-sm bg-white border border-rule-light rounded-lg text-ink placeholder:text-ink-faint focus:border-amber focus:ring-0 transition-colors resize-none"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-error">{error}</p>}

      <button
        type="submit"
        disabled={!name || !email || !message || submitting}
        className={`mt-6 w-full inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-xl transition-all duration-150 cursor-pointer ${
          name && email && message && !submitting
            ? "bg-amber text-white hover:opacity-85"
            : "bg-rule-light text-ink-faint cursor-not-allowed"
        }`}
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
