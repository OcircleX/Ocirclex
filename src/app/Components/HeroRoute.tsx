'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { SlideRight } from '../services/animation';

const HeroRoute = ({pageIntro}) => {

const pathname = usePathname()


  return (
  <div className='flex w-full justify-center overflow-x-clip bg-[#04081C]'>
      <div className='w-full min-w-0 max-w-screen-xl px-4 py-12 text-center text-white md:py-16'>
        {pageIntro.map((item,index)=> (
          <div key={index}>
             <motion.p
             variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                            viewport={{ once: true, amount: 0.2 }}
             className="text-2xl font-semibold capitalize leading-tight text-white sm:text-4xl md:text-5xl">{item.title}</motion.p>     

<motion.p
variants={SlideRight(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
                            viewport={{ once: true, amount: 0.2 }}
className="showcase"><i>{item.titlegreen}</i></motion.p>


   <div className={`flex justify-center py-8 ${pathname == "/privacy" && "hidden"}`}>
   <motion.p
   variants={SlideRight(0.3)}
                          initial="hidden"
                            whileInView={"visible"}
                            viewport={{ once: true, amount: 0.2 }}
   className='w-full max-w-full break-words px-1 leading-relaxed md:w-[50%] md:leading-normal'>
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
