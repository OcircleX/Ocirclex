"use client"
import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SlideRight } from '../services/animation';


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });
  
  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Adjust weights as needed
  });

const ServiceRoute = ({ourTechs}) => {


  

  return (

    <div className='w-full flex justify-center bg-white pb-12'>
      <div className='max-w-screen-xl  text-white  py-12'>
    <motion.div
       variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
    className='bg-white py-16 px-4'>
       <h2 className="text-4xl font-bold   text-black
 ">
              TOOLS </h2>   

<p className="showcase" 
         style={{
         
          fontWeight: "200",
          color: "#7BB668",
          fontStyle: "italic",
          lineHeight: "83px",
          fontFamily: instrumentSerif.style.fontFamily || "serif",
        }}
        ><i>we trust</i></p>
    </motion.div>



   <div className='md:flex flex-wrap justify-between gap-y-16 space-y-16 md:space-y-0 gap-x-2 px-8 '>

   {ourTechs.map((item, index) => (
  <div key={index} className="md:w-[30%] ">
    
    <div className={`flex  ${Array.isArray(item.imgSrc) ? 'flex-row' : ''}`}>
      {/* Handle single or multiple images */}
      {Array.isArray(item.imgSrc) ? (
        item.imgSrc.map((src, i) => (
          <motion.div
            variants={SlideRight(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
          key={i} className="w-[75px] h-[50px] relative ">
            <Image
              src={src}
              fill
              alt={`${item.title} ${i + 1}`}
              className="object-contain"
            />
          </motion.div>
        ))
      ) : (
        <motion.div
          variants={SlideRight(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
        className="w-[75px] h-[50px] relative  items-start">
        <Image
          src={item.imgSrc}
          fill
          alt={item.title}
          className={`object-contain object-left ${index === 2 ? "scale-125 ml-3" : ""}`}
        />
      </motion.div>
      
      )}
    </div>

    <motion.h1
     variants={SlideRight(0.3)}
                          initial="hidden"
                            whileInView={"visible"}
    className="font-semibold my-2 text-black">{item.title}</motion.h1>
    <motion.p
     variants={SlideRight(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
    className="text-gray-500">{item.descr}</motion.p>
  </div>
))}
    
  






    </div>






    </div>
    </div>
  )
}

export default ServiceRoute
