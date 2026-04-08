import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-amber text-white hover:opacity-85 font-semibold",
  secondary:
    "bg-navy text-white hover:opacity-85 font-semibold",
  outline:
    "border border-rule text-ink hover:border-ink font-medium bg-transparent",
  ghost:
    "text-ink-secondary hover:text-navy font-medium bg-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-lg",
  lg: "px-8 py-3.5 text-base rounded-xl",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-150 cursor-pointer";
  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}

/**
 * Button variant for use on dark backgrounds (navy sections).
 * White text with amber or white accent.
 */
interface ButtonDarkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: ButtonSize;
  className?: string;
}

export function ButtonDark({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: ButtonDarkProps) {
  const base =
    "inline-flex items-center justify-center transition-all duration-150 cursor-pointer";
  const sizeClass = sizeStyles[size];
  const variantClass =
    variant === "primary"
      ? "bg-amber text-white hover:opacity-85 font-semibold"
      : "border border-white/30 text-white hover:border-white/60 font-medium bg-transparent";

  return (
    <Link href={href} className={`${base} ${sizeClass} ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
