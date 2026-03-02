"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
    name: string;
    href: string;
}

interface ProductHeroProps {
    title: string;
    breadcrumbs: Breadcrumb[];
}

export function ProductHero({ title, breadcrumbs }: ProductHeroProps) {
    return (
        <section className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 bg-zinc-50 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50"></div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 text-xs md:text-sm text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap pb-2"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {breadcrumbs.map((crumb, index) => (
                        <div key={crumb.name} className="flex items-center gap-2 shrink-0">
                            {crumb.name === "Home" ? (
                                <Link href={crumb.href} className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors uppercase tracking-widest font-semibold text-zinc-500">
                                    <Home size={14} className="mb-0.5" />
                                    {crumb.name}
                                </Link>
                            ) : (
                                <Link href={crumb.href} className="hover:text-zinc-900 transition-colors uppercase tracking-widest font-semibold">
                                    {crumb.name}
                                </Link>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <ChevronRight size={14} className="text-zinc-400" />
                            )}
                        </div>
                    ))}
                </motion.nav>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 max-w-5xl leading-tight"
                >
                    {title}
                </motion.h1>
            </div>
        </section>
    );
}
