"use client";


import Image from 'next/image';
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import { motion } from 'framer-motion';
export default function Approch() {

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



  return (
    
    <section className="flex flex-col m-auto py-[2rem] bg-[#04081C] justify-between items-center w-full   ">
      <motion.h1 className="text-xl md:text-2xl   text-center w-full py-10 font-bold text-white leading-tight"
      initial={{y:-15, opacity:0}}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
     
      >TRUSTED BY <br className="md:hidden" /> COMPANIES</motion.h1>

<div className="w-[80%]  overflow-hidden flex ">
  <motion.div
    className="flex flex-shrink-0 gap-x-6 px-3 gap-y-3 w-full"
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }} // Moves only inside 70%
    transition={{ duration: 1, ease: "linear", repeat: Infinity }}
  >
    {/* Items fit perfectly inside w-[70%] */}
    {Marquee.map((src, index) => (
      <Image key={index} src={src} alt="Marquee Icon" width={70} height={70} />
    ))}
  </motion.div>

  <motion.div
    className="flex flex-shrink-0 gap-x-6 px-3 gap-y-3 w-full"
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }} // Moves only inside 70%
    transition={{ duration: 1, ease: "linear", repeat: Infinity }}
  >
    {/* Items fit perfectly inside w-[70%] */}
    {Marquee.map((src, index) => (
      <Image key={index} src={src} alt="Marquee Icon" width={70} height={70} />
    ))}
  </motion.div>
</div>

     


      <div className="w-full max-w-screen-xl md:flex px-3 py-[4rem] bg-[#04081C] justify-between gap-8">
        <div className="w-full md:w-1/2">
          <button className="mt-6 border px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition">
            CREATIVE STUDIO
          </button>
        </div>
        <div className="w-full md:w-[60%] ">
          <h1 className="text-xl md:text-3xl w-full py-10 font-bold text-white leading-tight">
            OUR APPROACH COMBINES BOLD AND
            CREATIVITY WITH DATE DRIVEN INSIGHTS WE
            ARE HERE TO ELEVATE YOUR PRESENCE AND
            MAKE YOUR BRAND
          </h1>
          <button className="px-6 py-3 mt-2 bg-white text-[#04081C] rounded-full shadow-md hover:bg-gray-200 transition">
            ABOUT US ›
          </button>

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
