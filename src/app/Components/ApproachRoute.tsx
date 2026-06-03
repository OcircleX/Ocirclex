"use client"
import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from 'next/image';
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from '../services/animation';


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });
  
  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Adjust weights as needed
  });


const ApproachRoute = ({ourApproach, Projects}) => {


  
 
      


  return (
  <div className='w-full flex justify-center bg-white'>
      <div className='w-full max-w-screen-xl    py-24 px-4'>
      
    
      <div className="md:flex   w-full mb-12 " id="creativee">
            <motion.h2
              variants={SlideRight(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
            className="text-4xl font-bold text-black ">
              Our <br />
              <span className="showcase" 
               style={{
               
                fontWeight: "200",
                color: "#7BB668",
                fontStyle: "italic",
                lineHeight: "83px",
                fontFamily: instrumentSerif.style.fontFamily || "serif",
              }}
              ><i>Approach</i></span>
            </motion.h2>
         
          </div>


          <div className="flex flex-col gap-y-12">
          {ourApproach.map((item, index) => (
            <div key={index} className='md:flex items-start gap-6'>
               <Image src={item.imgSrc} alt={item.title} width={150} height={150} />
              <div
                className='flex flex-col justify-center space-y-5'
                style={{
                  fontWeight: "500",
                  fontFamily: rethinkSans.style.fontFamily || "serif",
                }}
              >
                <motion.h1
                 variants={SlideLeft(index === 0 ? 0.1 : index * 0.1)}
        initial="hidden"
        whileInView="visible"
                className='text-2xl text-black'>{item.title}</motion.h1>
                <motion.p
                 variants={SlideLeft(index === 0 ? 0.2 : index * 0.2)}
        initial="hidden"
        whileInView="visible"
                className='text-zinc-500 whitespace-pre-line'>{item.descr}</motion.p>
              </div>
            </div>
          ))}
        </div>
       



 

 

   <motion.div
  className="md:flex w-full mt-12"
  id="creativee"
  variants={SlideRight(0.4)}
  initial="hidden"
  whileInView="visible"
>
  <h2 className="text-4xl font-bold text-black ">
    TIP <br />
    <span
      className="showcase"
      style={{
        fontWeight: "200",
        color: "#7BB668",
        fontStyle: "italic",
        lineHeight: "70px",
        fontFamily: instrumentSerif.style.fontFamily || "serif",
      }}
    >
      <i>of the iceberg</i>
    </span>
  </h2>
</motion.div>
   

          <div className="md:flex w-full text-gray-800 justify-between gap-6 mt-6  space-y-6 md:space-y-0">
{Projects.map((item,index)=> (
 <div className='flex-1'>

<motion.div
   variants={SlideLeft(index === 0 ? 0.1 : index * 0.1)}
                          initial="hidden"
                            whileInView={"visible"}
className="w-full md:w-[350px]  h-[350px] relative">
<Image
src={item.src}
fill
alt={item.title}
className="object-contain"
/>
</motion.div>
 
<motion.h1 className='text-lg text-zinc-600'
 variants={SlideLeft(index === 0 ? 0.2 : index * 0.2)}
                          initial="hidden"
                            whileInView={"visible"}
style={{
               
  fontWeight: "200",
 
  fontFamily: rethinkSans.style.fontFamily || "serif",
}}
>{item.title}</motion.h1>
<motion.h1
 variants={SlideLeft(index === 0 ? 0.22 : index * 0.2)}
                          initial="hidden"
                            whileInView={"visible"}
className='flex items-center text-xl mt-3 cursor-pointer'>
  READ MORE 
  
  <LuArrowUpRight className='text-3xl'/>

</motion.h1>

 
 </div>
))}

</div>














    </div>
  </div>
  )
}

export default ApproachRoute
