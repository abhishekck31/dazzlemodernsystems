"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Check } from "lucide-react";

const details = [
    "Advanced automated manufacturing lines",
    "High load-bearing capacity testing",
    "Green building and LEED certified materials",
    "International safety compliances (CISCA, PSB, BSI)",
    "In-house quality control laboratory"
];

export function CompanyOverview() {
    return (
        <section className="py-24 bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <MotionWrapper variants={fadeUp} className="flex-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-8 pr-12">
                            Why we built this foundation for teams that manage real work
                        </h2>
                        <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-full shadow-md flex items-center gap-2 hover:bg-black transition-all hover:scale-105 active:scale-95">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Brochure
                        </button>
                    </MotionWrapper>

                    <MotionWrapper variants={staggerContainer} className="flex-1 w-full bg-slate-50 p-10 rounded-lg border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6 leading-relaxed">
                            Modern infrastructure requires a reliable base. We engineered our facilities to support the most demanding environments seamlessly.
                        </h3>
                        <ul className="space-y-4">
                            {details.map((item, i) => (
                                <MotionWrapper key={i} variants={fadeUp} className="flex items-start gap-3 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-brand-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-600 font-medium text-lg leading-snug">{item}</span>
                                </MotionWrapper>
                            ))}
                        </ul>
                    </MotionWrapper>

                </div>
            </div>
        </section>
    );
}
