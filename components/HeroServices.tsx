"use client";

import { staggerContainer, textVariant } from '@/utils/motion'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type HeroProps = {
    src: string,
    heading: string,
    message: string,
}

const HeroServices = ({ src, heading, message }: HeroProps) => {
    return (
        <div className="relative h-[90vh] flex items-center justify-center bg-fixed bg-cover w-full object-cover">
            <Image src={src} alt="hero" fill className="w-full object-cover object-center" priority />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="p-5 text-white z-[2]">

                <motion.div
                    variants={textVariant(1.1)}
                >
                    <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold">{heading}</h2>
                </motion.div>
                <motion.div
                    variants={textVariant(1.3)}
                >
                    <p className="py-5 text-xl">{message}</p>
                </motion.div>
                <motion.div
                    variants={textVariant(1.5)}
                >
                </motion.div>
            </motion.div>

        </div>
    )
}

export default HeroServices
