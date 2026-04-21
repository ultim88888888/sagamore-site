"use client";

import { useState } from "react";
import type { FAQ as FAQItem } from "@/lib/products";
import { JsonLd } from "@/components/JsonLd";

interface FAQProps {
  items: FAQItem[];
  /** Product name for the section heading (e.g. "Line of Credit") */
  productName: string;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-ink-tertiary shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * FAQ accordion with FAQPage JSON-LD schema.
 *
 * Renders questions in an expandable accordion format and injects
 * structured data for search engine FAQ rich results.
 */
export function FAQ({ items, productName }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24">
      <JsonLd data={faqSchema} />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Common questions about {productName}
            </h2>
          </div>

          <div className="divide-y divide-rule-light border-t border-b border-rule-light">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-ink pr-4">
                      {item.question}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isOpen ? "max-h-96 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-ink-secondary leading-relaxed pr-10">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
