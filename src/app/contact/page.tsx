"use client";


import Image from 'next/image'
import React, { useState } from 'react'
import img2 from '../../../images/2.png'
import img1 from '../../../images/1.png'
import img3 from '../../../images/3.png'
import fazal from '../../../images/fazal.png'
import { Instrument_Serif } from "next/font/google";
import DarkNav from '../navbar/DarkNav';


const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });



function page() {


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
                <div className="w-full items-center flex flex-col">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        GET IN TOUCH WITH</h1>
                    <span className={`text-4xl md:text-6xl font-extralight text-[#7BB668] italic  ${instrumentSerif.className} text-[120px] leading-[83px] `}>our support</span>

                </div>
                < form className={` m-auto w-1/2 flex flex-wrap p-2 pt-6 mt-[1rem]  rounded-b-md`}>
                    <div className={` w-full flex flex-wrap   rounded-b-md border-0 pt-2 text-white`}>
                        <div className='w-1/2 text-left pr-2   justify-between'>
                            <p className={" text-sm font-medium pb-1  "} >First Name</p>
                            <input type='text' name='firstname'
                                onChange={(e) => { handleInputChange(e) }}
                                value={formData.firstname}
                                className={' shadow border w-full rounded rounded-md  p-2 text-sm text-gray-700 focus:border-teal-500 focus:outline-none ' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />
                            {/* {errorsP2.firstname && <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{errorsP2.firstname}</span>} */}
                        </div>

                        <div className='w-1/2 text-left  pr-2  justify-between'>
                            <p className={"text-sm font-medium  pb-1  "} >Last Name</p>
                            <input type='text' name='lastname'
                                onChange={(e) => handleInputChange(e)}
                                // disabled={secondPersonIsexist ? true : false}
                                value={formData.lastname}
                                className={' shadow border w-full rounded rounded-md  p-2 text-sm text-gray-700 focus:border-teal-500 focus:outline-none ' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                            {/* {errorsP2.lastname && <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{errorsP2.lastname}</span>} */}
                        </div>

                        <div className='w-1/2 text-left  pr-2  pt-2   justify-between'>
                            <p className={"text-sm font-medium   pb-1 "} >Email</p>
                            <input type="email"
                                name="email"
                                onChange={(e) => handleInputChange(e)}
                                value={formData.email}
                                className={' shadow border w-full rounded rounded-md  p-2 text-sm text-gray-700 focus:border-teal-500 focus:outline-none ' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                        </div>
                        <div className='w-1/2 text-left  pr-2   pt-2 justify-between'>

                            <p className={"text-sm font-medium  pb-1  "} >Phone</p>
                            <input type='phone' name='phone'
                                onChange={(e) => handleInputChange(e)}
                                value={formData.phone}
                                className={' shadow border w-full rounded rounded-md  p-2 text-sm text-gray-700 focus:border-teal-500 focus:outline-none ' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                        </div>
                        <div className='w-1/2 text-left  pr-2  pt-2   justify-between'>

                            <p className={"text-sm font-medium   pb-1 "} >Subject</p>
                            <input type='subject' name='subject'
                                onChange={(e) => handleInputChange(e)}
                                value={formData.Subject}
                                className={' shadow border w-full rounded rounded-md  p-2 text-sm text-gray-700 focus:border-teal-500 focus:outline-none ' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />

                        </div>




                        <div className='w-1/2 text-left  pr-2  pt-2   justify-between'>
                            <p className={" text-sm font-medium  pb-1  "} >Address</p>
                            <input type='text' name='medicarenumber'
                                onChange={(e) => handleInputChange(e)}
                                value={formData?.address}
                                className={' shadow border w-full rounded rounded-md  p-2 text-sm text-gray-700 focus:border-teal-500 focus:outline-none ' + (errorsP2.firstname ? ' border-red-400 ' : ' border-gray-300')} />
                        </div>

                        <button className="w-full mt-6 px-6 border py-3 bg-[#04081C] hover:text-[#04081C] rounded-md text-white text-lg font-medium hover:bg-white transition">
                            SEND MESSAGE
                        </button>

                    </div>

                </form>

            </div>



        </section>
        </div>

        </>
    )
}

export default page