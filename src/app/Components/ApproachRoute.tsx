"use client"
import React from 'react'
import Image from 'next/image';
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from '../services/animation';

const ApproachRoute = ({ourApproach, Projects}) => {


  
 
      


  return (
  <div className='w-full flex justify-center bg-white'>
      <div className='w-full max-w-screen-xl    py-24 px-4'>
      
    
      <div className="md:flex   w-full mb-12 " id="creativee">
            <motion.h2
              variants={SlideRight(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
            className="text-3xl font-bold text-black sm:text-4xl ">
              Our <br />
              <span className="showcase"><i>Approach</i></span>
            </motion.h2>
         
          </div>


          <div className="flex flex-col gap-y-12">
          {ourApproach.map((item, index) => (
            <div key={index} className='md:flex items-start gap-6'>
               <Image src={item.imgSrc} alt={item.title} width={150} height={150} />
              <div className="flex flex-col justify-center space-y-5 font-medium">
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
  <h2 className="text-3xl font-bold text-black sm:text-4xl ">
    TIP <br />
    <span className="showcase"><i>of the iceberg</i></span>
  </h2>
</motion.div>
   

          <div className="md:flex w-full text-gray-800 justify-between gap-6 mt-6  space-y-6 md:space-y-0">
 {Projects.map((item,index)=> (
 <div className='flex-1' key={item.title || index}>

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
 
<motion.h1
  variants={SlideLeft(index === 0 ? 0.2 : index * 0.2)}
  initial="hidden"
  whileInView={"visible"}
  className="text-lg font-extralight text-zinc-600"
>
  {item.title}
</motion.h1>
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
