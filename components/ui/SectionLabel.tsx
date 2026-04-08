/**
 * Consistent section labeling.
 * Used above section headings for the small uppercase category text.
 */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
      {children}
    </p>
  );
}
