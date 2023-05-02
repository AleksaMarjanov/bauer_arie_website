'use client';

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

type customLinkProps = {
    href: string,
    title: string,
    className: string,
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    // Navbar component
    const CustomLink = ({ href, title, className }: customLinkProps) => {
        const pathname = usePathname()

        return (
            <Link href={href} className={`${className} relative group`}  >
                {title}
                < span className={`h-[2px] inline-block  bg-[#00626f] absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-200
                ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span >
            </Link >
        )
    }

    // change background for navigation bar when scrolling
    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    // only run on client side 
    useEffect(() => {
        addEventListener("scroll", changeBackground)

        window.addEventListener("scroll", changeBackground)
    }, [])

    return (
        <header>
            <div className={`${navbar ? 'bg-white text-[#00626f] py-2 shadow-xl ' : 'bg-white'} fixed sm:px-16 py-12 w-full grid lg:grid-cols-2  items-center justify-center z-[999] `}>
                <nav className={`lg:flex hidden items-center justify-start ${navbar ? 'text-[17px] transition-all duration-200 ease-in-out' : 'text-lg'} font-medium`}>
                    < CustomLink href="/" title='Home' className="mr-4" />
                    <CustomLink href="/newPatients" title='New Patients' className="mx-4" />
                    <CustomLink href="/ourPractice" title='Our Pratice' className="mx-4" />
                    <CustomLink href="/services" title='Services' className="mx-4" />
                    <CustomLink href="/contact" title='Contact' className="mr-4" />
                </nav>
                <Link href='/'>
                    <div className={`${navbar ? 'w-[190px] transition-all duration-200 ease-in-out' : 'w-[200px] h-[50px]'} relative object-contain flex items-center justify-center object-center z-[0]`}>
                        <Image
                            src="/logoNoBg.png"
                            alt="logo"
                            className='object-contain object-center '
                            width={1000}
                            height={1000}
                            priority
                        />
                    </div>
                </Link>
            </div>

        </header >
    )
}

export default Navbar
