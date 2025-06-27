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

const WorkProcess = () => {
  return (
    <section className="pt-32 pb-16   w-full bg-[#04081C] "
  
    >
        <div className="w-full mx-auto px-6 max-w-screen-xl">

        <div className="md:flex justify-between items-center mb-12  " id="creativee">
            <h2 className="text-4xl font-bold   text-white
 ">
              OUR  <br />
              <span className="showcase" 
               style={{
               
                fontWeight: "200",
                color: "#7BB668",
                fontStyle: "italic",
                lineHeight: "83px",
                fontFamily: instrumentSerif.style.fontFamily || "serif",
              }}
              ><i>Work Process</i></span>
            </h2>
           <Image src="/green-cube.png" width={240} height={280} alt='cube' className=''/>
          </div>



<p className="text-white text-4xl capitalize leading-10 " style={{  fontFamily: rethinkSans.style.fontFamily || "serif",}}>Driven by creativity and powered by expertise, our team brings fresh ideas and top-tier skills to every project we touch.</p>




<div></div>
        </div>
        </section>
  )
}

export default WorkProcess
