"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import { Building2, ArrowRight } from "lucide-react";

export function Cta() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-black flex justify-center mt-12 mb-12 rounded-[40px] md:rounded-[60px] mx-4 lg:mx-8">
            {/* Background Gradients & Glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#12071f] via-[#090b14] to-[#140b2e] z-0" />

            {/* Subtle floating background elements */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">

                <MotionWrapper variants={fadeUp} className="mb-8 flex justify-center">
                    <div className="w-16 h-16 rounded-[20px] bg-gradient-to-tr from-blue-500 to-purple-500 p-[1px] shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                        <div className="w-full h-full bg-[#0a0f1d] rounded-[20px] flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-blue-400" />
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.1}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg">
                        Let’s Build Smarter <br className="hidden md:block" /> Infrastructure Together
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Partner with us to create robust, future-proof access flooring solutions. Start your project consultation today.
                    </p>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        Consult our engineers
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                        Download Technical Guide
                        <ArrowRight className="w-4 h-4 text-white/70" />
                    </button>
                </MotionWrapper>

            </div>
        </section>
    );
}
