"use client";
import { Rethink_Sans } from "next/font/google";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from 'next/image';
// import img1 from './1.png'
// import img2 from './2.png'
// import img3 from './3.png'
import { motion } from 'framer-motion';
// import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);



const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});


export default function Approch() {




  gsap.registerPlugin(ScrollTrigger);


  const Marquee = [
    "./01.svg",
    "./02.svg",
    "./03.svg",
    "./04.svg",
    "./05.svg",
    "./06.svg",
    "./07.svg",
    "./08.svg"
  ]

  useGSAP(()=> {
gsap.from("#aboutButton",
  {y: 100,
    duration:0.2,
    opacity:0,
    delay:0.5,
   
   
    scrollTrigger: {
    trigger:"#aboutButton"
    },
   
   }
  )
  }, {scope:""})

  useGSAP(()=> {
    gsap.from("#trust",
       {y: 100,
        duration:0.5,
        opacity:0,
        delay:0.5,
       
       
        scrollTrigger: {
        trigger:"#trust"
        },
       
       }
      )
      }, {scope:""})

      useGSAP(()=> {
        gsap.from("#infinity",
           {y: 100,
            duration:0.5,
            opacity:0,
            delay:0.5,
           
           
            scrollTrigger: {
            trigger:"#infinity"
            },
           
           }
          )
          }, {scope:""})

          useGSAP(()=> {
            gsap.from("#creative",
               {y: 100,
                duration:0.5,
                opacity:0,
                delay:0.5,
               
               
                scrollTrigger: {
                trigger:"#creative"
                },
               
               }
              )
              }, {scope:""})

              useGSAP(()=> {
                gsap.from("#combine",
                   {y: 100,
                    duration:1,
                    opacity:0,
                    delay:0.5,
                   
                   
                    scrollTrigger: {
                    trigger:"#combine"
                    },
                   
                   }
                  )
                  }, {scope:""})


useGSAP(()=> {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#threepix",
      start: "top 80%",
      end: "top 20%", // Extend scroll range for slower effect
      scrub: 3, // Increase scrub for smoother effect
      once: true,
    
    
    },
  });

  tl.from("#thimg1", {
    y: 150,
    autoAlpha: 0,
    duration: 2,
    ease: "expo.out",
  })
  .from("#thimg2", {
    y: 150,
    autoAlpha: 0,
    duration: 2,
    ease: "expo.out",
  }, "+=0.3")
  .from("#thimg3", {
    x: 150,
    autoAlpha: 0,
    duration: 2,
    ease: "expo.out",
  }, "+=0.3");
  

})


                  
                  
          

  return (
    
    <section className="flex flex-col m-auto py-[2rem] bg-[#04081C] justify-between items-center w-full   " id="approache">
      <h1 id="trust" className="text-xl md:text-2xl   text-center w-full py-10 font-bold text-white leading-tight"
      
     
      >TRUSTED BY <br className="md:hidden" /> COMPANIES</h1>

<div  className="w-[30%]  overflow-hidden flex  max-w-screen-xl" id="infinity"

>
  <motion.div
    className="flex flex-shrink-0 gap-x-6 px-6 gap-y-3 w-full"
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }} // Moves only inside 70%
    transition={{ duration: 8.5, ease: "linear", repeat: Infinity }}
  >
    {/* Items fit perfectly inside w-[70%] */}
    {Marquee.map((src, index) => (
      <Image key={index} src={src} alt="Marquee Icon" width={75} height={75} />
    ))}
  </motion.div>

  <motion.div
    className="flex flex-shrink-0 gap-x-6 px-6 gap-y-3 w-full"
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }} // Moves only inside 70%
    transition={{ duration: 8.5, ease: "linear", repeat: Infinity }}
  >
    {/* Items fit perfectly inside w-[70%] */}
    {Marquee.map((src, index) => (
      <Image key={index} src={src} alt="Marquee Icon" width={75} height={75} className=''/>
    ))}
  </motion.div>
</div>

     


      <div className="w-full max-w-screen-xl md:flex px-3 py-[4rem] bg-[#04081C] justify-between gap-8">
        <div className="w-full md:w-1/2">
          <motion.button
          
          className="mt-8 border px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full  transition" id="creative">
            CREATIVE STUDIO
          </motion.button>
        </div>
        <div className="w-full md:w-[70%] ">
          <motion.h1
         
           className={`text-xl md:text-4xl w-full py-8  font-bold text-white leading-tight ${rethinkSans.className}`} id="combine">
           We combine innovative ideas with insightful 
data to craft strategies that make
 your brand unforgettable.
          </motion.h1>
        <Link href="about">
        <h1
         
         id="aboutButton"
         className="px-6 py-3 mt-2  bg-white text-[#04081C] rounded-full shadow-md hover:bg-gray-200 transition text-left w-fit">
           ABOUT US ›
         </h1>
        </Link>

        </div>
      </div>




      <div className="w-full max-w-screen-xl mx-auto md:hidden flex flex-col justify-between gap-4 items-center pt-6 overflow-hidden px-4">
  <div className="w-full h-[300px] rounded-md overflow-hidden relative">
    <Image
    src='/2.png'
    alt="Image description"
      layout="fill"
      objectFit="cover"
      className="rounded-md"
    />
  </div>
  <div className="w-full h-[300px] rounded-md overflow-hidden relative">
    <Image
    src='/1.png'
    alt="Image description"
      layout="fill"
      objectFit="cover"
      className="rounded-md"
    />
  </div>
  <div className="w-full h-[300px] rounded-md overflow-hidden relative">
    <Image
    src='/3.png'
    alt="Image description"
      layout="fill"
      objectFit="cover"
      className="rounded-md"
    />
  </div>
</div>



<div className="w-full max-w-screen-xl mx-auto hidden md:flex  justify-between gap-4 items-center pt-6 h-[440px] overflow-hidden px-4" id="threepix">
      <div className="w-[25%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
    src='/2.png'
    alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
    id="thimg1"
  />
</div>
<div className="w-[50%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
     src='/1.png'
    alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
     id="thimg2"
  />
</div>
  <div className="w-[25%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
      src='/3.png'
    alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
     id="thimg3"
  />
</div>
</div>






    </section>
  );
}
