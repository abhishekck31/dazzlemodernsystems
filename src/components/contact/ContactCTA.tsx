"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#0a0f1d] mt-12 mb-12 rounded-[40px] md:rounded-[60px] mx-4 lg:mx-8 flex flex-col items-center justify-center border border-white/[0.05]">
            {/* Background Gradients & Glows */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#12071f] via-[#090b14] to-[#140b2e] z-0" />

            {/* Glowing orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center w-full">

                <MotionWrapper variants={fadeUp} className="mb-8">
                    <div className="w-16 h-16 rounded-[20px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 p-[1px] shadow-[0_0_30px_rgba(59,130,246,0.15)] mx-auto overflow-hidden">
                        <div className="w-full h-full bg-[#0a0f1d] rounded-[20px] flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                            {/* Logo representation */}
                            <svg className="w-8 h-8 text-blue-400 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.1}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-10 leading-[1.1] drop-shadow-lg max-w-2xl mx-auto">
                        Bring your tasks, clients, and revenue together
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link href="/about" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2.5 text-[15px]">
                        Start free trial
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                    <Link href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.03] border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2.5 text-[15px]">
                        <Calendar className="w-4 h-4 text-white/50" />
                        Book a quick demo
                    </Link>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.3} className="mt-8">
                    <p className="text-[13px] text-gray-400 font-medium tracking-wide">
                        Free for 14 days. No card required.
                    </p>
                </MotionWrapper>

            </div>
        </section>
    );
}
