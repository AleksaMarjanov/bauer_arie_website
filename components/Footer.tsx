"use client";

import { client } from '@/lib/sanity.client';
import { Services } from '@/typings';
import { groq } from 'next-sanity';
import React, { useState, useEffect } from 'react'
import ClientSideRoute from './ClientSideRoute';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const [services, setServices] = useState([])

    const query = groq`
*[_type == 'services']
    `
    const fetchServices = async () => {
        const data = await client.fetch(query)
        setServices(data);
    }

    useEffect(() => {
        fetchServices()
    }, [])


    return (
        <footer className="w-full  flex flex-col items-start px-6 md:px-12 justify-between">
            <div className="w-full grid gap-24 grid-cols-4 md:flex-row items-start justify-center">
                <div>
                    <h2 className="col-span-4 md:col-span-1 text-2xl text-[#00626f] mb-2">Services</h2>
                    {services.map((service: Services) => (
                        <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} >
                            <ol>
                                <li className="text-lg text-[#00626f]" >{service.title}</li>
                            </ol>
                        </ClientSideRoute >
                    ))
                    }
                </div>

                <div className="col-span-4 md:col-span-1 flex flex-col gap-2 md:gap-4 text-[#00626f] items-start justify-start">
                    <h2 className="text-2xl gap-4 mb-2">Practice</h2>
                    <Link href="/">Home</Link>
                    <Link href="/ourPractice">About</Link>
                    <Link href="/newPatients">New Patients</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>

                <div className="col-span-4 md:col-span-1 flex flex-col text-[#00626f] items-start justify-start">
                    <h2 className="text-2xl text-[#00626f] mb-2">Office</h2>
                    <div className="flex items-start justify-start relative flex-row w-full h-full">
                        <a href="tel:701.577.1000">
                            <Image
                                src="/phone.svg"
                                alt="phone icon"
                                width={30}
                                height={30}
                                priority
                            />
                        </a>
                        <a href="tel:701.577.1000">Call or Text (701)-577-1000</a>
                    </div>
                </div>

                <div className='col-span-4 md:col-span-1'>
                    <h2 className=" text-2xl text-[#00626f] mb-2">Socials</h2>
                </div>
            </div >

            <div className="mt-6 font-semibold text-[#00626f]">
                <p>@ Copyright {new Date().getFullYear()}</p>
                <Link href="https://marjanovdesignsolutions.com" target='_blank'>
                    <span className='hover:text-opacity-50'>Developed by Marjanov Design Solutions</span>
                </Link>
            </div>
        </footer >
    )
}

export default Footer

