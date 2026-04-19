"use client";

import { useState, type FormEvent } from "react";

/**
 * Contact form using formsubmit.co.
 * No PII stored on our infrastructure.
 */
const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/info@sagamorefinancialgroup.com";

const FUNDING_INTERESTS = [
  "Line of Credit",
  "Term Loan",
  "SBA Loan",
  "Equipment Financing",
  "Commercial Mortgage",
  "Other / Not Sure",
] as const;

const AMOUNT_RANGES = [
  "Under $25K",
  "$25K - $100K",
  "$100K - $500K",
  "$500K+",
] as const;

const inputClass =
  "w-full px-4 py-3 text-sm bg-white border border-rule-light rounded-lg text-ink placeholder:text-ink-faint focus:border-azure focus:ring-1 focus:ring-azure/30 outline-none transition-colors";

const selectClass =
  "w-full px-4 py-3 text-sm bg-white border border-rule-light rounded-lg text-ink focus:border-azure focus:ring-1 focus:ring-azure/30 outline-none transition-colors appearance-none cursor-pointer";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fundingInterest, setFundingInterest] = useState("");
  const [amountRange, setAmountRange] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !fundingInterest || !message) return;

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
          "funding interest": fundingInterest,
          "estimated amount": amountRange || "Not specified",
          message,
          _subject: `New inquiry from ${name} — ${fundingInterest}`,
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
        <h2 className="text-xl font-bold text-ink mb-2">Message sent</h2>
        <p className="text-ink-secondary text-sm">
          We will get back to you within one business day.
        </p>
      </div>
    );
  }

  const isValid = name && email && fundingInterest && message;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-rule-light p-6 sm:p-8"
    >
      <h2 className="text-lg font-bold text-ink mb-6">Send us a message</h2>

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
            className={inputClass}
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
            className={inputClass}
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
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-funding" className="block text-sm font-medium text-ink mb-1.5">
            What type of funding are you interested in?
          </label>
          <div className="relative">
            <select
              id="contact-funding"
              value={fundingInterest}
              onChange={(e) => setFundingInterest(e.target.value)}
              required
              className={`${selectClass} ${!fundingInterest ? "text-ink-faint" : ""}`}
            >
              <option value="" disabled>
                Select a funding type
              </option>
              {FUNDING_INTERESTS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor="contact-amount" className="block text-sm font-medium text-ink mb-1.5">
            Estimated funding amount (optional)
          </label>
          <div className="relative">
            <select
              id="contact-amount"
              value={amountRange}
              onChange={(e) => setAmountRange(e.target.value)}
              className={`${selectClass} ${!amountRange ? "text-ink-faint" : ""}`}
            >
              <option value="">Select an amount range</option>
              {AMOUNT_RANGES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-error">{error}</p>}

      <button
        type="submit"
        disabled={!isValid || submitting}
        className={`mt-6 w-full inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-xl transition-all duration-150 cursor-pointer ${
          isValid && !submitting
            ? "bg-accent text-white hover:opacity-85"
            : "bg-rule-light text-ink-faint cursor-not-allowed"
        }`}
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {/* Reassurance text */}
      <p className="mt-3 text-center text-xs text-ink-faint flex items-center justify-center gap-1.5">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="w-3.5 h-3.5 text-success shrink-0"
          aria-hidden="true"
        >
          <rect x="2" y="7" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M5 7V5a3 3 0 116 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        Your information is encrypted and never shared. We respond within 24 hours.
      </p>
    </form>
  );
}
