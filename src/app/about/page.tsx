'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

import DarkNav from '@/app/navbar/DarkNav'
import HeroRoute from '../Components/HeroRoute';
import EmailFooter from '../Components/EmailFooter';
import { motion } from 'framer-motion';
import { SlideDown, SlideLeft, SlideRight } from '../services/animation';

function Page() {





                

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


      


          <div className='py-32 w-full flex flex-col items-center '
           style={{
            backgroundImage: `url(${'./Background.png'})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
          >
          <div className="mx-auto flex h-auto w-full max-w-screen-xl flex-col items-stretch justify-between gap-4 overflow-hidden px-4 pt-6 md:h-[440px] md:flex-row md:items-center">
      <motion.div
           variants={SlideLeft(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
      className="relative h-[280px] w-full flex-grow-0 overflow-hidden rounded-md md:h-full md:w-[25%]" id='imgtree'>
  <Image
     src='/wasifabc.png'
     alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
    id='imgone'
  />
</motion.div>
<motion.div
  variants={SlideLeft(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
className="relative h-[280px] w-full flex-grow-0 overflow-hidden rounded-md md:h-full md:w-[50%]">
  <Image
     src='/wasifdef.png'
     alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
     id='imgtwo'
  />
</motion.div>
  <motion.div
    variants={SlideLeft(0.3)}
                          initial="hidden"
                            whileInView={"visible"}
  className="relative h-[280px] w-full flex-grow-0 overflow-hidden rounded-md md:h-full md:w-[25%]">
  <Image
     src='/wasifghi.png'
     alt="Image description"
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md"
     id='imgthree'
  />
</motion.div>
</div>







      
<div className='flex flex-col md:flex-row   w-full   justify-between items-start  max-w-screen-xl   py-[4rem] px-4' id='btntext'>
                  <div id='creat'>
                  <motion.button
                   variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                  className="mt-6 border px-6 py-3 bg-[#04081C] rounded-full text-white text-lg font-medium transition" >
                        CREATIVE STUDIO
                    </motion.button>
                  </div>
                    <motion.label
                     variants={SlideLeft(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                    className='mt-4 md:mt-0 text-xl font-semibold md:font-normal md:text-3xl md:w-[65%] text-black md:px-4 tracking-normal' id="ourapp">

                        OUR APPROACH COMBINES BOLD AND THE
                        CREATIVITY THAT DRIVES AS WE ARE HERE TO
                        ELEVATE YOUR BRAND
                    </motion.label>
                </div>
          </div>        
            
            
            
            </div>





            <section className="py-16   w-full bg-[#04081C] "
  
  >
      <div className="w-full mx-auto px-6 max-w-screen-xl">

      <div className="md:flex justify-between items-center mb-12  " id="creativee">
          <motion.h2
               variants={SlideDown(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
          className="text-3xl text-white sm:text-4xl"
          >
            Why  <br />
            <span className="showcase"><i>OcircleX</i></span>
          </motion.h2>
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



        <motion.p
             variants={SlideDown (0.2)}
                          initial="hidden"
                            whileInView={"visible"}
        className="text-gray-200 text-xl font-extralight    ">
        Because Talent Has No Borders. <br />
Since our founding in 2021, our mission has been to build and manage highly skilled software development teams for businesses around the world. <br />
By tapping into the growing pool of engineering talent in Pakistan, we bring expert developers to international projects, helping businesses turn their ideas into reality. <br />
Our developers seamlessly integrate with your team to deliver innovative solutions and maintain core applications — with quality, efficiency, and cost-effectiveness at the heart of everything we do.
</motion.p>



<div></div>
      </div>
      </section>




            

            <div className=" py-[4rem] px-4  w-full  bg-white  shadow-md  ">
                <div className="m-auto text-[#04081C] max-w-screen-xl">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <motion.div
                             variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                        className="" id='thecore'>
                            <h1 className="text-3xl font-bold leading-tight text-[#04081C] sm:text-4xl md:text-6xl">THE CORE OF</h1>
                            <span className="font-instrument text-4xl font-extralight italic leading-[1.15] text-[#7BB668] sm:text-5xl md:text-7xl"><i>our identity</i></span>
                        </motion.div>

                        <div className="flex md:justify-end">
                            <motion.div
                                 variants={SlideLeft(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                            id='seeour' className="mt-4 cursor-pointer rounded-full border border-[#171D3F] px-5 py-2.5 text-sm font-medium text-[#04081C] hover:bg-blue-800 hover:text-white md:mt-0 md:px-6 md:py-3 md:text-lg ">
                                SEE OUR SERVICES
                            </motion.div>
                        </div>
                    </div>

                    
                    <div className='md:flex w-full gap-x-2 pt-6 mt-6 justify-end'>
                        <div className='flex w-full md:w-1/3 gap-x-2 hidden mt-4 rounded-md'>

                        </div>
                        <div className='w-full md:w-2/3 gap-x-3'>
                            <div className='md:flex w-full gap-x-3 ' >
                                <motion.div
                                 variants={SlideLeft(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                                className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='onebox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">1</h2>
                                    <div className="text-[#04081C]">Creativity</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </motion.div>
                                <motion.div
                                 variants={SlideLeft(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
                                className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='onebox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">2</h2>
                                    <div className="text-[#04081C]">Collaboration</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </motion.div>

                            </div>
                            <div className='md:flex w-full gap-x-3 text-[#04081C]'>
                                <motion.div 
                                 variants={SlideLeft(0.3)}
                          initial="hidden"
                            whileInView={"visible"}
                                className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='twobox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">3</h2>
                                    <div className="text-[#04081C]">Creativity</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.</div>
                                </motion.div>
                                <motion.div
                                 variants={SlideLeft(0.4)}
                          initial="hidden"
                            whileInView={"visible"}
                                className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2' id='twobox'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">4</h2>
                                    <div className="text-[#04081C]">Growth</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








<div className='bg-white w-full flex justify-center'>
<div className='w-full max-w-screen-xl'>
<div className="w-full py-[4rem] max-w-screen-xl items-center md:flex pt-6 mt-6 justify-between">
                <motion.div
                 variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                className='' id="meet">
                        <h1 className="text-2xl font-bold leading-tight text-black md:text-4xl">MEET </h1>
                        <span id="team" className="font-instrument text-4xl font-extralight italic leading-[1.15] text-[#7BB668] md:text-6xl">Our Team</span>
                    </motion.div>

                
                </div>
             

                <div className="flex h-auto w-full flex-col items-center justify-between gap-x-4 gap-y-8 overflow-x-auto pt-2 scrollbar-thin md:flex-row" id='teamimg'>
                    {team.map((x,index) => (
                        <div key={x.title} className="flex w-full flex-col items-center justify-between rounded-lg md:min-w-[25%] md:w-[25%]">
                            {/* <img src={x.image} alt={x.title} className="w-full  rounded-md object-cover" /> */}
                         
<motion.div
 variants={SlideLeft(index === 0 ? 0.1 : index * 0.1)}
                          initial="hidden"
                            whileInView={"visible"}
className='w-[100%] h-[350px]  relative group' onMouseEnter={()=> setDetails(true)} onMouseLeave={()=> setDetails(false)}>
<Image
    src={x.image}
    alt={x.title}
    layout="fill" // Ensures it fills the parent div
    objectFit="cover" // Makes sure it covers the div without distortion
    className="rounded-md  cursor-pointer"
  />

  

</motion.div>

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
                <motion.div 
                 variants={SlideRight(0.1)}
                          initial="hidden"
                            whileInView={"visible"}
                className='' id="whatwe">
                        <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">WHAT WE </h1>
                        <span id="team" className="font-instrument text-4xl font-extralight italic leading-[1.15] text-[#7BB668] md:text-6xl">excel at</span>
                    </motion.div>
                    <motion.div
                     variants={SlideRight(0.15)}
                          initial="hidden"
                            whileInView={"visible"}
                    id='ourskills' className="mt-6 px-6 border py-3 bg-[#04081C] rounded-full text-white text-md font-medium hover:bg-blue-800 transition">OUR SKILS {' >'}</motion.div>
                </div>
                <motion.div
                 variants={SlideRight(0.2)}
                          initial="hidden"
                            whileInView={"visible"}
                className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='webd'>
                    <h1 className="text-3xl md:text-4xl  font- text-gray-400 leading-tight  w-11/12">WEB DESIGN</h1>
                    <label className="text-xl md:text-2xl text-gray-400">100%</label>
                </motion.div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[100%] " id='webda'></div>
                </div>
                {/* <div className='border-b w-[95%] pt-1'></div> */}
                <motion.div
                 variants={SlideRight(0.25)}
                          initial="hidden"
                            whileInView={"visible"}
                className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='devd'>
                    <h1 className="text-3xl md:text-2xl  font- text-gray-400 leading-tight  w-11/12">DEVELOPMENT</h1>
                    <label className="text-xl md:text-2xl text-gray-400">95%</label>
                </motion.div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[95%]" id='devda'></div>
                </div>
                <motion.div
                 variants={SlideRight(0.3)}
                          initial="hidden"
                            whileInView={"visible"}
                className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='uiux'>
                    <h1 className="text-3xl md:text-2xl  font- text-gray-400 leading-tight  w-11/12">UI/UX CONCEPT</h1>
                    <label className="text-xl md:text-2xl text-gray-400">95%</label>
                </motion.div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[95%]" id='uiuxa'></div>
                </div>
                <motion.div
                 variants={SlideRight(0.35)}
                          initial="hidden"
                            whileInView={"visible"}
                className="w-full flex items-center md:flex pt-6 mt-6 justify-between" id='branding'>
                    <h1 className="text-3xl md:text-2xl  font- text-gray-400 leading-tight  w-11/12">BRANDING</h1>
                    <label className="text-xl md:text-2xl text-gray-400">90%</label>
                </motion.div>
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