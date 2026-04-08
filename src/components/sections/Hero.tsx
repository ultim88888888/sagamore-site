"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[105vh] flex items-center bg-gradient-to-b from-cream via-cream to-cream-deep overflow-hidden">
      {/* Subtle warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,150,62,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-amber-dark mb-6"
          >
            Business Funding, Built on Trust
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-[1.15] mb-6"
          >
            The capital your business needs.{" "}
            <span className="text-ink-secondary">The partner it deserves.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl mb-10"
          >
            Sagamore Financial Group matches your business with funding that
            fits &mdash; from working capital and SBA loans to equipment
            financing and beyond. One application, multiple options, zero
            guesswork.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
            >
              See What You Qualify For
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-ink border border-rule hover:border-ink-faint hover:bg-cream-deep rounded-lg transition-colors cursor-pointer"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient bleed into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cream-deep pointer-events-none" />
    </section>
  );
}
