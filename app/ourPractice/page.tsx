import { HeroServices } from '@/components'
import React from 'react'
import office from '../../public/outsideOffice.jpg'

const OurPractice = () => {
    return (
        <div className="w-full ">
            <HeroServices heading="Meet Our Team" message="Meet our Team" src={office} />
        </div >
    )
}

export default OurPractice 
