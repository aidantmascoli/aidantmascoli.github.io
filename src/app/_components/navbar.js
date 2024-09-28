'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

const gitRepo = '/portfolio';

export default function AMNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return <Navbar isBlurred={false} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}  maxWidth="full" classNames={{
        base: ['fixed', 'bg-default-50', 'font-heading', 'border-b', 'border-default-200'],
        menu: ['fixed', 'bg-default-50', 'inset-x-0', 'top-0', 'pt-16', 'px-0', 'gap-0', 'font-heading'],
        menuItem: ['hover:underline', 'hover:bg-default-100', 'px-6', 'py-2'],
    }}>
        <NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden"
            />
            <NavbarBrand>
                <a href={`${gitRepo}/`} className="h-full relative font-title text-2xl">Aidan Thomas Mascoli</a>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex" isActive={pathname === `${gitRepo}/`}>
                <Link href={`${gitRepo}/`} className="text-foreground hover:underline">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex" isActive={pathname === `${gitRepo}/about`}>
                <Link href={`${gitRepo}/about`} className="text-foreground hover:underline">
                    About
                </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex" isActive={pathname === `${gitRepo}/webdev`}>
                <Link href={`${gitRepo}/webdev`} className="text-foreground hover:underline">
                    Web Development
                </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex" isActive={pathname === `${gitRepo}/video`}>
                <Link href={`${gitRepo}/video`} className="text-foreground hover:underline">
                    Videography
                </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex" isActive={pathname === `${gitRepo}/music`}>
                <Link href={`${gitRepo}/music`} className="text-foreground hover:underline">
                    Music
                </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex" isActive={pathname === `${gitRepo}/performance`}>
                <Link href={`${gitRepo}/performance`} className="text-foreground hover:underline">
                    Performance
                </Link>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex" isActive={pathname === `${gitRepo}/inquire`}>
                <Link href={`${gitRepo}/inqure`} className="text-foreground hover:underline">
                    Inquire
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu motionProps={{animate: { height: isMenuOpen ? '100vh' : '0' }}}>
            <NavbarMenuItem isActive={pathname === `${gitRepo}/`}>
                <Link className="w-full text-foreground" href={`${gitRepo}/`}>
                    Home
                </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={pathname === `${gitRepo}/about`}>
                <Link className="w-full text-foreground" href={`${gitRepo}/about`}>
                    About
                </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={pathname === `${gitRepo}/webdev`}>
                <Link className="w-full text-foreground" href={`${gitRepo}/webdev`}>
                    Web Development
                </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={pathname === `${gitRepo}/videography`}>
                <Link className="w-full text-foreground" href={`${gitRepo}/videography`}>
                    Videography
                </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={pathname === `${gitRepo}/music`}>
                <Link className="w-full text-foreground" href={`${gitRepo}/music`}>
                    Music
                </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={pathname === `${gitRepo}/performance`}>
                <Link className="w-full text-foreground" href={`${gitRepo}/performance`}>
                    Performance
                </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={pathname === `${gitRepo}/inquire`}>
                <Link className="w-full text-foreground" href={`${gitRepo}/inquire`}>
                    Inquire
                </Link>
            </NavbarMenuItem>
        </NavbarMenu>
    </Navbar>
}