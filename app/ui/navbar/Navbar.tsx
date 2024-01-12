"use client"

import Link from 'next/link';
import { LinkedinIcon } from '../../../components/Icons';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links = {
    home: { href: '/', displayName: 'Marek Motyl' },
    skills: { href: '/skills', displayName: 'Skills' },
    experience: { href: '/experience', displayName: 'Experience & Education' },
    contact: { href: '/contact', displayName: 'Contact' },
} as const;


export default function Navbar() {
    const pathname = usePathname();

    // TODO: move link to components
    return (
        <nav className="flex flex-row w-full gap-x-8">
            <div className="h-16 flex grow-3 flex-row items-center justify-between">
                <Link className="text-2xl font-bold" href={links.home.href}>{links.home.displayName}</Link>
            </div>
            <div className="h-16 flex grow-1 flex-row items-center justify-end gap-x-4">
                <Link className={clsx({ "active-link": pathname === links.skills.href, })} href={links.skills.href}>{links.skills.displayName}</Link>
                <Link className={clsx({ "active-link": pathname === links.experience.href, })} href={links.experience.href}>{links.experience.displayName}</Link>
                <Link className={clsx({ "active-link": pathname === links.contact.href, })} href={links.contact.href}>{links.contact.displayName}</Link>
            </div>
            <div className="h-16 flex flex-row items-center justify-end gap-x-4">
                <Link href="https://www.linkedin.com/in/marek-motyl/" target="_blank"><LinkedinIcon /></Link>
            </div>
        </nav>
    )
}
