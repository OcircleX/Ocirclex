"use client"
import React from 'react'
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from '../services/animation';

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

      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-start">
  <motion.h2
    variants={SlideLeft(0.2)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-3xl md:text-4xl text-white"
  >
    Why Choose <br />
    <span className="showcase">
      <i>OcircleX</i>
    </span>
  </motion.h2>

  <motion.button
    variants={SlideRight(0.3)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mt-1 flex shrink-0 items-center gap-x-2 rounded-full border border-gray-500 bg-transparent px-3 py-2 text-xs font-medium text-white sm:mt-4 sm:px-6 sm:py-4 sm:text-sm"
  >
    ALL CASE STUDIES
  </motion.button>
</div>



<motion.ul
  variants={listVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
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
