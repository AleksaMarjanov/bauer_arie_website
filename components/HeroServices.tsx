"use client";

import { staggerContainer, textVariant } from '@/utils/motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

type HeroProps = {
    src: string | StaticImageData
    heading: string,
    message: string,
}

const HeroServices = ({ src, heading, message }: HeroProps) => {
    return (
        <div className="relative h-screen flex items-start justify-start bg-fixed bg-cover w-full object-cover object-center">
            <Image src={src} alt="hero" fill className="w-full fixed object-cover object-center" priority />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="p-5 text-white z-[2] absolute top-[30%] md:top-[40%]">

                <motion.div
                    variants={textVariant(0.2)}
                >
                    <h2 className="text-5xl md:text-7xl font-semibold">{heading}</h2>
                </motion.div>
                <motion.div
                    variants={textVariant(0.3)}
                >
                    <p className="py-5 mt-4 font-medium text-3xl">{message}</p>
                </motion.div>
                <motion.div
                    variants={textVariant(0.5)}
                    className="mt-4 flex flex-col gap-y-6 md:flex-row md:gap-x-6 items-start justify-start "
                >
                    <Link href="/newPatients">
                        <motion.button
                            className="py-2 md:py-6 px-3 md:px-6 text-white 
                            bg-white/50 hover:bg-[#00626f] font-bold text-lg 
                            transition-all duration-700 ease-in-out cursor-pointer rounded-[2rem] ">
                            Schedule an Appointment
                        </motion.button>

                    </Link>

                    <a href="tel:701.577.1000">
                        <motion.button
                            className="py-2 md:py-6 px-3 md:px-6 bg-[#00626f] text-white  hover:bg-transparent
                             font-bold text-sm sm:text-md md:text-lg hover:border-2 hover:border-white
                             transition-all duration-700 ease-in-out cursor-pointer rounded-[2rem]">
                            Call (701)-577-1000
                        </motion.button>
                    </a>

                    {/* <a href="tel:701.577.100"> */}
                    {/*     <button className=" py-2 md:py-3 px-9 md:px-6 text-[#00626f] bg-transparent hover:text-white  hover:bg-transparent- */}
                    {/*         font-bold text-sm sm:text-md md:text-lg border-2 border-[#00626f] hover:bg-[#00626f] */}
                    {/*         transition-all duration-700 ease-in-out cursor-pointer rounded-[2rem]"> */}
                    {/*         Call (701)-577-1000 */}
                    {/*     </button> */}
                    {/* </a> */}

                </motion.div>

            </motion.div>

        </div>
    )
}

export default HeroServices
