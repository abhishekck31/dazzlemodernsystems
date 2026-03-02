"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

const coreValues = [
    "Quality",
    "Workmanship",
    "Excellence",
    "Reliability",
    "Time-Bound Commitment",
    "Trust",
];

export function PolicyValues() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="policy">
            {/* Subtle glow elements */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-gray-200 text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-5 shadow-sm">
                        Our Policy & Core Values
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
                        The foundation of our success
                    </h2>
                    <p className="text-[17px] text-gray-500 max-w-3xl mx-auto font-medium leading-[1.8] text-balance">
                        Dazzle Modular Systems operates on a client-delight model built upon research-driven engineering, strict quality adherence, and time-bound service commitments.
                    </p>
                </MotionWrapper>

                <div className="max-w-4xl mx-auto mb-20 relative">
                    {/* Minimal Grid using flex wrap for center-aligned modern tags */}
                    <MotionWrapper variants={staggerContainer} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                        {coreValues.map((val, i) => (
                            <MotionWrapper
                                key={i}
                                variants={fadeUp}
                                className="px-6 py-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 font-bold text-[16px] text-gray-900 tracking-tight"
                            >
                                {val}
                            </MotionWrapper>
                        ))}
                    </MotionWrapper>
                </div>

                <MotionWrapper variants={fadeUp} className="flex justify-center">
                    <div className="max-w-4xl w-full bg-[#fafafa] p-10 md:p-12 rounded-[32px] border border-gray-200 shadow-sm text-center relative overflow-hidden">
                        {/* Soft quote-like visual block */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-indigo-500" />

                        <p className="text-[16px] md:text-[18px] font-semibold text-gray-700 leading-[1.8] text-balance">
                            We commit not only to deliver our best but to exceed expectations through empowered teams, continuous improvement, and long-term client partnerships built on trust and performance.
                        </p>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
