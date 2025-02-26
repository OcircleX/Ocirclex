import Image from 'next/image'
import React from 'react'
import img2 from '../../../images/2.png'
import img1 from '../../../images/1.png'
import img3 from '../../../images/3.png'
import fazal from '../../../images/fazal.png'
function page() {
    return (
        <>    <section className="w-full relative bg-[#171D3F] to-gray-100 py-20  flex flex-col  items-center justify-between">
            <div className="max-w-screen-xl justify-between w-full m-auto">
                <div className="w-full items-center flex flex-col">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        BUILDING</h1>
                    <span className="text-4xl md:text-6xl text-green-500 italic font-serif font-thin">beyond limits</span>
                    <button className="mt-6 px-6 border py-3 bg-[#171D3F] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition">
                        Get Started
                    </button>
                </div>
                <div className='flex w-full justify-between items-center pt-6 gap-x-2 h-64 '>
                    <div className='flex w-1/3 justify-between items-center pt-6 border h-full rounded-md'>
                        <Image src={img1} className=' w-full h-full' />
                    </div>
                    <div className='flex w-1/3 justify-between items-center pt-6 border h-full rounded-md'>
                        <Image src={img2} className=' w-full h-full' />

                    </div>
                    <div className='flex w-1/3 justify-between items-center pt-6 border h-full rounded-md'>
                        <Image src={img3} className=' w-full h-full' />

                    </div>
                </div>
                <div className='flex w-full justify-between items-center py-6'>
                    <button className="mt-6 border px-6 py-3 bg-[#171D3F] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition">
                        CREATIVE STUDIO
                    </button>
                    <label className='text-md w-1/2 text-white'>

                        OUR APPROACH COMBINES BOLD AND THE
                        CREATIVITY That DRIVES AS WE ARE HERE TO
                        ELEVATE YOUR BRAND
                    </label>
                </div>
            </div>


            <div className=" py-8 w-full shadow-md bg-gradient-to-r from-white to-gray-400 shadow-md  ">
                <div className="m-auto text-[#171D3F] max-w-screen-xl">
                    <div className="flex justify-between items-center">
                        <div className=""
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-[#171D3F] leading-tight">THE CORE OF</h1>
                            <span className="text-4xl md:text-6xl text-[#7BB668] italic font-serif font-thin"><i>our identity</i></span>
                        </div>

                        <div className="flex justify-end">
                            <button className=" px-6 border py-3 border-[#171D3F] rounded-full text-[#171D3F] text-lg font-medium hover:bg-blue-800 transition">
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
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#171D3F]">
                                        1
                                    </h2>
                                    <div className="text-[#171D3F]">
                                        Creativity
                                    </div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </div>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#171D3F]">
                                        1
                                    </h2>
                                    <div className="text-[#171D3F]">
                                        Collaboration
                                    </div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.
                                    </div>
                                </div>

                            </div>
                            <div className='md:flex w-full gap-x-3 text-[#171D3F]'>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#171D3F]">
                                        3
                                    </h2>
                                    <div className="text-[#171D3F]">
                                        Creativity
                                    </div>
                                    <div className="text-gray-400">
                                        Creativity is at the heart of our agency. We strive to
                                        innovate, think differently, and push the boundaries
                                        of design to bring bold and inspiring ideas to life.</div>
                                </div>
                                <div className='flex flex-col w-full md:w-1/2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
                                    <h2 className="md:text-4xl text-xl  py-3 text-[#171D3F]">
                                        4
                                    </h2>
                                    <div className="text-[#171D3F]">
                                        Growth
                                    </div>
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

            <div className="max-w-screen-xl justify-between w-full m-auto">
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <div className=''>
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            MEET </h1>
                        <span className="text-4xl md:text-4xl text-green-500 italic font-serif font-thin">Our Team</span>
                    </div>

                    {/* <button className="mt-6 px-6 border py-3 bg-[#171D3F] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition">
                        Our Team
                    </button> */}
                </div>
                <div className='flex w-full  scrollbar  overflow-auto  justify-between items-center pt-6 gap-x-2 h-64 '>
                    <div className='flex flex-col w-1/3 justify-between items-center border h-full rounded-md'>
                        <Image src={fazal} className=' w-full h-full object-cover' />
                        <div className='w-full px-2 flex justify-between items-center'>
                            <div className='py-2'>
                                <div className="text-white">FAZAL BASIT</div>
                                <div className="text-white text-[0.7rem]">CEO & founder</div>
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
                    <div className='flex flex-col w-1/3 justify-between items-center border h-full rounded-md'>
                        <Image src={fazal} className=' w-full h-full object-cover' />
                        <div className='w-full px-2 flex justify-between items-center'>
                            <div className='py-2'>
                                <div className="text-white">FAZAL BASIT</div>
                                <div className="text-white text-[0.7rem]">CEO & founder</div>
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
                    <div className='flex flex-col w-1/3 justify-between items-center border h-full rounded-md'>
                        <Image src={fazal} className=' w-full h-full object-cover' />
                        <div className='w-full px-2 flex justify-between items-center'>
                            <div className='py-2'>
                                <div className="text-white">FAZAL BASIT</div>
                                <div className="text-white text-[0.7rem]">CEO & founder</div>
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
                    <div className='flex flex-col w-1/3 justify-between items-center border h-full rounded-md'>
                        <Image src={fazal} className=' w-full h-full object-cover' />
                        <div className='w-full px-2 flex justify-between items-center'>
                            <div className='py-2'>
                                <div className="text-white">FAZAL BASIT</div>
                                <div className="text-white text-[0.7rem]">CEO & founder</div>
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

                </div>


                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <div className=''>
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">WHAT WE</h1>
                        <span className="text-4xl md:text-4xl text-green-500 italic font-serif font-thin">excel at</span>
                    </div>

                    <button className="mt-6 px-6 border py-3 bg-[#171D3F] rounded-full text-white text-lg font-medium hover:bg-blue-800 transition">OUR SKILS {' >'}</button>
                </div>
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight  w-11/12">WEB DESIGN</h1>
                    <label className="text-4xl md:text-4xl text-green-500 italic font-serif font-thin">95%</label>
                </div>
                <div className='border-b w-[95%] pt-1'></div>
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight  ">DEVELOPMENT</h1>
                    <label className="text-4xl md:text-4xl text-green-500 italic font-serif font-thin">100%</label>
                </div>
                <div className='border-b w-[100%] pt-1'></div>
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight ">UI/UX CONCEPT</h1>
                    <label className="text-4xl md:text-4xl text-green-500 italic font-serif font-thin">100%</label>
                </div>
                <div className='border-b w-[100%] pt-1'></div>
                <div className="w-full items-center md:flex pt-6 mt-6 justify-between">
                    <h1 className="text-2xl  font- text-white leading-tight  ">BRANDING</h1>
                    <label className="text-4xl md:text-4xl text-green-500 italic font-serif font-thin">90%</label>
                </div>
                <div className='border-b w-[90%] pt-1'></div>

            </div>
        </section>

        </>
    )
}

export default page