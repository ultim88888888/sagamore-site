/**
 * Sagamore mark — three ascending bars on blue ground.
 * Represents growth, momentum, upward trajectory.
 * Geometric, works at 16x16, no letters.
 */
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1458C2" />
          <stop offset="100%" stopColor="#1B6FEE" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#logo-grad)" />
      <rect x="6" y="18" width="5" height="8" rx="1.5" fill="#00C9A7" />
      <rect x="13.5" y="13" width="5" height="13" rx="1.5" fill="#ffffff" opacity="0.95" />
      <rect x="21" y="7" width="5" height="19" rx="1.5" fill="#00C9A7" />
    </svg>
  );
}

/**
 * Full logo lockup — mark + wordmark.
 */
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={36} />
      <span className="font-semibold text-base tracking-tight hidden sm:block">
        Sagamore Financial
      </span>
    </div>
  );
}
