'use client'
import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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





const HeroRoute = ({pageIntro}) => {

const pathname = usePathname()


  return (
  <div className='w-full flex justify-center bg-[#04081C]'>
      <div className=' max-w-screen-xl  text-white text-center py-16'>
        {pageIntro.map((item,index)=> (
          <div key={index}>
             <motion.p
             variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
             className="text-white text-5xl font-semibold capitalize leading-10 " style={{  fontFamily: rethinkSans.style.fontFamily || "serif",}}>{item.title}</motion.p>     

<motion.p
variants={SlideRight(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
className="showcase" 
         style={{
         
          fontWeight: "200",
          color: "#7BB668",
          fontStyle: "italic",
         
          fontFamily: instrumentSerif.style.fontFamily || "serif",
        }}
        ><i>{item.titlegreen}</i></motion.p>


   <div className={`flex justify-center py-8 ${pathname == "/privacy" && "hidden"}`}>
   <motion.p
   variants={SlideRight(0.3)}
                          initial="hidden"
                            whileInView={"visible"}
   className='w-[70%] md:w-[50%] whitespace-pre-line md:leading-none'>
  {item.desc}
        </motion.p>
   </div>
          </div>
        ))}
      
     


    </div>
  </div>
  )
}

export default HeroRoute
