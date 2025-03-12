"use client";



import React, { useState } from 'react'

import { Instrument_Serif } from "next/font/google";
import DarkNav from '../navbar/DarkNav';


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });



function Page() {


    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        Subject: "",
        address: ""
    });
    const [errorsP2, setErrorsP2] = useState('');

    const handleInputChange = (e) => {
        // setsecondPersonIsexist(null)
        // setErrorsP2(null)
        const { name, value } = e.target;
        setErrorsP2(prevState => ({
            ...prevState,
            [name]: null,
        }));
        setFormData(prevState => ({
            ...prevState,
            [name]: value,

        }));

    };

    return (
        <>   
        <div className='w-full relative bg-[#04081C]'>
            <DarkNav/>
        <section className="w-full relative bg-[#04081C] to-gray-100 py-20  flex flex-col  items-center justify-between">
            <div className="max-w-screen-xl justify-between w-full m-auto">
            <div className="w-full items-center flex flex-col py-[2rem] text-center -mt-4 leading-9">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-9">
                        GET IN TOUCH WITH</h1>
                    <span className={`text-5xl md:text-7xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className}  `}>our support</span>
                   
                </div>
                < form className={` m-auto md:w-1/2 flex flex-wrap p-2 pt-6 mt-[1rem]  rounded-b-md`}>
                    <div className={` w-full md:flex flex-wrap   rounded-b-md border-0 pt-2 text-white`}>
                        <div className='md:w-1/2 text-left pr-2   justify-between'>
                            <p className={" text-sm font-medium pb-1  "} >First Name</p>
                            <input type='text' name='firstname'
                                onChange={(e) => { handleInputChange(e) }}
                                value={formData.firstname}
                                placeholder='First Name'
                                className={' shadow border  w-full rounded    px-2 py-3 text-sm  focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100 ' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />
                            {/* {errorsP2.firstname && <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{errorsP2.firstname}</span>} */}
                        </div>

                        <div className='md:w-1/2 text-left  pr-2 pt-4  justify-between'>
                            <p className={"text-sm font-medium  pb-1  "} >Last Name</p>
                            <input type='text' name='lastname'
                                onChange={(e) => handleInputChange(e)}
                                // disabled={secondPersonIsexist ? true : false}
                                value={formData.lastname}
                                placeholder='Last Name'
                                className={' shadow border w-full rounded  px-2 py-3 text-sm  focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                            {/* {errorsP2.lastname && <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{errorsP2.lastname}</span>} */}
                        </div>

                        <div className='md:w-1/2 text-left  pr-2  pt-4   justify-between'>
                            <p className={"text-sm font-medium   pb-1 "} >Email</p>
                            <input type="email"
                                name="email"
                                onChange={(e) => handleInputChange(e)}
                                placeholder='Email'
                                value={formData.email}
                                className={' shadow border w-full rounded  px-2 py-3 text-sm  focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                        </div>
                        <div className='md:w-1/2 text-left  pr-2   pt-4 justify-between'>

                            <p className={"text-sm font-medium  pb-1  "} >Phone</p>
                            <input type='phone' name='phone'
                                onChange={(e) => handleInputChange(e)}
                                placeholder='Phone'
                                value={formData.phone}
                                className={' shadow border w-full rounded   px-2 py-3 text-sm  focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                        </div>
                        <div className='md:w-1/2 text-left  pr-2  pt-4   justify-between'>

                            <p className={"text-sm font-medium   pb-1 "} >Subject</p>
                            <input type='subject' name='subject'
                                onChange={(e) => handleInputChange(e)}
                                placeholder='Subject'
                                value={formData.Subject}
                                className={' shadow border w-full rounded   px-2 py-3 text-sm  focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                        </div>




                        <div className='md:w-1/2 text-left  pr-2  pt-4   justify-between'>
                            <p className={" text-sm font-medium  pb-1  "} >Address</p>
                            <input type='text' name='medicarenumber'
                                onChange={(e) => handleInputChange(e)}
                                value={formData?.address}
                                placeholder='Address'
                                className={' shadow border w-full rounded   px-2 py-3 text-sm  focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />
                        </div>

                        <button className="w-full mt-6 px-6 border py-3 text-[#04081C] hover:text-white rounded-md bg-white text-lg font-medium hover:bg-[#04081C] transition">
                           <span className='text-[15px] '> SEND  MESSAGE </span>
                        </button>

                    </div>

                </form>

            </div>



        </section>
        </div>

        </>
    )
}

export default Page