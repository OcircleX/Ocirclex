"use client";
import React from "react";

import Image from "next/image";
import { Instrument_Serif, Rethink_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { SlideDown, SlideLeft, SlideRight, SlideUp } from "../services/animation";
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic", // ✅ Correct way to load italic
});
const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "400", "500", "700"], // Adjust weights as needed
});

const IndustryInfo = () => {

  return (
    <>
      <section className=" pb-8 pt-18 w-full shadow-md bg-white py-[5rem] shadow-md px-4  md:mt-0 ">
        <div className="m-auto text-[#04081C] max-w-screen-xl">
          <div className="flex justify-between flex-col md:flex-row">
            <motion.div
             variants={SlideRight(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
              className="review-left-col-wrapper"
              id="bundled"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#04081C] ">
                BUNDLED WITH
              </h1>
              <span
                className={`industryexperience font-extralight text-[#7BB668] italic  ${instrumentSerif.className}   `}
                //  style={{
                //   fontSize: "4.5rem",
                //   fontWeight: "200",
                //   color: "#7BB668",
                //   fontStyle: "italic",
                //   lineHeight: "83px",
                //   fontFamily: instrumentSerif.style.fontFamily || "serif",
                // }}
              >
                <i>industry experience</i>
              </span>
            </motion.div>

            <div className="flex md:justify-end mt-6 md:mt-0">
              <motion.p
               variants={SlideLeft(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
                className="text-lg font-light  w-64  text-[#04081C]"
                id="team"
                style={{
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  fontFamily: rethinkSans.style.fontFamily || "serif",
                  fontWeight: 400,
                }}
              >
                OUR EXCELLENT TEAM AND PROFESSIONAL TO TAKE CARE OF YOUR BRAND
                STYLE
              </motion.p>
            </div>
          </div>
       <div className="md:flex w-full gap-x-2 pt-6 mt-6 ">

  <div className="w-full md:w-2/3 gap-x-3" id="count">

    <div className="md:flex w-full gap-x-3 ">

      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
                            whileInView={"visible"}
        className="flex flex-col w-full md:w-2/3 mt-4 rounded-md border border-gray-400 shadow p-6 gap-x-2"
      >
        <div className="text-[#04081C]">
          Clients
          <br />
          Satisfaction
        </div>
        <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
          <span id="clientss">26 +</span>
        </h2>
      </motion.div>

      <motion.div
        variants={SlideRight(0.25)}
        initial="hidden"
                            whileInView={"visible"}
        className="flex flex-col w-full md:w-1/3 mt-4 rounded-md border p-6 border-gray-400 shadow gap-x-2"
      >
        <div className="text-[#04081C]">
          Years of the
          <br />
          experiences
        </div>
        <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
          8+
        </h2>
      </motion.div>

    </div>

    <div className="md:flex w-full gap-x-3 text-[#04081C]">

      <motion.div
        variants={SlideLeft(0.3)}
        initial="hidden"
                            whileInView={"visible"}
        className="md:flex flex-col w-full mt-4 md:w-2/5 rounded-md border p-6 border-gray-400 shadow gap-x-2"
      >
        <div>
          Projects
          <br />
          Completed
        </div>
        <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
          20+
        </h2>
      </motion.div>

      <motion.div
        variants={SlideDown(0.35)}
        initial="hidden"
                            whileInView={"visible"}
        className="md:flex flex-col w-full mt-4 md:w-3/5 border rounded-md border p-6 border-gray-400 shadow gap-x-2"
      >
        <div>
          Worldwide
          <br />
          Clients
        </div>
        <h2 className="md:text-6xl text-[#04081C] text-xl h-28 mt-6 pt-6">
          100+
        </h2>
      </motion.div>

    </div>

  </div>

  <motion.div
    variants={SlideRight(0.4)}
    initial="hidden"
                            whileInView={"visible"}
    className="flex w-full md:w-1/3 gap-x-2 mt-4 rounded-md relative"
    id="fazala"
  >
    <Image
      src="/wasif2.png"
      alt="project.title"
      className="w-full h-full rounded-md object-cover"
      fill
    />
  </motion.div>

</div>
        </div>
      </section>
    </>
  );
};

export default IndustryInfo;
