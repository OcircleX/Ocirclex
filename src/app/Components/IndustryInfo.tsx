"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../services/animation";

const stats = [
  {
    label: "Clients Satisfaction",
    value: 26,
    featured: true,
  },
  {
    label: "Years of Experience",
    value: 8,
    featured: false,
  },
  {
    label: "Projects Completed",
    value: 20,
    featured: false,
  },
  {
    label: "Worldwide Clients",
    value: 100,
    featured: false,
  },
];

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          el.textContent = `${Math.round(value * eased)}+`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>0+</span>;
}

const IndustryInfo = () => {
  return (
    <section className="relative z-20 w-full overflow-hidden bg-[#f6f7f4] pb-20 pt-6 md:pb-28 md:pt-8">
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-[#7BB668]/15 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl px-5 text-[#04081C] md:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            id="bundled"
            variants={SlideRight(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl font-bold md:text-5xl">
              BUNDLED WITH
              <br />
              <span className="showcase">
                <i>industry experience</i>
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-xs text-sm uppercase leading-relaxed tracking-[0.12em] text-[#04081C]/70 md:text-right"
          >
            Our excellent team and professionals take care of your brand, end to
            end.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:auto-rows-[minmax(240px,1fr)] md:grid-cols-12 md:grid-rows-2 md:gap-5">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 md:p-8 ${
                [
                  "md:col-start-1 md:col-span-4 md:row-start-1",
                  "md:col-start-5 md:col-span-3 md:row-start-1",
                  "md:col-start-1 md:col-span-4 md:row-start-2",
                  "md:col-start-5 md:col-span-3 md:row-start-2",
                ][index]
              } ${
                stat.featured
                  ? "border-transparent bg-[#04081C] text-white"
                  : "border-[#04081C]/10 bg-white hover:-translate-y-1 hover:border-[#7BB668]/40 hover:bg-[#04081C] hover:text-white"
              }`}
            >
              <p
                className={`text-sm leading-snug md:text-base ${
                  stat.featured
                    ? "text-white/70"
                    : "text-[#04081C]/65 transition-colors duration-300 group-hover:text-white/70"
                }`}
              >
                {stat.label}
              </p>
              <h3
                className={`mt-8 text-5xl font-bold tracking-tight md:mt-12 md:text-6xl ${
                  stat.featured
                    ? "text-[#7BB668]"
                    : "text-[#04081C] transition-colors duration-300 group-hover:text-[#7BB668]"
                }`}
              >
                <CountUp value={stat.value} />
              </h3>
            </motion.article>
          ))}

          <motion.div
            id="fazala"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative min-h-[360px] overflow-hidden rounded-3xl md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:min-h-0 md:h-full"
          >
            <Image
              src="/wasif2.png"
              alt="CircleX team"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04081C]/80 via-[#04081C]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-instrument text-sm italic tracking-[0.2em] text-[#7BB668]">
                The people
              </p>
              <p className="mt-1 text-2xl font-bold text-white">
                Behind every launch
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInfo;
