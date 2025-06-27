"use client";
import { Instrument_Serif, Rethink_Sans } from "next/font/google";

import { motion } from "framer-motion";
// import Background from "./Background.png"
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  weight: ["400"], 
  style: "italic" // ✅ Correct way to load italic
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});


export default function Hero() { 

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

  <section
    style={{
      backgroundImage: `url(${'./Background.png'})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="w-screen relative  overflow-hidden flex flex-col  items-center justify-center px-2  "
  >
    <div className="max-w-screen-xl  md:flex flex-wrap justify-between px-4 pt-8 pb-24 w-full m-auto md:mt-8 ">

   <div 
 
   className="mt-8 md:pt-2 flex justify-between  w-full items-center"

   >
   <motion.div className="md:max-w-2xl  ml-6 flex flex-col " 
   initial={{opacity:0, x:-100}}
   animate={{opacity:1, x:0}}
   transition={{duration:0.5,ease: "easeInOut"}}
>
          <h1 className={`text-4xl md:text-6xl  text-center md:text-start  text-gray-900 leading-tight uppercase `}
            style={{
               
              fontWeight: "500",
              fontFamily: rethinkSans.style.fontFamily ,
            }}
          >
            Branding <br /> Web & <br /> mobile {" "}
          </h1>
          <span 
          className={`text-4xl  md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}   `}>all in one Circle</span>
         

      
        
        </motion.div>

      <motion.div
       initial={{opacity:0, x:100}}
       animate={{opacity:1, x:0}}
       transition={{duration:0.5,ease: "easeInOut"}}
      >
      <Image src='/struct.png' width={300} height={300} alt="struct" className="mr-24"/>
      </motion.div>

     
   </div>

    
       



      </div>





  



    </section>

  );
}
