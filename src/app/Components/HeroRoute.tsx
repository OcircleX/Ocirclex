import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from 'next/image';


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




  return (
  <div className='w-full flex justify-center bg-[#04081C]'>
      <div className='max-w-screen-xl  text-white text-center py-16'>
        {pageIntro.map((item,index)=> (
          <div key={index}>
             <p className="text-white text-5xl font-semibold capitalize leading-10 " style={{  fontFamily: rethinkSans.style.fontFamily || "serif",}}>{item.title}</p>     

<p className="showcase" 
         style={{
         
          fontWeight: "200",
          color: "#7BB668",
          fontStyle: "italic",
         
          fontFamily: instrumentSerif.style.fontFamily || "serif",
        }}
        ><i>{item.titlegreen}</i></p>


   <div className='flex justify-center py-8'>
   <p className='w-[50%] whitespace-pre-line'>
  {item.desc}
        </p>
   </div>
          </div>
        ))}
      
     


    </div>
  </div>
  )
}

export default HeroRoute
