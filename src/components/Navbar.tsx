'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // use Lucide icons (or Heroicons if preferred)

const quickIcons = [
    { href: 'https://www.facebook.com/MeadowbrookBolingbrook/', src_path: '/images/facebook-app-symbol.png' },
    { href: 'linkedin', src_path: '/images/linkedin.png' },
    { href: 'phone', src_path: '/images/phone-receiver-silhouette.png' },
    { href: 'email', src_path: '/images/email.png' }
];

const navItems = [
    { href: '/', label: 'HOME', target: "" },
    { href: '/about', label: 'WHY MEADOWBROOK' , target: "" },
    { href: '/careservices', label: 'CARE SERVICES' , target: "" },
    { href: '/successstories', label: 'SUCCESS STORIES' , target: "" },
    { href: 'https://www.linkedin.com/company/meadowbrookrehabilitation/about/', label: 'JOIN OUR FAMILY', target: "_blank"  },
    { href: '/contactus', label: 'CONTACT US', target: ""  }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-3 md:px-36">
                {/* Logo */}
                <Link href="/">
                    <Image src="/images/logo.png" alt="Logo" width={180} height={50} />
                </Link>

                {/* Desktop Quick Icons */}
                <div className="hidden md:flex gap-2">
                    {quickIcons.map(({ href, src_path }) => (
                        <a key={href} href={href} target="_blank" className="bg-[#4A6049] size-10 rounded-full flex items-center justify-center">
                            <img src={src_path} alt="" className="size-5" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="size-6 text-black" /> : <Menu className="size-6 text-black" />}
                </button>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex justify-center items-center px-2 bg-[#4A6049] h-[6vh] gap-8 font-semibold text-white">
                {navItems.map(({ href, label, target }) => (
                    <Link key={href} href={href} target={target} className="hover:text-gray-300 min-[701px]:text-xs">
                        {label}
                    </Link>
                ))}
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-[#4A6049] text-white flex flex-col items-center gap-4 py-4">
                    {navItems.map(({ href, label, target }) => (
                        <Link key={href} href={href} target={target} className="text-lg hover:text-gray-300" onClick={() => setIsOpen(false)}>
                            {label}
                        </Link>
                    ))}

                    {/* Mobile Icons */}
                    <div className="flex gap-3 mt-4">
                        {quickIcons.map(({ href, src_path }) => (
                            <a key={href} href={href} target="_blank" className="bg-black p-2 rounded-full">
                                <img src={src_path} alt="" className="size-4  " />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
