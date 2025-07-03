import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";

const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });
  
  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Adjust weights as needed
  });



const OurServices = () => {

  const services = [
    {
      title: "Web App Development",
      link: "/web"
    },
    {
      title: "Mobile App Development",
      link: "/mobile"
    },
    {
      title: "Branding and Design",
      link: "/design"
    },
    {
      title: "Team as a Service (TaaS)",
      link: "/ourteam"
    }
  ];
  


  return (
    <section className="pt-16   w-full "
    
    style={{
        backgroundImage: `url(${'./Background.png'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="w-full mx-auto px-10 md:px-28 py-8 max-w-screen-xl relative">

        <div className="md:flex justify-between items-center mb-12  " id="creativee">
            <h2 className="text-4xl font-bold   text-[#04081C]
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
              ><i>services</i></span>
            </h2>
         
          </div>






          <div className='w-full  flex max-w-screen-xl    justify-center mt-12'>
  

    <div className='w-full md:w-[100%] flex flex-col space-y-4 md:space-y-8  overflow-hidden   ' id="servv">

    {services.map((service, index) => (
 
    <Link href={service.link}>
    <div
  key={index}
  className="group w-full flex text-black items-center justify-between py-3 cursor-pointer hover:bg-[#04081C] hover:text-white md:px-5 transition-all duration-500 rounded-lg"
  style={{
    fontFamily: rethinkSans.style.fontFamily || "serif",
  }}
>
  <h1 className="text-2xl md:text-3xl leading-tight capitalize">{service.title}</h1>

  {/* Show on normal */}
  <GoArrowUpRight className="text-2xl block group-hover:hidden transition-all duration-500 "  />

  {/* Show on hover */}
  <GoArrowRight className="text-2xl hidden group-hover:block transition-all duration-500 " />
</div>

    </Link>

  ))}

<div >
<Link href="/services">

<button className="my-4 px-3 w-fit  md:px-6 flex gap-x-2 py-3 border     bg-black
 text-white text-lg font-medium rounded-full hover:bg-white hover:text-black  border-black transition  justify-between items-center z-50 "
            style={{
              fontSize: "1rem",
            }}
            id="casestudies"
            >
EXPLORE OUR SERVICES           <svg className='' width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_233_16584)">
<g clip-path="url(#clip1_233_16584)">
<path d="M1.6665 5.65234L4.33317 8.98567L1.6665 12.319" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_233_16584">
<rect width="16" height="16" fill="white" transform="translate(-5 0.986328)"/>
</clipPath>
<clipPath id="clip1_233_16584">
<rect width="16" height="16" fill="white" transform="translate(-5 0.986328)"/>
</clipPath>
</defs>
</svg>

            </button>
</Link>

</div>

   


</div>


    <div>

    </div>

</div>

<Image src="/gradient-glass.png" width={100} height={100} alt='glass' className='absolute md:left-0 bottom-1  -left-8 z-10'/>
            </div>



            </section>
  )
}

export default OurServices
