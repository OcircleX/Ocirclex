import Image from 'next/image'
import React from 'react'
import img2 from '../../../images/2.png'
import img1 from '../../../images/1.png'
import img3 from '../../../images/3.png'
import Header from '../navbar/header'
import DarkNav from '@/app/navbar/DarkNav'
import { Instrument_Serif } from "next/font/google";


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });

function page() {


    const team = [
        {
            title: "FAZAL BASIT",
            category: "CEO & founder",
            image:
                "/fazal.png",
            link: "/projects/dynamic-structures",
        },
        {
            title: "Malik Iqbal",
            category: "Senior Software Engineer",
            image:
            "/wasif.png",
            link: "/projects/visionary-framework",
        },
        {
            title: "FAZAL WASIF",
            category: "CREATIVE DIRECTOR & Co-founder",
            image:
            "/wasif.png",
            link: "/projects/design-revolution",
        },
        {
            title: "MIFTAHULLAH KHAN",
            category: "FRONTEND DEVELOPER",
            image:
            "/Miftah.png",
            link: "/projects/design-revolution",
        },
        {
            title: "Faisal KHAN",
            category: "BACKEND DEVELOPER",
            image:
            "/wasif.png",
            link: "/projects/design-revolution",
        },
    ];


    return (
        <>   
       <div>
        <DarkNav/>
       <section className="w-full relative bg-[#04081C] to-gray-100 py-20  flex flex-col  items-center justify-between">
            <div className="max-w-screen-xl justify-between w-full m-auto ">
                <div className="w-full items-center flex flex-col py-[2rem]">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        BUILDING</h1>
                    <span className={`text-4xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className} text-[120px] leading-[83px] `}>beyond limits</span>
                    <button className="mt-6 px-6 border py-3 bg-[#04081C] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition">
                        Get Started
                    </button>
                </div>
                <div className="w-full max-w-screen-xl mx-auto flex justify-between gap-4 items-center pt-6 h-[440px] overflow-hidden px-4">
  <div className="w-[30%] h-full rounded-md overflow-hidden flex-grow-0">
    <img src={img2.src} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="w-[40%] h-full rounded-md overflow-hidden flex-grow-0">
    <img src={img1.src} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="w-[30%] h-full rounded-md overflow-hidden flex-grow-0">
    <img src={img3.src} alt="" className="w-full h-full object-cover" />
  </div>
</div>
                <div className='flex   w-full justify-between items-start  py-[4rem] px-4'>
                    <button className="mt-6 border px-6 py-3 bg-[#04081C] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition">
                        CREATIVE STUDIO
                    </button>
                    <label className='text-3xl w-[65%] text-white px-4 tracking-normal'>

                        OUR APPROACH COMBINES BOLD AND THE
                        CREATIVITY THAT DRIVES AS WE ARE HERE TO
                        ELEVATE YOUR BRAND
                    </label>
                </div>
            </div>

            <div className=" py-[4rem] px-4  w-full shadow-md bg-gradient-to-r from-white to-gray-200 shadow-md  ">
                <div className="m-auto text-[#04081C] max-w-screen-xl">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h1 className="text-4xl md:text-6xl font-bold text-[#04081C] leading-tight">THE CORE OF</h1>
                            <span className={`text-4xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className} text-[120px] leading-[83px] `}><i>our identity</i></span>
                        </div>

                        <div className="flex justify-end">
                            <button className=" px-6 border py-3 border-[#171D3F] rounded-full text-[#04081C] text-lg font-medium hover:bg-blue-800 transition">
                                SEE OUR SERVICES
                            </button>
                        </div>
                    </div>
                    <div className='md:flex w-full gap-x-2 pt-6 mt-6 justify-end'>
                        <div className='flex w-full md:w-1/3 gap-x-2 hidden mt-4 rounded-md'>

                        </div>
                        <div className='w-full md:w-2/3 gap-x-3'>
                            <div className='md:flex w-full gap-x-3 '>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">1</h2>
                                    <div className="text-[#04081C]">Creativity</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </div>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
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
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#04081C]">3</h2>
                                    <div className="text-[#04081C]">Creativity</div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.</div>
                                </div>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
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

            <div className="max-w-screen-xl justify-between w-full m-auto px-4">
                <div className="w-full py-[4rem] items-center md:flex pt-6 mt-6 justify-between">
                    <div className=''>
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">MEET </h1>
                        <span className={`text-4xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className} text-[120px] leading-[83px] `}>Our Team</span>
                    </div>

                    {/* <button className="mt-6 px-6 border py-3 bg-[#04081C] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition">
                        Our Team
                    </button> */}
                </div>
                {/* <div className='flex w-full  scrollbar  overflow-auto  justify-between items-center pt-6 gap-x-2 h-64 '>
                    {team.map((x) => (
                        <div className='flex flex-col w-1/3 justify-between items-center border h-full rounded-md'>
                            <img src={x.image} alt={x.title} className="w-full h-full object-cover" />
                            <div className='w-full px-2 flex justify-between items-center'>
                                <div className='py-2'>
                                    <div className="text-white">{x.title}</div>
                                    <div className="text-white text-[0.7rem]">{x.category}</div>
                                </div>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3338_132101)">
                                        <g clip-path="url(#clip1_3338_132101)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03125 4.89746C6.03125 6.00203 5.13582 6.89746 4.03125 6.89746C2.92668 6.89746 2.03125 6.00203 2.03125 4.89746C2.03125 3.79289 2.92668 2.89746 4.03125 2.89746C5.13582 2.89746 6.03125 3.79289 6.03125 4.89746ZM6.03125 9.39746V22.8975H2.03125V9.39746H6.03125ZM9.03125 9.39746H13.0312V10.2389C13.6568 10.0178 14.33 9.89746 15.0312 9.89746C18.3449 9.89746 21.0312 12.5838 21.0312 15.8975V22.8975H17.0312V15.8975C17.0312 14.7929 16.1358 13.8975 15.0312 13.8975C13.9267 13.8975 13.0312 14.7929 13.0312 15.8975V22.8975H9.03125V15.8975V9.39746Z" fill="#A3A5AA" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3338_132101">
                                            <rect width="24" height="24" fill="white" transform="translate(0.03125 0.897461)" />
                                        </clipPath>
                                        <clipPath id="clip1_3338_132101">
                                            <rect width="24" height="24" fill="white" transform="translate(0.03125 0.897461)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="flex w-full overflow-auto  justify-between items-center  scrollbar scrollbar-thin pt-2    gap-x-4 ">
                    {team.map((x) => (
                        <div key={x.title} className="flex flex-col  min-w-[25%] justify-between items-center h-full rounded-lg">
                            <img src={x.image} alt={x.title} className="w-full  rounded-md object-cover" />
                            <div className="w-full px-2 flex justify-between items-center pb-2">
                                <div className="py-2">
                                    <div className="text-white">{x.title}</div>
                                    <div className="text-white text-[0.7rem]">{x.category}</div>
                                </div>
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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

                <div className="w-full items-center md:flex pt-[4rem] mt-6 justify-between">
                    <div className=''>
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">WHAT WE</h1>
                        <span className={`text-4xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className} text-[120px] leading-[83px] `}>excel at</span>
                    </div>
                    <button className="mt-6 px-6 border py-3 bg-[#04081C] rounded-full text-white text-md font-medium hover:bg-blue-800 transition">OUR SKILS {' >'}</button>
                </div>
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight  w-11/12">WEB DESIGN</h1>
                    <label className="text-4xl md:text-2xl text-gray-400">95%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[95%] " ></div>
                </div>
                {/* <div className='border-b w-[95%] pt-1'></div> */}
                <div className="w-full items-center md:flex pt-6 mt-2 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight  ">DEVELOPMENT</h1>
                    <label className="text-4xl md:text-2xl text-gray-400">100%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[100%]" ></div>
                </div>
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight ">UI/UX CONCEPT</h1>
                    <label className="text-4xl md:text-2xl text-gray-400">100%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[100%]" ></div>
                </div>
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight  ">BRANDING</h1>
                    <label className="text-4xl md:text-2xl text-gray-400 ">90%</label>
                </div>
                <div className="w-full bg-[#484848] rounded-full mt-6 h-15 ">
                    <div className="bg-gray-400 h-0.5 rounded-full  w-[90%]" ></div>
                </div>

            </div>
        </section>
       </div>

        </>
    )
}

export default page