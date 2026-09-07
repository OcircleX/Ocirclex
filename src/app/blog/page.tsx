import React from 'react'
import DarkNav from '../navbar/DarkNav'
import BlogComponent from '@/app/Components/BlogComponent'; 



const Page = () => {
  return (
    <div className='w-full bg-[#04081C]'>
     
     <DarkNav/>

<section className='w-full flex justify-center items-center'>

    <div className='max-w-screen-xl w-full '>


    <div className="mt-8 flex w-full flex-col items-center px-4 py-[2rem] text-center leading-tight">
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
                       BLOG</h1>
                    <span className="font-instrument text-4xl font-extralight italic leading-[1.15] text-[#7BB668] sm:text-5xl md:text-7xl">sphere</span>
                   
                </div>




<div className='grid grid-cols-1 place-items-center justify-center gap-y-12 px-4 py-12 sm:grid-cols-2 md:grid-cols-3 md:py-20'>
{
  new Array(6).fill(null).map((_ , i) => (
<BlogComponent key={i}/>
  ))
}


</div>


    


    </div>

</section>


    </div>
  )
}

export default Page
