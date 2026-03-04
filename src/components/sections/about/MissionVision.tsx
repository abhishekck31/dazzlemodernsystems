"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Target, Lightbulb } from "lucide-react";

export function MissionVision() {
    return (
        <section className="py-24 bg-slate-50/50">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <p className="text-[13px] font-bold tracking-widest text-brand-600 uppercase mb-3">
                        OUR COMPASS
                    </p>
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight">
                        What guides everything we build
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <MotionWrapper variants={fadeUp} className="bg-white p-10 lg:p-14 rounded-lg border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:h-2 transition-all" />
                        <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 border border-blue-100 shadow-sm group-hover:scale-110 transition-transform">
                            <Target className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            To deliver state-of-the-art modular flooring systems that elevate industrial infrastructure, focusing on durability, sustainability, and technological integration.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} className="bg-white p-10 lg:p-14 rounded-lg border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:h-2 transition-all" />
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-8 border border-purple-100 shadow-sm group-hover:scale-110 transition-transform">
                            <Lightbulb className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            To be the global leader in raised access flooring, setting the benchmark for precision engineering and sustainable manufacturing practices worldwide.
                        </p>
                    </MotionWrapper>

                </MotionWrapper>

            </div>
        </section>
    );
}
