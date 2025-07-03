import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });
  
  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Adjust weights as needed
  });

const WhyChoose = () => {
  return (
    <section className="py-16   w-full bg-[#04081C] "
  
    >
        <div className="w-full mx-auto px-6 max-w-screen-xl">

        <div className="flex justify-between items-start mb-12  " id="creativee">
            <h2 className="text-3xl md:text-4xl font-   text-white
 "
 style={{
  fontFamily: rethinkSans.style.fontFamily || "serif",
}}
 >

              Why Choose  <br />
              <span className="showcase" 
               style={{
               
                fontWeight: "200",
                color: "#7BB668",
                fontStyle: "italic",
                lineHeight: "70px",
                fontFamily: instrumentSerif.style.fontFamily || "serif",
              }}
              ><i>OcircleX</i></span>
            </h2>
            <button className="md:mt-4 px-3 md:px-6 flex gap-x-2 py-4 border border-gray-500   bg-transparent
 text-white text-md font-medium rounded-full  transition  items-center text-xs "
           
            id="casestudies"
            >
ALL CASE STUDIES     <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.58643 4.66675L5.2531 8.00008L2.58643 11.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button> 
          </div>



          <ul className="text-white leading-6 md:leading-none text-sm md:text-2xl list-disc pl-5 font-extralight md:font-light space-y-4 md:space-y-6">
   
          <li>       Our skilled team stays current with the latest technologies to deliver innovative, scalable solutions.</li>
          <li>We tailor every project to your goals, ensuring practical results and lasting value.
          </li>

          <li>From start to finish, we follow strict quality checks to deliver reliable, high-performing Solutions.</li>

          <li>Our streamlined project management keeps your timelines on track without compromising quality.</li>


          <li>We prioritize seamless communication, ensuring you're informed at every stage of the project.</li>
<li>Our proactive support keeps your systems optimized and secure long after launch.
</li>
          <li>We harness data-driven insights to continually refine performance and exceed your goals.</li>







</ul>



<div></div>
        </div>
        </section>
  )
}

export default WhyChoose
