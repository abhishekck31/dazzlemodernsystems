"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";

const certs = [
    "ISO 9001",
    "ISO 18001",
    "Green Building",
    "CISCA STD",
    "PSB Singapore",
    "BSI Standards"
];

export function Certifications() {
    return (
        <section className="py-20 bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <MotionWrapper variants={fadeUp} className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                    <div className="shrink-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground tracking-tight">Accreditations & Standards</h3>
                        <p className="text-muted-foreground text-base font-medium mt-1">Certified globally</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-8 flex-1">
                        {certs.map((cert, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-[16px] bg-slate-50 border border-border flex items-center justify-center mb-3 group-hover:border-blue-200 group-hover:bg-brand-50/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
                                    <svg className="w-7 h-7 text-slate-400 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h4 className="text-sm font-bold tracking-tight text-foreground text-center whitespace-nowrap">
                                    {cert}
                                </h4>
                            </div>
                        ))}
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
