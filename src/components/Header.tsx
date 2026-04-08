"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_var(--color-rule-light)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Sagamore Financial Group"
            width={160}
            height={52}
            className="h-10 sm:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                pathname === link.href
                  ? "text-navy"
                  : "text-ink-secondary hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink-secondary hover:text-navy transition-colors cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-rule-light">
          <div className="px-5 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-medium cursor-pointer ${
                  pathname === link.href
                    ? "text-navy"
                    : "text-ink-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="block w-full text-center px-6 py-3 text-sm font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
