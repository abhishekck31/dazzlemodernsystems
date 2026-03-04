"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const applications = [
    {
        title: "Open Office",
        image: "/app-office.jpg",
        desc: "Flexible cable access for modern workspace infrastructure."
    },
    {
        title: "Data Center",
        image: "/app-datacenter.jpg",
        desc: "Precision airflow and full cable management for critical IT loads."
    },
    {
        title: "Control Room",
        image: "/app-controlroom.jpg",
        desc: "Ergonomic layouts with concealed power and signal cabling."
    },
    {
        title: "Class Room",
        image: "/app-classroom.jpg",
        desc: "Clean interiors meeting institutional load and fire safety standards."
    }
];

export function Applications() {
    return (
        <section className="py-20 md:py-24 bg-background" id="applications">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded border border-slate-200 text-[12px] font-bold text-slate-500 tracking-widest uppercase mb-6 shadow-sm">
                        Applications
                    </span>
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-[1.2]">
                        Built for demanding environments
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applications.map((app, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="group relative h-[380px] rounded-xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Gradient overlay — darkens bottom for legibility */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-slate-900/10 group-hover:from-slate-950/90 transition-all duration-500" />

                            {/* AI-generated contextual image */}
                            <Image
                                src={app.image}
                                alt={app.title}
                                fill
                                className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-[0.22,1,0.36,1]"
                                unoptimized
                            />

                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col justify-end">
                                <h3 className="text-[22px] font-bold text-white tracking-tight leading-[1.2] group-hover:-translate-y-1 transition-transform duration-500">
                                    {app.title}
                                </h3>
                                <p className="text-[13px] text-white/70 font-medium mt-2 leading-[1.5] max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-[0.22,1,0.36,1]">
                                    {app.desc}
                                </p>
                                <div className="h-[2px] w-8 bg-brand-500 mt-4 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
