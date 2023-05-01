'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="w-full flex items-center justify-center min-h-[85vh] md:min-h-[80vh] text-white bg-primary-black">
            <div className="grid grid-cols-1 justify-center md:grid-cols-2">
                <div className="flex items-center space-y-12 justify-center px-6 md:px-12 flex-col">
                    <motion.h1 className="text-4xl md:text-6xl font-medium ">Smile with Confidence</motion.h1>
                    <p className="font-semibold text-2xl md:text-4xl">Your Partner in Dental Health</p>
                    <Link href="/newPatients">
                        <button className="py-3 px-6 text-white bg-primary-black hover:text-primary-black hover:bg-white
                            font-semibold text-2xl border-solid border-b-white hover:border-b-primary-black border-2  
                            transition-all duration-700 ease-in-out cursor-pointer rounded-xl border-gray-600">
                            Schedule an Appointment
                        </button>
                    </Link>
                </div>
                <div className="items-center justify-center relative w-[320px] h-[140px] md:w-[500px] md:h-[380px] lg:w-[560px] lg:h-[480px]">
                    <Image
                        src="/heroImag2Ver.png"
                        alt="heroImage"
                        width={1000}
                        height={1000}
                        className='object-contain lg:object-center rounded-bl-[120px] rounded-br-[102px]'
                        priority
                    />
                </div>
            </div>
            <div className="wave3">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

        </section>
    )
}

export default Hero
