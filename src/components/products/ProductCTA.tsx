"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCTAProps {
    heading: string;
    buttonText: string;
    buttonLink: string;
}

export function ProductCTA({ heading, buttonText, buttonLink }: ProductCTAProps) {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />

            <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-[40px] font-bold text-white tracking-tight mb-10 leading-tight"
                >
                    {heading}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Link
                        href={buttonLink}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 rounded-full font-bold tracking-[0.15em] uppercase text-xs hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        {buttonText}
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
