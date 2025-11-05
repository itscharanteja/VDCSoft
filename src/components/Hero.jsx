import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ChartBarIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-brandText">
              Launch. Rank. Grow.
            </h1>
            <p className="mt-4 text-brandText/80 max-w-prose">
              VDCSoft is a full-service digital agency helping small and medium
              businesses grow online through web development, SEO, and digital
              marketing.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl bg-accent text-background shadow-md hover:bg-accent/90 focus-ring"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#pricing"
                className="px-5 py-3 rounded-2xl border border-secondary/30 text-brandText hover:bg-surface/50 focus-ring"
              >
                See Our Starter Packages
              </a>
            </div>
            <div className="mt-6 text-sm text-brandText/60">
              Based in Sweden · GDPR-ready · Transparent pricing
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gradient-to-br from-secondary/20 to-white rounded-2xl relative overflow-hidden"
          >
            {/* 3D Abstract Illustration */}
            <div className="h-60 relative z-10">
              {/* Background Gradients */}
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-gradient-to-br from-secondary/40 to-secondary/10 opacity-60 blur-xl"></div>
              <div className="absolute left-1/4 top-1/4 w-32 h-32 rounded-lg bg-gradient-to-tl from-secondary/50 to-secondary/20 opacity-50 blur-lg transform rotate-12"></div>
              <div className="absolute right-1/4 bottom-1/4 w-24 h-24 rounded-lg bg-gradient-to-br from-accent/30 to-secondary/30 opacity-40 blur-md transform -rotate-12"></div>

              {/* Floating Elements with Icons */}
              {/* Web Development Icon */}
              <motion.div
                className="absolute left-8 top-8 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CodeBracketIcon className="w-8 h-8 text-accent" />
              </motion.div>

              {/* Analytics/SEO Icon */}
              <motion.div
                className="absolute right-12 top-1/2 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <ChartBarIcon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Digital Marketing Icon */}
              <motion.div
                className="absolute left-1/3 bottom-8 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center"
                animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <MegaphoneIcon className="w-8 h-8 text-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Early Stage Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-secondary/30 via-secondary/20 to-white border-2 border-secondary/30 relative overflow-hidden group"
        >
          {/* Glass shine effect */}
          <div className="absolute -inset-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
          </div>

          {/* Glass reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

          {/* Subtle shimmer */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-white/30 via-transparent to-transparent blur-xl animate-pulse" />
          </div>

          {/* Content */}
          <div className="relative z-10 group-hover:scale-[1.02] transition-transform duration-300 text-center">
            <strong className="text-accent animate-pulse text-lg">
              ✨ Early Stage Offer:
            </strong>{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-lg">
              First 5 clients get 10-15% off any package! Plus, get a
              satisfaction guarantee.
            </span>
          </div>

          {/* Corner highlights */}
          <div className="absolute top-2 right-2 w-8 h-8 bg-white/30 rounded-full blur-md animate-pulse" />
          <div
            className="absolute bottom-2 left-2 w-8 h-8 bg-white/30 rounded-full blur-md animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
