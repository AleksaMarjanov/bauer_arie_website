import { Hero, LandingPageList, OurOffice, ServicesList } from '@/components'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-24 md:py-18 lg:py-24">
            <Hero />
            <LandingPageList />
            <ServicesList />
            <OurOffice />
        </main >
    )
}
