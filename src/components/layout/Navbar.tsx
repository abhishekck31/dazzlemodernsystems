"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Company", href: "#company" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSegment, setActiveSegment] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300",
                scrolled ? "py-4" : "py-6 mt-2"
            )}
        >
            <div
                className={cn(
                    "w-full max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between rounded-full transition-all duration-300",
                    scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                        : "bg-transparent text-white"
                )}
            >
                <Link href="/" className="flex items-center gap-2 group relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        {/* Logo placeholder */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-5 h-5 text-white"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="font-semibold text-lg tracking-tight">Dazzle</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 group/nav relative z-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setActiveSegment(link.name)}
                            onMouseLeave={() => setActiveSegment("")}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                                scrolled
                                    ? "text-gray-600 hover:text-black"
                                    : "text-gray-300 hover:text-white"
                            )}
                        >
                            <span className="relative z-10">{link.name}</span>
                            {activeSegment === link.name && (
                                <motion.div
                                    layoutId="navbar-active-bg"
                                    className={cn(
                                        "absolute inset-0 rounded-full",
                                        scrolled ? "bg-gray-100" : "bg-white/10"
                                    )}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4 relative z-10">
                    <Link
                        href="#contact"
                        className={cn(
                            "text-sm font-medium transition-colors",
                            scrolled
                                ? "text-gray-600 hover:text-black"
                                : "text-gray-300 hover:text-white"
                        )}
                    >
                        Contact Sales
                    </Link>
                    <Link
                        href="#login"
                        className={cn(
                            "text-sm font-medium transition-colors",
                            scrolled
                                ? "text-gray-600 hover:text-black"
                                : "text-gray-300 hover:text-white"
                        )}
                    >
                        Log in
                    </Link>
                    <button
                        className={cn(
                            "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm",
                            scrolled
                                ? "bg-black text-white hover:shadow-md"
                                : "bg-white text-black hover:bg-gray-50"
                        )}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </header>
    );
}
