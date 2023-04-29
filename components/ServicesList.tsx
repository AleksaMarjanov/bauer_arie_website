'use client';

import { client } from '@/lib/sanity.client';
import { Services } from '@/typings';
import { groq } from 'next-sanity';
import React, { useState, useEffect } from 'react'
import ClientSideRoute from './ClientSideRoute';

const ServicesList = () => {
    const [services, setServices] = useState([])

    const query = groq`
*[_type == 'services']
    `
    // fetch services
    const fetchServices = async () => {
        const data = await client.fetch(query);
        setServices(data);
    }

    // only run on client side
    useEffect(() => {
        fetchServices();
    }, [])

    console.log({ services });


    return (
        <main className='flex flex-col items-center justify-center'>
            <h2 className="text-2xl text-teal-600">These are our Services</h2>
            <div className="grid lg:grid-cols-4">
                {services?.map((service: Services) => (
                    <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} >
                        <div className=''>
                            <h3 className="hover:text-pink-600 transition-colors duration-300 ease-in-out">{service.title}</h3>
                        </div>
                    </ClientSideRoute>
                ))}

            </div >

        </main >
    )
}

export default ServicesList 
