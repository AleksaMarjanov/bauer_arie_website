import { Footer, Navbar } from '@/components'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'Best Dentist in Williston Dr. Arie Bauer',
    description: 'best, doctor, dentist, williston, north dakota',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
