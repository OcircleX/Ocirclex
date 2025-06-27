import Image from "next/image";

export default function ImageStacker() {
  return (
    <div className="w-screen overflow-y-auto bg-[#04081C] pb-24 h-[120vh]" >
      <div className="py-[4.375rem] w-full max-w-screen-xl flex justify-center mx-auto px-4">
        <div className="flex flex-col gap-y-[13.75rem] relative items-center w-full">
          
          {/* Image 1 */}
          <div className="sticky top-[5rem] rounded-3xl min-h-[37.5rem] overflow-hidden w-full z-20">
            <div className=" w-screen  mx-auto">
              <Image
                src="/Nuegas.png"
                alt="Nuegas"
                height={680}
                width={1380}
                className="object-cover rounded-md"
              />
            </div>

            <div id="ProjectContent" className=" p-6 absolute bottom-12 left-6 hidden sm:flex flex-col">
                <button className="mt-6 px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition md:text-base md:px-4 md:py-2 md:w-[70%]">
  Web Dev & UI Design
</button>


                  <h3
  className="w-[40vh] tracking-[-1.62px] mt-4 mb-0 text-[54px] font-bold leading-[120%]  
   text-white "
>
Task Management
</h3>

                </div>
          </div>

          {/* Image 2 */}
          <div className="sticky top-[6.25rem] rounded-3xl min-h-[37.5rem] overflow-hidden w-full z-30">
            <div className=" w-screen  mx-auto">
              <Image
                src="/Fitness.png"
                alt="Fitness"
                height={680}
                width={1380}
                className="object-cover rounded-md"
              />
            </div>
            <div id="ProjectContent" className=" p-6 absolute bottom-12 left-6 hidden sm:flex flex-col">
                <button className="mt-6 px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition md:text-base md:px-4 md:py-2 md:w-[70%]">
  Web Dev & UI Design
</button>


                  <h3
  className="w-[40vh] tracking-[-1.62px] mt-4 mb-0 text-[54px] font-bold leading-[120%]  
   text-black "
>
Task Management
</h3>

                </div>
          </div>

          {/* Image 3 */}
          <div className="sticky top-[7.5rem] rounded-3xl min-h-[37.5rem] overflow-hidden w-full z-40">
            <div className=" w-screen  mx-auto">
              <Image
                src="/Hospital.png"
                alt="Hospital"
                height={680}
                width={1380}
                className="object-cover rounded-md"
              />
            </div>

            <div id="ProjectContent" className=" p-6 absolute bottom-12 left-6 hidden sm:flex flex-col">
                <button className="mt-6 px-6 py-3 bg-[#04081C] text-white text-lg font-medium rounded-full hover:bg-blue-800 transition md:text-base md:px-4 md:py-2 md:w-[70%]">
  Web Dev & UI Design
</button>


                  <h3
  className="w-[40vh] tracking-[-1.62px] mt-4 mb-0 text-[54px] font-bold leading-[120%]  
   text-black "
>
Task Management
</h3>

                </div>
          </div>

          <div className="min-h-[300px]" />
        </div>
      </div>
    </div>
  );
}
