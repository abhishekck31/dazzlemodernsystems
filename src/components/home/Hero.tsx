"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden mx-4 lg:mx-8 rounded-[40px] md:rounded-[60px] bg-[#0a0f1d] mt-4 mb-20 flex flex-col justify-center min-h-[60vh] lg:min-h-[70vh]">
            {/* Dark industrial gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#12071f] via-[#090b14] to-[#140b2e] z-0" />

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {/* Glow effects */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full text-center flex flex-col items-center">
                <MotionWrapper variants={staggerContainer} className="flex flex-col items-center">
                    <MotionWrapper variants={fadeUp} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-gray-300 tracking-wider uppercase backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Premium Flooring Systems
                        </span>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.1}>
                        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-8 leading-[1.05] drop-shadow-sm max-w-4xl">
                            Engineering Raised Access Flooring Solutions for Modern Infrastructure
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.2}>
                        <p className="text-[17px] md:text-lg text-gray-400 mb-12 max-w-2xl font-medium leading-relaxed">
                            Dazzle Modular Systems delivers innovative, dependable, and customer-focused raised floor systems designed for data centers, IT facilities, control rooms, and dynamic workspaces.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Link href="#products" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2.5 text-[15px]">
                            Explore Products
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.03] border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center text-[15px]">
                            Contact Us
                        </Link>
                    </MotionWrapper>
                </MotionWrapper>
            </div>
        </section>
    );
}
