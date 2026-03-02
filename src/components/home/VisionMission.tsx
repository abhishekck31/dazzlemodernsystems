"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";

export function VisionMission() {
    return (
        <section className="py-24 bg-gray-50/50 border-y border-gray-100 relative overflow-hidden" id="vision-mission">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    <MotionWrapper variants={fadeUp} className="bg-white rounded-[32px] p-10 lg:p-14 border border-gray-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-50" />

                        <span className="inline-block py-1.5 px-4 rounded-full border border-blue-200 bg-blue-50 text-[11px] font-bold text-blue-600 tracking-widest uppercase mb-6 shadow-sm">
                            Our Vision
                        </span>

                        <h3 className="text-2xl lg:text-[28px] font-bold text-gray-900 leading-[1.4] tracking-tight text-balance">
                            To be one of India’s most trusted raised floor companies by consistently delivering superior quality products and services.
                        </h3>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.1} className="bg-white rounded-[32px] p-10 lg:p-14 border border-gray-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-50" />

                        <span className="inline-block py-1.5 px-4 rounded-full border border-indigo-200 bg-indigo-50 text-[11px] font-bold text-indigo-600 tracking-widest uppercase mb-6 shadow-sm">
                            Our Mission
                        </span>

                        <h3 className="text-2xl lg:text-[28px] font-bold text-gray-900 leading-[1.4] tracking-tight text-balance">
                            To develop state-of-the-art facilities through continuous research and deliver cost-effective, value-added floors with on-time execution.
                        </h3>
                    </MotionWrapper>

                </div>
            </div>
        </section>
    );
}
