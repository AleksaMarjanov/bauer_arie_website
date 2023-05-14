// 'use client';

import { Footer, Navbar, OurOffice } from '@/components'
import './globals.css'
import { usePathname } from 'next/navigation'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'Best Dentist in Williston Dr. Arie Bauer',
    description: 'best, doctor, dentist, williston, north dakota',
}

export default function RootLayout({ children,
}: {
    children: React.ReactNode
}) {
    // const pathname = usePathname();
    // useEffect(() => {
    //     setTimeout(() => {
    //         window.scrollTo(0, 0)
    //     }, 50)
    // }, [pathname])

    return (
        <html lang="en">
            <body className={` ${montserrat.className} bg-white  overflow-x-hidden`}>
                <Navbar />
                {children}
                <OurOffice />
                <Footer />
            </body>
        </html>
    )
}
