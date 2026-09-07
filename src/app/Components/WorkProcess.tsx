"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight, SlideUp } from '../services/animation';

const WorkProcess = () => {
  
  return (
    <section className="relative z-20 w-full bg-[#04081C] pt-32 pb-16">
        <div className="w-full mx-auto px-6 max-w-screen-xl">

        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start md:mb-12" id="creativee">
            <motion.h2 
                variants={SlideRight(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
            className="text-3xl font-bold text-white sm:text-4xl">
              OUR  <br />
              <span className="showcase"><i>Work Process</i></span>
            </motion.h2>
            
            <motion.div  variants={SlideLeft(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
                            className="hidden shrink-0 sm:block">
                                 <Image src="/green-cube.png" width={240} height={280} alt='cube' className='h-28 w-auto md:h-auto'/>
                            </motion.div>
        
          </div>



<motion.p 
variants={SlideUp(0.5)}
                          initial="hidden"
                            whileInView={"visible"}
className="text-xl capitalize leading-8 text-white sm:text-2xl sm:leading-9 md:text-4xl md:leading-10">Driven by creativity and powered by expertise, our team brings fresh ideas and top-tier skills to every project we touch.</motion.p>




<div></div>
        </div>
        </section>
  )
}

export default WorkProcess
