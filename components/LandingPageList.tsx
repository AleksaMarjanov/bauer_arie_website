'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerContainer, textVariant, textVariant2 } from '@/utils/motion';

const LandingPageList = () => {
    return (
        <motion.article
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#cbcbcb] "
        >
            <motion.div
                className="mt-4 bg-[#cbcbcb] md:mt-32 md:mb-16 flex items-center justify-center  flex-col space-y-6 md:space-y-12">
                < motion.p
                    variants={textVariant(0.3)}
                    className="text-balance px-4 leading-[30px] md:px-36 flex items-center justify-center font-semibold text-xl text-[#00626f]" >
                    Welcome to Williston Family Dentistry, a trusted provider of top - notch dental care for families.Our experienced team of professionals, led by Dr.Arie Bauer, is dedicated to delivering exceptional dental services that prioritize your health and satisfaction.
                    < br />
                </motion.p >
                {/**/}
                {/* <motion.p */}
                {/*     variants={textVariant(0.5)} */}
                {/*     className="px-4 leading-[30px] md:px-36 flex items-center justify-center font-medium text-lg text-[#00626f]"> Our modern and welcoming office is designed to ensure your comfort and peace of mind, from the moment you step through our doors. Our goal is to exceed your expectations by providing personalized, compassionate, and high-quality dental care that meets your unique needs. */}
                {/*     Thank you for choosing Williston Family Dentistry. We look forward to serving you and your family for all of your dental needs. */}
                {/* </motion.p> */}
            </motion.div >

            <div className="mt-4 w-full grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 items-center justify-center " >
                <motion.div
                    variants={fadeIn('right', 'spring', 0.4, 0.85)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative bg-gray-200 w-full h-full max-[425px]:h-[70vh] ">
                    <Link href="/newPatients">

                        {/* <div className="relative"> */}
                        <Image
                            src="/kid1.jpg"
                            alt="infant"
                            fill
                            className='object-contain py-6 px-6 object-center'
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
                        className="font-semibold text-xl md:text-4xl">Family Dentistry</motion.h1>
                    <div className="py-6 leading-[35px] md:py-12 font-medium text-lg xl:text-xl">
                        <motion.p
                            variants={textVariant(0.4)}
                            className="py-6">
                            All the care your family needs — all under one roof.
                            From your infant’s first dental exam to teeth whitening before your wedding day, you’ll be glad Wiliston Dentistry
                            is where you chose to call home for your whole family’s dental health needs.
                        </motion.p>
                        <motion.p
                            variants={textVariant(0.6)}
                        >
                            Your dentist will work closely with you to create the treatment plan that addresses your concerns and prepares you for a lifetime of smiles.
                            Your treatment is tailored to you, nothing is cookie-cutter or one-size-fits-all.
                        </motion.p>
                        <motion.p
                            variants={textVariant(0.8)}
                            className="py-6">
                            A little nervous about your visit? No problem! We take extra pride in treating patients who are “dental-phobic” or who haven’t seen the dentist in years. There’s no judgment, just a friendly approach to family dental care you won’t find anywhere else.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={textVariant(0.9)}
                    >
                        <Link href="/newPatients">
                            <motion.button
                                className="mt-2 md:mt-6 py-2 md:py-6 px-3 md:px-6 text-white 
                            hover:border-white bg-white/50 hover:bg-[#00626f] hover:border-2 font-semibold text-lg 
                            transition-all duration-700 ease-in-out cursor-pointer rounded-[2rem] ">
                                Schedule an Appointment
                            </motion.button>

                        </Link>
                    </motion.div>
                </motion.div>

            </div >

            <div className='bg-white w-full py-12 px-6 md:px-12 lg:px-24 items-center justify-center lg:space-x-12  gap-12 grid grid-cols-1 lg:grid-cols-2'>

                <div className='flex flex-col items-center justify-center gap-6  text-[#00626f] order-2 lg:order-1'>
                    <h2 className="font-semibold text-4xl ">Crowns</h2>
                    <p className="font-medium text-xl">
                        You can get a natural tooth-colored crown in just one appointment. No goopy impressions, no finicky temporary crown, and no need for a trip back to the dentist.
                    </p>
                    <Link href="/service/crowns">
                        <button className="py-2 md:py-3 px-8 md:px-8 text-white bg-[#00626f] hover:text-[#00626f] hover:bg-transparent
                            hover:border-[#00626f] hover:border-2 font-semibold text-lg
                            transition-all capitilize duration-700 ease-in-out cursor-pointer rounded-[2rem]">
                            Learn More
                        </button>
                    </Link>
                </div>

                <div className="relative lg:py-0 w-full h-[300px] md:h-[600px] order-1 lg:order-2">
                    <Link href="/service/crowns">
                        {/* <div className="relative"> */}
                        <Image
                            src='/crown.jpg'
                            alt="Crown process being shown on computer by doctor"
                            fill
                            className='object-cover object-center'
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,a
                            33vw"
                        />
                        {/* </div> */}
                    </Link>
                </div>

            </div >
            <div className='bg-[#cbcbcb] w-full py-12 px-6 md:px-12 lg:px-24 items-center justify-center lg:space-x-12  gap-12 grid grid-cols-1 lg:grid-cols-2'>

                <div className="relative w-full h-[300px] md:h-[600px] ">
                    <Link href="/service/veneers">
                        {/* <div className="relative"> */}
                        <Image
                            src='/veneers.jpg'
                            alt="Beautiful girl with white Veneers"
                            fill
                            className='object-cover object-center'
                            priority
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,a
                                33vw"
                        />
                        {/* </div> */}
                    </Link>
                </div>

                <div className='flex flex-col items-center justify-center gap-6  text-[#00626f]'>
                    <h2 className="font-semibold text-4xl ">Veeners</h2>
                    <p className="font-medium text-xl ">
                        These types of prosthetics are necessary depending on the amount of compromised tooth structure. If you have a damaged or decayed tooth, we can help you choose the best solution.
                    </p>
                    <Link href="/service/veneers">
                        <button className="py-2 md:py-3 px-8 md:px-8 text-white bg-[#00626f] hover:text-[#00626f] hover:bg-transparent
                            hover:border-[#00626f] hover:border-2 font-semibold text-lg
                            transition-all capitilize duration-700 ease-in-out cursor-pointer rounded-[2rem] ">
                            Learn More
                        </button>
                    </Link>
                </div>

            </div >
            <div className='bg-white w-full py-12 px-6 md:px-12 lg:px-24 items-center justify-center lg:space-x-12  gap-12 grid grid-cols-1 lg:grid-cols-2'>

                <div className='flex flex-col items-center justify-center gap-6  text-[#00626f] order-2 lg:order-1'>
                    <h2 className="font-semibold text-4xl">Implants</h2>
                    <p className="font-medium text-xl">
                        A dental implant mimics the form and function of a natural tooth, which consists of a root and a crown. The crown is the visible part of your tooth.
                    </p>
                    <Link href="/service/implants">
                        <button className="py-2 md:py-3 px-8 md:px-8 text-white bg-[#00626f] hover:text-[#00626f] hover:bg-transparent
                            hover:border-[#00626f] hover:border-2 font-semibold text-sm sm:text-sm md:text-lg
                            transition-all capitilize duration-700 ease-in-out cursor-pointer rounded-[2rem]">
                            Learn More
                        </button>
                    </Link>
                </div>

                <div className="relative lg:py-0 w-full h-[400px] md:h-[600px] order-1 lg:order-2">
                    <Link href="serivce/implants">
                        {/* <div className="relative"> */}
                        <Image
                            src='/implant.jpg'
                            alt="Guy with implants"
                            fill
                            className='object-cover object-center'
                            priority
                            sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,a
                                33vw"
                        />
                        {/* </div> */}
                    </Link>
                </div>

            </div>

        </motion.article >
    )
}

export default LandingPageList

