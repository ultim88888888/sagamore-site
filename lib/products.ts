/**
 * Centralized product catalog for Sagamore Financial Group.
 *
 * Single source of truth used by:
 *  - /services overview page
 *  - /services/[slug] individual pages
 *  - Header nav dropdown
 *  - Footer product links
 *  - Homepage ServiceCategories section
 */

export interface Product {
  name: string;
  slug: string;
  range: string;
  description: string;
  /** Short teaser for cards / nav — 1 sentence max */
  teaser: string;
  features: string[];
  /** Extended description for the individual product page */
  longDescription: string;
  /** Key benefits shown as highlight cards on the product page */
  benefits: { title: string; description: string }[];
  /** Unsplash photo URL for the product page hero */
  heroImage: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "working-capital",
    title: "Working Capital",
    subtitle:
      "Flexible funding to cover payroll, inventory, and growth initiatives.",
    products: [
      {
        name: "Line of Credit",
        slug: "line-of-credit",
        range: "$5K - $500K",
        teaser:
          "Revolving credit that adapts to your cash flow cycle.",
        description:
          "Draw funds as you need them and only pay interest on what you use. A revolving credit line that adapts to your cash flow cycle.",
        longDescription:
          "A business line of credit gives you the flexibility to draw funds when you need them and repay on your own schedule. Unlike a term loan, you only pay interest on the amount you've actually drawn — not the full credit limit. This makes it ideal for managing cash flow gaps, covering seasonal fluctuations, or seizing time-sensitive opportunities without taking on unnecessary debt. Our lending partners offer competitive rates for qualified borrowers, with credit limits that grow as your business does.",
        features: [
          "Revolving access -- draw and repay as needed",
          "Interest only on outstanding balance",
          "Decisions in as little as 24 hours",
          "No prepayment penalties",
        ],
        benefits: [
          {
            title: "Cash Flow Control",
            description:
              "Draw exactly what you need, when you need it. Repay and re-draw without reapplying.",
          },
          {
            title: "Pay Only What You Use",
            description:
              "Interest accrues only on drawn funds, not your full credit limit. Unused capacity costs nothing.",
          },
          {
            title: "Fast Access",
            description:
              "Once approved, funds are available within hours. No waiting through another application cycle.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
      },
      {
        name: "Term Loans",
        slug: "term-loans",
        range: "$10K - $2M",
        teaser:
          "Predictable monthly payments over a fixed term.",
        description:
          "A lump sum with predictable monthly payments over a fixed term. Ideal for expansion, hiring, or large purchases.",
        longDescription:
          "Term loans provide a lump sum of capital upfront with a fixed repayment schedule — monthly payments you can plan around. This predictability makes them the right choice for significant investments: opening a new location, purchasing major equipment, hiring a team, or consolidating existing debt into a single manageable payment. Our lending partners offer terms from 6 to 60 months with competitive rates, and funds can be deposited within 48 hours of approval.",
        features: [
          "Fixed monthly payments for easy budgeting",
          "Terms from 6 to 60 months",
          "Competitive rates for qualified borrowers",
          "Funds deposited within 48 hours of approval",
        ],
        benefits: [
          {
            title: "Predictable Budgeting",
            description:
              "Fixed payments every month. No surprises, no variable rates — plan your cash flow with confidence.",
          },
          {
            title: "Larger Capital Access",
            description:
              "Up to $2M in a single lump sum for major business investments like expansion, acquisition, or renovation.",
          },
          {
            title: "Flexible Terms",
            description:
              "Choose a repayment timeline from 6 to 60 months that aligns with your revenue cycle and growth plan.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
      },
      {
        name: "Bridge Loans",
        slug: "bridge-loans",
        range: "$25K - $1M",
        teaser:
          "Short-term capital for transitional situations.",
        description:
          "Short-term capital to bridge a gap -- between funding rounds, seasonal revenue dips, or while waiting on receivables.",
        longDescription:
          "Bridge loans are designed for businesses that need capital now but have a clear repayment event on the horizon. Whether you're between funding rounds, waiting on a large receivable, navigating a seasonal revenue dip, or closing on a property, a bridge loan provides the capital to keep operations running smoothly. These are short-term instruments — typically 3 to 18 months — with flexible repayment structures that accommodate your specific situation.",
        features: [
          "Fast turnaround for urgent needs",
          "Flexible repayment structures",
          "Terms from 3 to 18 months",
          "Designed for transitional situations",
        ],
        benefits: [
          {
            title: "Speed When It Matters",
            description:
              "Bridge financing is built for urgency. Fast underwriting, fast decisions, fast funding.",
          },
          {
            title: "Flexible Structure",
            description:
              "Interest-only periods, balloon payments, or custom schedules aligned to your repayment event.",
          },
          {
            title: "Keep Momentum",
            description:
              "Don't let a temporary cash gap stall your business. Bridge the gap and keep moving forward.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
      },
    ],
  },
  {
    id: "asset-based",
    title: "Asset-Based Funding",
    subtitle:
      "Convert your business assets into the capital you need today.",
    products: [
      {
        name: "Equipment Financing",
        slug: "equipment-financing",
        range: "$10K - $5M",
        teaser:
          "Acquire equipment using the asset itself as collateral.",
        description:
          "Acquire machinery, vehicles, technology, or any business-critical equipment with financing that uses the asset itself as collateral.",
        longDescription:
          "Equipment financing lets you acquire the machinery, vehicles, technology, or specialized tools your business needs without depleting cash reserves. The equipment itself serves as collateral, which means qualification is often based more on the asset's value than your credit history alone. We work with lending partners who finance up to 100% of the equipment cost, with terms matched to the asset's useful life — so you're not paying for equipment long after it's stopped generating value.",
        features: [
          "Equipment serves as collateral",
          "Up to 100% of equipment value financed",
          "Fixed payments over the asset's useful life",
          "Potential tax benefits through depreciation",
        ],
        benefits: [
          {
            title: "Preserve Cash Reserves",
            description:
              "Keep your working capital intact for operations while financing the equipment you need to grow.",
          },
          {
            title: "Asset-Backed Approval",
            description:
              "The equipment itself is the collateral. This means easier qualification and competitive rates.",
          },
          {
            title: "Tax Advantages",
            description:
              "Section 179 deductions and depreciation may allow you to write off the full cost in the year of purchase.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80",
      },
      {
        name: "Factoring",
        slug: "factoring",
        range: "$10K - $5M",
        teaser:
          "Sell outstanding invoices and receive cash immediately.",
        description:
          "Sell your outstanding invoices at a discount and receive cash immediately. Stop waiting 30, 60, or 90 days for customers to pay.",
        longDescription:
          "Invoice factoring converts your outstanding receivables into immediate cash. Instead of waiting 30, 60, or 90 days for customers to pay, you sell those invoices to a factoring company at a small discount and receive up to 90% of the invoice value within 24-48 hours. The factor then collects payment directly from your customers. This isn't a loan — it doesn't add debt to your balance sheet — and it scales naturally with your sales volume. The more you invoice, the more capital you can access.",
        features: [
          "Advances up to 90% of invoice value",
          "Funding within 24-48 hours",
          "Your customers pay the factor directly",
          "No long-term debt on your balance sheet",
        ],
        benefits: [
          {
            title: "Immediate Cash Flow",
            description:
              "Stop waiting on net-30, net-60, or net-90 terms. Convert invoices to cash within 24-48 hours.",
          },
          {
            title: "Not a Loan",
            description:
              "Factoring is an asset sale, not debt. It doesn't appear as a liability on your balance sheet.",
          },
          {
            title: "Scales with Revenue",
            description:
              "Your funding capacity grows with your sales volume. More invoices means more available capital.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1600&q=80",
      },
      {
        name: "AR Financing",
        slug: "ar-financing",
        range: "$25K - $5M",
        teaser:
          "Borrow against receivables while maintaining customer relationships.",
        description:
          "Borrow against your accounts receivable without selling them. Maintain your customer relationships while accessing cash.",
        longDescription:
          "Accounts receivable financing lets you borrow against your outstanding invoices without selling them. Unlike factoring, you retain ownership of your receivables and maintain direct relationships with your customers — they'll never know you're using AR financing. The facility works like a revolving line of credit secured by your receivables, growing automatically as your AR grows. This makes it ideal for businesses with strong B2B customer relationships who need to accelerate cash flow without changing their collection process.",
        features: [
          "Borrow against receivables, retain ownership",
          "Revolving facility grows with your AR",
          "You maintain customer relationships",
          "Flexible advance rates",
        ],
        benefits: [
          {
            title: "Keep Your Relationships",
            description:
              "Your customers interact with you, not a third party. AR financing is invisible to your clients.",
          },
          {
            title: "Revolving Access",
            description:
              "As new receivables are created and old ones are collected, your borrowing capacity refreshes automatically.",
          },
          {
            title: "Growth-Ready",
            description:
              "The facility scales with your business. More receivables means more capital, with no need to renegotiate.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle:
      "Financing solutions for commercial and residential properties.",
    products: [
      {
        name: "Commercial Mortgage",
        slug: "commercial-mortgage",
        range: "$100K - $5M+",
        teaser:
          "Long-term financing for commercial real estate.",
        description:
          "Long-term financing for purchasing, refinancing, or renovating commercial real estate -- offices, retail, industrial, mixed-use.",
        longDescription:
          "A commercial mortgage provides long-term financing for purchasing, refinancing, or renovating commercial real estate. Whether you're acquiring your first office space, expanding into a retail location, purchasing an industrial facility, or investing in mixed-use property, our lending partners offer competitive fixed and variable rates with terms up to 25 years. We specialize in helping small and mid-size business owners navigate the commercial mortgage process — from property evaluation through closing.",
        features: [
          "Terms up to 25 years",
          "Competitive fixed and variable rates",
          "Purchase, refinance, and renovation",
          "Multiple property types eligible",
        ],
        benefits: [
          {
            title: "Build Equity",
            description:
              "Stop paying rent. Own your commercial space and build long-term equity in a tangible asset.",
          },
          {
            title: "Long-Term Stability",
            description:
              "Lock in terms up to 25 years. Predictable payments protect you from rising lease costs.",
          },
          {
            title: "Multiple Property Types",
            description:
              "Office, retail, industrial, mixed-use, multi-family — we have lending partners for every property class.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
      },
      {
        name: "Residential Mortgage",
        slug: "residential-mortgage",
        range: "$100K - $3M",
        teaser:
          "Home loans designed for self-employed borrowers.",
        description:
          "Home purchase and refinance solutions for business owners. We understand self-employment income documentation.",
        longDescription:
          "Traditional mortgage lenders often struggle with self-employed borrowers. Irregular income, multiple revenue streams, and complex tax returns can make the process frustrating. Our lending partners specialize in working with business owners and entrepreneurs — offering bank statement programs, asset-based qualification, and documentation flexibility that standard lenders can't match. Whether you're purchasing a home, refinancing, or pulling cash out of existing equity, we connect you with mortgage programs designed for how business owners actually earn.",
        features: [
          "Programs for self-employed borrowers",
          "Bank statement qualification available",
          "Competitive rates across loan types",
          "Purchase, refinance, and cash-out options",
        ],
        benefits: [
          {
            title: "Built for Business Owners",
            description:
              "Programs designed around self-employment income. Bank statements, not just tax returns.",
          },
          {
            title: "Documentation Flexibility",
            description:
              "12 or 24 month bank statement programs, asset depletion, and other non-QM options available.",
          },
          {
            title: "Competitive Rates",
            description:
              "Access to conventional, FHA, VA, and specialty programs. We shop across multiple lenders for your best rate.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
      },
      {
        name: "HELOC",
        slug: "heloc",
        range: "$25K - $500K",
        teaser:
          "Revolving access to your home equity.",
        description:
          "Tap into your home equity with a revolving line of credit. Use it for business investment, debt consolidation, or cash reserves.",
        longDescription:
          "A Home Equity Line of Credit (HELOC) lets you tap into the equity you've built in your home as a revolving source of capital. Draw funds as needed, repay, and draw again — similar to a business line of credit, but secured by your home equity. Many business owners use HELOCs to fund business investments, consolidate higher-interest debt, or maintain a cash reserve for opportunities. Interest may be tax-deductible depending on how funds are used, and you only pay interest on the amount you've drawn.",
        features: [
          "Draw funds as needed, revolving access",
          "Interest only on what you use",
          "Business or personal use",
          "Potential tax-deductible interest",
        ],
        benefits: [
          {
            title: "Leverage Home Equity",
            description:
              "Access the equity you've already built without selling your home or taking a second mortgage.",
          },
          {
            title: "Revolving Flexibility",
            description:
              "Draw, repay, and redraw as your needs change. No need to reapply for additional funding.",
          },
          {
            title: "Dual-Purpose",
            description:
              "Use funds for business investment, personal needs, debt consolidation, or as a strategic cash reserve.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
      },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Programs",
    subtitle:
      "Specialized funding vehicles for unique business needs.",
    products: [
      {
        name: "SBA Loans",
        slug: "sba-loans",
        range: "$50K - $5M",
        teaser:
          "Government-backed loans with the best rates and longest terms.",
        description:
          "Government-backed loans with some of the best rates and longest terms available. We guide you through the SBA process from start to finish.",
        longDescription:
          "SBA loans are government-backed financing programs administered through the U.S. Small Business Administration. They offer some of the lowest interest rates and longest repayment terms available to small businesses — up to 25 years for real estate and 10 years for working capital. The tradeoff is a more involved application process, which is exactly where Sagamore adds value. We guide you through every step: determining which program fits (7(a), 504, or Express), preparing your documentation, connecting you with SBA-preferred lenders, and shepherding the application through approval.",
        features: [
          "Lowest available interest rates",
          "Terms up to 25 years",
          "7(a), 504, and Express programs",
          "Full application guidance and support",
        ],
        benefits: [
          {
            title: "Best Available Rates",
            description:
              "SBA loans consistently offer the lowest interest rates available to small businesses, often several points below conventional loans.",
          },
          {
            title: "Longest Terms",
            description:
              "Up to 25 years for real estate, 10 years for working capital. Longer terms mean lower monthly payments and better cash flow.",
          },
          {
            title: "Expert Navigation",
            description:
              "The SBA process is complex. We handle the paperwork, lender matching, and application management so you can focus on your business.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
      },
      {
        name: "0% Business Credit Cards",
        slug: "business-credit-cards",
        range: "$5K - $150K",
        teaser:
          "Strategic 0% APR credit card stacking for business.",
        description:
          "Build business credit while accessing 0% introductory APR financing. Strategic credit card stacking for maximum leverage.",
        longDescription:
          "Strategic business credit card programs give you access to 0% introductory APR financing for up to 21 months. This isn't about getting a single credit card — it's a structured approach to building business credit while accessing interest-free capital. We help you identify the right cards for your spending patterns, maximize approval amounts, and stack cards strategically to build a significant credit facility. As you build a track record of responsible use, your business credit score improves, unlocking better rates and higher limits across all lending products.",
        features: [
          "0% intro APR up to 21 months",
          "Build business credit history",
          "Rewards and cashback on spending",
          "Strategic card selection guidance",
        ],
        benefits: [
          {
            title: "Interest-Free Capital",
            description:
              "0% introductory APR means your capital costs nothing for up to 21 months. Use it for inventory, marketing, or operations.",
          },
          {
            title: "Build Business Credit",
            description:
              "Establish and strengthen your business credit profile. Better credit means better terms on future financing.",
          },
          {
            title: "Strategic Guidance",
            description:
              "We don't just hand you a list of cards. We build a strategy based on your industry, spending, and credit goals.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
      },
      {
        name: "Credit Repair",
        slug: "credit-repair",
        range: "Consultation",
        teaser:
          "Optimize your credit profile for better funding terms.",
        description:
          "Not quite ready to fund? Our credit repair program helps you optimize your profile so you qualify for better rates and higher amounts.",
        longDescription:
          "Not every business is ready to fund today — and that's okay. Our credit repair program works with you to optimize your personal and business credit profiles so that when you are ready, you qualify for the best rates and highest amounts available. We conduct a comprehensive credit analysis, identify items that can be disputed or improved, work directly with credit bureaus on your behalf, and create a clear path-to-funding roadmap with specific milestones. Most clients see meaningful score improvement within 60-90 days.",
        features: [
          "Comprehensive credit analysis",
          "Dispute resolution with bureaus",
          "Score optimization strategies",
          "Path-to-funding roadmap",
        ],
        benefits: [
          {
            title: "Comprehensive Analysis",
            description:
              "We pull and review all three bureaus, identify every opportunity for improvement, and build a prioritized action plan.",
          },
          {
            title: "Active Dispute Management",
            description:
              "We handle disputes directly with bureaus and creditors. You don't have to navigate the process alone.",
          },
          {
            title: "Clear Path Forward",
            description:
              "A specific roadmap with milestones showing when you'll likely qualify for your target funding amount and rate.",
          },
        ],
        heroImage:
          "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1600&q=80",
      },
    ],
  },
];

/** Flat list of all products across all categories */
export const allProducts: Product[] = categories.flatMap((c) => c.products);

/** Look up a product by its URL slug */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

/** Get the category that contains a given product slug */
export function getCategoryForSlug(slug: string): Category | undefined {
  return categories.find((c) => c.products.some((p) => p.slug === slug));
}
