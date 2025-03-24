"use client";
import { Rethink_Sans } from "next/font/google";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from 'next/image';
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';


const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});


export default function Approch() {

const gsapRef = useRef();

  gsap.registerPlugin(ScrollTrigger);


  const Marquee = [
    "./01.svg",
    "./02.svg",
    "./03.svg",
    "./04.svg",
    "./05.svg",
    "./06.svg",
    "./07.svg",
    "./08.svg"
  ]

  useGSAP(()=> {
gsap.to("#aboutButton",
   {x: 360,
    duration:6,
    rotate:720,
    scrollTrigger: {
    
      start: "top 100%", // When the top of the element reaches 80% of the viewport
      end: "top 30%",   // When the top of the element reaches 30% of the viewport
      scrub: 1,         // Smooth scrolling effect
      markers: true,    // Shows start & end markers (Remove in production)
    },
   
   }
  )
  }, {scope:""})

  return (
    
    <section className="flex flex-col m-auto py-[2rem] bg-[#04081C] justify-between items-center w-full   ">
      <motion.h1 className="text-xl md:text-2xl   text-center w-full py-10 font-bold text-white leading-tight"
      initial={{y:-15, opacity:0}}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
     
      >TRUSTED BY <br className="md:hidden" /> COMPANIES</motion.h1>

<div className="w-[65%]  overflow-hidden flex ">
  <motion.div
    className="flex flex-shrink-0 gap-x-6 px-6 gap-y-3 w-full"
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }} // Moves only inside 70%
    transition={{ duration: 4.5, ease: "linear", repeat: Infinity }}
  >
    {/* Items fit perfectly inside w-[70%] */}
    {Marquee.map((src, index) => (
      <Image key={index} src={src} alt="Marquee Icon" width={75} height={75} />
    ))}
  </motion.div>

  <motion.div
    className="flex flex-shrink-0 gap-x-6 px-6 gap-y-3 w-full"
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }} // Moves only inside 70%
    transition={{ duration: 4.5, ease: "linear", repeat: Infinity }}
  >
    {/* Items fit perfectly inside w-[70%] */}
    {Marquee.map((src, index) => (
      <Image key={index} src={src} alt="Marquee Icon" width={75} height={75} className=''/>
    ))}
  </motion.div>
</div>

     


      <div className="w-full max-w-screen-xl md:flex px-3 py-[4rem] bg-[#04081C] justify-between gap-8">
        <div className="w-full md:w-1/2">
          <motion.button
          
          className="mt-8 border px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition">
            CREATIVE STUDIO
          </motion.button>
        </div>
        <div className="w-full md:w-[70%] ">
          <motion.h1
         
           className={`text-xl md:text-4xl w-full py-8  font-bold text-white leading-tight ${rethinkSans.className}`}>
           We combine innovative ideas with insightful 
data to craft strategies that make
 your brand unforgettable.
          </motion.h1>
          <h1
          ref={gsapRef}
          id="aboutButton"
          className="px-6 py-3 mt-2  bg-white text-[#04081C] rounded-full shadow-md hover:bg-gray-200 transition text-left w-fit">
            ABOUT US ›
          </h1>

        </div>
      </div>




      <div className="w-full max-w-screen-xl mx-auto md:hidden flex flex-col justify-between gap-4 items-center pt-6 overflow-hidden px-4">
  <div className="w-full h-[300px] rounded-md overflow-hidden relative">
    <Image
      src={img2}
      alt="Image description"
      layout="fill"
      objectFit="cover"
      className="rounded-md"
    />
  </div>
  <div className="w-full h-[300px] rounded-md overflow-hidden relative">
    <Image
      src={img1}
      alt="Image description"
      layout="fill"
      objectFit="cover"
      className="rounded-md"
    />
  </div>
  <div className="w-full h-[300px] rounded-md overflow-hidden relative">
    <Image
      src={img3}
      alt="Image description"
      layout="fill"
      objectFit="cover"
      className="rounded-md"
    />
  </div>
</div>



<div className="w-full max-w-screen-xl mx-auto hidden md:flex  justify-between gap-4 items-center pt-6 h-[440px] overflow-hidden px-4">
      <div className="w-[25%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
    src={img2}
    alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
  />
</div>
<div className="w-[50%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
    src={img1}
    alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
  />
</div>
  <div className="w-[25%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
    src={img3}
    alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
  />
</div>
</div>






    </section>
  );
}
