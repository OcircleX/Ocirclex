import React from 'react'
import DarkNav from '../navbar/DarkNav'
import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';
import { Rethink_Sans } from "next/font/google";
import BlogComponent from '@/app/Components/BlogComponent';


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });

  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Adjust weights as needed
  });
  



const Page = () => {
  return (
    <div className='w-full bg-[#04081C]'>
     
     <DarkNav/>

<section className='w-full flex justify-center items-center'>

    <div className='max-w-screen-xl w-full '>


    <div className="w-full items-center flex flex-col py-[2rem] text-center mt-8 leading-9">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-9">
                       BLOG</h1>
                    <span className={`text-5xl md:text-7xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  `}>sphere</span>
                   
                </div>




<div className='grid grid-cols-3 place-items-center justify-center py-20 gap-y-12'>
{
  new Array(6).fill(null).map((_ , i) => (
<BlogComponent key={i}/>
  ))
}


</div>


    


    </div>

</section>

    </div>
  )
}

export default Page
