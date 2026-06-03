"use client";
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../services/animation";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic", // ✅ Correct way to load italic
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

const Showcase = () => {
  const [isVisible, setIsVisible] = useState(false);

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const image = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const content = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 },
  },
};

  const projects = [
    {
      title: "Task Management",
      category: "Web dev & UI Design",
      image: "/Nuegas.png",
      link: "/projects/dynamic-structures",
    },
    {
      title: "Fitness  Application",
      category: "Mobile App Dev",
      image: "/Fitness.png",
      link: "/projects/visionary-framework",
    },
    {
      title: "Hospital Management System",
      category: "Web dev & UI Design",
      image: "/Hospital.png",
      link: "/projects/design-revolution",
    },
  ];

  const items = [
    {
      title: "WE DELIVER CREATIVE PROJECTS",
      subtitle: "OUR DIGITALISED DESIGN TEAM TO ELEVATE",
    },
    {
      title: "WE PARTNER CLOSELY WITH BRAINSTORM",
      subtitle: "ENSURING DESIGNS ALIGN WITH ALL VISION AND GOALS",
    },
    {
      title: "WE ARE BOTH INNOVATIVE AND FUNCTIONAL",
      subtitle: "THROUGH CONTINUOUS FEEDBACKS AND REVISIONS",
    },
  ];

  return ( 
    <>
      <section className="py-16   w-full bg-[#04081C]">
        <div className="w-full mx-auto px-6 max-w-screen-xl">
          <div className="flex justify-between items-start mb-12" id="creativee">
  <motion.h2
    variants={SlideLeft(0.2)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    className="text-3xl md:text-4xl text-white"
    style={{
      fontFamily: rethinkSans.style.fontFamily || "serif",
    }}
  >
    View Our <br />
    <span
      className="showcase"
      style={{
        fontWeight: "200",
        color: "#7BB668",
        fontStyle: "italic",
        lineHeight: "70px",
        fontFamily: instrumentSerif.style.fontFamily || "serif",
      }}
    >
      <i>portfolio</i>
    </span>
  </motion.h2>

  <motion.button
    variants={SlideRight(0.3)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    className="md:mt-4 px-3 md:px-6 flex gap-x-2 py-4 border border-gray-500 bg-transparent text-white text-md font-medium rounded-full items-center text-xs"
  >
    ALL CASE STUDIES
  </motion.button>
</div>

          <div className="relative ">
            {projects.map((project, index) => (
         <motion.a
  key={index}
  variants={card}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  className="block h-full mt-12 space-y-4 shadow-lg rounded-lg overflow-hidden relative"
>
  {/* IMAGE */}
  <motion.div
    variants={image}
    className="w-full rounded-md overflow-hidden relative"
  >
    <Image
      src={project.image}
      alt={project.title}
      height={680}
      width={1380}
      className="rounded-md"
    />
  </motion.div>

  {/* DESKTOP CONTENT */}
  <motion.div
    variants={content}
    className="p-6 absolute bottom-12 left-6 hidden sm:flex flex-col"
  >
    <button className="mt-6 px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition md:text-base md:px-4 md:py-2 md:w-[70%]">
      {project.category}
    </button>

    <h3
      className={`w-[40vh] tracking-[-1.62px] mt-4 text-[54px] font-bold leading-[120%] ${
        index === 0 ? "text-white" : "text-black"
      }`}
    >
      {project.title}
    </h3>
  </motion.div>

  {/* MOBILE CONTENT */}
  <motion.div
    variants={content}
    className="md:hidden p-3 flex flex-col gap-1"
  >
    <button className="bg-[#04081C] px-2 py-1 text-white text-xs font-medium rounded-full hover:bg-blue-800 transition">
      {project.category}
    </button>

    <h3
      className={`font-bold text-sm ${
        index === 0 ? "text-white" : "text-black"
      }`}
    >
      {project.title}
    </h3>
  </motion.div>
</motion.a>

            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Showcase;
