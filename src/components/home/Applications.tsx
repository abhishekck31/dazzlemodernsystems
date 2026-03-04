"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const applications = [
    { title: "Open Office", image: "/app-office.jpg" },
    { title: "Data Center", image: "/app-datacenter.jpg" },
    { title: "Control Room", image: "/app-controlroom.jpg" },
    { title: "Class Room", image: "/app-classroom.jpg" }
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
                            className="group relative h-[360px] rounded-lg overflow-hidden bg-slate-100 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-700 hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Placeholder gradient fallback */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 z-0" />

                            <Image
                                src={app.image}
                                alt={app.title}
                                fill
                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[0.22,1,0.36,1] z-0 mix-blend-overlay"
                                unoptimized
                            />

                            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-end">
                                <h3 className="text-[22px] font-bold text-white tracking-tight leading-[1.2] group-hover:-translate-y-1 transition-transform duration-700">
                                    {app.title}
                                </h3>
                                <div className="h-[2px] w-8 bg-brand-500 mt-4 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
