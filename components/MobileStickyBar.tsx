"use client";

import Link from "next/link";
import { PHONE_NUMBER, getPhoneHref } from "@/lib/config";

/**
 * Fixed-bottom CTA bar visible only on mobile (hidden md+).
 * Left: "Call Now" — links to tel: when phone configured, /contact when not.
 * Right: "Apply Now" — links to /apply with accent bg.
 * z-index 40 (below header at 50, above page content).
 */
export function MobileStickyBar() {
  const phoneHref = getPhoneHref();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Safe area spacing for notch devices */}
      <div className="flex bg-white border-t border-rule-light pb-[env(safe-area-inset-bottom)]">
        {/* Call Now */}
        <Link
          href={phoneHref ?? "/contact"}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-azure transition-colors cursor-pointer"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              d="M2 3.5A1.5 1.5 0 013.5 2h2.879a1.5 1.5 0 011.46 1.144l.588 2.352a1.5 1.5 0 01-.735 1.647l-1.073.537a10.052 10.052 0 005.704 5.704l.537-1.073a1.5 1.5 0 011.647-.735l2.352.588A1.5 1.5 0 0118 13.621V16.5a1.5 1.5 0 01-1.5 1.5A14.5 14.5 0 012 3.5z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {PHONE_NUMBER ? "Call Now" : "Contact Us"}
        </Link>

        {/* Divider */}
        <div className="w-px bg-rule-light" />

        {/* Apply Now */}
        <Link
          href="/apply"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-accent cursor-pointer"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
