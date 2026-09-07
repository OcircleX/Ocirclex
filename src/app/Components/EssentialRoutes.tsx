
'use client'
import React from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from '../services/animation';
const EssentialRoutes = ({developmentEssentials}) => {
  const pathname = usePathname();


  const isDesign = pathname.includes('/design');
  const label = isDesign ? "Design" : "Development";


  return (
  <div className='w-full flex justify-center bg-[#04081C]'>
      <div className='w-full max-w-screen-xl  text-white  py-24 px-4'>
      
    
      <motion.div
       variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
      className="md:flex   w-full mb-12 " id="creativee">
            <h2 className="text-3xl font-bold text-white sm:text-4xl ">
              {label} <br />
              <span className="showcase"><i>Essentials</i></span>
            </h2>
         
          </motion.div>


            
          <div className="space-y-16 md:space-y-1 md:flex flex-wrap justify-between gap-y-10">
  {developmentEssentials.map((item, index) => (
    <motion.div
     variants={SlideLeft(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
    key={index} className="md:w-[30%] space-y-3">
      <Image src={item.src} alt='api' width={100} height={100} />
      <h1 className="text-2xl md:font-semibold">{item.title}</h1>
      <p className="text-gray-400 whitespace-normal">{item.desc}</p>
    </motion.div>
  ))}
</div>



 


   


    </div>
    </div>

    
)
}

export default EssentialRoutes
