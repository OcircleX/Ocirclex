"use client";

import { motion } from "framer-motion";
import Background from "./../../images/Background.png"
import { IoMdArrowDropright } from "react-icons/io";


export default function Hero() {
  return (
    <section style={{
      backgroundImage: `url(${Background.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
     className="w-full relative  to-gray-100 flex flex-col md:flex-row items-center justify-center px-2 md:items-end md:justify-end">
      <div className="max-w-screen-xl md:flex justify-between px-4 py-4 w-full m-auto mt-8">
   <div className="mt-8">
   <div className="max-w-2xl mt-12 flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            INNOVATIVE{" "}
          </h1>
          <span className="text-4xl md:text-6xl font-extralight text-green-500 italic font-serif ">creative solutions</span>
         

      
        
        </div>

        <button className="flex items-center gap-2 w-fit mt-6  px-6 py-3 bg-white rounded-full border text-[#171D3F] border-[#171D3F] text-lg font-medium  hover:bg-blue-800 transition">
            Get Started  <span><IoMdArrowDropright />
            </span>
          </button>
   </div>

    
        <div className=" bg-white px-1 mb-4 rounded-xl pt-4 pb-1 border border-gray-400 w-fit mt-4 ml-4" >


         <div className="bg-[#171D3F] border-2    text-white p-6 rounded-xl shadow-lg w-72">
         <h3 className="text-lg font-semibold  text-gray-300">AGENCY INSIGHTS</h3>
          <p className="text-gray-300 text-xs">A FUTURE FOCUSED DIGITAL STUDIO</p>

          <p className="mt-12 text-3xl font-bold pb-4">94+ </p>
          <p className="text-gray-300">Projects Completed</p>
          <p className="mt-6 text-2xl font-bold pt-6">85%</p>
          <p className="text-gray-300">Happy Clients</p>
         </div>

        </div> 



      </div>
    </section>
  );
}
