import { Hero, ServicesList } from '@/components'
import Image from 'next/image'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-16 md:py-18 lg:py-24">
            <Hero />
            {/* <div className="relative mt-16"> */}
            {/*     <Image */}
            {/*         src="/arieBauer.jpg" */}
            {/*         alt="family bauer" */}
            {/*         width={1000} */}
            {/*         className="rounded-tl-2xl rounded-tr-2xl" */}
            {/*         height={1000} */}
            {/*     /> */}
            {/*     <div className="wave3"> */}
            {/*         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> */}
            {/*             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path> */}
            {/*         </svg> */}
            {/*     </div> */}
            {/* </div> */}
            <p className="px-16">Welcome to Williston Family Dentistry, a trusted provider of top-notch dental care for families. Our experienced team of professionals, led by Dr. Arie Bauer, is dedicated to delivering exceptional dental services that prioritize your health and satisfaction.

                Our modern and welcoming office is designed to ensure your comfort and peace of mind, from the moment you step through our doors. Our goal is to exceed your expectations by providing personalized, compassionate, and high-quality dental care that meets your unique needs.

                Thank you for choosing Williston Family Dentistry. We look forward to serving you and your family for all of your dental needs.</p>
            <ServicesList />
        </main >
    )
}
