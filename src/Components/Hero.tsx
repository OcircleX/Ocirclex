"use client";
import { Instrument_Serif } from "next/font/google";

import { motion } from "framer-motion";
import Background from "./../../images/Background.png"
import { IoMdArrowDropright } from "react-icons/io";
const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  weight: ["400"], 
  style: "italic" // ✅ Correct way to load italic
});

export default function Hero() { 

  return (

  <section
    style={{
      backgroundImage: `url(${Background.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="w-screen relative  overflow-hidden flex flex-col md:flex-row items-center justify-center px-2 md:items-end md:justify-end"
  >
    <div className="max-w-screen-xl  md:flex flex-wrap justify-between px-4 py-4 w-full m-auto mt-8">

   <div 
 
   className="mt-8"

   >
   <motion.div className="md:max-w-2xl mt-12 flex flex-col pt-10"
     
   >
          <h1 className="text-4xl md:text-6xl   font-semibold text-gray-900 leading-tight">
            INNOVATIVE{" "}
          </h1>
          <span 
           style={{ letterSpacing: "1.36px" }}
          className={`text-4xl text-center md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}   `}>creative solutions</span>
         
          {/* <h1 className={`${instrumentSerif.className} text-4xl`}> */}

      
        
        </motion.div>

       <motion.div
       
         className="flex md:block justify-center"
       >
       <button
         className="flex items-center gap-2 w-fit mt-6  px-6 py-3 bg-white rounded-full border text-[#04081C] border-[#171D3F] text-lg font-medium  hover:bg-blue-800 transition"
       
         >
            Get Started  <span><IoMdArrowDropright />
            </span>
          </button>
       </motion.div>
   </div>

    
        <motion.div className=" bg-white px-1 mb-4 rounded-xl pt-4 pb-1 border border-gray-400 w-fit py-2 ml-4 hidden md:flex" 
        
        >


         <div className="bg-[#04081C] border-2    text-white p-6 rounded-xl shadow-lg w-72">
         <h3 className="text-lg font-semibold  text-gray-300">AGENCY INSIGHTS</h3>
          <p className="text-gray-300 text-xs">A FUTURE FOCUSED DIGITAL STUDIO</p>

          <p className="mt-12 text-3xl font-bold pb-4">94+ </p>
          <p className="text-gray-300">Projects Completed</p>
          <p className="mt-6 text-2xl font-bold pt-6">85%</p>
          <p className="text-gray-300">Happy Clients</p>
         </div>

        </motion.div> 



      </div>
    </section>

  );
}
