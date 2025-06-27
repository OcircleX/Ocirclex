
'use client'
import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });
  
  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Adjust weights as needed
  });
const EssentialRoutes = ({developmentEssentials}) => {
  const pathname = usePathname();


  const isDesign = pathname.includes('/design');
  const label = isDesign ? "Design" : "Development";


  return (
  <div className='w-full flex justify-center bg-[#04081C]'>
      <div className='w-full max-w-screen-xl  text-white  py-24 px-4'>
      
    
      <div className="md:flex   w-full mb-12 " id="creativee">
            <h2 className="text-4xl font-bold text-white ">
              {label} <br />
              <span className="showcase" 
               style={{
               
                fontWeight: "200",
                color: "#7BB668",
                fontStyle: "italic",
                lineHeight: "83px",
                fontFamily: instrumentSerif.style.fontFamily || "serif",
              }}
              ><i>Essentials</i></span>
            </h2>
         
          </div>


            
          <div className="flex flex-wrap justify-between gap-y-10">
  {developmentEssentials.map((item, index) => (
    <div key={index} className="w-[30%] space-y-3">
      <Image src={item.src} alt='api' width={100} height={100} />
      <h1 className="text-2xl font-semibold">{item.title}</h1>
      <p className="text-gray-400">{item.desc}</p>
    </div>
  ))}
</div>



 


   


    </div>
    </div>

    
)
}

export default EssentialRoutes
