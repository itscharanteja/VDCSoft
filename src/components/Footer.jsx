import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 flex flex-col gap-6">
        {/* Referral Banner */}
        <div className="text-center p-4 bg-surface/70 rounded-xl">
          <p className="text-accent font-medium">
            🎁 Refer a Friend: Both you and your referral get an extra 5% off!
          </p>
          <p className="text-sm text-primary mt-1">
            Limited time offer for our first 5 clients per package
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <div className="text-xl font-bold text-accent">VDCsoft</div>
            <div className="text-sm text-brandText/60">
              Based in Sweden · GDPR-ready
            </div>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-brandText/70"
          >
            <Link to="/" className="transition hover:text-brandText">
              Home
            </Link>
            <a className="transition hover:text-brandText" href="#services">
              Services
            </a>
            <a className="transition hover:text-brandText" href="#process">
              Process
            </a>
            <a className="transition hover:text-brandText" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-brandText" href="#contact">
              Contact
            </a>
          </nav>
          <div className="text-center text-sm text-gray-500 md:text-right">
            © {year} VDCsoft ·{" "}
            <Link to="/privacy" className="underline">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
