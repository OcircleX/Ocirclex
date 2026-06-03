"use client"
import React from "react";
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from '../services/animation';

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic", // ✅ Correct way to load italic
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

const OurServices = () => {
  const services = [
    {
      title: "Web App Development",
      link: "/web",
      delay:0.2
    },
    {
      title: "Mobile App Development",
      link: "/mobile",
      delay:0.3
    },
    {
      title: "Branding and Design",
      link: "/design",
      delay:0.4
    },
    {
      title: "Team as a Service ",
      link: "/ourteam",
    delay:0.5
    },
  ];

  return (
    <section
      className="pt-16   w-full "
      style={{
        backgroundImage: `url(${"./Background.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full mx-auto px-10 md:px-28 py-8 max-w-screen-xl relative">
        <div
          className="md:flex justify-between items-center mb-6 md:mb-12  "
          id="creativee"
        >
          <motion.h2
          variants={SlideRight(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
            className="text-4xl font-bold   text-[#04081C] leading-tigher
 "
          >
            OUR <br />
            <span
              className="showcase"
              style={{
                fontWeight: "200",
                color: "#7BB668",
                fontStyle: "italic",
                fontFamily: instrumentSerif.style.fontFamily || "serif",
              }}
            >
              <i>services</i>
            </span>
          </motion.h2> 
        </div>

        <div className="w-full  flex max-w-screen-xl    justify-center  md:mt-12">
          <div
            className="w-full md:w-[100%] flex flex-col space-y-4 md:space-y-8  overflow-hidden   "
            id="servv"
          >
          {services.map((service, index) => (
  <Link key={index} href={service.link}>
    <motion.div
      variants={SlideRight(service.delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="group w-full flex items-center justify-between py-3 text-black cursor-pointer hover:bg-[#04081C] hover:text-white md:px-5 rounded-lg transition-colors duration-300"
      style={{
        fontFamily: rethinkSans.style.fontFamily || "serif",
      }}
    >
      <h1 className="text-2xl md:text-3xl leading-tight capitalize">
        {service.title}
      </h1>

      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Default icon */}
        <GoArrowUpRight
          className="absolute text-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        />

        {/* Hover icon */}
        <GoArrowRight
          className="absolute text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
  </Link>
))}

            <div className="">
              <Link href="/services">
           <motion.button
  variants={SlideRight(0.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="my-4 px-3 md:px-6 flex gap-x-2 py-3 mt-8 md:mt-0 w-fit border border-black bg-black text-white text-lg font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300 justify-between items-center relative z-40"
  style={{
    fontSize: "1rem",
  }}
  id="casestudies"
>
  <span>EXPLORE OUR SERVICES</span>

  <svg
    width="11"
    height="17"
    viewBox="0 0 11 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.6665 5.65234L4.33317 8.98567L1.6665 12.319"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</motion.button>
              </Link>
              <Image
                src="/gradient-glass.png"
                width={100}
                height={100}
                alt="glass"
                className="absolute  md:hidden md:left-0 bottom-1  -left-8 z-20"
              />
            </div>
          </div>

          <div></div>
        </div>

        <Image
          src="/gradient-glass.png"
          width={100}
          height={100}
          alt="glass"
          className="absolute hidden md:flex md:left-0 bottom-1  -left-8 z-10"
        />
      </div>
    </section>
  );
};

export default OurServices;
