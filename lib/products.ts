/**
 * Centralized product catalog for Sagamore Financial Group.
 *
 * Single source of truth used by:
 *  - /services overview page
 *  - /services/[slug] individual pages
 *  - Header nav dropdown
 *  - Footer product links
 *  - Homepage ServiceCategories section
 *  - Related products cross-linking
 *  - FAQ sections with FAQPage schema
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

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
  /** Local image path for the product page hero */
  heroImage: string;
  /** Descriptive alt text for the hero image */
  heroAlt: string;
  /** Product-specific process steps (not the generic Sagamore 4-step) */
  howItWorks: HowItWorksStep[];
  /** Eligibility requirements */
  whoQualifies: string[];
  /** Real-world scenario descriptions */
  useCases: string[];
  /** Comparison with alternative products, with cross-links */
  comparisons: string;
  /** FAQ items for this product */
  faqs: FAQ[];
  /** Slugs of 3 related products for cross-linking */
  relatedProducts: string[];
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
        heroImage: "/images/hero-line-of-credit.jpg",
        heroAlt: "Business owner reviewing financial documents at a modern office desk",
        howItWorks: [
          {
            title: "Apply and get approved",
            description:
              "Submit a single application with basic business and financial information. Most decisions come back within 24 hours.",
          },
          {
            title: "Receive your credit limit",
            description:
              "Once approved, your revolving credit line is established. Limits typically range from $5K to $500K based on your business profile.",
          },
          {
            title: "Draw funds as needed",
            description:
              "Access capital whenever you need it — online transfer, wire, or check. Draw the full amount or just a portion.",
          },
          {
            title: "Repay and redraw",
            description:
              "Make payments on what you've used. As you repay, your available credit replenishes automatically — no need to reapply.",
          },
        ],
        whoQualifies: [
          "Minimum 500 credit score (higher scores unlock better rates and limits)",
          "At least 4 months in business",
          "Minimum $5,000 in monthly bank deposits",
          "No open bankruptcies",
          "Most industries eligible — some restrictions apply to high-risk sectors",
        ],
        useCases: [
          "A landscaping company draws $30K each spring to hire seasonal crews and purchase materials, then repays as revenue comes in through summer and fall.",
          "An e-commerce retailer uses a $75K line to stock up on inventory before the holiday season, repaying as sales clear over the following months.",
          "A consulting firm taps its credit line to cover payroll during a gap between client payments, avoiding the cost of a full term loan.",
        ],
        comparisons:
          "A line of credit is more flexible than a term loan because you draw only what you need, when you need it — there is no lump sum to manage. Compared to a bridge loan, a line of credit is longer-term and revolving, making it better for recurring cash flow needs rather than one-time gaps. Business credit cards offer similar revolving access but typically at higher rates and lower limits.",
        faqs: [
          {
            question: "What credit score do I need for a business line of credit?",
            answer:
              "Most of our lending partners require a minimum credit score of 500. However, borrowers with scores above 650 typically qualify for higher limits and more competitive rates. We work with lenders across the credit spectrum.",
          },
          {
            question: "How long does it take to get approved?",
            answer:
              "Most applicants receive a decision within 24 hours. Once approved, funds can be available the same day or next business day depending on the lender and transfer method.",
          },
          {
            question: "What documents do I need to apply?",
            answer:
              "You will typically need 3-6 months of business bank statements, a valid government-issued ID, and basic business information (EIN, formation date, industry). Some lenders may request additional documentation based on the amount requested.",
          },
          {
            question: "Can I apply if my business is less than a year old?",
            answer:
              "Yes. Our minimum requirement is 4 months in business with at least $5,000 in monthly bank deposits. Newer businesses may qualify for lower initial limits that can increase as the business matures.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "The initial application typically involves a soft credit pull, which does not affect your score. A hard pull may occur only after you accept a specific offer and move forward with a lender.",
          },
          {
            question: "Is there a difference between a business line of credit and a personal line of credit?",
            answer:
              "Yes. A business line of credit is tied to your business entity and helps build business credit history. It is underwritten based on business revenue and performance, not just personal credit. Personal guarantees may still be required depending on the lender.",
          },
        ],
        relatedProducts: ["term-loans", "bridge-loans", "business-credit-cards"],
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
        heroImage: "/images/hero-term-loans.jpg",
        heroAlt: "Business analytics dashboard showing growth metrics and financial charts",
        howItWorks: [
          {
            title: "Submit your application",
            description:
              "Provide basic business details, revenue information, and the amount you need. The process takes about five minutes.",
          },
          {
            title: "Receive matched offers",
            description:
              "We present you with term loan offers from lenders that fit your profile — including rates, terms, and total repayment amounts so you can compare clearly.",
          },
          {
            title: "Accept and get funded",
            description:
              "Choose the offer that works best. Sign the agreement and receive your lump sum, typically within 48 hours.",
          },
          {
            title: "Repay on schedule",
            description:
              "Make fixed monthly payments over your chosen term. No surprises, no variable adjustments — the same amount every month until paid in full.",
          },
        ],
        whoQualifies: [
          "Minimum 500 credit score",
          "At least 4 months in business",
          "Minimum $5,000 in monthly bank deposits",
          "No open bankruptcies",
          "Businesses across most industries are eligible",
        ],
        useCases: [
          "A dental practice borrows $250K to renovate its office and add two new treatment rooms, repaying over 36 months from increased patient revenue.",
          "A construction company takes a $500K term loan to hire a project management team and bid on larger contracts, with a 48-month repayment plan.",
          "A retail chain consolidates three existing high-interest advances into a single $150K term loan at a lower rate, simplifying cash flow management.",
        ],
        comparisons:
          "Term loans offer more predictability than a line of credit because payments are fixed and the total cost is known upfront. Compared to SBA loans, term loans are faster to close — days rather than weeks — though SBA loans typically offer lower rates and longer terms. For short-term needs under 18 months, a bridge loan may be more appropriate since it is designed for temporary gaps rather than long-term investments.",
        faqs: [
          {
            question: "What credit score do I need for a term loan?",
            answer:
              "Our lending partners work with credit scores starting at 500. Higher scores — particularly above 650 — unlock longer terms, higher amounts, and lower interest rates.",
          },
          {
            question: "How long does it take to get approved?",
            answer:
              "Most term loan applications receive a decision within 24-48 hours. Funds are typically deposited within 1-2 business days after acceptance.",
          },
          {
            question: "What documents do I need?",
            answer:
              "Standard requirements include 3-6 months of business bank statements, a government-issued ID, and your business tax ID (EIN). Larger loan amounts may require tax returns or financial statements.",
          },
          {
            question: "Can I pay off the loan early?",
            answer:
              "Many of our lending partners offer term loans with no prepayment penalties, meaning you can pay off the balance early and save on interest. We will identify which offers include this flexibility.",
          },
          {
            question: "Can I apply if my business is less than a year old?",
            answer:
              "Yes. Businesses with at least 4 months of operating history and consistent monthly deposits of $5,000 or more can qualify. Newer businesses may receive shorter terms or smaller amounts initially.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "No. The initial application uses a soft credit inquiry that does not impact your score. A hard inquiry occurs only if you choose to move forward with a specific lender's offer.",
          },
        ],
        relatedProducts: ["line-of-credit", "sba-loans", "bridge-loans"],
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
        heroImage: "/images/hero-bridge-loans.jpg",
        heroAlt: "Professional reviewing short-term financing options on a tablet",
        howItWorks: [
          {
            title: "Describe your situation",
            description:
              "Tell us about the gap you need to bridge — a pending receivable, a seasonal dip, a real estate closing, or another transitional need. Context helps us find the right structure.",
          },
          {
            title: "Get a tailored proposal",
            description:
              "We match you with lenders who specialize in short-term bridge financing and present offers with clear terms, including repayment triggers and exit strategies.",
          },
          {
            title: "Receive fast funding",
            description:
              "Bridge loans are designed for speed. Most close within days, not weeks, getting capital into your account when timing matters most.",
          },
          {
            title: "Repay when your event clears",
            description:
              "Pay off the bridge when your receivable lands, your funding round closes, or your property sale completes. The structure fits your timeline.",
          },
        ],
        whoQualifies: [
          "Minimum 500 credit score",
          "At least 4 months in business",
          "A clear repayment event or exit strategy (e.g., pending receivable, closing, funding round)",
          "Minimum $5,000 in monthly bank deposits",
          "Most industries eligible",
        ],
        useCases: [
          "A tech startup needs $200K to cover three months of operating costs while its Series A round closes, repaying the bridge from the round proceeds.",
          "A wholesaler has a $400K purchase order from a major retailer but needs $150K now to fulfill it. The bridge is repaid when the retailer pays net-60.",
          "A real estate investor needs $500K in gap funding while waiting for a commercial property sale to close, then repays from the sale proceeds.",
        ],
        comparisons:
          "Bridge loans serve a different purpose than term loans — they are short-term instruments with a specific exit event, while term loans are designed for longer repayment over months or years. Compared to a line of credit, bridge loans are typically available in larger amounts and with more flexible repayment structures, but they are not revolving. Factoring is an alternative if your gap is caused by unpaid invoices, though factoring involves selling the invoices rather than borrowing against a future event.",
        faqs: [
          {
            question: "What credit score do I need for a bridge loan?",
            answer:
              "Most bridge loan programs require a minimum credit score of 500. Because bridge loans are often secured by a specific repayment event or collateral, credit score requirements may be more flexible than other loan types.",
          },
          {
            question: "How quickly can I get funded?",
            answer:
              "Bridge loans are built for speed. Many applications are approved within 24-48 hours, with funding following within 1-3 business days. In urgent cases, same-day funding may be available.",
          },
          {
            question: "What documents do I need?",
            answer:
              "You will need business bank statements, a government ID, and documentation supporting your repayment event — such as a purchase agreement, pending invoice, or term sheet from an investor.",
          },
          {
            question: "What happens if my repayment event is delayed?",
            answer:
              "Most bridge loan structures include provisions for reasonable delays. If your closing or receivable is delayed, work with your advisor to discuss extension options before the original term expires.",
          },
          {
            question: "Can I apply if my business is less than a year old?",
            answer:
              "Yes. The key factor for bridge loans is the strength of your repayment event, not just business age. If you can document a clear exit — a signed contract, purchase order, or investor commitment — newer businesses can qualify.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "The initial application uses a soft credit pull that does not impact your score. A hard inquiry may occur only after you accept a specific offer.",
          },
        ],
        relatedProducts: ["line-of-credit", "term-loans", "factoring"],
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
        heroImage: "/images/hero-equipment-financing.jpg",
        heroAlt: "Industrial machinery and technology equipment in a modern facility",
        howItWorks: [
          {
            title: "Identify the equipment you need",
            description:
              "Whether it is new or used, tell us what you are purchasing, the vendor, and the cost. We can work with any equipment type — vehicles, machinery, technology, medical devices, and more.",
          },
          {
            title: "Submit your application",
            description:
              "Provide basic business information and the equipment details. Because the asset itself serves as collateral, the underwriting process focuses on the equipment's value alongside your business profile.",
          },
          {
            title: "Receive financing offers",
            description:
              "We present matched offers with fixed monthly payments, terms aligned to the equipment's useful life, and total cost breakdowns so you can compare clearly.",
          },
          {
            title: "Get the equipment and start using it",
            description:
              "Once you accept an offer, the lender pays the vendor directly or reimburses your purchase. You start using the equipment immediately while making predictable monthly payments.",
          },
        ],
        whoQualifies: [
          "Minimum 500 credit score",
          "At least 4 months in business",
          "Minimum $5,000 in monthly bank deposits",
          "Equipment must have a clear fair market value",
          "Both new and used equipment eligible",
          "Most industries and equipment types qualify",
        ],
        useCases: [
          "A restaurant owner finances $80K in commercial kitchen equipment — ovens, refrigeration, and prep stations — paying it off over 48 months from increased seating capacity and catering revenue.",
          "A trucking company acquires three new Class 8 trucks at $150K each, using the vehicles as collateral and matching payments to the contracts they enable.",
          "A medical practice finances $200K in diagnostic imaging equipment, taking advantage of Section 179 to deduct the full cost in the purchase year.",
        ],
        comparisons:
          "Equipment financing differs from a term loan because the equipment itself secures the loan, which typically means easier approval and potentially lower rates. Unlike SBA loans, equipment financing closes much faster — days rather than weeks — though SBA 504 loans can offer better long-term rates for larger purchases. For businesses that prefer to lease rather than own, equipment leasing is an alternative, but financing lets you build equity in the asset.",
        faqs: [
          {
            question: "What credit score do I need for equipment financing?",
            answer:
              "Most programs start at a 500 minimum credit score. Because the equipment serves as collateral, credit requirements are often more flexible than unsecured loan products. Higher scores unlock better rates and terms.",
          },
          {
            question: "How long does it take to get approved?",
            answer:
              "Most equipment financing applications receive a decision within 24-48 hours. Funding typically follows within 1-3 business days after you accept an offer, depending on vendor payment coordination.",
          },
          {
            question: "What documents do I need?",
            answer:
              "Standard requirements include business bank statements, a government-issued ID, and a quote or invoice for the equipment. Larger purchases may require business tax returns or financial statements.",
          },
          {
            question: "Can I finance used equipment?",
            answer:
              "Yes. Both new and used equipment qualify for financing. The key factor is the equipment's fair market value, which determines the maximum financing amount. Some lenders specialize in used equipment and can offer competitive terms.",
          },
          {
            question: "Can I apply if my business is less than a year old?",
            answer:
              "Yes. Businesses with at least 4 months of history and $5,000 in monthly deposits can qualify. The strength of the equipment as collateral helps offset limited business history.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "No. The initial inquiry is a soft credit pull. A hard pull only occurs if you decide to proceed with a specific offer from a lender.",
          },
        ],
        relatedProducts: ["term-loans", "sba-loans", "commercial-mortgage"],
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
        heroImage: "/images/hero-factoring.jpg",
        heroAlt: "Stack of business invoices on an office desk with financial documents",
        howItWorks: [
          {
            title: "Submit your invoices",
            description:
              "Send us the outstanding invoices you want to factor. We review the invoices and verify that the customers (your account debtors) are creditworthy.",
          },
          {
            title: "Receive an advance",
            description:
              "Within 24-48 hours, you receive up to 90% of the total invoice value deposited directly into your business account.",
          },
          {
            title: "The factor collects payment",
            description:
              "The factoring company manages collection from your customers on the normal payment terms. You are free to focus on your business instead of chasing payments.",
          },
          {
            title: "Receive the remaining balance",
            description:
              "When your customer pays, you receive the remaining balance minus the factoring fee. The fee is typically 1-5% of the invoice value depending on volume and customer creditworthiness.",
          },
        ],
        whoQualifies: [
          "Minimum 500 credit score (your customers' creditworthiness matters more than yours)",
          "At least 4 months in business",
          "Invoices must be to creditworthy B2B or B2G customers",
          "Minimum $5,000 in monthly invoicing",
          "Industries with B2B invoicing models are ideal — staffing, trucking, manufacturing, consulting, and more",
        ],
        useCases: [
          "A staffing agency invoices $300K monthly to corporate clients on net-60 terms. Factoring lets them access $270K within 48 hours to cover weekly payroll without waiting on payment cycles.",
          "A manufacturing company receives a large purchase order but needs cash immediately for raw materials. They factor their existing outstanding invoices to fund the new order.",
          "A trucking company factors its freight invoices to cover fuel, maintenance, and driver pay between loads, keeping cash flow steady across variable payment schedules.",
        ],
        comparisons:
          "Factoring differs from AR financing in a key way: with factoring, you sell your invoices and the factor collects directly from your customers. With AR financing, you borrow against your receivables but retain ownership and collection responsibility. Compared to a line of credit, factoring does not add debt to your balance sheet and scales automatically with revenue, but it involves your customers interacting with a third party. A bridge loan may be a better fit if you need a one-time lump sum rather than ongoing receivables conversion.",
        faqs: [
          {
            question: "What credit score do I need for invoice factoring?",
            answer:
              "Your personal credit score is less important for factoring than for other products. The primary underwriting factor is the creditworthiness of your customers — the businesses that owe you money. A minimum 500 credit score is typical, but strong customer credit can offset lower personal scores.",
          },
          {
            question: "How long does it take to get funded?",
            answer:
              "Once your account is set up and invoices are verified, advances typically arrive within 24-48 hours. Initial setup usually takes 3-5 business days, but subsequent invoices are processed much faster.",
          },
          {
            question: "What documents do I need?",
            answer:
              "You will need copies of the invoices to be factored, proof of delivery or service completion, your customer contact information, and standard business identification documents.",
          },
          {
            question: "Will my customers know I am using factoring?",
            answer:
              "In most cases, yes. The factoring company sends a notice of assignment and collects payment directly. However, many businesses view this as standard practice, and reputable factors handle customer interactions professionally.",
          },
          {
            question: "Can I apply if my business is less than a year old?",
            answer:
              "Yes. Factoring is one of the more accessible products for newer businesses because qualification is based primarily on your customers' credit, not your business history. If you have verified invoices to creditworthy customers, you can qualify.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "The initial application typically uses a soft inquiry, which does not affect your score. Factoring is not a loan, so it does not appear as debt on your credit report.",
          },
        ],
        relatedProducts: ["ar-financing", "line-of-credit", "bridge-loans"],
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
        heroImage: "/images/hero-ar-financing.jpg",
        heroAlt: "Business professional analyzing accounts receivable data on a monitor",
        howItWorks: [
          {
            title: "Set up your AR facility",
            description:
              "We review your accounts receivable aging report and customer base to establish your borrowing capacity. The facility is structured as a revolving line secured by your receivables.",
          },
          {
            title: "Submit invoices for borrowing",
            description:
              "As you generate invoices, submit them to the lender to increase your available borrowing base. Advance rates typically range from 70-90% of eligible receivables.",
          },
          {
            title: "Draw funds as needed",
            description:
              "Borrow against your receivables at any time, up to your available borrowing base. Funds are transferred directly to your account, usually within one business day.",
          },
          {
            title: "Repay as customers pay you",
            description:
              "When your customers pay their invoices, those payments reduce your outstanding balance and free up capacity to borrow again. You handle all collections — your customers are unaware of the financing arrangement.",
          },
        ],
        whoQualifies: [
          "Minimum 500 credit score",
          "At least 4 months in business",
          "A portfolio of B2B or B2G receivables",
          "Minimum $5,000 in monthly bank deposits",
          "Invoices must be to creditworthy commercial or government customers",
          "Ideal for businesses with $25K+ in monthly receivables",
        ],
        useCases: [
          "A technology services firm with $500K in outstanding receivables borrows $350K against them to fund a new product launch, repaying as client payments clear over 60-90 days.",
          "A janitorial services company uses AR financing to cover weekly payroll across multiple contracts, drawing against invoices as new jobs are completed and repaying as clients settle their monthly statements.",
          "A distribution company accelerates cash flow by borrowing against its receivables during peak season, maintaining direct customer relationships while accessing the capital needed to fulfill large orders.",
        ],
        comparisons:
          "AR financing and factoring both convert receivables into cash, but the structures are fundamentally different. With AR financing, you borrow against your invoices and retain ownership — your customers never know. With factoring, you sell the invoices, and the factor collects directly from your customers. AR financing is better for businesses that value customer relationships and prefer to handle their own collections. A line of credit provides similar revolving access without tying to specific receivables, but may require stronger credit profiles. A term loan is more appropriate for one-time capital needs rather than ongoing cash flow management.",
        faqs: [
          {
            question: "What credit score do I need for AR financing?",
            answer:
              "Most AR financing programs require a minimum credit score of 500. Like factoring, the creditworthiness of your customers is a significant factor in qualification and advance rates.",
          },
          {
            question: "How long does it take to get approved?",
            answer:
              "Initial setup typically takes 5-7 business days as the lender reviews your receivables and customer base. Once the facility is established, draws against new invoices are processed within one business day.",
          },
          {
            question: "What documents do I need?",
            answer:
              "You will need an accounts receivable aging report, business bank statements, a customer list, and standard business identification. The lender will also review your invoicing and collection history.",
          },
          {
            question: "How is AR financing different from factoring?",
            answer:
              "With AR financing, you borrow against your invoices but keep ownership and handle collections yourself — your customers are unaware. With factoring, you sell the invoices to a third party who then collects from your customers directly. AR financing is typically preferred by businesses with strong customer relationships.",
          },
          {
            question: "Can I apply if my business is less than a year old?",
            answer:
              "Yes, though AR financing facilities typically require a track record of invoicing. If you have at least 4 months of consistent receivables to creditworthy customers, you may qualify for an initial facility that grows as your business matures.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "The initial application uses a soft credit inquiry. A hard pull may occur only when you finalize the facility agreement with a specific lender.",
          },
        ],
        relatedProducts: ["factoring", "line-of-credit", "term-loans"],
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
        heroImage: "/images/hero-commercial-mortgage.jpg",
        heroAlt: "Modern commercial office building with glass facade in an urban setting",
        howItWorks: [
          {
            title: "Describe the property and purpose",
            description:
              "Tell us about the commercial property — purchase, refinance, or renovation — along with its location, type, value, and how it will be used for your business.",
          },
          {
            title: "Provide business and financial documentation",
            description:
              "Commercial mortgages require more documentation than shorter-term products. You will need business and personal tax returns, financial statements, a property appraisal, and details about the property's income potential.",
          },
          {
            title: "Receive matched lender offers",
            description:
              "We present offers from lenders who specialize in your property type and deal size, with clear rate comparisons, term options, and down payment requirements.",
          },
          {
            title: "Close and fund",
            description:
              "Once you select an offer, we coordinate the closing process — appraisal, title, legal review, and funding. Typical closings take 30-60 days depending on property complexity.",
          },
        ],
        whoQualifies: [
          "Minimum 600 credit score (commercial mortgages typically require higher credit than shorter-term products)",
          "At least 2 years in business (preferred; some programs accept less with strong financials)",
          "Down payment of 10-25% depending on property type and loan program",
          "Property must generate income or serve as the borrower's primary business location",
          "Eligible property types include office, retail, industrial, mixed-use, and multi-family",
        ],
        useCases: [
          "A law firm purchases a $1.2M office building instead of renewing its lease, locking in a 20-year fixed mortgage and building equity while keeping monthly costs comparable to rent.",
          "A warehouse operator refinances an existing $800K mortgage from a high-rate private lender into a conventional commercial mortgage at a significantly lower rate, saving over $3,000 per month.",
          "A restaurateur buys a mixed-use property — restaurant on the ground floor, rental apartments above — using the rental income to offset the mortgage and reduce the effective cost of the business space.",
        ],
        comparisons:
          "Commercial mortgages offer the longest terms and lowest rates for real estate, but they require more documentation and longer closing timelines than a bridge loan. If you need to close quickly — for example, to win a competitive bid on a property — a bridge loan can provide interim financing while the commercial mortgage is processed. SBA 504 loans are another option for owner-occupied commercial real estate, offering even lower down payments (as low as 10%) and competitive fixed rates, though the SBA process adds additional requirements. For residential properties used for business purposes, a HELOC or residential mortgage may be more appropriate.",
        faqs: [
          {
            question: "What credit score do I need for a commercial mortgage?",
            answer:
              "Most commercial mortgage programs require a minimum credit score of 600-650, which is higher than many shorter-term business lending products. Strong business financials and property income can offset credit score concerns in some cases.",
          },
          {
            question: "How long does it take to close a commercial mortgage?",
            answer:
              "Commercial mortgages typically take 30-60 days to close, depending on property appraisal, title work, and documentation review. We work to streamline the process, but the timeline reflects the thorough underwriting required for long-term real estate financing.",
          },
          {
            question: "What documents do I need?",
            answer:
              "You will need 2-3 years of business and personal tax returns, current financial statements (P&L and balance sheet), a property appraisal, rent roll (for income properties), purchase agreement, and standard business identification.",
          },
          {
            question: "How much down payment is required?",
            answer:
              "Down payments typically range from 10-25% of the property value, depending on the property type, loan program, and your financial profile. SBA 504 loans can offer down payments as low as 10% for owner-occupied properties.",
          },
          {
            question: "Can I finance a property renovation with a commercial mortgage?",
            answer:
              "Yes. Many commercial mortgage programs include provisions for renovation financing, either through a construction-to-permanent loan or by rolling renovation costs into the mortgage amount based on the property's projected after-renovation value.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "A soft inquiry is used during the initial application. A hard credit pull occurs during the formal underwriting process once you have selected a lender and are moving toward closing.",
          },
        ],
        relatedProducts: ["sba-loans", "bridge-loans", "heloc"],
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
        heroImage: "/images/hero-residential-mortgage.jpg",
        heroAlt: "Modern residential home exterior with landscaped front yard",
        howItWorks: [
          {
            title: "Tell us about your situation",
            description:
              "Share your homeownership goals — purchasing, refinancing, or cash-out — along with your income sources, employment type, and the documentation you have available.",
          },
          {
            title: "Get matched with the right program",
            description:
              "We identify mortgage programs that fit your income documentation type — conventional, bank statement, asset depletion, or alternative documentation. Not every lender offers these; we know which ones do.",
          },
          {
            title: "Lock your rate and proceed",
            description:
              "Once you choose a program and lender, lock your rate and begin the formal underwriting process. We coordinate appraisal, title, and documentation to keep the process on track.",
          },
          {
            title: "Close on your home",
            description:
              "Complete the closing process and receive the keys (or the cash, for refinances). Typical timelines are 30-45 days from application to closing.",
          },
        ],
        whoQualifies: [
          "Minimum 580 credit score for many programs (some require 620+)",
          "Self-employed borrowers and business owners are specifically welcome",
          "Bank statement programs available for borrowers who cannot document income through traditional tax returns",
          "Down payment requirements vary by program — as low as 3% for conventional, 3.5% for FHA",
          "Primary residences, second homes, and investment properties eligible depending on program",
        ],
        useCases: [
          "A freelance consultant purchases a $450K home using a 12-month bank statement program after being declined by three traditional lenders who could not underwrite her variable income.",
          "A business owner with a profitable LLC refinances his existing mortgage at a lower rate using 24-month bank statements to document income, since his tax returns show lower income due to legitimate business deductions.",
          "An entrepreneur pulls $150K in cash out of her home equity to fund a new business venture, using an asset depletion program that qualifies her based on liquid assets rather than monthly income.",
        ],
        comparisons:
          "Residential mortgages through our network differ from standard bank mortgages primarily in documentation flexibility — bank statement programs and alternative qualification methods that banks rarely offer. A HELOC provides revolving access to home equity without refinancing, but at variable rates and typically lower amounts. For business owners looking to purchase commercial property, a commercial mortgage is the appropriate product. If your credit needs improvement before qualifying for the best residential rates, our credit repair program can help optimize your profile first.",
        faqs: [
          {
            question: "What credit score do I need for a residential mortgage?",
            answer:
              "Minimum requirements vary by program. FHA loans accept scores as low as 580, conventional programs typically start at 620, and bank statement programs vary by lender. Higher scores unlock better rates and lower down payment requirements.",
          },
          {
            question: "How long does it take to close?",
            answer:
              "Most residential mortgages close within 30-45 days from application. Bank statement and alternative documentation programs may take slightly longer due to additional verification steps. We manage the timeline closely to avoid delays.",
          },
          {
            question: "What documents do I need as a self-employed borrower?",
            answer:
              "For bank statement programs, you will need 12 or 24 months of personal or business bank statements, a profit and loss statement (can be self-prepared), a government ID, and documentation of your business (business license, EIN letter, or articles of organization).",
          },
          {
            question: "What is a bank statement mortgage program?",
            answer:
              "A bank statement program qualifies you based on your bank deposits over 12 or 24 months rather than tax returns. This benefits business owners whose tax returns show lower income due to legitimate deductions. The lender calculates your qualifying income from your actual bank deposits.",
          },
          {
            question: "Can I get a mortgage if my business is less than two years old?",
            answer:
              "Some programs require 2 years of self-employment history, but exceptions exist. If you have a strong credit score, significant assets, or can show income continuity from a previous career, lenders may offer flexibility on the self-employment duration requirement.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "A soft inquiry is used during the pre-qualification phase. A hard credit pull occurs when you formally apply with a specific lender, which may cause a small temporary decrease in your score.",
          },
        ],
        relatedProducts: ["heloc", "commercial-mortgage", "sba-loans"],
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
        heroImage: "/images/hero-heloc.jpg",
        heroAlt: "Elegant residential home with well-maintained garden and driveway",
        howItWorks: [
          {
            title: "Apply with your property information",
            description:
              "Provide details about your home — current mortgage balance, estimated value, and location — along with your personal financial information. We use this to estimate your available equity.",
          },
          {
            title: "Property appraisal and underwriting",
            description:
              "The lender orders an appraisal to determine your home's current market value and calculates your available equity (typically up to 80-90% of the home's value minus your existing mortgage).",
          },
          {
            title: "Receive your credit line",
            description:
              "Once approved, your HELOC is established as a revolving credit line. Access funds via online transfer, checks, or a dedicated card depending on the lender.",
          },
          {
            title: "Draw, repay, and redraw",
            description:
              "Use your HELOC like a checking account backed by your home equity. During the draw period (typically 5-10 years), you can access and repay funds freely. After the draw period, you enter a repayment phase.",
          },
        ],
        whoQualifies: [
          "Minimum 620 credit score (most HELOC programs require higher credit than business lending products)",
          "Sufficient home equity — typically at least 15-20% equity after the HELOC is established",
          "Stable income documented through tax returns, bank statements, or employment verification",
          "Property must be a primary residence (some programs allow second homes)",
          "Current on existing mortgage payments with no recent late payments",
        ],
        useCases: [
          "A business owner draws $100K from her HELOC to fund a second location for her retail business, repaying from the new location's revenue over the following 18 months.",
          "An entrepreneur uses a $75K HELOC to consolidate high-interest business credit card debt into a single lower-rate payment, saving thousands in annual interest costs.",
          "A real estate investor maintains a $200K HELOC as a ready-access cash reserve, drawing on it for down payments on investment properties and repaying after each property is refinanced into a permanent mortgage.",
        ],
        comparisons:
          "A HELOC offers revolving access similar to a business line of credit, but secured by home equity rather than business assets — which typically means lower interest rates. Unlike a residential mortgage refinance, a HELOC does not replace your existing mortgage; it sits alongside it as a second lien. A cash-out refinance may offer a lower rate but involves closing costs and replaces your first mortgage. For purely business-related capital needs, a business line of credit keeps your home out of the equation, which some borrowers prefer.",
        faqs: [
          {
            question: "What credit score do I need for a HELOC?",
            answer:
              "Most HELOC programs require a minimum credit score of 620-680, which is higher than many business lending products. Strong equity positions can sometimes offset borderline credit scores.",
          },
          {
            question: "How long does it take to get a HELOC?",
            answer:
              "HELOCs typically take 2-4 weeks from application to funding, largely due to the property appraisal requirement. Some lenders offer expedited processes that can close in as few as 10 business days.",
          },
          {
            question: "What documents do I need?",
            answer:
              "You will need a government ID, proof of income (tax returns or bank statements), your current mortgage statement, homeowner's insurance information, and property details. The lender will order a property appraisal as part of the process.",
          },
          {
            question: "Can I use a HELOC for business purposes?",
            answer:
              "Yes. Many business owners use HELOCs to fund business investments, though the HELOC is secured by your personal residence. Consult with a tax advisor about potential interest deductibility when using HELOC funds for business purposes.",
          },
          {
            question: "What happens when the draw period ends?",
            answer:
              "Most HELOCs have a draw period of 5-10 years, followed by a repayment period of 10-20 years. During the repayment period, you can no longer draw new funds and must repay the outstanding balance. Some lenders offer the option to refinance or renew the HELOC.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "A pre-qualification may use a soft inquiry, but a formal HELOC application requires a hard credit pull. The impact is typically small and temporary — usually 5-10 points — and recovers within a few months.",
          },
        ],
        relatedProducts: ["residential-mortgage", "line-of-credit", "commercial-mortgage"],
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
        heroImage: "/images/hero-sba-loans.jpg",
        heroAlt: "Business owner signing government-backed loan documents at a desk",
        howItWorks: [
          {
            title: "Determine the right SBA program",
            description:
              "We review your business profile, funding needs, and timeline to recommend the right program — 7(a) for general business purposes, 504 for real estate and equipment, or Express for faster decisions on smaller amounts.",
          },
          {
            title: "Prepare your application package",
            description:
              "SBA loans require more documentation than conventional products. We help you assemble everything — business plan, financial projections, tax returns, and SBA-specific forms — so nothing is missing when the application is submitted.",
          },
          {
            title: "Submit to SBA-preferred lenders",
            description:
              "We connect you with lenders who have established SBA relationships and high approval rates. Your pre-packaged application moves through their process faster because the documentation is complete and organized.",
          },
          {
            title: "Close and receive funding",
            description:
              "After SBA approval, the lender finalizes the loan and disburses funds. Typical timelines are 30-90 days from application to funding, depending on the program and deal complexity.",
          },
        ],
        whoQualifies: [
          "Minimum 650 credit score (SBA programs typically require higher credit than conventional business loans)",
          "At least 2 years in business (SBA Express may accept newer businesses)",
          "Business must meet SBA size standards for your industry",
          "Must be a for-profit business operating in the United States",
          "Business owner must have no recent bankruptcies, defaults, or government debt delinquencies",
          "Demonstrated ability to repay from business cash flow",
        ],
        useCases: [
          "A bakery owner uses an SBA 7(a) loan for $350K to open a second location, taking advantage of a 10-year term at a rate several points below what conventional lenders offered.",
          "A manufacturing company secures an SBA 504 loan for $1.5M to purchase and renovate an industrial facility, putting down only 10% compared to the 25% required by conventional lenders.",
          "A veterinary practice obtains an SBA Express loan for $75K in working capital within two weeks, using the streamlined process for smaller loan amounts.",
        ],
        comparisons:
          "SBA loans offer the lowest rates and longest terms of any business lending product, but they come with the most involved application process and longest approval timelines. If you need capital within days rather than weeks, a term loan or line of credit provides faster access at slightly higher rates. For commercial real estate specifically, the SBA 504 program offers lower down payments than conventional commercial mortgages, but the process is more complex. Equipment financing is a simpler alternative to SBA loans for equipment purchases, though SBA rates are typically lower.",
        faqs: [
          {
            question: "What credit score do I need for an SBA loan?",
            answer:
              "Most SBA loan programs require a minimum credit score of 650-680, which is higher than many conventional business lending products. The SBA places significant weight on credit history, including no recent defaults, bankruptcies, or government debt delinquencies.",
          },
          {
            question: "How long does the SBA loan process take?",
            answer:
              "SBA loans typically take 30-90 days from application to funding, depending on the program. SBA Express can close in 2-4 weeks for amounts under $500K. Standard 7(a) and 504 loans take longer due to additional underwriting and government approval steps.",
          },
          {
            question: "What documents do I need for an SBA loan?",
            answer:
              "SBA loans require comprehensive documentation: 2-3 years of business and personal tax returns, a business plan with financial projections, current financial statements, a personal financial statement (SBA Form 413), a statement of ownership, and various SBA-specific forms. We help you compile everything.",
          },
          {
            question: "What is the difference between SBA 7(a) and 504 loans?",
            answer:
              "SBA 7(a) is the most versatile program — use it for working capital, equipment, real estate, or debt refinancing. SBA 504 is specifically designed for real estate and major equipment purchases, typically offering lower down payments (10%) and fixed rates on the SBA-guaranteed portion. The right choice depends on your specific use of funds.",
          },
          {
            question: "Can I apply if my business is less than two years old?",
            answer:
              "Some SBA programs, particularly SBA Express, may accept businesses with less than two years of history if you have strong personal credit, relevant industry experience, and a solid business plan. Standard 7(a) and 504 programs generally prefer at least two years of operating history.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "Yes. SBA loan applications involve a hard credit inquiry as part of the underwriting process. However, multiple inquiries for the same type of loan within a 14-45 day window are typically counted as a single inquiry by credit scoring models.",
          },
        ],
        relatedProducts: ["term-loans", "line-of-credit", "equipment-financing"],
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
        heroImage: "/images/hero-business-credit-cards.jpg",
        heroAlt: "Business credit cards arranged on a desk next to a laptop",
        howItWorks: [
          {
            title: "Credit profile review",
            description:
              "We review your personal and business credit profiles to understand your current position and identify which card issuers are most likely to approve you at the highest limits.",
          },
          {
            title: "Strategic card selection",
            description:
              "Based on your credit profile, industry, and spending patterns, we recommend a specific set of business credit cards — targeting 0% introductory APR offers, optimal rewards, and maximum credit limits.",
          },
          {
            title: "Coordinated applications",
            description:
              "We guide you through applying for cards in a strategic sequence that maximizes approvals and minimizes credit inquiry impact. Timing and order matter — we have the process dialed in.",
          },
          {
            title: "Ongoing credit building",
            description:
              "As you use the cards responsibly, your business credit profile strengthens. We provide guidance on utilization ratios, payment timing, and when to apply for limit increases or additional cards.",
          },
        ],
        whoQualifies: [
          "Minimum 650 credit score (0% APR offers typically require good to excellent credit)",
          "Clean credit history with no recent derogatory marks",
          "Business must be registered (LLC, Corp, sole proprietorship with EIN)",
          "No minimum time in business for some card issuers, though longer history helps",
          "Demonstrated personal income sufficient to support credit applications",
        ],
        useCases: [
          "A marketing agency stacks $60K in 0% APR business credit cards to fund a hiring push, paying the balance down over 18 months from new client revenue with zero interest costs.",
          "An e-commerce startup uses $40K in strategic credit card funding to purchase initial inventory, taking advantage of the 0% intro period to sell through the inventory and repay before interest kicks in.",
          "A real estate agent builds $100K in business credit card capacity over 12 months, establishing a strong business credit profile that unlocks better rates on a future commercial mortgage.",
        ],
        comparisons:
          "Business credit cards offer the unique advantage of 0% introductory APR — true interest-free capital for up to 21 months. A line of credit provides revolving access at competitive rates, but always charges interest on drawn funds. Term loans offer larger amounts but with fixed repayment schedules and interest from day one. The main limitation of credit cards is lower total available capital compared to a line of credit or term loan. Credit cards are most powerful as part of a broader funding strategy, and they build business credit that improves your terms on other products.",
        faqs: [
          {
            question: "What credit score do I need for 0% APR business credit cards?",
            answer:
              "Most 0% APR business credit card offers require a personal credit score of 650 or higher, with 700+ unlocking the best introductory terms and highest limits. We assess your full credit profile to identify which issuers are the best fit.",
          },
          {
            question: "How much total credit can I access through card stacking?",
            answer:
              "Total credit lines typically range from $5K to $150K depending on your credit profile, income, and the number of cards in the strategy. Clients with strong credit profiles (720+) frequently achieve $75K-$150K in combined limits.",
          },
          {
            question: "What happens when the 0% APR period ends?",
            answer:
              "After the introductory period (typically 12-21 months), the standard APR applies to any remaining balance. Our strategy is designed around paying down or paying off balances before the intro period ends. If needed, balance transfer strategies can extend the interest-free period.",
          },
          {
            question: "How many credit cards should I apply for at once?",
            answer:
              "Our typical strategy involves 2-4 cards applied for in a specific sequence and timing. Applying for too many at once can trigger issuer declines. We manage the cadence based on your profile and each issuer's sensitivity to recent inquiries.",
          },
          {
            question: "Will this hurt my personal credit score?",
            answer:
              "Each application generates a hard inquiry that may temporarily reduce your score by 5-10 points. However, the increased total credit available improves your utilization ratio, which typically results in a net positive credit score impact within 2-3 months. Long-term, building business credit is beneficial to your overall financial profile.",
          },
          {
            question: "Does applying affect my credit score?",
            answer:
              "Yes. Business credit card applications require hard credit inquiries. We strategize the application sequence and timing to minimize the cumulative impact and maximize approvals.",
          },
        ],
        relatedProducts: ["line-of-credit", "term-loans", "credit-repair"],
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
        heroImage: "/images/hero-credit-repair.jpg",
        heroAlt: "Financial advisor reviewing credit reports with a client",
        howItWorks: [
          {
            title: "Comprehensive credit review",
            description:
              "We pull reports from all three major credit bureaus — Equifax, Experian, and TransUnion — and conduct a line-by-line analysis to identify every item that can be disputed, corrected, or improved.",
          },
          {
            title: "Dispute and optimization strategy",
            description:
              "We build a prioritized action plan targeting the items with the highest score impact first. This includes bureau disputes, goodwill letters to creditors, authorized user strategies, and credit utilization optimization.",
          },
          {
            title: "Active dispute management",
            description:
              "We file disputes directly with the bureaus and creditors, track responses, and escalate when necessary. Most dispute cycles take 30-45 days, and we manage multiple rounds until every viable item has been addressed.",
          },
          {
            title: "Funding readiness assessment",
            description:
              "As your score improves, we reassess your funding eligibility at each milestone. When you hit your target range, we connect you with the products that now match your improved profile — better rates, higher amounts, and more favorable terms.",
          },
        ],
        whoQualifies: [
          "Any credit score — this program is designed to improve your position regardless of starting point",
          "Business owners who have been declined for funding due to credit issues",
          "Individuals with inaccurate, outdated, or disputable items on their credit reports",
          "Business owners planning to apply for funding in the next 3-12 months who want to optimize their profile first",
          "No minimum time in business required",
        ],
        useCases: [
          "A restaurant owner with a 520 credit score works with our credit repair team to dispute three inaccurate collections and optimize utilization. Within 90 days, her score reaches 620 and she qualifies for a $150K line of credit she was previously denied.",
          "A contractor discovers old medical debt that is damaging his score. Our team disputes the items, removes two that were past the statute of limitations, and negotiates pay-for-delete on the third. His score improves by 85 points.",
          "A startup founder has a 680 score but wants to maximize her position before applying for SBA financing. Our optimization strategies — reducing utilization, adding authorized user accounts, and correcting a reporting error — push her score to 740, qualifying her for the best available SBA rates.",
        ],
        comparisons:
          "Credit repair is not a lending product — it is a service that improves your eligibility for every other product we offer. Clients who complete the credit repair program before applying for a line of credit, term loan, or SBA loan typically qualify for significantly better rates and higher amounts. If you need capital immediately, business credit cards with 0% intro APR can provide short-term access while you work on improving your credit profile. A line of credit may also be accessible at lower credit scores, though the terms will improve as your score increases.",
        faqs: [
          {
            question: "How much can credit repair improve my score?",
            answer:
              "Results vary based on your starting position and what is on your report. Clients with inaccurate items, old collections, or high utilization typically see improvements of 50-120 points within 60-90 days. We provide a realistic estimate during your initial consultation based on what we find on your reports.",
          },
          {
            question: "How long does the credit repair process take?",
            answer:
              "Most clients see meaningful results within 60-90 days. The full process — including multiple dispute rounds and optimization strategies — typically runs 3-6 months. We provide regular progress updates and milestone reports throughout.",
          },
          {
            question: "What documents do I need to get started?",
            answer:
              "You will need a government-issued ID, your Social Security number for pulling credit reports, and any documentation related to accounts you believe are inaccurate (statements, payment receipts, correspondence with creditors).",
          },
          {
            question: "Is credit repair legitimate?",
            answer:
              "Yes. You have legal rights under the Fair Credit Reporting Act (FCRA) and the Fair Debt Collection Practices Act (FDCPA) to dispute inaccurate, unverifiable, or outdated information on your credit reports. Our service exercises these rights on your behalf through proper channels.",
          },
          {
            question: "Can you guarantee a specific score improvement?",
            answer:
              "No legitimate credit repair service can guarantee specific results. What we can guarantee is a thorough analysis of your reports, aggressive pursuit of every viable dispute, and a clear strategy for improvement. We provide realistic expectations during the initial review.",
          },
          {
            question: "Does starting credit repair affect my existing accounts?",
            answer:
              "No. Disputing items on your credit report does not affect your existing credit accounts, loans, or credit cards. The dispute process targets specific inaccurate or questionable items, not your overall credit file.",
          },
        ],
        relatedProducts: ["business-credit-cards", "line-of-credit", "sba-loans"],
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
