"use client";

import Image from 'next/image';
import React from 'react'
import office from '../public/outsideOffice.jpg'


const OurOffice = () => {

    return (
        <section className='mt-4 md:mt-16 '>
            <div className='relative w-[500px] h-[500px]'>
                <Image src={office} alt="office outside" fill className="object-contain object-center" />
            </div>
            <div>
                Map
            </div>
        </section>
    )
}

export default OurOffice
