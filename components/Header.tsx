"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/apply", label: "Apply" },
  { href: "/contact", label: "Contact" },
];

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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/shield.png"
            alt="Sagamore Financial Group"
            width={36}
            height={37}
            className="h-9 w-auto"
            priority
          />
          <span className="text-navy font-semibold text-base tracking-tight hidden sm:block">
            Sagamore Financial
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-navy"
                  : "text-ink-secondary hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-amber hover:opacity-85 rounded-lg transition-opacity duration-150 cursor-pointer"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
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
        <div className="md:hidden fixed inset-0 top-16 bg-cream/98 backdrop-blur-md z-40">
          <div className="px-5 py-8 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-lg font-medium cursor-pointer ${
                  pathname === link.href ? "text-navy" : "text-ink-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="block w-full text-center px-6 py-3.5 text-base font-semibold text-white bg-amber hover:opacity-85 rounded-xl transition-opacity cursor-pointer mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
