"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2, ShieldCheck, Globe2, ThumbsUp } from "lucide-react";

const reasons = [
    {
        title: "100% Satisfaction",
        desc: "Our fully trained team ensures every project is completed to the highest standards of precision and finishing.",
        icon: ThumbsUp,
        iconBg: "bg-muted text-foreground border-border"
    },
    {
        title: "100% Quality",
        desc: "We maintain strict quality control processes to deliver consistent and reliable raised flooring systems.",
        icon: ShieldCheck,
        iconBg: "bg-muted text-foreground border-border"
    },
    {
        title: "Global Recognition",
        desc: "DB Dazzle is registered and certified for Raised Access Floor Systems and Accessories, serving clients across industries.",
        icon: Globe2,
        iconBg: "bg-muted text-foreground border-border"
    },
    {
        title: "The Right Choice",
        desc: "A trusted raised access flooring partner in Bangalore, delivering solutions to corporates, institutions, hospitals, and educational campuses.",
        icon: CheckCircle2,
        iconBg: "bg-muted text-foreground border-border"
    }
];

export function WhyChooseDazzle() {
    return (
        <section className="py-24 md:py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-border text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-5 shadow-sm bg-white">
                        Why Choose Dazzle
                    </span>
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight">
                        Engineered for excellence
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {reasons.map((item, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="group bg-white rounded-lg p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row gap-6 lg:gap-8 items-start relative overflow-hidden"
                        >
                            {/* Subtle hover gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className={`w-14 h-14 shrink-0 rounded-[14px] flex items-center justify-center ${item.iconBg} border shadow-sm group-hover:scale-110 group-hover:bg-brand-50 group-hover:text-brand-600 transition-all duration-500`}>
                                <item.icon className="w-6 h-6" />
                            </div>

                            <div className="flex-1 relative z-10">
                                <h3 className="text-[22px] lg:text-[26px] font-bold text-foreground mb-3 tracking-tight group-hover:text-brand-600 transition-colors">{item.title}</h3>
                                <p className="text-[16px] text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>
            </div>
        </section>
    );
}
