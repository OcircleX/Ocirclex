"use client";
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import { useEffect, useState } from "react";
// import image from './img.png'
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);



const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  weight: ["400"], 
  style: "italic" // ✅ Correct way to load italic
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});


const Showcase = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const element = document.getElementById("creative-projects");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elementPosition) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(()=> {
    gsap.from("#creativee",
       {y: 100,
        duration:0.5,
        opacity:0,
        delay:0.5,
       
       
        scrollTrigger: {
        trigger:"#creativee"
        },
       
       }
      )
      }, {scope:""})

      
      useGSAP(()=> {
        gsap.from("#working",
           {y: 100,
            duration:0.5,
            opacity:0,
            delay:0.5,
           
           
            scrollTrigger: {
            trigger:"#working"
            },
           
           }
          )
          }, {scope:""})

          useGSAP(()=> {
            gsap.from("#driven",
               {y: 100,
                duration:0.5,
                opacity:0,
                delay:0.5,
               
               
                scrollTrigger: {
                trigger:"#driven"
                },
               
               }
              )
              }, {scope:""})

              useGSAP(()=> {
                gsap.from("#drivenn",
                   {y: 100,
                    duration:1.5,
                    opacity:0,
                    delay:0.5,
                   
                   
                    scrollTrigger: {
                    trigger:"#drivenn"
                    },
                   
                   }
                  )
                  }, {scope:""})

                  useGSAP(()=> {
                    gsap.from("#workimg",
                       {y: 100,
                        duration:0.5,
                        opacity:0,
                        delay:0.5,
                       
                       
                        scrollTrigger: {
                        trigger:"#workimg"
                        },
                       
                       }
                      )
                      }, {scope:""})
    
          
    

                      useGSAP(()=> {

                        const tl = gsap.timeline({
                          scrollTrigger: {
                            trigger: "#pointss",
                            start: "top 80%",
                            end: "top 20%", // Extend scroll range for slower effect
                            scrub: 3, // Increase scrub for smoother effect
                            once: true,
                          
                          
                          },
                        });
                      
                        tl.from("#pointtitle", {
                          y: 150,
                          autoAlpha: 0,
                          duration: 4,
                          ease: "expo.out",
                        })
                        .from("#pointsubtitle", {
                          y: 150,
                          autoAlpha: 0,
                          duration: 4,
                          ease: "expo.out",
                        }, "+=0.3")

                        tl.from("#pointtitleb", {
                          y: 150,
                          autoAlpha: 0,
                          duration: 4,
                          ease: "expo.out",
                        })
                        .from("#pointsubtitleb", {
                          y: 150,
                          autoAlpha: 0,
                          duration: 4,
                          ease: "expo.out",
                        }, "+=0.3")

                        tl.from("#pointtitlec", {
                          y: 150,
                          autoAlpha: 0,
                          duration: 4,
                          ease: "expo.out",
                        })
                        .from("#pointsubtitlec", {
                          y: 150,
                          autoAlpha: 0,
                          duration: 4,
                          ease: "expo.out",
                        }, "+=0.3")
                      
                        
                      
                      })


 
  const projects = [
    {
      title: "Task Management",
      category: "Web dev & UI Design",
      image:
        "/Nuegas.png",
      link: "/projects/dynamic-structures",
    },
    {
      title: "Fitness  Application",
      category: "Mobile App Dev",
      image:"/Fitness.png",
      link: "/projects/visionary-framework",
    },
    {
      title: "Hospital Management System",
      category: "Web dev & UI Design",
      image:
        "/Hospital.png",
      link: "/projects/design-revolution",
    },
  ];


  const items = [
    {
      title: 'WE DELIVER CREATIVE PROJECTS',
      subtitle: 'OUR DIGITALISED DESIGN TEAM TO ELEVATE',
    },
    {
      title: 'WE PARTNER CLOSELY WITH BRAINSTORM',
      subtitle: 'ENSURING DESIGNS ALIGN WITH ALL VISION AND GOALS',
    },
    {
      title: 'WE ARE BOTH INNOVATIVE AND FUNCTIONAL',
      subtitle: 'THROUGH CONTINUOUS FEEDBACKS AND REVISIONS',
    },
  ];

  return (
    <>
      <section className="py-16   w-full bg-[#04081C]">
        <div className="w-full mx-auto px-6 max-w-screen-xl">
          <div className="md:flex justify-between items-center  " id="creativee">
            <h2 className="text-4xl font-bold text-white ">
              VIEW OUR <br />
              <span className="showcase" 
               style={{
               
                fontWeight: "200",
                color: "#7BB668",
                fontStyle: "italic",
                lineHeight: "83px",
                fontFamily: instrumentSerif.style.fontFamily || "serif",
              }}
              ><i>portfolio</i></span>
            </h2>
            <button className="mt-4 px-3 md:px-6 flex gap-x-2 py-3 border border-gray-100 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition"
            style={{
              backgroundColor: "#484848",
              fontSize: "1rem",
            }}
            id="casestudies"
            >
              ALL CASE STUDIES
              {/* <img
                src="https://cdn.prod.website-files.com/6757e4a58bda42b7389bc8e0/67585a489813ca576fb1579b_direction-right%202.svg"
                alt="Arrow Right"
                className="w-5"
              /> */}
            </button>
          </div>




          <div className="relative ">
            {projects.map((project, index) => (
              <a
                key={index}
                // href={project.link}
                className="block h-full  shadow-lg rounded-lg overflow-hidden transition transform "
              >
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                /> */}
               
               {/* <div className="w-[100%]  rounded-md overflow-hidden flex-grow-0 relative">
  <Image
    src={project.image}
    alt={project.title}
    
   height={680}
   width={1380}
    className="rounded-md"
  />
</div> */}


   
                {/* <div id="ProjectContent" className=" p-6 absolute bottom-12 left-6 hidden sm:flex flex-col">
                <button className="mt-6 px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition md:text-base md:px-4 md:py-2 md:w-[70%]">
  {project.category}
</button>


                  <h3
  className={`w-[40vh] tracking-[-1.62px] mt-4 mb-0 text-[54px] font-bold leading-[120%]  ${
    index === 0 ? "text-white" : "text-black"
  }`}
>
  {project.title}
</h3>

                </div> */}



                {/* <div id="ProjectContent2" className="   md:hidden">
                  <button className=" bg-[#04081C] px-2 py-1 text-white text-xs font-medium rounded-full hover:bg-blue-800 transition">
                    {project.category}
                  </button>
                  <h3
  className={`font-bold text-sm  ${
    index === 0 ? "text-white" : "text-black"
  }`}
>
  {project.title}
</h3>

                </div> */}


                
              </a>
            ))}
          </div>




          



        </div>
      </section>



