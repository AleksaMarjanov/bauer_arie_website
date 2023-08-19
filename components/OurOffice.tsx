"use client";

import Image from 'next/image';
import React from 'react'
import office from '../public/outsideOffice.jpg'
import hours from '../public/hoursIcon.svg'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const MapWithNOSSR = dynamic(() => import("./Map"), {
    ssr: false,
});

const OurOffice = () => {


    return (

        <section className='bg-[#dab968] w-full px-4 flex flex-col max-xl:items-center max-xl:justify-center xl:flex-row md:gap-16 '>
            <div className='lg:ml-20 mt-2 relative max-[320px]:w-[300px] max-[320px]:h-[300px] w-[350px] h-[350px] md:w-[500px] md:h-[500px]'>
                <Image src={office} alt="office outside" fill className="object-contain object-center" sizes='' />
            </div>
            <div className='px-8  mt-6 flex items-start flex-col gap-y-4'>
                <h2 className="text-3xl text-[#00626f] mb-2 lg:text-6xl ">Office</h2>
                <div className="flex relative flex-row ">
                    <a href="tel:701.577.1000">
                        <Image
                            src="/phone.svg"
                            alt="phone icon"
                            width={50}
                            height={50}
                            priority
                        />
                    </a>
                    <a href="tel:701.577.1000" className='text-xl md:text-2xl '>Call or Text (701)-577-1000</a>
                </div>
                <div className='py-2 text-xl md:text-2xl'>
                    <p className='px-4'>
                        501 Main Street
                        Williston ND 58801
                    </p>
                    <div className='flex mt-4 flex-row items-start gap-2'>
                        <Image
                            src="/mapIcon.svg"
                            alt="map icon"
                            width={50}
                            height={50}
                            priority
                        />
                        <Link className="" href="https://www.google.com/maps/place/Williston+Family+Dentistry/@48.1488416,-103.6250724,17z/data=!3m1!4b1!4m6!3m5!1s0x53215b7154289103:0x8a0ba01f800015e!8m2!3d48.148838!4d-103.6224975!16s%2Fg%2F11fhs3d38v" >
                            Get Directions
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="relative w-[50px] h-[50px]">
                        <Image src={hours} alt="hours icon" fill priority className='object-contain object-center' />
                    </div>
                    <span className='text-xl md:text-2xl '>M–TH, 7:30AM–4:00PM<br />
                        F-SU Closed</span>
                </div>

            </div>
            <div className="mt-5 mb-24 sm:mt-2 lg:pl-10 relative right-0 z-[0] h-[60vh] max-[425px]:h-[40vh] w-full xl:w-[30%] max-[425px]:w-[85%]  ">
                <MapWithNOSSR />
                <Link href='' >
                    <button className='mt-2 relative left-0 bottom-0 z-[30] bg-[#00626f] text-white px-4 py-4'>Get Directions</button>
                </Link>
            </div>
        </section >
    )
}

export default OurOffice
