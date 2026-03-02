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
        <section className="py-24 bg-white" id="applications">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-gray-200 text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-5 shadow-sm">
                        Applications
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        Built for demanding environments
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applications.map((app, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="group relative h-[320px] rounded-[24px] overflow-hidden bg-gray-100 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                        >
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Placeholder gradient fallback */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-[#111] z-0" />

                            <Image
                                src={app.image}
                                alt={app.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1] z-0 mix-blend-overlay"
                                unoptimized
                            />

                            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-end">
                                <h3 className="text-[20px] font-bold text-white tracking-tight leading-tight group-hover:-translate-y-1 transition-transform duration-300">
                                    {app.title}
                                </h3>
                                <div className="h-[2px] w-8 bg-blue-500 mt-4 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
