import React from 'react'
import Image from 'next/image';

const BlogComponent = () => {
  return (
    <div>
      <div className="w-full max-w-[300px] text-gray-500">
<div className='w-full relative h-[200px] '>
    <Image src='/blogpic.png' 	fill={true} alt='blogpic' className='object-cover rounded-lg'/>
</div>

<div className=''>
<h5 className='text-sm mt-3'>1 day ago</h5>
<h1 className='text-white text-2xl'>Heading</h1>
<p className='mt-2 text-[14.5px]'>Lorem ipsum egestas sagittis posuere sed lorem risus nulla lectus aliquam</p>

</div>
</div>

    </div>
  )
}

export default BlogComponent
