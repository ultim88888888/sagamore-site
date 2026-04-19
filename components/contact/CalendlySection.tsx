"use client";

import { CALENDLY_URL } from "@/lib/config";

/**
 * Calendly scheduling section for the contact page.
 *
 * When CALENDLY_URL is set, renders an iframe embed.
 * When null (pending), renders a CTA card that scrolls to the contact form.
 */
export function CalendlySection() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
          Schedule a Call
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
          Book a free consultation
        </h2>
      </div>

      {CALENDLY_URL ? (
        <div className="rounded-2xl border border-rule-light overflow-hidden bg-white">
          <iframe
            src={CALENDLY_URL}
            title="Schedule a consultation with Sagamore Financial Group"
            className="w-full border-0"
            style={{ height: 660 }}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-azure-pale) 0%, var(--color-accent-pale) 100%)",
          }}
        >
          <div className="w-12 h-12 rounded-full bg-azure/10 flex items-center justify-center mx-auto mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 text-azure"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">
            Want to talk? Book a free consultation
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed mb-6 max-w-md mx-auto">
            Prefer a live conversation? Schedule a time that works for you and
            we will walk through your options together. No pressure, no
            obligation.
          </p>
          <button
            type="button"
            onClick={() => {
              // Must match id="contact-name" in ContactForm.tsx
              document
                .getElementById("contact-name")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
              document.getElementById("contact-name")?.focus();
            }}
            className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-azure hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
          >
            Send Us a Message Instead
          </button>
        </div>
      )}
    </div>
  );
}
