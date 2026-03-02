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
        <section className="py-32 bg-[#fdfdfd]" id="products-grid">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <MotionWrapper variants={fadeUp} className="text-center mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-gray-200 text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-5 shadow-sm">
                        Products Overview
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                        Our Product Range
                    </h2>
                    <p className="text-[17px] text-gray-500 font-medium leading-[1.8] max-w-2xl mx-auto">
                        Premium raised access floor systems and accessories engineered for structural performance and seamless integration.
                    </p>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {products.map((product, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="group flex flex-col bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-[20px] font-bold text-gray-900 mb-3 tracking-tight z-10">{product.title}</h3>
                            <p className="text-[14px] text-gray-500 font-medium leading-relaxed mb-10 flex-1 z-10">
                                {product.desc}
                            </p>

                            <div className="mt-auto group-hover:translate-x-1 transition-transform duration-300">
                                <button className="inline-flex items-center gap-2 text-blue-600 font-bold text-[13px] tracking-wide uppercase z-10">
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
