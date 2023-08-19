import { Hero, LandingPageList } from '@/components'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center ">
            <Hero />
            <LandingPageList />
        </main >
    )
}
