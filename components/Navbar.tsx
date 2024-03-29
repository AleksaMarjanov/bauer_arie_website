'use client';

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { mobileVariants } from '@/utils/motion';

type customLinkProps = {
    href: string,
    title: string,
    className: string,
}

type MobLinkProps = {
    href: string,
    title: string,
    className: string,
    toggle: boolean | (() => void)
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null)

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

    const CustomMobileLink = ({ href, title, toggle, className }: MobLinkProps) => {
        const router = useRouter();
        const pathname = usePathname()

        const handleClick = () => {
            // @ts-ignore
            toggle()
            router.push(href);
        }

        return (
            // @ts-ignore
            < button href={href} className={`${className} relative text-[#00626f] group my-2`
            } onClick={handleClick} >
                {title}
                < span className={`h-[1px] inline-block bg-[#00626f] absolute left-[25%] -bottom-0.5
                group-hover:w-[50%] transition-[width] ease duration-300
                ${pathname === href ? 'w-[50%]' : 'w-0'}`}>&nbsp;</span >

            </button >
        )
    }

    const handleToggle = () => {
        setIsOpen(prev => !prev);
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

    // if clicked outside of navbar exit navbar
    useEffect(() => {
        if (!isOpen) return;

        const closeMenu = (e: any) => {
            if (btnRef.current && !btnRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", closeMenu)

        // cleanup
        return () => document.removeEventListener("click", closeMenu)
    }, [isOpen])

    return (
        <header className={`${navbar ? 'bg-white text-[#00626f] py-2 shadow-xl ' : 'bg-white text-black'} fixed w-full items-center justify-between z-[999] flex lg:px-16 py-8 font-medium `
        }>
            {/* <div className={`${navbar ? 'bg-white text-[#00626f] py-2 shadow-xl ' : 'bg-white'} fixed sm:px-16 w-full grid lg:grid-cols-2  items-center justify-between z-[999] `}> */}
            {/* Hamburger menu */}
            <button className='px-3 flex lg:hidden flex-col items-center justify-center' onClick={handleToggle}>
                <span className={`bg-black dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-black dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="flex items-center justify-center flex-wrap">
                <nav className={`lg:flex hidden items-center justify-start ${navbar ? 'text-[17px] transition-all duration-200 ease-in-out' : 'text-lg'} font-medium`}>
                    < CustomLink href="/" title='Home' className="mr-4" />
                    <CustomLink href="/newPatients" title='New Patients' className="mx-4" />
                    <CustomLink href="/ourPractice" title='Our Pratice' className="mx-4" />
                    <CustomLink href="/services" title='Services' className="mx-4" />
                    <CustomLink href="/contact" title='Contact' className="mr-4" />
                </nav>
            </div>
            {/* </div> */}
            {isOpen && (
                <motion.nav
                    ref={btnRef}
                    initial="hidden"
                    variants={mobileVariants}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full lg:hidden fixed top-[7%] bottom-30 left-0 h-screen flex flex-col text-black bg-white text-4xl font-semibold">
                    <CustomMobileLink href="/" title='Home' className="mt-48" toggle={handleToggle} />
                    <CustomMobileLink href="/newPatients" title='New Patients' className="" toggle={handleToggle} />
                    <CustomMobileLink href="/ourPractice" title='Our Practice' className="" toggle={handleToggle} />
                    <CustomMobileLink href="/services" title='Services' className="" toggle={handleToggle} />
                    <CustomMobileLink href="/contact" title='Contact' className="" toggle={handleToggle} />
                </motion.nav>
            )
            }


            {/*  logo */}
            <Link href='/' className="">
                <div className={`${navbar ? 'w-[110px] h-[40px] transition-all duration-200 ease-in-out' : 'w-[120px] h-[50px]'} absolute left-[50%] top-0 translate-x-[-50%] md:top-2 lg:left-[70%] xl:left-[50%]`}>
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
        </header >
    )
}

export default Navbar
