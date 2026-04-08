import Link from "next/link";

const fundingLinks = [
  { href: "/services#working-capital", label: "Lines of Credit" },
  { href: "/services#working-capital", label: "Term Loans" },
  { href: "/services#specialty", label: "SBA Loans" },
  { href: "/services#asset-based", label: "Equipment Financing" },
  { href: "/services#real-estate", label: "Commercial Mortgage" },
];

const companyLinks = [
  { href: "/services", label: "All Services" },
  { href: "/apply", label: "Apply for Funding" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-semibold text-white mb-3">
              Sagamore Financial Group
            </p>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Connecting growing businesses with the right capital since day one.
              Your growth, our mission.
            </p>
          </div>

          {/* Funding Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Funding Solutions
            </h4>
            <ul className="space-y-2.5">
              {fundingLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-sm text-white/60">
              <a
                href="mailto:info@sagamorefinancialgroup.com"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                info@sagamorefinancialgroup.com
              </a>
              <p>Monday &ndash; Friday, 9am &ndash; 6pm ET</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Sagamore Financial Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors cursor-pointer">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors cursor-pointer">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
