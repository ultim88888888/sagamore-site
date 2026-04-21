import Link from "next/link";
import { allProducts } from "@/lib/products";

interface RelatedProductsProps {
  /** Slugs of the related products to display */
  slugs: string[];
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Related funding options section for cross-linking between service pages.
 *
 * Renders 3 product cards with name, teaser, range, and link. Placed
 * above the bottom CTA banner on each service page.
 */
export function RelatedProducts({ slugs }: RelatedProductsProps) {
  const products = slugs
    .map((slug) => allProducts.find((p) => p.slug === slug))
    .filter(Boolean);

  if (products.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--color-surface-warm) 0%, var(--color-surface-deep) 50%, var(--color-surface-warm) 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-azure mb-3">
            Related Funding Options
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Explore similar products
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {products.map((product) => (
            <Link
              key={product!.slug}
              href={`/services/${product!.slug}`}
              className="group rounded-2xl border border-rule-light bg-white p-6 sm:p-7 flex flex-col hover:border-azure/30 transition-colors cursor-pointer"
            >
              <div className="mb-3">
                <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-azure transition-colors duration-150">
                  {product!.name}
                </h3>
                <p className="text-sm font-semibold text-azure">
                  {product!.range}
                </p>
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed mb-5 flex-1">
                {product!.teaser}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-azure group-hover:gap-2.5 transition-all duration-200">
                Learn more
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
