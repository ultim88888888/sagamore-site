import Link from "next/link";

const categories = [
  {
    id: "working-capital",
    title: "Working Capital",
    description:
      "Keep operations running and seize growth opportunities with flexible capital solutions designed around your cash flow.",
    products: [
      {
        name: "Line of Credit",
        description:
          "Revolving access to capital, secured or unsecured. Draw funds as needed, pay interest only on what you use, and replenish your credit line as you repay. Ideal for managing seasonal fluctuations, bridging gaps between receivables and payables, or covering unexpected expenses without taking on a fixed-term obligation.",
      },
      {
        name: "Term Loans",
        description:
          "A lump sum of capital with a fixed repayment schedule, available in both secured and unsecured structures. Term loans give you predictable monthly payments and a clear payoff date, making them well-suited for planned investments like hiring, inventory buildouts, marketing campaigns, or any initiative with a defined cost.",
      },
      {
        name: "Bridge Loans",
        description:
          "Short-term financing designed to carry your business through a transitional period. Whether you are waiting on a larger funding round, a property closing, or a seasonal revenue surge, bridge loans provide immediate liquidity so you never miss a window of opportunity.",
      },
    ],
  },
  {
    id: "asset-based",
    title: "Asset-Based Funding",
    description:
      "Turn the assets your business already owns into working capital. Unlock value from equipment, invoices, and receivables.",
    products: [
      {
        name: "Equipment Financing",
        description:
          "Acquire or lease machinery, vehicles, technology, and other business-critical equipment with financing that uses the equipment itself as collateral. Preserve your cash reserves while building equity in assets that drive revenue. Structures range from traditional equipment loans to lease-to-own arrangements.",
      },
      {
        name: "Factoring",
        description:
          "Sell your outstanding invoices at a discount and receive cash within 24 to 48 hours, rather than waiting 30, 60, or 90 days for customers to pay. Factoring is not a loan — it is an advance on money already owed to you. Particularly effective for businesses with long payment cycles or fast-growing companies that cannot afford to wait.",
      },
      {
        name: "AR Financing",
        description:
          "Use your accounts receivable as collateral for a revolving line of credit. Unlike factoring, AR financing lets you retain control of your customer relationships and collections process. As new receivables are generated, your available credit grows with your business.",
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "Commercial and residential lending for businesses and business owners. Buy, refinance, or leverage property to fuel growth.",
    products: [
      {
        name: "Commercial Mortgage",
        description:
          "Long-term financing for purchasing, refinancing, or renovating commercial properties including office buildings, retail spaces, warehouses, and mixed-use developments. Competitive rates and terms structured around the property's income potential and your business plan.",
      },
      {
        name: "Residential Mortgage",
        description:
          "Home purchase and refinance solutions for business owners. We understand that self-employed borrowers and entrepreneurs often face unique documentation challenges. Our lending partners specialize in working with non-traditional income profiles to get you the home financing you need.",
      },
      {
        name: "HELOC",
        description:
          "A home equity line of credit lets you tap into the equity you have built in your home. Use it to fund a business expansion, consolidate higher-interest debt, or maintain a financial safety net. Flexible draw periods with interest-only payment options available.",
      },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Programs",
    description:
      "Government-backed loans, interest-free credit building, and credit rehabilitation for businesses that need specialized solutions.",
    products: [
      {
        name: "SBA Loans",
        description:
          "Government-guaranteed loans through the Small Business Administration, including 7(a) general purpose loans and 504 loans for real estate and major equipment. SBA loans offer some of the lowest rates and longest terms available, making them an excellent choice for established businesses looking to minimize their cost of capital.",
      },
      {
        name: "0% Business Credit Cards",
        description:
          "Build your business credit profile while accessing capital at zero percent introductory interest. These programs are designed to help businesses establish a strong credit foundation, earn rewards on everyday spending, and access short-term capital without interest charges during the promotional period.",
      },
      {
        name: "Credit Repair",
        description:
          "A structured program to identify and resolve inaccuracies on your business and personal credit reports, dispute negative items, and implement strategies to improve your score over time. Better credit means access to more funding options at better rates. We work with you to build a credit profile that reflects your true financial standing.",
      },
    ],
  },
];

export function ServicesContent() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-cream via-cream to-cream-deep">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-amber-dark mb-4">
            Our Services
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy leading-tight mb-5">
            Twelve products.{" "}
            <span className="text-ink-secondary">One application.</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-2xl">
            Every business has different capital needs. We offer a full spectrum
            of funding solutions so we can match you with the product that
            actually fits &mdash; not the one that is easiest to sell.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <section className="border-b border-rule-light bg-cream-deep/50 sticky top-16 sm:top-18 z-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <nav className="flex gap-6 sm:gap-8 overflow-x-auto py-4 -mb-px">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-sm font-medium text-ink-secondary hover:text-navy whitespace-nowrap transition-colors cursor-pointer border-b-2 border-transparent hover:border-amber pb-2"
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Product categories */}
      {categories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 sm:py-24 ${
            catIndex % 2 === 0 ? "bg-cream" : "bg-cream-deep/40"
          }`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            {/* Category header */}
            <div className="mb-10 sm:mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-3">
                {category.title}
              </h2>
              <p className="text-ink-secondary text-lg max-w-2xl">
                {category.description}
              </p>
            </div>

            {/* Product cards */}
            <div className="grid gap-5 sm:gap-6">
              {category.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-rule-light"
                >
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">
                    {product.name}
                  </h3>
                  <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
            Not sure which product is right?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            You do not need to choose. Submit one application and our team will
            match you with the funding options that fit your business, revenue,
            and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-amber hover:bg-amber-dark rounded-lg transition-colors cursor-pointer"
            >
              Start Your Application
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white/80 border border-white/20 hover:border-white/40 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
