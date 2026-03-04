"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden mx-4 lg:mx-8 rounded-2xl bg-slate-900 mt-4 mb-20 flex flex-col justify-center min-h-[60vh] lg:min-h-[70vh] shadow-xl border border-slate-800">
            {/* Dark industrial gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b172a] z-0" />

            {/* Subtle grid overlay for engineering feel */}
            <div
                className="absolute inset-0 z-0 opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '64px 64px' }}
            />

            {/* Glow effects - toned down for corporate look */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full text-center flex flex-col items-center">
                <MotionWrapper variants={staggerContainer} className="flex flex-col items-center">
                    <MotionWrapper variants={fadeUp} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-white/10 bg-white/5 text-[12px] font-bold text-slate-300 tracking-widest uppercase shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                            Premium Flooring Systems
                        </span>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.1}>
                        <h1 className="text-3xl md:text-[40px] lg:text-[56px] font-bold tracking-tight text-white mb-8 leading-[1.1] max-w-4xl text-balance">
                            Engineering Raised Access Flooring Solutions for Modern Infrastructure
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.2}>
                        <p className="text-[16px] md:text-[18px] text-slate-400 mb-12 max-w-[65ch] font-medium leading-[1.7]">
                            Dazzle Modular Systems delivers innovative, dependable, and customer-focused raised floor systems designed for data centers, IT facilities, control rooms, and dynamic workspaces.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Link href="#products" className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 text-white font-semibold rounded hover:bg-brand-500 transition-all duration-700 hover:scale-[1.03] flex items-center justify-center gap-2.5 text-[15px] shadow-md hover:shadow-lg">
                            Explore Products
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-slate-600 text-white font-semibold rounded hover:border-slate-400 hover:bg-white/5 transition-all duration-700 hover:scale-[1.03] flex items-center justify-center text-[15px]">
                            Contact Us
                        </Link>
                    </MotionWrapper>
                </MotionWrapper>
            </div>
        </section>
    );
}
