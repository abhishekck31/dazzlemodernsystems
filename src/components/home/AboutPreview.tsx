"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Building2, Pickaxe, MapPin } from "lucide-react";

export function AboutPreview() {
    return (
        <section className="py-24 bg-[#fafafa] border-y border-gray-100" id="about-preview">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-center">

                    {/* Left: Heading & Intro */}
                    <MotionWrapper variants={staggerContainer}>
                        <MotionWrapper variants={fadeUp}>
                            <h2 className="text-4xl md:text-[52px] font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                                Welcome to the <br className="hidden md:block" /> World of Dazzle
                            </h2>
                        </MotionWrapper>
                        <MotionWrapper variants={fadeUp} delay={0.1}>
                            <p className="text-[17px] text-gray-500 font-medium leading-[1.8] max-w-xl">
                                Dazzle Modular Systems is a leading manufacturer of raised access flooring systems, combining innovation, reliability, and a customer-first approach to meet evolving infrastructure demands.
                            </p>
                        </MotionWrapper>
                    </MotionWrapper>

                    {/* Right: Decorative Image/Graphic Placeholder */}
                    <MotionWrapper variants={fadeUp} className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gray-200 group">
                        <div className="absolute inset-0 bg-blue-600/10 z-10 mix-blend-multiply transition-colors duration-500 group-hover:bg-blue-600/5" />
                        <div className="w-full h-full bg-slate-200 relative">
                            {/* Abstract mockup representing structural layers */}
                            <div className="absolute inset-0" style={{ backgroundImage: "url('/facility-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
                        </div>
                    </MotionWrapper>

                </div>

                {/* Bottom: 3 Features Grid */}
                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <MotionWrapper variants={fadeUp}>
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 shadow-sm">
                            <Pickaxe className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Design & Research</h3>
                        <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                            Continuous innovation through research-driven engineering to exceed industry load and deflection standards.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.1}>
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 shadow-sm">
                            <Building2 className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">Strong & Dependable</h3>
                        <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                            A customer-centric philosophy ensuring durable, reliable flooring systems guaranteed to support modern structural limits.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.2}>
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 shadow-sm">
                            <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight">South India's Largest</h3>
                        <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
                            Strategically based in Bangalore with exceptional manufacturing scale and strong logistics capabilities across India.
                        </p>
                    </MotionWrapper>
                </MotionWrapper>

            </div>
        </section>
    );
}
