import Image from "next/image";

/**
 * Sagamore mark — shield with S letterform and three stars.
 * Matches the brand shield logo: blue shield, white S, three stars above.
 * Uses PNG asset for visual fidelity of the serif S and star details.
 */
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/shield.png"
      alt=""
      width={size}
      height={size}
      className={`object-contain ${className}`}
      aria-hidden="true"
      priority
    />
  );
}

/**
 * Full logo lockup — mark + wordmark.
 * Pass `textClass` to control wordmark color in different contexts
 * (e.g. "text-white" on dark hero pages). Defaults to dark text.
 */
export function LogoFull({
  className = "",
  textClass = "text-ink",
}: {
  className?: string;
  textClass?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={36} />
      <span className={`font-semibold text-base tracking-tight hidden sm:block ${textClass}`}>
        Sagamore Financial
      </span>
    </div>
  );
}
