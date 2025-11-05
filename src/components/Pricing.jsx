import React from "react";

const plans = [
  {
    name: "Kickstart",
    price: "SEK 10,000–15,000",
    features: [
      "One-page website or simple multi-page site",
      "Basic SEO setup (on-page SEO, keyword research)",
      "GA4, GSC & Tag Manager setup",
      "1 revision included",
    ],
    highlight: "Perfect for small businesses getting started online",
  },
  {
    name: "Momentum",
    price: "SEK 22,000–35,000",
    features: [
      "Multi-page website",
      "On-page SEO + basic technical SEO",
      "Email marketing tools integration",
      "Analytics & performance tracking setup",
      "2 revisions included",
    ],
    highlight: "Ideal for growing businesses needing more features",
  },
  {
    name: "Elevate",
    price: "SEK 50,000–80,000",
    features: [
      "Full website development (blog/e-commerce)",
      "Advanced SEO (on-page & off-page)",
      "Digital marketing integration",
      "Monthly reports & growth tracking",
      "3 revisions included",
    ],
    highlight: "For businesses ready to dominate online",
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="relative">
      {/* Early Stage Offer Banner */}
      <div className="absolute -top-12 left-0 right-0 bg-gradient-to-r from-accent to-primary text-background py-3 px-4 rounded-lg text-center text-sm">
        <span className="font-semibold">Limited Time Offer:</span> First 5
        clients get 10-15% off any package! 🎉
      </div>

      <h2 className="text-2xl font-semibold text-brandText">
        Packages for Every Stage
      </h2>
      <p className="text-brandText/70 mt-2">
        Transparent pricing with guaranteed results and no hidden fees.
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <article
            key={p.name}
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
          >
            {/* Package Name and Price */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-brandText">{p.name}</h3>
              <div className="mt-2">
                <div className="text-2xl font-bold text-brandText">
                  {p.price}
                </div>
                <p className="text-sm text-accent mt-1">{p.highlight}</p>
              </div>

              {/* Features List */}
              <ul className="mt-4 space-y-2">
                {p.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 text-accent mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-brandText/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block w-full px-4 py-3 bg-accent text-background rounded-xl text-center font-medium hover:bg-accent/90 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </article>
        ))}
      </div>
    </div>
  );
}
