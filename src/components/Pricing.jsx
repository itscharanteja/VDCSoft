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
      <div className="left-0 right-0 rounded-2xl bg-gradient-to-r from-accent to-primary px-4 py-3 text-center text-sm text-background shadow-lg md:absolute md:-top-12">
        <span className="font-semibold">Limited Time Offer:</span> First 5
        clients get 10-15% off any package! 🎉
      </div>

      <h2 className="text-2xl font-semibold text-brandText sm:text-3xl">
        Packages for Every Stage
      </h2>
      <p className="mt-2 text-brandText/70">
        Transparent pricing with guaranteed results and no hidden fees.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-secondary/20 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6"
          >
            {/* Package Name and Price */}
            <div className="relative z-10 space-y-3">
              <h3 className="text-lg font-semibold text-brandText">{p.name}</h3>
              <div>
                <div className="text-xl font-bold text-brandText sm:text-2xl">
                  {p.price}
                </div>
                <p className="mt-1 text-sm text-accent">{p.highlight}</p>
              </div>
            </div>

            {/* Features List */}
            <ul className="relative z-10 mt-4 flex flex-col gap-2 text-sm text-brandText/80">
              {p.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 rounded-xl border border-secondary/20 bg-white/80 p-2"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-accent"
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="relative z-10 mt-6 sm:mt-8">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-background transition hover:bg-accent/90 focus-ring"
              >
                Get Started
                <span aria-hidden className="text-base font-bold">&gt;</span>
              </a>
            </div>

            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          </article>
        ))}
      </div>
    </div>
  );
}
