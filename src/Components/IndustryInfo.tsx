import React from 'react';
// import './style.css';
import ReviewCounter from '../Components/ReviewCounter';
import ReviewCounter2 from '../Components/ReviewCounter2';
import fazal2 from '../../images/wasif2.png';
import Image from 'next/image';
import { Instrument_Serif } from "next/font/google";
const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  weight: ["400"], 
  style: "italic" // ✅ Correct way to load italic
});

const IndustryInfo = () => {
  return (

    <>

      <section className=" py-8 w-full shadow-md bg-gradient-to-r py-[5rem] from-white to-gray-400 shadow-md px-4 ">
        <div className="m-auto text-[#04081C] max-w-screen-xl">
          <div className="flex justify-between">
            <div className="review-left-col-wrapper"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}>
              <h1 className="text-4xl md:text-6xl font-bold text-[#04081C] leading-tight">BUNDLED WITH</h1>
              <span className={`text-4xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className} text-[120px] leading-[83px] `}><i>industry experience</i></span>
            </div>

            <div className="flex justify-end">
              <p className="text-  w-52 text-[#04081C]"
                style={{
                  opacity: 1,
                  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}>
                OUR EXCELLENT TEAM AND PROFESSIONAL TO TAKE CARE OF YOUR BRAND STYLE
              </p>
            </div>
          </div>
          <div className='md:flex w-full gap-x-2 pt-6 mt-6 '>
            <div className='w-full md:w-2/3 gap-x-3'>
              <div className='md:flex w-full gap-x-3 '>
                <div className='flex flex-col w-full md:w-2/3  mt-4 rounded-md border border-gray-400 shadow p-6  gap-x-2'>
                  <div className="text-[#04081C]">
                    Clients
                    <br />
                    Satisfaction
                  </div>
                  <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
                    250+
                  </h2>
                </div>
                <div className='flex flex-col w-full md:w-1/3  mt-4 rounded-md border p-6 border-gray-400 shadow gap-x-2'>
                  <div className="text-[#04081C]">
                    Years of the
                    <br />
                    experiences
                  </div>
                  <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
                    250+
                  </h2>
                </div>

              </div>
              <div className='md:flex w-full gap-x-3 text-[#04081C]'>
                <div className='md:flex flex-col w-full mt-4 md:w-2/5 rounded-md border p-6 border-gray-400 shadow gap-x-2'>
                  <div className="">
                    Clients
                    <br />
                    Satisfaction
                  </div>
                  <h2 className="md:text-6xl text-xl h-28 mt-6 pt-6 text-[#04081C]">
                    250+
                  </h2>
                </div>
                <div className='md:flex flex-col w-full mt-4 md:w-3/5  border rounded-md border p-6 border-gray-400 shadow gap-x-2'>
                  <div className="">
                    Clients
                    <br />
                    Satisfaction
                  </div>
                  <h2 className="md:text-6xl text-[#04081C] text-xl h-28 mt-6 pt-6">
                    250+
                  </h2>
                </div>
              </div>

            </div>
            <div className='flex w-full md:w-1/3 gap-x-2  mt-4 rounded-md'>
              <Image
                src={fazal2}
                alt="project.title"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </div>

        </div>
      </section>
   
    </>

  );
};

export default IndustryInfo;
