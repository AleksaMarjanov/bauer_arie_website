'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type customLinkProps = {
    href: string,
    title: string,
    className: string,
}

const Navbar = () => {

    const CustomLink = ({ href, title, className }: customLinkProps) => {
        const pathname = usePathname()


        return (
            <Link href={href} className={`${className} relative group`}  >
                {title}
                < span className={`h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span >
            </Link >
        )
    }

    return (
        <header>
            <nav>
                <CustomLink href="/" title='Home' className="mr-4" />
                <CustomLink href="/newPatients" title='New Patients' className="mx-4" />
                <CustomLink href="/ourPractice" title='Our Pratice' className="mx-4" />
                <CustomLink href="/contact" title='Contact' className="mr-4" />
            </nav>
        </header>
    )
}

export default Navbar
