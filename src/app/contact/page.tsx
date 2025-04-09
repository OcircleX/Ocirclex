"use client";



import React, { useState } from 'react'

import { Instrument_Serif } from "next/font/google";
import DarkNav from '../navbar/DarkNav';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);



const instrumentSerif = Instrument_Serif({ 
    subsets: ["latin"], 
    weight: ["400"], 
    style: "italic" // ✅ Correct way to load italic
  });



function Page() {


    useGSAP(()=> {
        gsap.from("#getin",
          {x: -100,
            duration:1,
            opacity:0,
            delay:0.2,
            ease: "expo.out",
           
        
           
           }
          )
          }, {scope:""})

          useGSAP(()=> {
            gsap.from("#oursup",
              {x: 100,
                duration:1,
                opacity:0,
                delay:0.2,
                ease: "expo.out",
               
            
               
               }
              )
              }, {scope:""})

              useGSAP(()=> {
                gsap.from("#formanim",
                  {y: 100,
                    duration:1,
                    opacity:0,
                    delay:0.5,
                    ease: "expo.out",
                   
                
                   
                   }
                  )
                  }, {scope:""})


    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        Subject: "",
        description: ""
    });
    const [errorsP2, setErrorsP2] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const [formErrors, setFormErrors] = useState({});



    const handleInputChange = (e:any) => {
             const {name, value} = e.target;
           
             setFormData((prevData)=> ({
                ...prevData, [name]: value,
             }))
    }



    const validate = (values: any) => {
        const errors: any = {};
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;

        if (!values.firstname) {
            errors.firstname = "First Name is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Not a valid email format!";
        }

        if (!values.lastname) {
            errors.lastname = "Last Name is required!";
        }

        if (!values.phone) {
            errors.phone = "Phone Number is required!";
        }

        if (!values.Subject) {
            errors.Subject = "Subject is required!";
        }

        if (!values.description) {
            errors.description = "Description is required!";
        }

        return errors;
    }




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        setFormErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmit(true);

        // Proceed with form submission if no errors
        try {
            const res = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log("Response", data);

            if (res.ok) {
                alert("Form submitted successfully!");
            } else {
                alert("Error submitting form!");
            }

        } catch (error) {
            console.error("Error", error);
        }
    };



    // try {
    //     const res = await fetch("/api/mail", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })
    
    //   const data = await res.json();
    //   console.log("Response", data)
    
    //   if (res.ok) {
    //     alert("Form submitted Successfully!")
    //   } else {
    //     alert("Error submitting form!")
    //   }
    
    // } catch (error) {
    //     console.error("Error", error)
    // }

    return (
        <>   
        <div className='w-full relative bg-[#04081C]'>
            <DarkNav />
            <section className="w-full relative bg-[#04081C] to-gray-100 py-20 flex flex-col items-center justify-between">
                <div className="max-w-screen-xl justify-between w-full m-auto">
                    <div className="w-full items-center flex flex-col py-[2rem] text-center -mt-4 leading-9">
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-9" id='getin'>
                            GET IN TOUCH WITH
                        </h1>
                        <span className={`text-5xl md:text-7xl font-extralight text-[#7BB668] italic ${instrumentSerif.className}`} id='oursup'>
                            our support
                        </span>
                    </div>

                    <form className="m-auto md:w-1/2 flex flex-wrap p-2 pt-6 mt-[1rem] rounded-b-md" onSubmit={handleSubmit} id='formanim'>
                        <div className="w-full md:flex flex-wrap rounded-b-md border-0 pt-2 text-white">
                            <div className="md:w-1/2 text-left pr-2 pt-4">
                                <p className="text-sm font-medium pb-1">First Name</p>
                                <input
                                    type="text"
                                    name="firstname"
                                    onChange={handleInputChange}
                                    value={formData.firstname}
                                    placeholder="First Name"
                                    className={`shadow border w-full rounded px-2 py-3 text-sm focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100 ${formErrors.firstname ? 'border-red-400' : 'border-gray-300'}`}
                                />
                                {formErrors.firstname && <p className="text-red-400 text-sm">{formErrors.firstname}</p>}
                            </div>

                            <div className="md:w-1/2 text-left pr-2 pt-4">
                                <p className="text-sm font-medium pb-1">Last Name</p>
                                <input
                                    type="text"
                                    name="lastname"
                                    onChange={handleInputChange}
                                    value={formData.lastname}
                                    placeholder="Last Name"
                                    className={`shadow border w-full rounded px-2 py-3 text-sm focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100 ${formErrors.lastname ? 'border-red-400' : 'border-gray-300'}`}
                                />
                                {formErrors.lastname && <p className="text-red-400 text-sm">{formErrors.lastname}</p>}
                            </div>

                            <div className="md:w-1/2 text-left pr-2 pt-4">
                                <p className="text-sm font-medium pb-1">Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                    placeholder="Email"
                                    className={`shadow border w-full rounded px-2 py-3 text-sm focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100 ${formErrors.email ? 'border-red-400' : 'border-gray-300'}`}
                                />
                                {formErrors.email && <p className="text-red-400 text-sm">{formErrors.email}</p>}
                            </div>

                            <div className="md:w-1/2 text-left pr-2 pt-4">
                                <p className="text-sm font-medium pb-1">Phone</p>
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={handleInputChange}
                                    value={formData.phone}
                                    placeholder="Phone"
                                    className={`shadow border w-full rounded px-2 py-3 text-sm focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100 ${formErrors.phone ? 'border-red-400' : 'border-gray-300'}`}
                                />
                                {formErrors.phone && <p className="text-red-400 text-sm">{formErrors.phone}</p>}
                            </div>

                            <div className="md:w-1/2 text-left pr-2 pt-4">
                                <p className="text-sm font-medium pb-1">Subject</p>
                                <input
                                    type="text"
                                    name="Subject"
                                    onChange={handleInputChange}
                                    value={formData.Subject}
                                    placeholder="Subject"
                                    className={`shadow border w-full rounded px-2 py-3 text-sm focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100 ${formErrors.Subject ? 'border-red-400' : 'border-gray-300'}`}
                                />
                                {formErrors.Subject && <p className="text-red-400 text-sm">{formErrors.Subject}</p>}
                            </div>

                            <div className="md:w-1/2 text-left pr-2 pt-4">
                                <p className="text-sm font-medium pb-1">Description</p>
                                <textarea
                                    name="description"
                                    onChange={handleInputChange}
                                    value={formData.description}
                                    placeholder="Description"
                                    
                                    className={`shadow border w-full rounded px-2 py-2 text-sm focus:border-teal-500 focus:outline-none border-gray-500 bg-[#04081C] placeholder:text-gray-400 text-gray-100 ${formErrors.description ? 'border-red-400' : 'border-gray-300'}`}
                                />
                                {formErrors.description && <p className="text-red-400 text-sm">{formErrors.description}</p>}
                            </div>

                            <button type="submit" className="w-full mt-6 px-6 border py-3 text-[#04081C] hover:text-white rounded-md bg-white text-lg font-medium hover:bg-[#04081C] transition">
                                <span className="text-[15px]">SEND MESSAGE</span>
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