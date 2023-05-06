'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const LandingPageList = () => {
    return (
        <article className="">
            <div className="mt-4 lg:mt-32 w-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center justify-center ">
                <div className="relative bg-gray-200 w-full h-full max-[475px]:py-24 max-[475px]:px-12">
                    <Image
                        src="/kid1.jpg"
                        alt="infant"
                        fill
                        className='object-contain object-center'
                        priority
                    />
                </div>

                <div className="w-full flex lg:max-h-[700px] flex-col mx-auto items-center justify-center p-4 md:p-16 bg-[#00626f] text-white">
                    <h1 className="font-bold text-xl md:text-2xl">Family Dentistry</h1>
                    <p className="py-6 md:py-12 font-semibold text-sm md:text-[20px] xl:text-xl">All the care your family needs — all under one roof. From your infant’s first dental exam to teeth whitening before your wedding day, you’ll be glad Bowles Dental is where you chose to call home for your whole family’s dental health needs.
                        Your treatment is tailored to you, nothing is cookie-cutter or one-size-fits-all.
                    </p>
                    <p className='font-semibold text-sm md:text-[20px] xl:text-xl'>
                        Your dentist will work closely with you to create the treatment plan that addresses your concerns and prepares you for a lifetime of smiles.
                        A little nervous about your visit? No problem! We take extra pride in treating patients who are “dental-phobic” or who haven’t seen the dentist in years. There’s no judgment, just a friendly approach to family dental care you won’t find anywhere else.
                    </p>
                    <Link href="/newPatients">
                        <button className="mt-2 md:mt-6 py-2 md:py-3 px-3 md:px-6 text-white 
                            hover:border-white bg-white/50 hover:bg-[#00626f] hover:border-2 font-semibold text-sm sm:text-sm md:text-lg
                            transition-all duration-700 ease-in-out cursor-pointer rounded-xl border-gray-600">
                            Schedule an Appointment
                        </button>

                    </Link>
                </div>
            </div>

            <div className='w-full mt-6 lg:mt-24 px-6 md:px-12 lg:px-24 items-center justify-center lg:space-x-12 space-y-6 grid grid-cols-1 lg:grid-cols-2'>

                <div className='flex flex-col items-center justify-center gap-6  text-[#00626f]'>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-4xl">Crowns</h2>
                    <p className="font-medium text-sm md:text-lg lg:text-xl">
                        You can get a natural tooth-colored crown in just one appointment. No goopy impressions, no finicky temporary crown, and no need for a trip back to the dentist.
                    </p>
                    <Link href="/service/crowns-bridges-and-veneers">
                        <button className="py-2 md:py-3 px-8 md:px-8 text-white bg-[#00626f] hover:text-[#00626f] hover:bg-transparent
                            hover:border-[#00626f] hover:border-2 font-semibold text-sm sm:text-sm md:text-lg
                            transition-all capitilize duration-700 ease-in-out cursor-pointer rounded-xl border-gray-600">
                            Learn More
                        </button>
                    </Link>
                </div>

                <div className="relative w-full h-[300px] md:h-[600px] ">
                    <Image
                        src='/crown.jpg'
                        alt="Crowns"
                        fill
                        className='object-cover object-center'
                        priority
                    />
                </div>

            </div>

        </article>
    )
}

export default LandingPageList

