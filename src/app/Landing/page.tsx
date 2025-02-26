import React from 'react'
import Hero from './Hero'
import Approch from './Approch'
import Showcase from './Showcase'
import IndustryInfo from './IndustryInfo'

function page() {
    return (
        <div className="w-full  flex flex-wrap items-center justify-between mx-auto ">
            <Hero />
            <Approch />
            <Showcase />
            <IndustryInfo />

        </div>
    )
}

export default page