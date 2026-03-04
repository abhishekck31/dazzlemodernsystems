"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Headphones, FileText, ArrowRight, MousePointerClick } from "lucide-react";

const options = [
    {
        title: "Customer support",
        desc: "Get help with your account and product usage.",
        icon: Headphones,
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
        btnLabel: "Get support",
        btnIcon: ArrowRight,
    },
    {
        title: "Read documentation",
        desc: "Browse setup guides and product explanations to get answers quickly.",
        icon: FileText,
        iconBg: "bg-pink-100",
        iconColor: "text-pink-600",
        btnLabel: "View docs",
        btnIcon: ArrowRight,
    },
    {
        title: "Product demo",
        desc: "Explore core features and workflows in a live product demo.",
        icon: MousePointerClick,
        iconBg: "bg-slate-900merald-100",
        iconColor: "text-emerald-600",
        btnLabel: "Request a demo",
        btnIcon: ArrowRight,
    },
];

export function SupportOptions() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-border text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-5 shadow-sm">
                        SUPPORT RESOURCES
                    </span>
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight">
                        Other ways to get help
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {options.map((opt, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="group relative bg-muted rounded-lg p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center ${opt.iconBg} mb-6`} >
                                <opt.icon className={`w-6 h-6 ${opt.iconColor}`} />
                            </div>

                            <h3 className="text-[22px] font-bold text-foreground mb-3 tracking-tight">{opt.title}</h3>
                            <p className="text-[16px] text-muted-foreground font-medium leading-relaxed mb-8 flex-1">
                                {opt.desc}
                            </p>

                            <div className="mt-auto inline-flex items-center gap-3 px-1.5 py-1.5 pr-5 bg-slate-900 text-white rounded-full font-semibold text-[13px] w-fit group-hover:bg-slate-800 transition-colors cursor-pointer">
                                <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                    <opt.btnIcon className="w-3.5 h-3.5 text-black" />
                                </div>
                                {opt.btnLabel}
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>
            </div>
        </section>
    );
}
