"use client"

import { HeroServices } from '@/components'
import React from 'react'
import { motion } from 'framer-motion'
import office from '../../public/outsideOffice.jpg'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import Link from 'next/link'
import Image from 'next/image'

const OurPractice = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col gap-y-6 ">
            <HeroServices heading="Get To Know Us" message="We are Williston Family Dentistry" src={office} />

            <h1 className='mt-4 md:mt-16 text-3xl md:text-7xl font-semibold text-[#00626f]'>Meet Our Team</h1>
            <span className='text-[#00626f] font-medium text-2xl px-6 md:px-16'>
                Our people set us apart. We&apos;re passionate, dedicated, and friendly. <br />Oh yeah, and we&apos;re great at what we do!
            </span>


            <Link href="#">
                <motion.img
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    src="/arrow-down.svg"
                    alt="arrow down"
                    className="w-[38px] h-[38px] drop-shadow-xl animate-bounce hover:scale-105 transition-transform duration-200 ease-out object-contain  flex bg-[#00626f] items-center justify-center rounded-full  px-1 py-1"
                >
                </motion.img>
            </Link>

            <div className="mt-4 lg:mt-32 w-full grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 items-center justify-center " >
                <motion.div
                    variants={fadeIn('right', 'spring', 0.4, 0.85)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative bg-gray-200 w-full h-full max-[475px]:py-24 max-[475px]:px-12">
                    <Link href="/newPatients">

                        {/* <div className="relative"> */}
                        <Image
                            src="/arieBauer1.jpg"
                            alt="Arie Bauer Image"
                            fill
                            className='object-contain object-center'
                            priority
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,a
                                33vw"

                        />
                        {/* </div> */}
                    </Link>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full flex leading-[40px] flex-col mx-auto items-center justify-center p-4 md:p-16 bg-[#00626f] text-white">
                    <motion.h1
                        variants={textVariant(0.2)}
                        className="font-semibold text-xl md:text-4xl">Arie Bauer D.D.S.</motion.h1>
                    <div className="py-6 leading-[35px] md:py-12 font-medium text-lg xl:text-xl">
                        <motion.p
                            variants={textVariant(0.4)}
                            className="py-6">
                            Arie was born and raised in North Dakota. He attended Minot State University for Undergrad, then moved to Omaha where he graduated as one  of the top in his class at Creighton University School of Dentistry.  After practicing for a year in the small town of Glenwood, Iowa, it was time to move closer to home.

                        </motion.p>
                        <motion.p
                            variants={textVariant(0.6)}
                        >
                            Growing up around dentistry, Arie appreciates that it is both an art and science, while being able to provide care to people. Williston was a top  choice to put down roots and practice due to the small town charm that he&apos;s used to.
                        </motion.p>
                        <motion.p
                            variants={textVariant(0.8)}
                            className="py-6">
                            In his off time, he enjoys bowling, checking out new movies and following football in the fall. Arie takes pride in watching and being a part of his sons sporting events and extracurricular activities.
                        </motion.p>
                    </div>
                </motion.div>

            </div >
        </div >
    )
}

export default OurPractice 
