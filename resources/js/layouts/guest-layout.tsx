import { Link, usePage, router } from '@inertiajs/react';

import React, { useState, useEffect } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import PublicLogo from '@/components/public/public-logo';
import { logout } from '@/routes';
import { Search, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/jurnal', label: 'Jurnal Ilmiah' },
    { href: '/buku', label: 'Katalog Buku' },
    { href: '/berita', label: 'Berita & Kegiatan' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
];

export default function GuestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { auth } = usePage().props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLogout = () => router.flushAll();

    return (
        <div className="flex min-h-screen flex-col bg-[#fefefe] font-sans text-[#332c2b] selection:bg-[#ffe100]/60 selection:text-[#332c2b]">
            {/* ── Top Bar ── */}
            <div className="hidden border-b border-gray-100 bg-[#1f5476] py-1.5 text-xs text-white/80 lg:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5">
                            Jl. Karapitan No. 116, Bandung
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span>
                            Universitas Langlangbuana — Pusat Studi Kepolisian
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Navbar ── */}
            <header
                className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
                    scrolled
                        ? 'border-gray-200 bg-[#fefefe]/95 shadow-sm backdrop-blur-md'
                        : 'border-transparent bg-[#fefefe]'
                }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
                    <PublicLogo />

                    {/* Desktop Nav / Search */}
                    <div className="hidden md:flex flex-1 items-center justify-end px-8">
                        {!isSearchOpen ? (
                            <nav
                                className="flex items-center gap-1 animate-in fade-in zoom-in-95 duration-200"
                                aria-label="Navigasi utama"
                            >
                                {navLinks.map(({ href, label }) => (
                                    <NavLink key={href} href={href}>
                                        {label}
                                    </NavLink>
                                ))}
                            </nav>
                        ) : (
                            <form className="flex w-full max-w-xl items-center rounded-full border border-gray-300 bg-white py-1.5 pl-5 pr-1.5 shadow-sm transition-all focus-within:border-[#2596be] focus-within:ring-2 focus-within:ring-[#2596be]/20 animate-in fade-in slide-in-from-right-10 duration-200">
                                <input
                                    type="text"
                                    placeholder="Pencarian..."
                                    className="flex-1 border-none bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-0"
                                    autoFocus
                                />
                                <div className="mx-2 h-6 w-px bg-gray-200"></div>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-auto border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0 hover:bg-gray-50/50 rounded-lg h-8 px-3 text-sm font-medium text-gray-700">
                                        <SelectValue placeholder="Pilih Kategori" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="all">All Content</SelectItem>
                                            <SelectItem value="jurnal">Jurnal</SelectItem>
                                            <SelectItem value="artikel">Artikel</SelectItem>
                                            <SelectItem value="buku">Buku</SelectItem>
                                            <SelectItem value="berita">Berita & Kegiatan</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <button
                                    type="submit"
                                    className="ml-1 rounded-full bg-[#2596be] p-2 text-white transition-colors hover:bg-[#1f5476] focus:outline-none"
                                >
                                    <Search className="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(false)}
                                    className="ml-1 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Auth */}
                    <div className="flex items-center gap-3">
                        {!isSearchOpen && (
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="hidden md:flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#2596be] focus:outline-none"
                                aria-label="Buka pencarian"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                        )}

                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    id="user-menu-trigger"
                                    className="flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-bold text-[#1f5476] shadow-sm transition-all hover:border-[#2596be] hover:text-[#2596be] focus:outline-none"
                                >
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2596be] text-[10px] font-bold text-white">
                                        {auth.user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="hidden max-w-[100px] truncate sm:inline-block">
                                        {auth.user.name}
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-56 rounded-xl border-gray-100 p-2 shadow-xl shadow-[#1f5476]/10"
                                >
                                    <DropdownMenuLabel className="px-3 py-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
                                        Akun Saya
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-gray-100" />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem
                                            asChild
                                            className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium focus:bg-gray-50 focus:text-[#2596be]"
                                        >
                                            <Link
                                                href="/settings/profile"
                                                className="flex w-full items-center"
                                            >
                                                Profil Saya
                                            </Link>
                                        </DropdownMenuItem>
                                        {['admin', 'editor'].includes(auth.user.role) && (
                                            <DropdownMenuItem
                                                asChild
                                                className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium focus:bg-gray-50 focus:text-[#2596be]"
                                            >
                                                <Link
                                                    href="/dashboard"
                                                    className="flex w-full items-center"
                                                >
                                                    Dashboard
                                                </Link>
                                            </DropdownMenuItem>
                                        )}
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator className="bg-gray-100" />
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 focus:bg-red-50 focus:text-red-700"
                                    >
                                        <Link
                                            href={logout()}
                                            as="button"
                                            method="post"
                                            onClick={handleLogout}
                                            className="flex w-full items-center"
                                        >
                                            Keluar
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="hidden text-sm font-semibold text-[#1f5476] transition-colors hover:text-[#2596be] md:inline-flex"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href="/register"
                                    className="inline-flex h-10 items-center justify-center rounded-full bg-[#2596be] px-5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1f5476] hover:shadow-md"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}

                        {/* Mobile hamburger */}
                        <button
                            id="mobile-menu-toggle"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-[#1f5476] transition hover:border-[#2596be] hover:bg-[#2596be]/5 md:hidden"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : 'Menu'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="absolute left-0 right-0 top-full border-b border-gray-100 bg-white px-6 pb-4 shadow-lg md:hidden">
                        <div className="pt-4 pb-2">
                            <form className="flex w-full items-center overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm focus-within:border-[#2596be] focus-within:ring-1 focus-within:ring-[#2596be]">
                                <input
                                    type="text"
                                    placeholder="Pencarian..."
                                    className="flex-1 border-none bg-transparent py-2 pl-4 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-0"
                                />
                                <div className="mx-1 h-5 w-px bg-gray-200"></div>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-auto border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0 h-8 px-2 text-xs font-medium text-gray-700">
                                        <SelectValue placeholder="Pilih Kategori" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="all">All Content</SelectItem>
                                            <SelectItem value="jurnal">Jurnal</SelectItem>
                                            <SelectItem value="artikel">Artikel</SelectItem>
                                            <SelectItem value="buku">Buku</SelectItem>
                                            <SelectItem value="berita">Berita & Kegiatan</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <button type="submit" className="bg-[#2596be] p-2.5 text-white hover:bg-[#1f5476] transition-colors">
                                    <Search className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                        <nav className="flex flex-col gap-1 pt-2">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#1f5476] transition hover:bg-[#2596be]/10 hover:text-[#2596be]"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* ── Main Content ── */}
            <main className="w-full flex-1">{children}</main>

            {/* ── Footer ── */}
            <footer className="bg-[#1f5476] text-white/80">
                <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
                    <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
                        {/* Col 1 – Branding */}
                        <div>
                            <PublicLogo variant="dark" />
                            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
                                Portal publikasi ilmiah Pusat Studi Kepolisian
                                Universitas Langlangbuana — menyebarkan
                                pengetahuan riset kepolisian untuk Indonesia.
                            </p>
                        </div>

                        {/* Col 2 – Navigasi */}
                        <div>
                            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#ffe100] uppercase">
                                Navigasi
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-sm">
                                {navLinks.map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className="transition-colors hover:text-white"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3 – Kontak */}
                        <div>
                            <h4 className="mb-4 text-xs font-bold tracking-widest text-[#ffe100] uppercase">
                                Kontak
                            </h4>
                            <ul className="flex flex-col gap-3 text-sm">
                                <li className="flex items-start gap-2">
                                    <span>
                                        Jl. Karapitan No. 116, Bandung, Jawa
                                        Barat 40261
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <a
                                        href="mailto:info@pusdipol.com"
                                        className="transition-colors hover:text-white"
                                    >
                                        info@pusdipol.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>(022) 4231948</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
                        <span>
                            &copy; {new Date().getFullYear()} Pusat Studi
                            Kepolisian — Universitas Langlangbuana. All rights
                            reserved.
                        </span>
                        <div className="h-1 w-8 rounded-full bg-[#ffe100]" />
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const isActive =
        typeof window !== 'undefined' && window.location.pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-150 ${
                isActive
                    ? 'bg-[#2596be]/10 text-[#2596be]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#2596be]'
            }`}
        >
            {children}
        </Link>
    );
}
