"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
    return (
        <section className="relative py-24 md:py-24 overflow-hidden bg-slate-900 mt-12 mb-12 rounded-2xl mx-4 lg:mx-8 flex flex-col items-center justify-center border border-slate-800 shadow-xl">
            {/* Background Gradients & Glows */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0b172a] z-0" />

            {/* Glowing orbs - toned down */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-slate-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center w-full">

                <MotionWrapper variants={fadeUp} className="mb-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-brand-500/20 to-slate-500/20 p-[1px] shadow-[0_0_30px_rgba(0,119,182,0.15)] mx-auto overflow-hidden">
                        <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent" />
                            {/* Logo representation */}
                            <svg className="w-8 h-8 text-brand-400 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.1}>
                    <h2 className="text-4xl md:text-[56px] font-bold tracking-tight text-white mb-10 leading-[1.1] max-w-[65ch] mx-auto text-balance">
                        Ready to elevate your infrastructure?
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link href="/about" className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 text-white font-semibold rounded hover:bg-brand-500 transition-all duration-700 hover:scale-[1.03] shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 text-[15px]">
                        Get a Free Quote
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                    <Link href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-slate-600 text-white font-semibold rounded hover:border-slate-400 hover:bg-white/5 transition-all duration-700 hover:scale-[1.03] flex items-center justify-center gap-2.5 text-[15px]">
                        <Calendar className="w-4 h-4 text-white/50" />
                        Schedule a Demo
                    </Link>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.3} className="mt-8">
                    <p className="text-[13px] text-slate-400 font-medium tracking-wide">
                        Expert consultation within 24 hours.
                    </p>
                </MotionWrapper>

            </div>
        </section>
    );
}
