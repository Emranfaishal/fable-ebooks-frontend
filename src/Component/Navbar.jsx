"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    {
        label: "Browse Jobs",
        href: "/jobs",
    },
    {
        label: "Companies",
        href: "/companies",
    },
    {
        label: "Pricing",
        href: "/pricing",
    },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
    return (
        <nav className="sticky top-0 z-50 w-full px-4 py-4">
            <div className="mx-auto max-w-7xl">
                {/* Main Navbar */}
                <header className="flex h-20 items-center justify-between rounded-3xl border border-white/10 bg-zinc-950/70 px-6 backdrop-blur-xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600">
                            <span className="text-lg font-bold text-white">H</span>
                        </div>

                        <span className="text-2xl font-bold">
                            <span className="text-sky-500">hire</span>
                            <span className="text-orange-500">loop</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {/* Menu Links */}
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Vertical Divider */}
                        <div className="h-6 w-px bg-white/15" />

                        {/* Auth Actions */}
                        <div className="flex items-center gap-5">
                            <Link
                                href="/singIn"
                                className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/singUp"
                                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-500"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </button>
                </header>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl lg:hidden">
                        <ul className="flex flex-col p-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block py-3 text-zinc-300 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                            <li className="mt-4 border-t border-white/10 pt-4">
                                <Link
                                    href="/singIn"
                                    className="block py-3 text-indigo-400"
                                >
                                    Sign In
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/singUp"
                                    className="mt-2 flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-500"
                                >
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}