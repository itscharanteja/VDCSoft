import React from "react";

export default function WhyUs() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        We’re new — that’s your advantage.
      </h2>
      <p className="mt-3 text-brandText/80">
        Senior-level execution at startup pricing. Fast delivery, direct founder
        contact, and transparent reporting.
      </p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/30">
          <h4 className="font-semibold text-brandText">
            Professional Execution
          </h4>
          <p className="text-sm text-brandText/70 mt-2">
            Fast, professional websites at competitive rates with measurable
            performance improvements.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/30">
          <h4 className="font-semibold text-brandText">
            Satisfaction Guarantee
          </h4>
          <p className="text-sm text-brandText/70 mt-2">
            Not satisfied in 30 days? Get 50% refund or a free optimization
            cycle.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/30">
          <h4 className="font-semibold text-brandText">Transparent Pricing</h4>
          <p className="text-sm text-brandText/70 mt-2">
            Clear pricing, no hidden fees, and personal commitment to your
            growth.
          </p>
        </div>
      </div>
      {/* Optional Services */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/30">
          <h4 className="font-semibold flex items-center text-brandText">
            <svg
              className="w-5 h-5 text-accent mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Ongoing Maintenance
          </h4>
          <p className="text-sm text-brandText/70 mt-2">
            Regular updates, backups, and comprehensive security maintenance to
            keep your website running smoothly.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/30">
          <h4 className="font-semibold flex items-center text-brandText">
            <svg
              className="w-5 h-5 text-accent mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            Digital Marketing
          </h4>
          <p className="text-sm text-brandText/70 mt-2">
            Strategic ad campaigns, organic SEO optimization, and comprehensive
            digital marketing solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
