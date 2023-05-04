import { Hero, ServicesList } from '@/components'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-16 md:py-18 lg:py-24">
            <Hero />
            <div className="mt-4 md:mt-32 flex items-center justify-center  flex-col space-y-6 md:space-y-12">
                <p className="px-4 md:px-36 flex items-center justify-center font-medium text-lg text-[#00626f]">Welcome to Williston Family Dentistry, a trusted provider of top-notch dental care for families. Our experienced team of professionals, led by Dr. Arie Bauer, is dedicated to delivering exceptional dental services that prioritize your health and satisfaction.<br />
                </p>
                <p className="px-4 md:px-36 flex items-center justify-center font-medium text-lg text-[#00626f]"> Our modern and welcoming office is designed to ensure your comfort and peace of mind, from the moment you step through our doors. Our goal is to exceed your expectations by providing personalized, compassionate, and high-quality dental care that meets your unique needs.
                    Thank you for choosing Williston Family Dentistry. We look forward to serving you and your family for all of your dental needs.
                </p>
            </div>

            <div className="mt-4 md:mt-32 w-full grid grid-rows-2 lg:grid-cols-2 items-center justify-center ">
                <div className="relative bg-gray-200 w-full h-full">
                    <Image
                        src="/kid1.jpg"
                        alt="infant"
                        fill
                        className='object-contain object-center'
                        priority
                    />
                </div>

                <div className="w-full flex md:max-h-[700px] flex-col mx-auto items-center justify-center text-sm md:text-2xl font-semibold p-4 md:p-16 bg-[#00626f] text-white">
                    <h1 className="font-bold text-4xl">Family Dentistry</h1>
                    <p className="py-12">All the care your family needs — all under one roof. From your infant’s first dental exam to teeth whitening before your wedding day, you’ll be glad Bowles Dental is where you chose to call home for your whole family’s dental health needs.
                        Your treatment is tailored to you, nothing is cookie-cutter or one-size-fits-all.
                    </p>
                    <p>
                        Your dentist will work closely with you to create the treatment plan that addresses your concerns and prepares you for a lifetime of smiles.
                        A little nervous about your visit? No problem! We take extra pride in treating patients who are “dental-phobic” or who haven’t seen the dentist in years. There’s no judgment, just a friendly approach to family dental care you won’t find anywhere else.
                    </p>
                    <Link href="service/dentures">
                        <button className="py-2 md:py-3 px-3 md:px-6 text-white bg-[#00626f]/20 hover:bg-transparent
                            hover:border-white hover:border-2 font-semibold text-sm sm:text-sm md:text-lg
                            transition-all duration-700 ease-in-out cursor-pointer rounded-xl border-gray-600">
                            Schedule an Appointment
                        </button>

                    </Link>
                </div>
            </div>
            <ServicesList />
        </main >
    )
}
