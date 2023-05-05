import { Hero, LandingPageList, ServicesList } from '@/components'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-24 md:py-18 lg:py-24">
            <Hero />
            <div className="mt-4 md:mt-32 flex items-center justify-center  flex-col space-y-6 md:space-y-12">
                <p className="px-4 md:px-36 flex items-center justify-center font-medium text-lg text-[#00626f]">Welcome to Williston Family Dentistry, a trusted provider of top-notch dental care for families. Our experienced team of professionals, led by Dr. Arie Bauer, is dedicated to delivering exceptional dental services that prioritize your health and satisfaction.<br />
                </p>
                <p className="px-4 md:px-36 flex items-center justify-center font-medium text-lg text-[#00626f]"> Our modern and welcoming office is designed to ensure your comfort and peace of mind, from the moment you step through our doors. Our goal is to exceed your expectations by providing personalized, compassionate, and high-quality dental care that meets your unique needs.
                    Thank you for choosing Williston Family Dentistry. We look forward to serving you and your family for all of your dental needs.
                </p>
            </div>
            <LandingPageList />
            <ServicesList />
        </main >
    )
}
