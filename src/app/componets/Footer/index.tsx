import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const style = {
    footerLink: "hover:text-gray-300 poppins-regular",
    h2: "text-xl font-semibold mb-4 poppins-regular"
}

const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", icon: Facebook },
    { href: "https://twitter.com", label: "Twitter", icon: Twitter },
    { href: "https://instagram.com", label: "Instagram", icon: Instagram },
    { href: "https://linkedin.com", label: "Linkedin", icon: Linkedin },
]

const primaryPages = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
]

const utilityPages = [
    { href: "/signup", label: "Signup" },
    { href: "/login", label: "Login" },
    { href: "/404", label: "404 Not Found" },
]

const technicalResources = [
    { href: "/url-categorization", label: "URL Categorization" },
    { href: "/advisories", label: "Advisories" },
    { href: "/security-check", label: "Security Check Up" },
]


export function SiteFooter() {
    return (
        <footer className="w-full bg-gradient-to-br from-black to-emerald-950 text-white">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:justify-items-center ">
                    {/* Primary Pages */}
                    <div>
                        <h2 className={style.h2}>Primary Pages</h2>
                        <ul className="space-y-2">
                            {primaryPages.map((page) => (
                                <li key={page.href}><Link href={page.href} className={style.footerLink}>{page.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Utility Pages */}
                    <div>
                        <h2 className={style.h2}>Utility Pages</h2>
                        <ul className="space-y-2">
                            {utilityPages.map((page) => (
                                <li key={page.href}><Link href={page.href} className={style.footerLink}>{page.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Technical Resources */}
                    <div>
                        <h2 className={style.h2}>Technical Resources</h2>
                        <ul className="space-y-2">
                            {technicalResources.map((page) => (
                                <li key={page.href}><Link href={page.href} className={style.footerLink}>{page.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h2 className={style.h2}>Socials</h2>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={style.footerLink + " flex flex-row items-center gap-4"}>
                                        <link.icon size={20} />
                                        <span className="hidden md:block">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
                    <Link href="/" className="mb-4 md:mb-0">
                        <Image
                            src="/images/001.png"
                            alt="Apex Code Logo"
                            width={60}
                            height={60}
                            className="hover:opacity-90"
                        />
                    </Link>
                    <p className="text-sm text-gray-400">
                        © Copyright 2024, All Rights Reserved by Apex Code
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default SiteFooter;
