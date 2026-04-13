import type { Metadata } from "next";
import { ApplicationForm } from "@/components/apply/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply for Funding",
  description:
    "Apply for business funding through Sagamore Financial Group. One application, multiple lending options.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-warm) 70%, var(--color-surface-deep) 100%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
              Apply for Funding
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3 tracking-tight">
              Start your application
            </h1>
            <p className="text-ink-secondary leading-relaxed">
              One application, multiple lending options. Takes about five minutes.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
