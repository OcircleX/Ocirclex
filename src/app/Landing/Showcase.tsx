"use client";

import { useEffect, useState } from "react";
import image from '../../../images/img.png'
import Image from "next/image";
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
  const projects = [
    {
      title: "Task Management",
      category: "Web dev & UI Design",
      image:
        "https://cdn.prod.website-files.com/6757eead5dc653562d488050/67585c225994163eddbaa9a0_a-man-standing-on-the-street-looking-at-his-cell-phone-SVwXm_hX4Wg.jpg",
      link: "/projects/dynamic-structures",
    },
    {
      title: "Fitness  Application",
      category: "Mobile App dev & UI Design",
      image:
        "https://cdn.prod.website-files.com/6757eead5dc653562d488050/67585c45ee4aa7c49913ffa5_a-city-street-with-tall-buildings-and-a-clock-tower-Z9xPTZfRvNw.jpg",
      link: "/projects/visionary-framework",
    },
    {
      title: "Hospital Management System",
      category: "Web dev & UI Design",
      image:
        "https://cdn.prod.website-files.com/6757eead5dc653562d488050/67585c6109c882e84710569e_a-room-with-three-circular-windows-and-a-couch-nqBD2KSAAoU.jpg",
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
      <section className="py-16 px-2  w-full bg-[#04081C]">
        <div className="w-full mx-auto px-6 max-w-screen-xl">
          <div className="md:flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">
              OUR CREATIVE <br />
              <span className="text-[#7BB668] font-normal"><i>showcase</i></span>
            </h2>
            <button className="mt-6 px-6 flex gap-x-2 py-3 bg-[#171D3F] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition">
              ALL CASE STUDIES
              <img
                src="https://cdn.prod.website-files.com/6757e4a58bda42b7389bc8e0/67585a489813ca576fb1579b_direction-right%202.svg"
                alt="Arrow Right"
                className="w-5"
              />
            </button>
          </div>

          <div className="relitive gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="block h-full bg-white shadow-lg rounded-lg overflow-hidden transition transform mb-6"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-6 absolute bottom-12 left-6">
                  <button className="mt-6 px-6 py-3 bg-[#171D3F] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition">
                    {project.category}
                  </button>
                  <h3 className="text-white w-[40vh] tracking-[-1.62px] mt-0 mb-0 text-[54px] font-bold leading-[120%]">
                    {project.title}
                  </h3>

                </div>
              </a>
            ))}
          </div>
        </div>
      </section>







      <div className="md:flex  bg-black text-white px-2  md:py-8 space-y-8 gap-x-2 max-w-screen-xl mx-auto">
        {/* Left Section: Button */}
        <div className="w-full md:w-1/3">

          <button className="mt-6 px-6 py-3 bg-[#171D3F] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition">
            WORKING METHODS
          </button>
        </div>

        {/* Right Section: Content */}
        <div className=" flex flex-col gap-8 w-2/3">
          {/* Heading */}
          <h1 className="text-md px-3 md:text-3xl font-bold leading-tight w-full md:w-[80%]">
            OUR TEAM OF CREATIVE PROFESSIONAL
            INFUSES CREATIVITY AND EXPERTISES
            INTO EVERY PROJECT WE UNDERTAKE.
          </h1>
          <div className=" md:flex gap-8  w-full ">

            <div className="space-y-6 md:w-2/3 w-full ">
              <div className="bg-black text-white flex flex-col items-start py-10">
                <div className="relative pl-4 md:pl-10">
                  {items.map((item, index) => (
                    <div id="creative-projects" className={` duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ color: "rgb(190, 191, 195)" }}>
                      <div className=" flex items-center gap-x-2">
                        <div className=" rounded-full  h-3 w-3" style={{ backgroundColor: "rgb(126, 126, 126)" }}                        ></div>
                        <div className="font-semibold">{item.title}</div>
                      </div>
                      <div className="  border-l border-dashed h-16 ml-1 mb-1" style={{ borderColor: "rgb(126, 126, 126)" }}                      >
                        <div className="text-sm px-3">{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className=" md:w-1/3 w-full">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-800 rounded-2xl flex flex-col justify-between ">
                {/* <img src={image} alt="test" className="w-full h-full object-contain" /> */}
                <Image
                  className="w-full h-full object-contain"
                  src={image}
                  alt="Cash GIF"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bullet Points */}
      </div>

    </>
  );
};

export default Showcase;
