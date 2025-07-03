'use client'
import Image from 'next/image'
import React, { useState } from 'react'
// import img2 from '../../../images/2.png'
// import img1 from '../../../images/1.png'
// import img3 from '../../../images/3.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

import DarkNav from '@/app/navbar/DarkNav'
import { Instrument_Serif } from "next/font/google";
import HeroRoute from '../Components/HeroRoute';
import EmailFooter from '../Components/EmailFooter';
gsap.registerPlugin(ScrollTrigger);

const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });

function Page() {


    // useGSAP(()=> {
    //     gsap.from("#building",
    //       {x: 100,
    //         duration:1,
    //         opacity:0,
    //         delay:0.2,
    //         ease: "expo.out",
           
        
           
    //        }
    //       )
    //       }, {scope:""})

    //       useGSAP(()=> {
    //         gsap.from("#beyond",
    //           {y: 100,
    //             duration:1,
    //             opacity:0,
    //             delay:1,
    //             ease: "expo.out",
               
            
               
    //            }
    //           )
    //           }, {scope:""})

    //           useGSAP(()=> {
    //             gsap.from("#btnget",
    //               {x: 100,
    //                 duration:1,
    //                 opacity:0,
    //                 delay:1,
    //                 ease: "expo.out",
                   
                
                   
    //                }
    //               )
    //               }, {scope:""})
          


    //               useGSAP(()=> {

    //                 const tl = gsap.timeline({
    //                   scrollTrigger: {
    //                     trigger: "#imgtree",
    //                     start: "top 60%",
    //                     end: "top 20%", // Extend scroll range for slower effect
    //                     scrub: 3, // Increase scrub for smoother effect
    //                     once: true,
                      
                      
    //                   },
    //                 });
                  
    //                 tl.from("#imgone", {
    //                   y: 150,
    //                   autoAlpha: 0,
    //                   duration: 2,
    //                   ease: "expo.out",
    //                 })
    //                 .from("#imgtwo", {
    //                   y: 150,
    //                   autoAlpha: 0,
    //                   duration: 2,
    //                   ease: "expo.out",
    //                 }, "+=0.3")
    //                 .from("#imgthree", {
    //                   x: 150,
    //                   autoAlpha: 0,
    //                   duration: 2,
    //                   ease: "expo.out",
    //                 }, "+=0.3");
                    
                  
    //               })

    //               useGSAP(()=> {
    //                 gsap.from("#creat",
    //                    {x: -100,
    //                     duration:1,
    //                     opacity:0,
    //                     delay:0.5,
                       
                       
    //                     scrollTrigger: {
    //                     trigger:"#btntext"
    //                     },
                       
    //                    }
    //                   )
    //                   }, {scope:""})

    //                   useGSAP(()=> {
    //                     gsap.from("#ourapp",
    //                        {x: 100,
    //                         duration:1,
    //                         opacity:0,
    //                         delay:0.5,
                           
                           
    //                         scrollTrigger: {
    //                         trigger:"#btntext"
    //                         },
                           
    //                        }
    //                       )
    //                       }, {scope:""})


    //               useGSAP(()=> {
    //                 gsap.from("#thecore",
    //                    {x: -100,
    //                     duration:1,
    //                     opacity:0,
    //                     delay:0.5,
                       
                       
    //                     scrollTrigger: {
    //                     trigger:"#thecore"
    //                     },
                       
    //                    }
    //                   )
    //                   }, {scope:""})


    //               useGSAP(()=> {
    //                 gsap.from("#seeour",
    //                    {x: 100,
    //                     duration:1,
    //                     opacity:0,
    //                     delay:0.5,
                       
                       
    //                     scrollTrigger: {
    //                     trigger:"#seeour"
    //                     },
                       
    //                    }
    //                   )
    //                   }, {scope:""})


    //               useGSAP(()=> {
    //                 gsap.from("#onebox",
    //                    {x: -100,
    //                     duration:1,
    //                     opacity:0,
    //                     delay:0.5,
                       
                       
    //                     scrollTrigger: {
    //                     trigger:"#onebox"
    //                     },
                       
    //                    }
    //                   )
    //                   }, {scope:""})

    //                   useGSAP(()=> {
    //                     gsap.from("#twobox",
    //                        {x: 100,
    //                         duration:1,
    //                         opacity:0,
    //                         delay:0.5,
                           
                           
    //                         scrollTrigger: {
    //                         trigger:"#twobox"
    //                         },
                           
    //                        }
    //                       )
    //                       }, {scope:""})


    //                       useGSAP(()=> {
    //                         gsap.from("#meet",
    //                            {x: -100,
    //                             duration:1,
    //                             opacity:0,
    //                             delay:0.5,
                               
                               
    //                             scrollTrigger: {
    //                             trigger:"#meet"
    //                             },
                               
    //                            }
    //                           )
    //                           }, {scope:""})
            
            
            
            
    //                           useGSAP(()=> {
    //                             gsap.from("#teamimg",
    //                                {y: 100,
    //                                 x:100,
    //                                 duration:1,
    //                                 opacity:0,
    //                                 delay:0.5,
                                   
                                   
    //                                 scrollTrigger: {
    //                                 trigger:"#teamimg"
    //                                 },
                                   
    //                                }
    //                               )
    //                               }, {scope:""})


    //                               useGSAP(()=> {
    //                                 gsap.from("#whatwe",
    //                                    {x: -100,
    //                                     duration:1,
    //                                     opacity:0,
    //                                     delay:0.5,
                                       
                                       
    //                                     scrollTrigger: {
    //                                     trigger:"#whatwe"
    //                                     },
                                       
    //                                    }
    //                                   )
    //                                   }, {scope:""})
                    
                    
                    
                    
    //                                   useGSAP(()=> {
    //                                     gsap.from("#ourskills",
    //                                        {
    //                                         x:100,
    //                                         duration:1,
    //                                         opacity:0,
    //                                         delay:0.5,
                                           
                                           
    //                                         scrollTrigger: {
    //                                         trigger:"#ourskills"
    //                                         },
                                           
    //                                        }
    //                                       )
    //                                       }, {scope:""})



    //                                       useGSAP(() => {
    //                                         const tl = gsap.timeline({
    //                                           scrollTrigger: {
    //                                             trigger: "#webd",
    //                                             start: "top 80%",
    //                                             end: "top 20%",
    //                                             scrub: 3,
    //                                             once: true,
    //                                             toggleActions: "play none none none",
    //                                           },
    //                                         });
                                          
    //                                         tl.from("#webd", {
    //                                           y: 150,
    //                                           autoAlpha: 0,  // Ensure element starts invisible (opacity 0 and visibility hidden)
    //                                           duration: 2,
    //                                           ease: "expo.out",
    //                                         })
    //                                         .from("#webda", {
    //                                           x: -150,
    //                                           autoAlpha: 0,
    //                                           duration: 4,
    //                                           ease: "expo.out",
    //                                           scrollTrigger: {
    //                                             trigger: "#webda",
    //                                             start: "top 90%",
    //                                             end: "top 20%",
    //                                             scrub: 2,
    //                                             once: true,
    //                                             toggleActions: "play none none none",
    //                                           },
    //                                         })
    //                                         .from("#devd", {
    //                                           y: 150,
    //                                           autoAlpha: 0,
    //                                           duration: 2,
    //                                           ease: "expo.out",
    //                                         }, "+=0.3")
    //                                         .from("#devda", {
    //                                           x: -150,
    //                                           autoAlpha: 0,
    //                                           duration: 4,
    //                                           ease: "expo.out",
    //                                           scrollTrigger: {
    //                                             trigger: "#devda",
    //                                             start: "top 90%",
    //                                             end: "top 20%",
    //                                             scrub: 2,
    //                                             once: true,
    //                                             toggleActions: "play none none none",
    //                                           },
    //                                         }, "+=0.3")
    //                                         .from("#uiux", {
    //                                           x: 150,
    //                                           autoAlpha: 0,
    //                                           duration: 2,
    //                                           ease: "expo.out",
    //                                         }, "+=0.3")
    //                                         .from("#uiuxa", {
    //                                           x: -150,
    //                                           autoAlpha: 0,
    //                                           duration: 4,
    //                                           ease: "expo.out",
    //                                           scrollTrigger: {
    //                                             trigger: "#uiuxa",
    //                                             start: "top 90%",
    //                                             end: "top 20%",
    //                                             scrub: 2,
    //                                             once: true,
    //                                             toggleActions: "play none none none",
    //                                           },
    //                                         }, "+=0.3")
    //                                         .from("#branding", {
    //                                           x: 150,
    //                                           autoAlpha: 0,
    //                                           duration: 2,
    //                                           ease: "expo.out",
    //                                         }, "+=0.3")
    //                                         .from("#brandinga", {
    //                                           x: -150,
    //                                           autoAlpha: 0,  // Ensure it's completely invisible before starting
    //                                           opacity: 0,    // Use opacity directly if needed
    //                                           duration: 4,
    //                                           ease: "expo.out",
    //                                           scrollTrigger: {
    //                                             trigger: "#brandinga",
    //                                             start: "top 90%",
    //                                             end: "top 20%",
    //                                             scrub: 2,
    //                                             once: true,
    //                                             toggleActions: "play none none none",
    //                                           },
    //                                         }, "+=0.3");
    //                                       });
                                          


                                    
                                          


                

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
                                                category: "Creative Director & Co-founder",
                                                image:
                                                "/wasif.png",
                                                link: "https://www.linkedin.com/in/fazal-wasif?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                            },
                                            {
                                                title: "Abraiz Khan",
                                                category: "Marketing Lead",
                                                image:"/abraiz.png",
                                                
                                                link: "https://www.linkedin.com/in/faisal-khan-5159b3207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
                                                category: "Frontend Developer",
                                                image:
                                                "/Miftah.jpeg",
                                                link: "https://www.linkedin.com/in/miftah-ullah-khan-b1a4aa214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                            },
                                            {
                                                title: "Faisal KHAN",
                                                category: "Backend Developer",
                                                image:
                                                "/Faisal.jpeg",
                                                link: "https://www.linkedin.com/in/faisal-khan-5159b3207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                            },
                                            {
                                                title: "Azan Khan",
                                                category: "Flutter Developer",
                                                image:
                                                "/azan.jpg",
                                                link: "https://www.linkedin.com/in/faisal-khan-5159b3207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                            },
                                            {
                                                title: "Kamran Khan",
                                                category: "Flutter Developer",
                                                image:
                                                "/kamran.jpg",
                                                link: "https://www.linkedin.com/in/faisal-khan-5159b3207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                                            },
                                          
                                        ];
                    
                                    
                                          const [details, setDetails] = useState(false)

    
    
                                          const PageIntro = [ 
                                            {
                                              title: "BUILDING",
                                              titlegreen: "beyond limits",
                                              desc: "We are a team of passionate creatives and technologists dedicated to helping brands grow through innovative digital solutions. With a user-first mindset, we craft custom strategies that align with your vision and drive real results. Our focus is on building long-term partnerships through trust, transparency, and measurable impact.",
                                          
                                            }
                                          ]
                                          return (
        <>   
       <div className='w-full bg-[#04081C]' >
        <DarkNav/>
       <section className="w-full relative    flex flex-col  items-center justify-between" >
            <div className=" justify-between w-full m-auto ">


            <HeroRoute pageIntro = {PageIntro}/>


                {/* <div className="w-full items-center flex flex-col py-[2rem] text-center -mt-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-3" id='building'>
                        BUILDING</h1>
                        <span id='service' className={`text-5xl md:text-7xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  md:leading-1 `}>beyond limits</span>
                        <div id='btnget'>
               <button  className="mt-6 px-6 border py-3 bg-[#04081C] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition" >
                      <span >  Get Started</span>
                    </button>
               </div>
                </div> */}


          <div className='py-32 w-full flex flex-col items-center '
           style={{
            backgroundImage: `url(${'./Background.png'})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
          >
          <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row  justify-between gap-4 items-center pt-6 h-[1400px] md:h-[440px] overflow-hidden px-4 ">
      <div className="w-full md:w-[25%] h-full  rounded-md overflow-hidden flex-grow-0 relative" id='imgtree'>
  <Image
     src='/wasifabc.png'
     alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
    id='imgone'
  />
</div>
<div className="w-full md:w-[50%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
     src='/wasifdef.png'
     alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
     id='imgtwo'
  />
</div>
  <div className="w-full md:w-[25%] h-full rounded-md overflow-hidden flex-grow-0 relative">
  <Image
     src='/wasifghi.png'
     alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
     id='imgthree'
  />
</div>
</div>







      
<div className='flex flex-col md:flex-row   w-full   justify-between items-start  max-w-screen-xl   py-[4rem] px-4' id='btntext'>
                  <div id='creat'>
                  <button className="mt-6 border px-6 py-3 bg-[#04081C] rounded-full text-white text-lg font-medium transition" >
                        CREATIVE STUDIO
                    </button>
                  </div>
                    <label className='mt-4 md:mt-0 text-xl font-semibold md:font-normal md:text-3xl md:w-[65%] text-black md:px-4 tracking-normal' id="ourapp">

                        OUR APPROACH COMBINES BOLD AND THE
                        CREATIVITY THAT DRIVES AS WE ARE HERE TO
                        ELEVATE YOUR BRAND
                    </label>
                </div>
          </div>        
            
            
            
            </div>





            <section className="py-16   w-full bg-[#04081C] "
  
  >
      <div className="w-full mx-auto px-6 max-w-screen-xl">

      <div className="md:flex justify-between items-center mb-12  " id="creativee">
          <h2 className="text-4xl    text-white
">
            Why  <br />
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



        <p className="text-gray-200 text-xl font-extralight    ">
        Because Talent Has No Borders. <br />
Since our founding in 2021, our mission has been to build and manage highly skilled software development teams for businesses around the world. <br />
By tapping into the growing pool of engineering talent in Pakistan, we bring expert developers to international projects, helping businesses turn their ideas into reality. <br />
Our developers seamlessly integrate with your team to deliver innovative solutions and maintain core applications — with quality, efficiency, and cost-effectiveness at the heart of everything we do.
</p>



<div></div>
      </div>
      </section>




            

            <div className=" py-[4rem] px-4  w-full  bg-white  shadow-md  ">
                <div className="m-auto text-[#04081C] max-w-screen-xl">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div className="" id='thecore'>
                            <h1 className="text-4xl md:text-6xl font-bold text-[#04081C] leading-4">THE CORE OF</h1>
                            <span className={`text-5xl md:text-7xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  leading-[83px] `}><i>our identity</i></span>
                        </div>

                        <div className="flex md:justify-end">
                            <div id='seeour' className=" px-6 border py-3 border-[#171D3F] rounded-full text-[#04081C] text-lg font-medium hover:bg-blue-800 transition">
                                SEE OUR SERVICES
                            </div>
                        </div>
                    </div>
                    <div className='md:flex w-full gap-x-2 pt-6 mt-6 justify-end'>
                        <div className='flex w-full md:w-1/3 gap-x-2 hidden mt-4 rounded-md'>

                        </div>
                        <div className='w-full md:w-2/3 gap-x-3'>
                            <div className='md:flex w-full gap-x-3 ' >
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='onebox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">1</h2>
                                    <div className="text-[#04081C]">Creativity</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </div>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='onebox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">2</h2>
                                    <div className="text-[#04081C]">Collaboration</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </div>

                            </div>
                            <div className='md:flex w-full gap-x-3 text-[#04081C]'>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='twobox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">3</h2>
                                    <div className="text-[#04081C]">Creativity</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.</div>
                                </div>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='twobox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">4</h2>
                                    <div className="text-[#04081C]">Growth</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








<div className='bg-white w-full flex justify-center'>
<div className='w-full max-w-screen-xl'>
<div className="w-full py-[4rem] max-w-screen-xl items-center md:flex pt-6 mt-6 justify-between">
                <div className='' id="meet">
                        <h1 className="text-2xl md:text-4xl font-bold text-black leading-3 md:leading-tight">MEET </h1>
                        <span id="team" className={`text-5xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  `}>Our Team</span>
                    </div>

                
                </div>
             

                <div className="flex flex-col md:flex-row w-full overflow-auto  justify-between items-center  scrollbar scrollbar-thin pt-2    gap-x-4 h-auto " id='teamimg'>
                    {team.map((x) => (
                        <div key={x.title} className=" flex flex-col  min-w-[25%] w-[100%] justify-between items-center  rounded-lg">
                            {/* <img src={x.image} alt={x.title} className="w-full  rounded-md object-cover" /> */}
                         
<div className='w-[100%] h-[350px]  relative group' onMouseEnter={()=> setDetails(true)} onMouseLeave={()=> setDetails(false)}>
<Image
    src={x.image}
    alt={x.title}
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md  cursor-pointer"
  />

{/* <div className="absolute inset-0 bg-white  opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
    <div className="text-center">
      <p className="text-black font-semibold">Product Name</p>
      <p className="text-black">Price</p>
    </div>
  </div> */}

  {/* {details && (
    <div className='w-[100%] h-[300px] bg-white z-50 opacity-40'>

</div>
  )} */}

  

</div>

                           <div className="w-full px-2 flex justify-between items-center pb-2">
                                <div className="py-2">
                                    <div className="text-black uppercase">{x.title}</div>
                                    <div className="text-gray-400 text-[0.9rem] ">{x.category}</div>
                                </div>
                    
                            </div> 
                        </div>
                    ))}
                </div>
</div>
</div>










            <div className="max-w-screen-xl justify-between w-full m-auto px-4">
              








                <div className="w-full items-center md:flex pt-[4rem] mt-6 justify-between" >
                <div className='' id="whatwe">
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-3 md:leading-tight">WHAT WE </h1>
                        <span id="team" className={`text-5xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  `}>excel at</span>
                    </div>
                    <div id='ourskills' className="mt-6 px-6 border py-3 bg-[#04081C] rounded-full text-white text-md font-medium hover:bg-blue-800 transition">OUR SKILS {' >'}</div>
                </div>
                <div className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='webd'>
                    <h1 className="text-3xl md:text-4xl  font- text-gray-400 leading-tight  w-11/12">WEB DESIGN</h1>
                    <label className="text-xl md:text-2xl text-gray-400">100%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[100%] " id='webda'></div>
                </div>
                {/* <div className='border-b w-[95%] pt-1'></div> */}
                <div className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='devd'>
                    <h1 className="text-3xl md:text-2xl  font- text-gray-400 leading-tight  w-11/12">DEVELOPMENT</h1>
                    <label className="text-xl md:text-2xl text-gray-400">95%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[95%]" id='devda'></div>
                </div>
                <div className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='uiux'>
                    <h1 className="text-3xl md:text-2xl  font- text-gray-400 leading-tight  w-11/12">UI/UX CONCEPT</h1>
                    <label className="text-xl md:text-2xl text-gray-400">95%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[95%]" id='uiuxa'></div>
                </div>
                <div className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='branding'>
                    <h1 className="text-3xl md:text-2xl  font- text-gray-400 leading-tight  w-11/12">BRANDING</h1>
                    <label className="text-xl md:text-2xl text-gray-400">90%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[90%]" id='brandinga' ></div>
                </div>

            </div>


            <EmailFooter/>

        </section>
       </div>

        </>
    )
}

export default Page