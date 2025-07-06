'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavDropdown from './NavDropdown';


const quickIcons = [
    {href: 'https://www.facebook.com/MeadowbrookBolingbrook/', src_path: '\\images\\facebook-app-symbol.png'},
    {href: 'linkedin', src_path: '\\images\\linkedin.png'},
    {href: 'phone', src_path: '\\images\\phone-receiver-silhouette.png'},
    {href: 'email', src_path: '\\images\\email.png'}
]

const navItems = [
    {href: '/', label: 'HOME'},
    {href: '/whymeadowbrook', label: 'WHY MEADOWBROOK'},
    {href: '/careservices', label: 'CARE SERVICES'},
    {href: '/successstories', label: 'SUCCESS STORIES'},
    {href: '/join', label: 'JOIN OUR FAMILY'},
    {href: '/contactus', label: 'CONTACT US'}
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className='bg-white' >
            <div className="logo_and_links bg-white flex items-center justify-between p-2">
            <div className="links flex gap-2">
                {quickIcons.map(({href, src_path}) => (
                    <a target='_blank' className='flex rounded-full justify-center items-center bg-[#4A6049] size-10' key={href} href={href}>
                        <img className='size-6' src={src_path} alt="" />
                        </a>
                ))}
            </div>
            <Image 
                key='Logo' 
                alt='' 
                src='/images/logo.png'
                width={280}
                height={60}
            />
            <NavDropdown/>
            </div>
            <div className="links h-[5vh] bg-[#4A6049] items-center gap-10 bg-center flex justify-center font-semibold">
                {navItems.map(({href, label}) => (
                    <Link className=' hover:text-gray-400' key={href} href={href}> 
                    {label}
                    </Link>
                ))
                }
            </div>
            
        </nav>
    )
}