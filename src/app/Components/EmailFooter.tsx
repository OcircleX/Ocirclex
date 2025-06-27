
import React from 'react'
import { Instrument_Serif } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import Image from 'next/image';


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });
  
  const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "700"], // Adjust weights as needed
  });
const EmailFooter = () => {
  return (
  <div className='w-full flex justify-center bg-[#04081C] relative h-[700px]'>
      <div className='w-full max-w-screen-xl  text-white  py-24 px-4  '>
      
    
      <div className="md:flex   w-full mb-12 " id="creativee">
            <h2 className="text-4xl font-bold text-white ">
              Let's Start <br />
              <span className="showcase" 
               style={{
               
                fontWeight: "200",
                color: "#7BB668",
                fontStyle: "italic",
                lineHeight: "83px",
                fontFamily: instrumentSerif.style.fontFamily || "serif",
              }}
              ><i>WORK TOGETHER</i></span>
            </h2>
         
          </div>


            
          <form className="flex flex-col space-y-4 w-full max-w-lg ">
  <label htmlFor="email" className="text-sm font-medium text-white">
    Email 
  </label>
  
  <input
    type="email"
    id="email"
    name="email"
    placeholder="you@example.com"
    className="border border-gray-300  px-4 py-2  bg-transparent rounded-full"
    required
  />

  <button
    type="submit"
    className=" rounded-full text-black bg-white py-2 px-4  "
  >
    SEND MESSAGE
  </button>
</form>

      

 <div className='absolute right-0 top-4'>
 <svg width="435" height="588" viewBox="0 0 435 588" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_165_4362" fill="white">
<path d="M349.644 186.778L257.174 6.75439H92.8872L294.733 399.72H134.528L0.965332 587.221H165.256L296.445 403.053L391.042 587.221H555.33L350.107 187.682H513.291L646.853 0.181152H482.562L349.644 186.778Z"/>
</mask>
<path d="M349.644 186.778L351.273 187.938L349.366 190.615L347.865 187.692L349.644 186.778ZM257.174 6.75439V4.75439H258.395L258.953 5.84059L257.174 6.75439ZM92.8872 6.75439L91.1082 7.66819L89.6115 4.75439H92.8872V6.75439ZM294.733 399.72L296.512 398.806L298.009 401.72H294.733V399.72ZM134.528 399.72L132.899 398.56L133.497 397.72H134.528V399.72ZM0.965332 587.221V589.221H-2.91486L-0.663635 586.061L0.965332 587.221ZM165.256 587.221L166.885 588.382L166.287 589.221H165.256V587.221ZM296.445 403.053L294.816 401.893L296.722 399.216L298.224 402.139L296.445 403.053ZM391.042 587.221V589.221H389.82L389.262 588.135L391.042 587.221ZM555.33 587.221L557.109 586.307L558.605 589.221H555.33V587.221ZM350.107 187.682L348.328 188.596L346.831 185.682H350.107V187.682ZM513.291 187.682L514.919 188.842L514.321 189.682H513.291V187.682ZM646.853 0.181152V-1.81885H650.733L648.482 1.34152L646.853 0.181152ZM482.562 0.181152L480.933 -0.979211L481.531 -1.81885H482.562V0.181152ZM349.644 186.778L347.865 187.692L255.395 7.6682L257.174 6.75439L258.953 5.84059L351.423 185.864L349.644 186.778ZM257.174 6.75439V8.75439H92.8872V6.75439V4.75439H257.174V6.75439ZM92.8872 6.75439L94.6663 5.8406L296.512 398.806L294.733 399.72L292.954 400.634L91.1082 7.66819L92.8872 6.75439ZM294.733 399.72V401.72H134.528V399.72V397.72H294.733V399.72ZM134.528 399.72L136.157 400.881L2.5943 588.382L0.965332 587.221L-0.663635 586.061L132.899 398.56L134.528 399.72ZM0.965332 587.221V585.221H165.256V587.221V589.221H0.965332V587.221ZM165.256 587.221L163.627 586.061L294.816 401.893L296.445 403.053L298.074 404.214L166.885 588.382L165.256 587.221ZM296.445 403.053L298.224 402.139L392.821 586.307L391.042 587.221L389.262 588.135L294.666 403.967L296.445 403.053ZM391.042 587.221V585.221H555.33V587.221V589.221H391.042V587.221ZM555.33 587.221L553.551 588.135L348.328 188.596L350.107 187.682L351.886 186.768L557.109 586.307L555.33 587.221ZM350.107 187.682V185.682H513.291V187.682V189.682H350.107V187.682ZM513.291 187.682L511.662 186.522L645.224 -0.979213L646.853 0.181152L648.482 1.34152L514.919 188.842L513.291 187.682ZM646.853 0.181152V2.18115H482.562V0.181152V-1.81885H646.853V0.181152ZM482.562 0.181152L484.191 1.34152L351.273 187.938L349.644 186.778L348.015 185.617L480.933 -0.979211L482.562 0.181152Z" fill="#7BB668" mask="url(#path-1-inside-1_165_4362)"/>
</svg>

 </div>


   


    </div>
  </div>
  )
}

export default EmailFooter
