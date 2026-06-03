"use client"
import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from '../services/animation';

const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });
  
  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Adjust weights as needed
  });

const WhyChoose = () => {
  const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // 👈 exactly what you want
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};
  return (
    <section className="py-16   w-full bg-[#04081C] "
  
    >
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
    Why Choose <br />
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
      <i>OcircleX</i>
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



<motion.ul
  variants={listVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  className="text-white leading-6 md:leading-none text-sm md:text-2xl list-disc pl-5 font-extralight md:font-light space-y-4 md:space-y-6"
>
  {[
    "Our skilled team stays current with the latest technologies to deliver innovative, scalable solutions.",
    "We tailor every project to your goals, ensuring practical results and lasting value.",
    "From start to finish, we follow strict quality checks to deliver reliable, high-performing Solutions.",
    "Our streamlined project management keeps your timelines on track without compromising quality.",
    "We prioritize seamless communication, ensuring you're informed at every stage of the project."
  ].map((item, index) => (
    <motion.li
      key={index}
      variants={itemVariant}
    >
      {item}
    </motion.li>
  ))}
</motion.ul>



<div></div>
        </div>
        </section>
  )
}

export default WhyChoose
