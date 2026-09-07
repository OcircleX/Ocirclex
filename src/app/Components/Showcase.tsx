"use client";
import { Fragment, useRef, type RefObject } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { SlideLeft, SlideRight } from "../services/animation";

const projects = [
  {
    title: "Task Management",
    category: "Web dev & UI Design",
    image: "/Nuegas.png",
  },
  {
    title: "Fitness Application",
    category: "Mobile App Dev",
    image: "/Fitness.png",
  },
  {
    title: "Hospital Management System",
    category: "Web dev & UI Design",
    image: "/Hospital.png",
  },
];

function PortfolioCardVisual({
  project,
  index,
  scale,
  dim,
}: {
  project: (typeof projects)[number];
  index: number;
  scale?: MotionValue<number>;
  dim?: MotionValue<number>;
}) {
  return (
    <article
      className="portfolio-card sticky mb-6 last:mb-0"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
        zIndex: 10 + index,
      }}
      data-cursor="view"
    >
      <motion.div
        className="portfolio-card-inner will-change-transform overflow-hidden rounded-2xl bg-[#0b1028] shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10 md:rounded-3xl"
        style={{
          ...(scale ? { scale } : {}),
          transformOrigin: "top center",
        }}
      >
        <div className="relative aspect-[16/11] w-full md:aspect-[16/9] md:h-[68vh] md:max-h-[720px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <motion.div
            className="portfolio-card-dim pointer-events-none absolute inset-0 bg-[#04081C]"
            style={{ opacity: dim ?? 0 }}
          />

          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:bottom-10 sm:left-8 sm:right-auto">
            <span className="w-fit rounded-full bg-[#04081C] px-3 py-1.5 text-[11px] font-medium text-white sm:px-4 sm:py-2 sm:text-sm">
              {project.category}
            </span>
            <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[54px] md:leading-[1.15]">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

function ScalingPortfolioCard({
  project,
  index,
  nextSlotRef,
}: {
  project: (typeof projects)[number];
  index: number;
  nextSlotRef: RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: nextSlotRef,
    offset: ["start end", "start 18%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.45]);

  return (
    <PortfolioCardVisual
      project={project}
      index={index}
      scale={scale}
      dim={dim}
    />
  );
}

const Showcase = () => {
  const slotA = useRef<HTMLDivElement>(null);
  const slotB = useRef<HTMLDivElement>(null);
  const slotC = useRef<HTMLDivElement>(null);
  const slotRefs = [slotA, slotB, slotC];

  return (
    <section className="relative z-10 w-full overflow-x-clip bg-[#04081C] py-16 md:py-24">
      <div className="mx-auto w-full max-w-screen-xl px-5 md:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start md:mb-14" id="creativee">
          <motion.h2
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl text-white md:text-4xl"
          >
            View Our <br />
            <span className="showcase">
              <i>portfolio</i>
            </span>
          </motion.h2>

          <motion.a
            href="https://www.behance.net/Circle_Xproject"
            target="_blank"
            rel="noreferrer"
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-0 flex shrink-0 items-center gap-x-2 rounded-full border border-gray-500 bg-transparent px-3 py-2 text-xs font-medium text-white md:mt-4 md:px-6 md:py-4 md:text-sm"
          >
            ALL CASE STUDIES
          </motion.a>
        </div>

        <div className="relative">
          {projects.map((project, index) => {
            const nextSlotRef = slotRefs[index + 1];

            return (
              <Fragment key={project.title}>
                <div
                  ref={slotRefs[index]}
                  className="h-0 w-0 overflow-hidden"
                  aria-hidden
                />
                {nextSlotRef ? (
                  <ScalingPortfolioCard
                    project={project}
                    index={index}
                    nextSlotRef={nextSlotRef}
                  />
                ) : (
                  <PortfolioCardVisual project={project} index={index} />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
