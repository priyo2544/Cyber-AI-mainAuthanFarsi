"use client"
import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'
import { useState } from 'react'

const mblNavLinkStyle = "block hover:text-gray-300 transition-colors py-2 px-4 text-lg font-normal border-b border-white/10 pb-1 hover:border-white poppins-regular"

const desktopNavLinkStyle = "hover:text-gray-300 transition-colors py-2 px-4 text-lg font-normal poppins-regular"

const navRoutes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-gradient-to-r from-black to-emerald-950 text-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/001.png"
                            alt="Apex Code Logo"
                            width={40}
                            height={40}
                            className="mr-2"
                        />
                        <span className="text-xl font-semibold">Apex Code</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-4">
                        {navRoutes.map((route) => (
                            <Link href={route.href} className={desktopNavLinkStyle} key={route.href}>
                                {route.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>


                {/* Mobile Navigation (sliding sidebar) */}
                <div
                    className={`
                    fixed z-50 top-0 left-0 h-full w-64 bg-gradient-to-b from-black to-emerald-950
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:hidden
  `}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-2 hover:bg-emerald-800 rounded-md"
                    >
                        <span className="text-2xl">×</span>
                    </button>

                    <div className="px-4 pt-16 pb-3 space-y-3">
                        {navRoutes.map((route) => (
                            <Link href={route.href} className={mblNavLinkStyle} key={route.href}>
                                {route.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Overlay when sidebar is open */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </div>
        </header>
    )
}

