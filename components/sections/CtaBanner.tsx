"use client";

import Link from "next/link";
import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-navy" />

      {/* Background photo for depth */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(27,111,238,0.15) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 70% 50%, rgba(0,201,167,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          Ready to see what your business qualifies for?
        </h2>
        <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
          Five minutes. No credit impact. Real options from real lenders.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-accent hover:opacity-85 rounded-xl transition-opacity cursor-pointer"
          >
            Start Your Application
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white/80 border border-white/20 hover:border-white/40 rounded-xl transition-colors cursor-pointer"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
