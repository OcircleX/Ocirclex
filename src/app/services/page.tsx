'use client'
import React from 'react'
import DarkNav from '../navbar/DarkNav'
import { Instrument_Serif } from "next/font/google";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);



const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });

const Services = () => {


    useGSAP(()=> {
        gsap.from("#enthu",
          {x: 100,
            duration:1,
            opacity:0,
            delay:0.2,
            ease: "expo.out",
           
        
           
           }
          )
          }, {scope:""})

          useGSAP(()=> {
            gsap.from("#imgthree",
              {y: 100,
                duration:1,
                opacity:0,
                delay:1,
                ease: "expo.out",
               
            
               
               }
              )
              }, {scope:""})
          

          useGSAP(()=> {
            gsap.from("#servv",
              {x: -100,
                duration:1.5,
                opacity:0,
                delay:1,
                ease: "expo.out",
               
            
               
               }
              )
              }, {scope:""})



              useGSAP(()=> {
                gsap.from("#meet",
                   {x: -100,
                    duration:1,
                    opacity:0,
                    delay:0.5,
                   
                   
                    scrollTrigger: {
                    trigger:"#meet"
                    },
                   
                   }
                  )
                  }, {scope:""})




                  useGSAP(()=> {
                    gsap.from("#teamimg",
                       {y: 100,
                        x:100,
                        duration:1,
                        opacity:0,
                        delay:0.5,
                       
                       
                        scrollTrigger: {
                        trigger:"#teamimg"
                        },
                       
                       }
                      )
                      }, {scope:""})
    

    
                      const team = [
                        {
                            title: "FAZAL BASIT",
                            category: "CEO & founder",
                            image:
                                "/fazal.png",
                            link: "https://www.linkedin.com/in/fazal-basit-825a33194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                        },
                       
                        {
                            title: "FAZAL WASIF",
                            category: "CREATIVE DIRECTOR & Co-founder",
                            image:
                            "/wasif.png",
                            link: "https://www.linkedin.com/in/fazal-wasif?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        },
                      
                        {
                            title: "Malik Iqbal",
                            category: "Senior Software Engineer",
                            image:
                            "/Iqbal.jpeg",
                            link: "https://www.linkedin.com/in/malik-iqbal-9aba781a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                        },
                        {
                            title: "MIFTAHULLAH KHAN",
                            category: "FRONTEND DEVELOPER",
                            image:
                            "/Miftah.jpeg",
                            link: "https://www.linkedin.com/in/miftah-ullah-khan-b1a4aa214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        },
                        {
                            title: "Faisal KHAN",
                            category: "BACKEND DEVELOPER",
                            image:
                            "/Faisal.jpeg",
                            link: "https://www.linkedin.com/in/faisal-khan-5159b3207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        },
                        {
                          title: "Ruhani Agarwal",
                          category: "Diigital Marketer",
                          image:"/ruhani2.jpeg",
                          
                          link: "https://www.linkedin.com/in/faisal-khan-5159b3207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                      },
                    ];

      

   
      

  return (
    <div className='w-full bg-[#04081C]'>
          <DarkNav />

<section className='w-full flex flex-col items-center justify-center px-4'>

    <div className='w-full mt-8 md:mt-24'>
    <div className="w-full items-center flex flex-col py-[2rem] text-center leading-10 md:leding-6" id="enthu">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-9" >
                        ENTHUSIASM FOR</h1>
                    <span id='service' className={`text-5xl md:text-7xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  md:leading-1 `}>each service</span>
                  
                </div>
    </div>
    
    

<div className='w-full  flex max-w-screen-xl   h-[300px] justify-between mt-12'>
    <div className='md:w-[28%]  relative hidden sm:block' id="imgthree">
        <Image src="/container.png" fill alt='container' />

    </div>

    <div className='w-full md:w-[65%] flex flex-col space-y-4 md:space-y-3  overflow-hidden h-[300px] md:ml-16' id="servv">

{/* WEB DESIGN */}
<div className="w-full flex text-[#a3a5aa] items-center justify-between py-1 cursor-pointer">
    <h1 className="text-3xl  leading-tight">WEB DESIGN</h1>
    <GoArrowUpRight className=' text-2xl'/>

</div>
<div className="bg-gray-800  rounded-full w-full h-0.5"></div>


{/* DEVELOPMENT */}
<div className="w-full flex items-center justify-between md:py-1.5 text-[#a3a5aa] cursor-pointer">
    <h1 className="text-3xl text-[#a3a5aa] leading-tight">DEVELOPMENT</h1>
    <GoArrowUpRight className=' text-2xl'/>
</div>
<div className="bg-gray-800  rounded-full w-full h-0.5"></div>

{/* UI/UX CONCEPT */}
<div className="w-full flex items-center justify-between py-1.5 text-[#a3a5aa] cursor-pointer">
    <h1 className="text-3xl text-[#a3a5aa] leading-tight">UI/UX CONCEPT</h1>
    <GoArrowUpRight className=' text-2xl'/>
</div>
<div className="bg-gray-800  rounded-full w-full h-0.5"></div>

{/* BRANDING */}
<div className="w-full flex items-center justify-between py-1 text-[#a3a5aa] cursor-pointer">
    <h1 className="text-3xl text-[#a3a5aa] leading-tight">BRANDING</h1>
    <GoArrowUpRight className=' text-2xl'/>
</div>
<div className="bg-gray-800  rounded-full w-full h-0.5"></div>

   


</div>


    <div>

    </div>

</div>



<div className="max-w-screen-xl justify-between w-full m-auto ">
                <div className="w-full py-[4rem] items-center md:flex pt-6 mt-6 justify-between">
                    <div className='' id="meet">
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-3 md:leading-tight">MEET </h1>
                        <span id="team" className={`text-5xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  `}>Our Team</span>
                    </div>

                
                </div>
             

                <div className="md:flex w-full overflow-auto  justify-between items-center  scrollbar scrollbar-thin pt-2    gap-x-4 h-auto " id='teamimg'>
                    {team.map((x,index) => (
                        <div key={index} className=" flex flex-col  min-w-[25%] justify-between items-center  rounded-lg">
                            {/* <img src={x.image} alt={x.title} className="w-full  rounded-md object-cover" /> */}
                         
<div className='w-[100%] h-[300px]  relative' id="imgabcd">
<Image
    src={x.image}
    alt={x.title}

    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md object-cover"
  />
</div>

                            <div className="w-full px-2 flex justify-between items-center pb-2">
                                <div className="py-2">
                                    <div className="text-white">{x.title}</div>
                                    <div className="text-gray-300 text-[0.8rem]">{x.category}</div>
                                </div>
                                <svg 
                                
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => window.open(x.link, '_blank')}                                    className='cursor-pointer'
                                >
                                    <g clipPath="url(#clip0_3338_132101)">
                                        <g clipPath="url(#clip1_3338_132101)">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.03125 4.89746C6.03125 6.00203 5.13582 6.89746 4.03125 6.89746C2.92668 6.89746 2.03125 6.00203 2.03125 4.89746C2.03125 3.79289 2.92668 2.89746 4.03125 2.89746C5.13582 2.89746 6.03125 3.79289 6.03125 4.89746ZM6.03125 9.39746V22.8975H2.03125V9.39746H6.03125ZM9.03125 9.39746H13.0312V10.2389C13.6568 10.0178 14.33 9.89746 15.0312 9.89746C18.3449 9.89746 21.0312 12.5838 21.0312 15.8975V22.8975H17.0312V15.8975C17.0312 14.7929 16.1358 13.8975 15.0312 13.8975C13.9267 13.8975 13.0312 14.7929 13.0312 15.8975V22.8975H9.03125V15.8975V9.39746Z"
                                                fill="#A3A5AA"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3338_132101">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(0.03125 0.897461)"
                                            />
                                        </clipPath>
                                        <clipPath id="clip1_3338_132101">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(0.03125 0.897461)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

</section>


    </div>
  )
}

export default Services
