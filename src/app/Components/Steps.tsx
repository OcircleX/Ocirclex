"use client";

import { motion } from "framer-motion";
import {
  LuClipboardList,
  LuPenTool,
  LuCode,
  LuRocket,
  LuLifeBuoy,
} from "react-icons/lu";
import { SlideRight } from "../services/animation";

const steps = [
  {
    number: "01",
    title: "Requirements",
    blurb: "We start by listening — mapping goals, constraints, and what success actually looks like.",
    points: ["Introduction", "Needs Assessment", "Collaboration", "Timeline"],
    icon: LuClipboardList,
  },
  {
    number: "02",
    title: "Design & Prototype",
    blurb: "Ideas become interfaces. We shape flows, systems, and clickable prototypes you can feel.",
    points: ["Design System", "Crafting UI/UX", "Interactive prototypes", "User Journeys"],
    icon: LuPenTool,
  },
  {
    number: "03",
    title: "Development",
    blurb: "Design turns into product — clean architecture, solid integrations, and code that lasts.",
    points: [
      "Transforming Design",
      "Frameworks & Clean Code",
      "Back & Frontend Integration",
      "Database & API Integration",
    ],
    icon: LuCode,
  },
  {
    number: "04",
    title: "Launch",
    blurb: "Nothing ships until it holds up. We test, tune, and go live with confidence.",
    points: [
      "Cross-device testing",
      "Live Feedback",
      "Performance checks",
      "Quality assurance (QA)",
    ],
    icon: LuRocket,
  },
  {
    number: "05",
    title: "Support & Maintenance",
    blurb: "Launch is the start. We stay close with updates, monitoring, and continuous improvement.",
    points: [
      "Ongoing Technical Support",
      "Performance monitoring",
      "Version updates",
      "Continuous Improvement",
    ],
    icon: LuLifeBuoy,
  },
];

const Steps = () => {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-[#f6f7f4] py-16 text-[#04081C] md:py-28">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#7BB668]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#7BB668]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-screen-xl px-5 md:px-6">
        <div className="mb-12 max-w-4xl md:mb-16">
          <motion.h2
            variants={SlideRight(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl font-bold md:text-4xl"
          >
            OUR <br />
            <span className="showcase">
              <i>proven path</i>
            </span>
          </motion.h2>

          <motion.p
            variants={SlideRight(0.28)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6 max-w-3xl text-lg font-light tracking-wide text-[#04081C]/80 md:text-[28px] md:leading-10"
          >
            We begin by understanding your goals, then design and develop
            user-focused solutions, rigorously test for quality, and launch
            with ongoing support to ensure long-term success.
          </motion.p>
        </div>

        <div className="relative">
          <ol className="space-y-5 md:space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative"
                >
                  <article className="group relative overflow-hidden rounded-3xl border border-[#04081C]/10 bg-white/80 p-5 shadow-[0_12px_40px_rgba(4,8,28,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7BB668]/50 hover:bg-[#04081C] hover:shadow-[0_20px_50px_rgba(4,8,28,0.18)] md:p-8">
                    <span
                      className="pointer-events-none absolute -right-3 -top-8 text-[96px] font-bold leading-none text-[#04081C]/[0.05] transition-colors duration-300 group-hover:text-white/5 md:text-[140px]"
                    >
                      {step.number}
                    </span>

                    <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:gap-10">
                      <div className="flex items-center gap-4 md:w-64 md:shrink-0">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#7BB668]/40 bg-[#7BB668]/10 text-[#7BB668] transition-all duration-300 group-hover:border-[#7BB668] group-hover:bg-[#7BB668] group-hover:text-[#04081C] md:h-16 md:w-16">
                          <Icon className="h-6 w-6 md:h-7 md:w-7" />
                        </div>
                        <div>
                          <p className="font-instrument text-sm italic tracking-[0.22em] text-[#7BB668]">
                            Step {step.number}
                          </p>
                          <h3 className="mt-1 text-2xl font-bold leading-tight text-[#04081C] transition-colors duration-300 group-hover:text-white md:text-[28px]">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="max-w-xl text-[15px] leading-relaxed text-[#04081C]/70 transition-colors duration-300 group-hover:text-white/70 md:text-base">
                          {step.blurb}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {step.points.map((point) => (
                            <li
                              key={point}
                              className="rounded-full border border-[#04081C]/10 bg-[#f6f7f4] px-3 py-1.5 text-xs font-medium text-[#04081C] transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-white md:text-sm"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Steps;
