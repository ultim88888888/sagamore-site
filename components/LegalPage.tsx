/**
 * Shared layout for legal / policy pages.
 * Consistent typography, spacing, and structure.
 * Prose styles defined in globals.css under .prose-legal
 */
export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3 tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-ink-tertiary">Last updated: {lastUpdated}</p>
        </div>
        <div className="prose-legal">{children}</div>
      </div>
    </section>
  );
}
