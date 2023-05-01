'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

const Hero = () => {
    return (
        <section className="w-full relative flex justify-center min-h-screen sm:min-h-[85vh] md:min-h-[80vh] text-white bg-primary-black">
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
                className="grid grid-cols-1 justify-center md:grid-cols-2">
                <div className="flex items-center space-y-6 md:space-y-12 justify-center px-6 md:px-12 flex-col">
                    <motion.h1
                        variants={textVariant(0.4)}
                        className="text-2xl sm:text-4xl md:text-6xl font-medium ">Smile with Confidence</motion.h1>
                    <motion.p
                        variants={textVariant(0.6)}
                        className="font-semibold text-xl sm:text-2xl md:text-4xl">
                        Your Partner in Dental Health
                    </motion.p>
                    <motion.div
                        variants={textVariant(0.8)}
                    >
                        <Link href="/newPatients">
                            <button className="py-3 px-6 text-white bg-primary-black hover:text-primary-black hover:bg-white
                            font-semibold text-lg md:text-2xl border-solid border-b-white hover:border-b-primary-black border-2  
                            transition-all duration-700 ease-in-out cursor-pointer rounded-xl border-gray-600">
                                Schedule an Appointment
                            </button>
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 0.8)}
                    className="items-center justify-center relative z-[0] 
                    max-[375px]:w-[240px] w-[320px] h-[140px] md:w-[500px] md:h-[380px] lg:w-[560px] lg:h-[480px]">
                    <Image
                        src="/heroImag2Ver.png"
                        alt="heroImage"
                        width={1000}
                        height={1000}
                        className='object-contain lg:object-center rounded-bl-[120px] rounded-br-[102px]'
                        priority
                    />
                </motion.div>
            </motion.div >

        </section >
    )
}

export default Hero
