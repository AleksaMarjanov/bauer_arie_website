"use client";

import { client } from '@/lib/sanity.client';
import { Services } from '@/typings';
import { groq } from 'next-sanity';
import React, { useState, useEffect } from 'react'
import ClientSideRoute from './ClientSideRoute';

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
        <footer className="flex flex-col items-start px-6 md:px-12 justify-between">
            <h2 className="text-2xl text-[#00626f] mb-2">Services</h2>
            {services.map((service: Services) => (
                <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} >
                    <ol>
                        <li className="text-lg text-[#00626f]" >{service.title}</li>
                    </ol>
                </ClientSideRoute >
            ))
            }
        </footer >
    )
}

export default Footer

