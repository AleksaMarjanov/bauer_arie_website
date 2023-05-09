import { HeroServices } from '@/components'
import React from 'react'
import newPatient from '../../public/heroImage3.jpg'

const newPatients = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center h-screen">
            <HeroServices src={newPatient} heading="New Patient" message="Fill Out Form Below" />

            {/* <article className="mt-4 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2 px-4 md:px-36" > */}
            {/*     <h1 className="text-3xl md:text-5xl font-semibold flex items-start justify-start md:items-center md:justify-center "> You&apos;re in great hands</h1> */}
            {/**/}
            {/*     <span className='text-lg font-medium px-4 md:px-8'> */}
            {/*         We make sure all our new patients feel welcome, safe, and taken care of. */}
            {/*         Our full-service practice focuses on a wide array of dental needs for the entire family. */}
            {/*         From the littlest of children to the seniors, you can expect unsurpassed quality in teeth cleaning, */}
            {/*         exams and checkups, cosmetic dentistry, implants, dentures, and more. */}
            {/*         For a shorter time in the waiting room, please fill out the New Patient Forms. */}
            {/*         These forms are also available in Spanish, as requested. Forms completed online will come right to us, so no need to print! */}
            {/*     </span> */}
            {/* </article> */}
        </div >
    )
}

export default newPatients 
