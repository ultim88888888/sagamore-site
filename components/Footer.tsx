import Link from "next/link";
import { LogoMark } from "@/components/Logo";

const footerLinks = {
  Products: [
    { label: "Line of Credit", href: "/services/line-of-credit" },
    { label: "Term Loans", href: "/services/term-loans" },
    { label: "SBA Loans", href: "/services/sba-loans" },
    { label: "Equipment Financing", href: "/services/equipment-financing" },
    { label: "Commercial Mortgage", href: "/services/commercial-mortgage" },
    { label: "All Services", href: "/services" },
  ],
  Company: [
    { label: "Apply Now", href: "/apply" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 cursor-pointer">
              <LogoMark size={32} />
              <span className="text-white font-semibold text-base tracking-tight">
                Sagamore Financial Group
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
              Connecting growing businesses with the right capital since day one.
              Lines of credit, term loans, SBA, equipment financing, and more.
            </p>
            <p className="text-sm text-white/50">
              <a
                href="mailto:info@sagamorefinancialgroup.com"
                className="hover:text-white/80 transition-colors cursor-pointer"
              >
                info@sagamorefinancialgroup.com
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white/80 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Sagamore Financial Group. All rights reserved.
          </p>
          <p className="text-xs text-white/30 max-w-lg text-center sm:text-right leading-relaxed">
            Sagamore Financial Group is a commercial loan brokerage. We are not a direct lender.
            All lending decisions are made by our lending partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
