"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/Logo";
import { categories } from "@/lib/products";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_var(--color-rule-light)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={closeMobile}
        >
          <LogoMark size={36} />
          <span className="text-ink font-semibold text-base tracking-tight hidden sm:block">
            Sagamore Financial
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer ${
                isServicesActive
                  ? "text-azure"
                  : "text-ink-secondary hover:text-ink"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white rounded-2xl border border-rule-light shadow-xl shadow-black/8 overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-px bg-rule-light/50">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="bg-white p-5"
                    >
                      <Link
                        href={`/services#${category.id}`}
                        className="text-xs font-semibold tracking-widest uppercase text-ink-tertiary mb-3 block hover:text-azure transition-colors cursor-pointer"
                      >
                        {category.title}
                      </Link>
                      <ul className="space-y-1">
                        {category.products.map((product) => (
                          <li key={product.slug}>
                            <Link
                              href={`/services/${product.slug}`}
                              className={`block px-2.5 py-1.5 -mx-1 rounded-lg text-sm transition-colors cursor-pointer ${
                                pathname === `/services/${product.slug}`
                                  ? "text-azure font-medium"
                                  : "text-ink-secondary hover:text-ink hover:bg-surface-warm"
                              }`}
                            >
                              <span className="block font-medium text-[13px]">
                                {product.name}
                              </span>
                              <span className="block text-[11px] text-ink-tertiary mt-0.5">
                                {product.range}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* Footer link */}
                <div className="border-t border-rule-light px-5 py-3 bg-surface">
                  <Link
                    href="/services"
                    className="text-xs font-medium text-azure hover:text-azure-dark transition-colors cursor-pointer"
                  >
                    View all 12 products &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/apply"
            className={`text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer ${
              pathname === "/apply"
                ? "text-azure"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            Apply
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer ${
              pathname === "/contact"
                ? "text-azure"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            Contact
          </Link>

          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-azure hover:opacity-85 rounded-lg transition-opacity duration-150 cursor-pointer"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink-secondary hover:text-ink transition-colors cursor-pointer"
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
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-5 py-8 space-y-1">
            {/* Services with expandable sub-nav */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between w-full text-lg font-medium py-2 cursor-pointer ${
                  isServicesActive ? "text-azure" : "text-ink-secondary"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pl-2 pb-3 space-y-4 mt-2">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <p className="text-xs font-semibold tracking-widest uppercase text-ink-tertiary mb-2 px-2">
                        {category.title}
                      </p>
                      <ul className="space-y-0.5">
                        {category.products.map((product) => (
                          <li key={product.slug}>
                            <Link
                              href={`/services/${product.slug}`}
                              onClick={closeMobile}
                              className={`block px-2 py-1.5 text-sm rounded-lg cursor-pointer ${
                                pathname === `/services/${product.slug}`
                                  ? "text-azure font-medium bg-azure-pale/40"
                                  : "text-ink-secondary"
                              }`}
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href="/services"
                    onClick={closeMobile}
                    className="block px-2 text-sm font-medium text-azure cursor-pointer"
                  >
                    View all services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/apply"
              onClick={closeMobile}
              className={`block text-lg font-medium py-2 cursor-pointer ${
                pathname === "/apply" ? "text-azure" : "text-ink-secondary"
              }`}
            >
              Apply
            </Link>

            <Link
              href="/contact"
              onClick={closeMobile}
              className={`block text-lg font-medium py-2 cursor-pointer ${
                pathname === "/contact" ? "text-azure" : "text-ink-secondary"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/apply"
              onClick={closeMobile}
              className="block w-full text-center px-6 py-3.5 text-base font-semibold text-white bg-azure hover:opacity-85 rounded-xl transition-opacity cursor-pointer mt-6"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
