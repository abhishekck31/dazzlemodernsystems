"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
    { title: "Standard Bare Panels", desc: "Heavy-duty steel encased panels engineered for maximum load bearing." },
    { title: "Anti-static HPL & PVC", desc: "Surface-finished panels eliminating static for sensitive data environments." },
    { title: "Bare Encapsulated", desc: "Fully enclosed galvanized steel panels for high moisture resistance." },
    { title: "Laminated Non-Encap", desc: "Cost-effective, structurally sound panels with custom laminate finishes." },
    { title: "Grating Panel", desc: "High-airflow steel gratings for advanced underfloor cooling." },
    { title: "Perforated Panel", desc: "Precision punched panels delivering focused airflow to server racks." },
    { title: "Brush Grommet", desc: "Integrated cable routing protecting against air bypass." },
    { title: "Panel Lifter", desc: "Industrial-grade suction tools for safe panel removal." },
    { title: "Vision Panel", desc: "Clear acrylic inserts for sub-floor monitoring and inspections." },
    { title: "Round Grommet", desc: "Standardized circular cutouts for power and data cable management." }
];

export function ProductsGrid() {
    return (
        <section className="py-20 md:py-24 bg-muted" id="products-grid">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded border border-slate-200 text-[12px] font-bold text-slate-500 tracking-widest uppercase mb-6 shadow-sm bg-white">
                        Products Overview
                    </span>
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-[1.2] mb-6">
                        Our Product Range
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-slate-500 font-medium leading-[1.7] max-w-[65ch] mx-auto">
                        Premium raised access floor systems and accessories engineered for structural performance and seamless integration.
                    </p>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="group flex flex-col bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-700 relative overflow-hidden h-full"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <h3 className="text-[22px] font-bold text-card-foreground mb-4 tracking-tight z-10 leading-[1.3]">{product.title}</h3>
                            <p className="text-[16px] text-muted-foreground font-medium leading-[1.6] mb-10 flex-1 z-10 max-w-[65ch]">
                                {product.desc}
                            </p>

                            <div className="mt-auto group-hover:translate-x-1 transition-transform duration-700">
                                <button className="inline-flex items-center gap-2 text-brand-600 font-bold text-[13px] tracking-wide uppercase z-10">
                                    View Details
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>
            </div>
        </section>
    );
}
