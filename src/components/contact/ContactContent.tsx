"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canSubmit =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-cream via-cream to-cream-deep">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-amber-dark mb-4">
            Contact Us
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy leading-tight mb-5">
            We are here to help.
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-2xl">
            Have a question about funding options, need help with an
            application, or just want to talk through your situation? Reach out
            and our team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:info@sagamorefinancialgroup.com"
                    className="text-navy font-medium hover:text-amber-dark transition-colors cursor-pointer"
                  >
                    info@sagamorefinancialgroup.com
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary mb-3">
                    Business Hours
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">
                    Monday &ndash; Friday
                    <br />
                    9:00 AM &ndash; 6:00 PM ET
                  </p>
                </div>

                {/* Response time */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-tertiary mb-3">
                    Response Time
                  </h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">
                    We respond to all inquiries within one business day. For
                    urgent funding needs, mention it in your message and we will
                    prioritize your request.
                  </p>
                </div>

                {/* Apply CTA */}
                <div className="bg-cream-deep rounded-xl p-6 border border-rule-light">
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">
                    Ready to apply?
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                    If you already know you need funding, skip the inquiry and go
                    straight to our application. One form, multiple options.
                  </p>
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
                  >
                    Start Application
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-rule-light text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-success">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl font-700 text-navy mb-3">
                    Message Sent
                  </h2>
                  <p className="text-ink-secondary leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your message
                    and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-rule-light"
                >
                  <h2 className="font-display text-xl font-semibold text-navy mb-1">
                    Send us a message
                  </h2>
                  <p className="text-sm text-ink-secondary mb-6">
                    Fields marked with an asterisk are required.
                  </p>

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-500 text-ink mb-1.5">
                        Full Name
                        <span className="text-error ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-rule text-ink bg-white placeholder:text-ink-faint focus:border-amber focus:ring-1 focus:ring-amber/30 outline-none transition-colors text-sm"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-500 text-ink mb-1.5">
                          Email
                          <span className="text-error ml-0.5">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-rule text-ink bg-white placeholder:text-ink-faint focus:border-amber focus:ring-1 focus:ring-amber/30 outline-none transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-500 text-ink mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-2.5 rounded-lg border border-rule text-ink bg-white placeholder:text-ink-faint focus:border-amber focus:ring-1 focus:ring-amber/30 outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-500 text-ink mb-1.5">
                        Message
                        <span className="text-error ml-0.5">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Tell us about your business and what you are looking for..."
                        className="w-full px-4 py-2.5 rounded-lg border border-rule text-ink bg-white placeholder:text-ink-faint focus:border-amber focus:ring-1 focus:ring-amber/30 outline-none transition-colors text-sm resize-none leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-rule-light">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!canSubmit || submitting}
                      className={
                        !canSubmit || submitting
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
