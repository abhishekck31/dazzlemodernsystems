"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Application", href: "/application" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

type SubItem = { name: string; href: string; };
type DropdownItem = { name: string; href: string; subItems?: SubItem[]; };
type DropdownCategory = { category: string; href: string; items: DropdownItem[]; };

const productDropdown: DropdownCategory[] = [
    {
        category: "Raised Access Floor System",
        href: "/products#raised-access-floor",
        items: [
            {
                name: "Steel Cementitious",
                href: "/products/steel-cementitious",
                subItems: [
                    { name: "Standard Bare Panels", href: "/products/steel-cementitious/standard-bare-panels" },
                    { name: "Anti-static High pressure laminate and PVC Panels", href: "/products/steel-cementitious/anti-static-panels" }
                ]
            },
            {
                name: "Wood Core",
                href: "/products/wood-core",
                subItems: [
                    { name: "Bare Encapsulated Panels", href: "/products/wood-core/bare-encapsulated-panels" },
                    { name: "Laminated Non-Encapsulated Panels", href: "/products/wood-core/laminated-non-encapsulated-panels" }
                ]
            }
        ]
    },
    {
        category: "Raised Floor Accessories",
        href: "/products/accessories",
        items: [
            { name: "Grating Panel", href: "/products/accessories/grating-panel" },
            { name: "Perforated Panel", href: "/products/accessories/perforated-panel" },
            { name: "Brush Grommet", href: "/products/accessories/brush-grommet" },
            { name: "Panel lifter", href: "/products/accessories/panel-lifter" },
            { name: "Vision Panel", href: "/products/accessories/vision-panel" },
            { name: "Round Grommet", href: "/products/accessories/round-grommet" }
        ]
    }
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeHover, setActiveHover] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setDesktopProductsOpen(false);
    }, [pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300",
                scrolled ? "py-4" : "py-6 mt-2"
            )}
        >
            <div
                className={cn(
                    "w-full max-w-7xl mx-auto px-6 h-16 flex items-center justify-between rounded-full transition-all duration-500",
                    scrolled
                        ? "bg-[#0a0b0d]/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/10 text-white"
                        : "bg-black/20 border border-white/5 backdrop-blur-md text-white shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative z-10 shrink-0">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center border border-zinc-700 shadow-inner">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors"
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
                    <span className="font-bold text-[15px] tracking-widest text-zinc-100 uppercase group-hover:text-white transition-colors">Dazzle</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 relative z-10 shrink-0">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.name === "Products" && pathname.startsWith("/products"));

                        if (link.name === "Products") {
                            return (
                                <div
                                    key={link.name}
                                    onMouseEnter={() => { setActiveHover(link.name); setDesktopProductsOpen(true); }}
                                    onMouseLeave={() => { setActiveHover(""); setDesktopProductsOpen(false); }}
                                    className="relative"
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "relative px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 rounded-full flex items-center gap-1.5",
                                            isActive || desktopProductsOpen ? "text-white" : "text-zinc-400 hover:text-white"
                                        )}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <ChevronDown size={14} className={cn("relative z-10 transition-transform duration-300", desktopProductsOpen && "rotate-180")} />
                                        {activeHover === link.name && (
                                            <motion.div
                                                layoutId="navbar-hover-bg"
                                                className="absolute inset-0 rounded-full bg-white/10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-active-indicator"
                                                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </Link>

                                    {/* Products Mega Menu Dropdown */}
                                    <AnimatePresence>
                                        {desktopProductsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.1 } }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full pt-6 left-1/2 -translate-x-1/2 w-[650px]"
                                            >
                                                <div className="bg-[#0a0b0d]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 grid grid-cols-2 gap-12 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                                                    {/* Column 1 */}
                                                    <div className="relative z-10 flex flex-col gap-6">
                                                        <Link href={productDropdown[0].href} className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase hover:text-white transition-colors">
                                                            {productDropdown[0].category}
                                                        </Link>
                                                        <div className="flex flex-col gap-5">
                                                            {productDropdown[0].items.map(item => (
                                                                <div key={item.name} className="flex flex-col gap-2.5">
                                                                    <Link href={item.href} className="text-sm font-semibold text-zinc-200 hover:text-white tracking-wide transition-colors">
                                                                        {item.name}
                                                                    </Link>
                                                                    {item.subItems && (
                                                                        <div className="flex flex-col gap-2 border-l border-white/10 pl-4 mt-0.5">
                                                                            {item.subItems.map(subItem => (
                                                                                <Link key={subItem.name} href={subItem.href} className="text-xs text-zinc-500 hover:text-white tracking-wide transition-colors leading-relaxed">
                                                                                    {subItem.name}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Column 2 */}
                                                    <div className="relative z-10 flex flex-col gap-6">
                                                        <Link href={productDropdown[1].href} className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase hover:text-white transition-colors">
                                                            {productDropdown[1].category}
                                                        </Link>
                                                        <div className="flex flex-col gap-3">
                                                            {productDropdown[1].items.map(item => (
                                                                <Link key={item.name} href={item.href} className="text-sm font-semibold text-zinc-400 hover:text-white tracking-wide transition-colors py-1 group flex items-center gap-3">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white transition-colors" />
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onMouseEnter={() => setActiveHover(link.name)}
                                onMouseLeave={() => setActiveHover("")}
                                className={cn(
                                    "relative px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 rounded-full",
                                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {activeHover === link.name && (
                                    <motion.div
                                        layoutId="navbar-hover-bg"
                                        className="absolute inset-0 rounded-full bg-white/10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-active-indicator"
                                        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                <div className="hidden md:block w-[100px] shrink-0 pointer-events-none opacity-0" aria-hidden="true" />

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="md:hidden relative z-10 p-2 text-zinc-300 hover:text-white transition-colors"
                    aria-label="Open Menu"
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] md:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0a0b0d] border-l border-white/5 z-[60] md:hidden flex flex-col shadow-2xl"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-white/5 shrink-0">
                                <span className="font-bold text-sm tracking-[0.15em] text-zinc-100 uppercase">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                                    aria-label="Close Menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <nav className="flex flex-col py-4 overflow-y-auto">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href || (link.name === "Products" && pathname.startsWith("/products"));

                                    if (link.name === "Products") {
                                        return (
                                            <div key={link.name} className="flex flex-col border-b border-white/5 last:border-0">
                                                <button
                                                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                                    className="px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] transition-all flex items-center justify-between text-zinc-300 hover:text-white hover:bg-white/[0.02]"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={cn(
                                                            "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                                            isActive ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "bg-transparent"
                                                        )} />
                                                        {link.name}
                                                    </div>
                                                    <ChevronDown className={cn("transition-transform duration-300 text-zinc-500", mobileProductsOpen && "rotate-180")} size={16} />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileProductsOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden bg-black/20"
                                                        >
                                                            {productDropdown.map(col => (
                                                                <div key={col.category} className="px-8 py-5 border-t border-white/5 first:border-0">
                                                                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4">{col.category}</div>
                                                                    <div className="flex flex-col gap-4 pl-3">
                                                                        {col.items.map(item => (
                                                                            <div key={item.name} className="flex flex-col gap-3">
                                                                                <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-xs text-zinc-300 hover:text-white tracking-widest">
                                                                                    {item.name}
                                                                                </Link>
                                                                                {item.subItems && (
                                                                                    <div className="flex flex-col gap-3 pl-3 border-l border-white/10 mt-1 mb-1">
                                                                                        {item.subItems.map(subItem => (
                                                                                            <Link key={subItem.name} href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="text-[10px] text-zinc-500 hover:text-white tracking-widest leading-relaxed">
                                                                                                {subItem.name}
                                                                                            </Link>
                                                                                        ))}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "px-8 py-5 text-xs font-semibold uppercase tracking-[0.15em] border-b border-white/5 last:border-0 transition-all flex items-center gap-4",
                                                isActive ? "text-white bg-white/[0.03]" : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                                isActive ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "bg-transparent"
                                            )} />
                                            {link.name}
                                        </Link>
                                    )
                                })}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
