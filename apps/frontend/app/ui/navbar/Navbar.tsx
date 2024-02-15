"use client";

import Link from "next/link";
import { LinkedinIcon } from "../../../components/Icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import NavLink from "./NavLink";

const links = {
    home: { href: "/", displayName: "Marek Motyl" },
    skills: { href: "/skills", displayName: "Skills" },
    experience: { href: "/experience", displayName: "Experience & Education" },
    contact: { href: "/contact", displayName: "Contact" },
} as const;

export default function Navbar() {
    const [isMenuOpened, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => setMenuOpen(false), [pathname]);
    const toggleMenu = useCallback(() => setMenuOpen(v => !v), []);

    // TODO: move link to components
    const menu = useMemo(() => [
        <NavLink key={links.skills.href} active={pathname === links.skills.href} href={links.skills.href} >{links.skills.displayName}</NavLink>,
        <NavLink key={links.experience.href} active={pathname === links.experience.href} href={links.experience.href}>{links.experience.displayName}</NavLink>,
        <NavLink key={links.contact.href} active={pathname === links.contact.href} href={links.contact.href}>{links.contact.displayName}</NavLink>,
    ], [pathname]);

    return (
        <nav className="flex flex-row w-full gap-x-8 max-w-maxScreen">
            <div className="h-16 flex grow-3 flex-row items-center justify-between">
                <Link className="text-2xl font-bold" href={links.home.href}>{links.home.displayName}</Link>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="h-16 text-2xl relative z-50">
                    MENU
                </button>

                <div className={clsx([
                    "fixed top-0 right-0 z-40 h-full w-full overflow-y-auto overscroll-y-none transition duration-300",
                    {
                        "translate-x-0": isMenuOpened,
                        "translate-x-full": !isMenuOpened
                    }
                ])}>
                    <div className="float-right min-h-full w-[85%] bg-base-beige px-6 pt-24 shadow-2xl">
                        <menu className="flex flex-col items-end gap-4">
                            {menu}
                        </menu>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex gap-8">
                <menu className="h-16 flex grow-1 flex-row items-center justify-end gap-x-4">
                    {menu}
                </menu>
                <div className="h-16 flex flex-row items-center justify-end gap-x-4">
                    <Link href="https://www.linkedin.com/in/marek-motyl/" target="_blank" aria-label="Check out Marek's Linkedin page"><LinkedinIcon /></Link>
                    <Link href="https://github.com/Marek-Motyl" target="_blank" aria-label="Check out Marek's Github page"><GitHubIcon /></Link>
                </div>
            </div>
        </nav >
    );
}