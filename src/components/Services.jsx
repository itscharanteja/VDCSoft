import React from "react";
import { motion } from "framer-motion";
import uxIcon from "../../svg/3.svg";
import appIcon from "../../svg/4.svg";
import contentIcon from "../../svg/5.svg";
import seoIcon from "../../svg/6.svg";
import adsIcon from "../../svg/7.svg";
import brandIcon from "../../svg/8.svg";
import copyIcon from "../../svg/9.svg";
import digitalIcon from "../../svg/10.svg";
import performanceIcon from "../../svg/11.svg";

const cards = [
  {
    title: "UX, UI & Web Development",
    icon: uxIcon,
    desc: "Custom sites and product experiences that feel fast and intuitive.",
    bullets: ["Responsive builds", "CMS & Jamstack", "Conversion-focused flows"],
  },
  {
    title: "Mobile App Development",
    icon: appIcon,
    desc: "Cross-platform apps that help your team launch quickly.",
    bullets: ["React Native / hybrid", "App Store readiness", "Analytics baked in"],
  },
  {
    title: "Content & Social Media Management",
    icon: contentIcon,
    desc: "Editorial calendars that keep every channel on-message.",
    bullets: ["Content pillars", "Asset production", "Community engagement"],
  },
  {
    title: "SEO (Search Engine Optimization)",
    icon: seoIcon,
    desc: "Technical and on-page SEO tuned for measurable growth.",
    bullets: ["Audits & clean-up", "Keyword-led content", "GA4 + GSC tracking"],
  },
  {
    title: "Google & Meta Ads Management",
    icon: adsIcon,
    desc: "Always-on paid acquisition with transparent reporting.",
    bullets: ["Campaign buildouts", "Creative testing", "ROAS dashboards"],
  },
  {
    title: "Brand Designing & Promotion",
    icon: brandIcon,
    desc: "Visual systems that reinforce your story everywhere.",
    bullets: ["Identity refresh", "Launch kits", "Pitch & sales collateral"],
  },
  {
    title: "Copywriting",
    icon: copyIcon,
    desc: "Clear messaging that sells across sites, ads, and email.",
    bullets: ["Website copy", "Ad scripts", "Lifecycle sequences"],
  },
  {
    title: "Digital Transformation",
    icon: digitalIcon,
    desc: "Replatforming guidance for teams modernising their stack.",
    bullets: ["Workflow automation", "Tool evaluation", "Change enablement"],
  },
  {
    title: "Performance Marketing",
    icon: performanceIcon,
    desc: "Always-be-testing playbooks for predictable pipeline.",
    bullets: ["Funnel design", "Attribution setup", "Growth experiments"],
  },
];

export default function Services() {
  return (
    <div id="services">
      <h2 className="text-2xl font-semibold text-brandText">Services</h2>
      <p className="text-brandText/70 mt-2">
        What we do — outcome-focused deliverables for SMEs.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
        {cards.map(({ title, desc, bullets, icon }) => (
          <motion.article
            key={title}
            whileHover={{
              rotateX: 2,
              rotateY: 4,
              scale: 1.02,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="p-6 bg-white rounded-2xl shadow-md relative overflow-hidden transform-preserve-3d"
          >
            {/* decorative semi-circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-primary/5" />
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-primary/5" />
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="h-12 w-12 rounded-full border border-secondary/30 bg-surface/80 flex items-center justify-center overflow-hidden">
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-brandText/70 mt-3 relative z-10">
              {desc}
            </p>
            <ul className="mt-3 text-sm text-brandText/80 list-disc pl-5 space-y-1 relative z-10">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
