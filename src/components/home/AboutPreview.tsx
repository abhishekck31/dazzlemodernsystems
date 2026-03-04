"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Building2, Pickaxe, MapPin } from "lucide-react";
import Image from "next/image";


export function AboutPreview() {
    return (
        <section className="py-20 md:py-24 bg-background border-y border-border" id="about-preview">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-center">

                    {/* Left: Heading & Intro */}
                    <MotionWrapper variants={staggerContainer}>
                        <MotionWrapper variants={fadeUp}>
                            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-[1.2] mb-6">
                                Welcome to the <br className="hidden md:block" /> World of Dazzle
                            </h2>
                        </MotionWrapper>
                        <MotionWrapper variants={fadeUp} delay={0.1}>
                            <p className="text-[16px] md:text-[18px] text-muted-foreground font-medium leading-[1.7] max-w-[65ch]">
                                Dazzle Modular Systems is a leading manufacturer of raised access flooring systems, combining innovation, reliability, and a customer-first approach to meet evolving infrastructure demands.
                            </p>
                        </MotionWrapper>
                    </MotionWrapper>

                    {/* Right: AI-generated facility image */}
                    <MotionWrapper variants={fadeUp} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-border group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent z-10 mix-blend-multiply transition-colors duration-700 group-hover:from-slate-900/10" />
                        <Image
                            src="/facility-hero.jpg"
                            alt="Dazzle Modular Systems manufacturing facility"
                            fill
                            className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[0.22,1,0.36,1]"
                            unoptimized
                        />
                    </MotionWrapper>


                </div>

                {/* Bottom: 3 Features Grid */}
                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <MotionWrapper variants={fadeUp}>
                        <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                            <Pickaxe className="w-6 h-6 text-brand-600" />
                        </div>
                        <h3 className="text-[22px] font-bold text-foreground mb-4 tracking-tight leading-[1.2]">Design & Research</h3>
                        <p className="text-[16px] text-muted-foreground font-medium leading-[1.6]">
                            Continuous innovation through research-driven engineering to exceed industry load and deflection standards.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.1}>
                        <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                            <Building2 className="w-6 h-6 text-brand-600" />
                        </div>
                        <h3 className="text-[22px] font-bold text-foreground mb-4 tracking-tight leading-[1.2]">Strong & Dependable</h3>
                        <p className="text-[16px] text-muted-foreground font-medium leading-[1.6]">
                            A customer-centric philosophy ensuring durable, reliable flooring systems guaranteed to support modern structural limits.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.2}>
                        <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                            <MapPin className="w-6 h-6 text-brand-600" />
                        </div>
                        <h3 className="text-[22px] font-bold text-foreground mb-4 tracking-tight leading-[1.2]">South India's Largest</h3>
                        <p className="text-[16px] text-muted-foreground font-medium leading-[1.6]">
                            Strategically based in Bangalore with exceptional manufacturing scale and strong logistics capabilities across India.
                        </p>
                    </MotionWrapper>
                </MotionWrapper>

            </div>
        </section>
    );
}
