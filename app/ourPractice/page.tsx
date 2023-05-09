"use client"

import { HeroServices } from '@/components'
import React from 'react'
import { motion } from 'framer-motion'
import office from '../../public/outsideOffice.jpg'
import { fadeIn } from '@/utils/motion'

const OurPractice = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <HeroServices heading="Get To Know Us" message="We are Williston Family Dentistry" src={office} />

            <h1 className='mt-4 md:mt-16 text-3xl md:text-6xl font-semibold text-[#00626f]'>Meet Our Team</h1>
            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[38px] h-[38px] drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out object-contain  flex bg-[#00626f] items-center justify-center rounded-full  px-1 py-1"
            >
            </motion.img>

        </div >
    )
}

export default OurPractice 
