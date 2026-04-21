/**
 * Trust badges — small reassurance signals near conversion points.
 * Horizontal layout on desktop, wraps on mobile.
 * Muted styling so it reassures without dominating.
 */

const badges = [
  {
    label: "No Hard Credit Pull",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
        <path
          d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27 5.23 15.72l.91-5.33L2.27 6.62l5.34-.78L10 1z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "256-bit SSL Encrypted",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
        <rect x="3" y="9" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 9V6a4 4 0 118 0v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "24-Hour Decisions",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 5v5l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "4,000+ Businesses Funded",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
        <path
          d="M3 17l4-4m0 0l3 3 7-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

interface TrustBadgesProps {
  /** Use "dark" on dark backgrounds (hero, navy sections) */
  variant?: "light" | "dark";
}

export function TrustBadges({ variant = "light" }: TrustBadgesProps) {
  const textColor = variant === "dark" ? "text-white/40" : "text-ink-tertiary";
  const iconColor = variant === "dark" ? "text-white/50" : "text-success";

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`flex items-center gap-1.5 text-xs ${textColor}`}
        >
          <span className={iconColor}>{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
