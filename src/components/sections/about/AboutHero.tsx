"use client";

import Image from "next/image";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer, fadeUpQuick } from "@/lib/animations";

export function AboutHero() {
    return (
        <section className="pt-32 pb-24 bg-[#fdfdfd] relative rounded-b-[40px] md:rounded-b-[80px]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <MotionWrapper variants={staggerContainer} className="max-w-4xl mb-16">
                    <MotionWrapper variants={fadeUpQuick} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-gray-600 text-[13px] font-bold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            ABOUT US
                        </span>
                    </MotionWrapper>
                    <MotionWrapper variants={fadeUpQuick}>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
                            Engineering Raised Access <br className="hidden lg:block" /> Flooring Solutions
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper variants={fadeUpQuick}>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                            We manufacture and install premium raised access flooring systems for industrial and commercial environments, ensuring robust infrastructure and seamless operations.
                        </p>
                    </MotionWrapper>
                </MotionWrapper>

                {/* Images Grid */}
                <MotionWrapper variants={fadeUp} delay={0.1} className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
                    <div className="md:col-span-8 h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                        <Image src="/about-hero-main.png" alt="Engineering Team" fill className="object-cover" priority />
                    </div>
                    <div className="md:col-span-4 h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-sm border border-gray-200">
                        <Image src="/about-hero-sub.png" alt="Flooring Panel" fill className="object-cover" priority />
                    </div>
                </MotionWrapper>

                {/* Stats Dark Box */}
                <MotionWrapper variants={fadeUp} delay={0.2} className="bg-[#110e16] rounded-[32px] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-x-0 md:divide-x divide-gray-800">
                        <div className="md:px-6 first:pl-0">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">150K<span className="text-blue-500">+</span></div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Sq.Ft Facility</p>
                        </div>
                        <div className="md:px-6">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">5000<span className="text-purple-500">+</span></div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Panels / Day</p>
                        </div>
                        <div className="md:px-6">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">ISO<span className="text-green-500">+</span></div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">9001 Certified</p>
                        </div>
                        <div className="md:px-6">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">100<span className="text-orange-500">%</span></div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">CISCA Compliant</p>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
