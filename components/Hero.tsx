'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

const Hero = () => {

    return (
        <section className="w-full relative flex justify-center sm:px-16 xl:px-36 max-[475px]:min-h-[80vh] min-h-screen bg-[#aec2bc]">
            {/* <div className="wave-hero"> */}
            {/*     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> */}
            {/*         <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path> </svg> */}
            {/* </div> */}

            <div className="wave3 absolute z-[30]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 justify-center lg:grid-cols-2">
                <div className="flex items-start space-y-6 md:space-y-8 justify-center px-6 md:px-12 flex-col lg:order-2">
                    <motion.div
                        variants={textVariant(0.1)}
                        className='text-[#00626f] max-[475px]:mt-36 text-sm md:text-md md:text-xl font-semibold '
                    >
                        Arie Bauer D.D.S.
                    </motion.div>
                    <motion.h1
                        variants={textVariant(0.2)}
                        className="text-[#00626f] text-2xl sm:text-3xl lg:text-7xl font-semibold">Smile with Confidence</motion.h1>
                    <motion.p
                        variants={textVariant(0.3)}
                        className="font-semibold text-[#00626f] text-2xl sm:text-2xl lg:text-3xl">
                        Your Partner in Dental Health
                    </motion.p>
                    <motion.div
                        variants={textVariant(0.4)}
                        className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 items-center justify-center"
                    >
                        <Link href="/newPatients">
                            <button className="py-2 md:py-3 px-3 md:px-6 text-white bg-[#00626f] hover:text-[#00626f] hover:bg-transparent
                            hover:border-[#00626f] hover:border-2 font-semibold text-sm sm:text-sm md:text-lg
                            transition-all duration-700 ease-in-out cursor-pointer rounded-xl border-gray-600">
                                Schedule an Appointment
                            </button>
                        </Link>
                        <a href="tel:701.577.100">
                            <button className=" py-2 md:py-3 px-9 md:px-6 text-[#00626f] bg-transparent hover:text-white  hover:bg-transparent-
                            font-semibold text-sm sm:text-md md:text-lg border-2 border-[#00626f] hover:bg-[#00626f]
                            transition-all duration-700 ease-in-out cursor-pointer rounded-xl">
                                Call (701)-577-1000
                            </button>
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('right', 'tween', 0.1, 0.6)}
                    className="relative z-[0] lg:order-1 max-[325px]:w-[400px] max-[325px]:h-[470px] max-[375px]:w-[400px] max-[425px]:w-[400px]
                    max-[475px]:w-[420px] w-[420px] h-[420px] lg:w-[670px] xl:w-[720px] 2xl:w-[780px]">
                    {/* <Image */}
                    {/*     src="/heroImag2Ver.png" */}
                    {/*     alt="heroImage" */}
                    {/*     // width={1000} */}
                    {/*     // height={1000} */}
                    {/*     fill */}
                    {/*     className='object-contain lg:object-center rounded-bl-[360px] rounded-br-[102px] rounded-[5px]' */}
                    {/*     priority */}
                    {/* /> */}
                </motion.div>
            </motion.div >

        </section >
    )
}

export default Hero
