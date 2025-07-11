"use client";
import React from "react";
// import './style.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import { Instrument_Serif, Rethink_Sans } from "next/font/google";
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
  useGSAP(
    () => {
      gsap.from("#bundled", {
        x: -100,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: "#bundled",
        },
      });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      gsap.from("#team", {
        x: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: "#team",
        },
      });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      gsap.from("#fazala", {
        x: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.8,

        scrollTrigger: {
          trigger: "#fazala",
        },
      });
    },
    { scope: "" }
  );

  useGSAP(
    () => {
      gsap.from("#count", {
        y: 100,
        duration: 0.5,
        opacity: 0,
        delay: 0.8,

        scrollTrigger: {
          trigger: "#count",
        },
      });
    },
    { scope: "" }
  );
  return (
    <>
      <section className=" py-8 w-full shadow-md bg-white py-[5rem] shadow-md px-4 mt-20 md:mt-0 ">
        <div className="m-auto text-[#04081C] max-w-screen-xl">
          <div className="flex justify-between flex-col md:flex-row">
            <div
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
            </div>

            <div className="flex md:justify-end mt-6 md:mt-0">
              <p
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
              </p>
            </div>
          </div>
          <div className="md:flex w-full gap-x-2 pt-6 mt-6 ">
            <div className="w-full md:w-2/3 gap-x-3" id="count">
              <div className="md:flex w-full gap-x-3 ">
                <div className="flex flex-col w-full md:w-2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2">
                  <div className="text-[#04081C]">
                    Clients
                    <br />
                    Satisfaction
                  </div>
                  <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
                    <span id="clientss">26 +</span>
                  </h2>
                </div>
                <div className="flex flex-col w-full md:w-1/3  mt-4 rounded-md border p-6 border-gray-400 shadow gap-x-2">
                  <div className="text-[#04081C]">
                    Years of the
                    <br />
                    experiences
                  </div>
                  <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
                    8+
                  </h2>
                </div>
              </div>
              <div className="md:flex w-full gap-x-3 text-[#04081C]">
                <div className="md:flex flex-col w-full mt-4 md:w-2/5 rounded-md border p-6 border-gray-400 shadow gap-x-2">
                  <div className="">
                    Projects
                    <br />
                    Completed
                  </div>
                  <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
                    20+
                  </h2>
                </div>
                <div className="md:flex flex-col w-full mt-4 md:w-3/5  border rounded-md border p-6 border-gray-400 shadow gap-x-2">
                  <div className="">
                    Worldwide
                    <br />
                    Clients
                  </div>
                  <h2 className="md:text-6xl text-[#04081C] text-xl h-28 mt-6 pt-6">
                    100+
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="flex w-full md:w-1/3 gap-x-2  mt-4 rounded-md relative"
              id="fazala"
            >
              <Image
                src="/wasif2.png"
                alt="project.title"
                className="w-full h-full  rounded-md object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryInfo;