{/* <div className="flex justify-center" style={{ backgroundColor: '#04081C' }}>
<div className="md:flex  bg-[#04081C] text-white px-2 max-w-screen-xl md:py-8 space-y-8 gap-x-2  mx-auto">
       
        <div className="w-full md:w-1/3 px-4" id="working">

          <button className="mt-6 px-6 py-3 bg-[#04081C] border text-white text-lg font-medium rounded-full  transition">
            WORKING METHODS
          </button>

<Image src="/cube-abstract-shape.png" width={250} height={290} alt="square" className="mt-12" />

        </div>

     
        <div className=" flex flex-col gap-8 w-2/3">
       
          <h1 className={`text-md px-3 md:text-3xl font-bold leading-tight w-full md:w-[80%]  ${rethinkSans.className}`} id="drivenn">
          Driven by creativity and powered
by expertise, our team brings 
fresh ideas and top-tier skills 
to every project we touch.
          </h1>
          <div className=" md:flex gap-8  w-full ">

            <div className="space-y-6 md:w-2/3 w-full ">
              <div className="bg-[#04081C] text-white flex flex-col items-start py-10">
                <div className="relative pl-4 md:pl-10" id="pointss">
                 
                    <div  id="creative-projects" className={` duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ color: "rgb(190, 191, 195)" }}>
                      <div className=" flex items-center gap-x-2" id="pointtitle">
                        <div className=" rounded-full  h-3 w-3" style={{ backgroundColor: "rgb(126, 126, 126)" }}                        ></div>
                        <div className="font-semibold text-white">
                        WE DELIVER CREATIVE PROJECTS</div>
                      </div>
                      <div className="  border-l border-dashed h-16 ml-1 mb-1" style={{ borderColor: "rgb(126, 126, 126)" }} id="pointsubtitle"                     >
                        <div className="text-sm px-3">OUR DIGITALISED DESIGN TEAM TO ELEVATE</div>
                      </div>

                      <div className=" flex items-center gap-x-2" id="pointtitleb">
                        <div className=" rounded-full  h-3 w-3" style={{ backgroundColor: "rgb(126, 126, 126)" }}                        ></div>
                        <div className="font-semibold">
                        WE DELIVER CREATIVE PROJECTS</div>
                      </div>
                      <div className="  border-l border-dashed h-16 ml-1 mb-1" style={{ borderColor: "rgb(126, 126, 126)" }} id="pointsubtitleb"                     >
                        <div className="text-sm px-3">OUR DIGITALISED DESIGN TEAM TO ELEVATE</div>
                      </div>


                      <div className=" flex items-center gap-x-2" id="pointtitlec">
                        <div className=" rounded-full  h-3 w-3" style={{ backgroundColor: "rgb(126, 126, 126)" }}                        ></div>
                        <div className="font-semibold">
                        WE DELIVER CREATIVE PROJECTS</div>
                      </div>
                      <div className="  border-l border-dashed h-16 ml-1 mb-1" style={{ borderColor: "rgb(126, 126, 126)" }} id="pointsubtitlec"                     >
                        <div className="text-sm px-3">OUR DIGITALISED DESIGN TEAM TO ELEVATE</div>
                      </div>
                    </div>
               
                </div>
              </div>
            </div>

            <div className=" md:w-1/3 w-full" id="workimg">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-800 rounded-2xl md:flex flex-col justify-between hidden relative">
            
                <Image
                  className="w-full h-full object-contain"
                  src='/img.png'
                  alt="Cash GIF"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      
      </div>
</div> */}



      

    </>
  );
};

export default Showcase;