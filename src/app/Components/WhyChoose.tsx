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
              ><i>OcircleX</i></span>
            </h2>
            {/* <button className="mt-4 px-3 md:px-6 flex gap-x-2 py-3 border border-gray-100   bg-transparent
 text-white text-lg font-medium rounded-full hover:bg-blue-800 transition"
            style={{
              fontSize: "1rem",
            }}
            id="casestudies"
            >
ALL CASE STUDIES    
            </button> */}
          </div>



          <ul className="text-white text-2xl list-disc pl-5 font-light space-y-4">
   
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
