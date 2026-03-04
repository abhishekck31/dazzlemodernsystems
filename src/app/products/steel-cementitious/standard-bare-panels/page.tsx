"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { ProductApplications } from "@/components/products/ProductApplications";
import { ShieldCheck, ArrowUpToLine, Zap, Settings, Shield, LayoutGrid, CheckCircle2, Download } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StandardBarePanelsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Standard Bare Panels"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Steel Cementitious", href: "/products/steel-cementitious" },
                    { name: "Standard Bare Panels", href: "/products/steel-cementitious#standard" }
                ]}
            />

            {/* Overview Section */}
            <section className="py-24 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Superior Strength meets Lightweight Efficiency.</h2>
                            <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed text-lg font-light">
                                <p>Standard bare panels are epoxy coated unitized Shells consisting of a flat steel top sheet welded to a formed steel bottom sheet. The panel is in filled with a lightweight proprietary cementitious mixture.</p>
                                <p>Manufactured to exacting tolerances, these non-combustible rigid, solid panels deliver the ultimate in strength and durability with the convenience of lightweight construction.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-4/3 rounded-lg overflow-hidden shadow-2xl bg-zinc-100 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10" />
                            {/* Uses a placeholder colored block since we don't have the image file downloaded yet, maintaining aesthetic */}
                            <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
                                {/* <Image src="http://dazzletech.in/uploads/products/standard-bare-panels.jpg" alt="Standard Bare Panels" fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
                                <LayoutGrid size={64} className="text-zinc-300" strokeWidth={1} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Highlight */}
            <TechnicalHighlights
                highlights={[
                    { title: "Safe working load equals concentrated load", icon: <ArrowUpToLine size={24} /> },
                    { title: "Lightweight for ease of handling", icon: <Zap size={24} /> },
                    { title: "Excellent grounding & electrical continuity", icon: <ShieldCheck size={24} /> },
                    { title: "Full range of factory applied finishes", icon: <Settings size={24} /> },
                    { title: "Completely non-combustible", icon: <Shield size={24} /> },
                    { title: "Available in 24” and 60cm sizes", icon: <LayoutGrid size={24} /> },
                ]}
            />

            {/* Specifications Details Section */}
            <section className="py-24 md:py-24 bg-zinc-50 border-y border-zinc-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Technical Specifications</h2>
                            <div className="w-20 h-1 bg-zinc-900 mt-6" />
                        </div>
                        <button className="flex items-center gap-3 px-6 py-3 bg-white text-zinc-900 rounded-full font-bold tracking-[0.1em] uppercase text-xs border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all shadow-sm shrink-0 w-fit">
                            <Download size={16} />
                            Download Specs
                        </button>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Standard Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-4 flex flex-col gap-8 bg-white p-8 md:p-10 rounded-lg shadow-sm border border-zinc-100"
                        >
                            <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-4">Standard Info</h3>
                            <ul className="flex flex-col gap-6">
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Type & Finish</span>
                                    <span className="text-zinc-900 font-medium">Bare</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Understructure Type</span>
                                    <span className="text-zinc-900 font-medium">Corner Lock (CL)</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Safety Factor</span>
                                    <span className="text-zinc-900 font-medium">3</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Range of Finish Floor Height</span>
                                    <span className="text-zinc-900 font-medium">75-1200mm</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Chart Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-8 bg-white rounded-lg shadow-sm border border-zinc-100 overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-zinc-100/50">
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">Grade</th>
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">Point Load <span className="text-[10px] lowercase text-zinc-400 font-medium block mt-1">(Kg/sq. in)</span></th>
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">Uniform Distributed <span className="text-[10px] lowercase text-zinc-400 font-medium block mt-1">(Kg/Sq. m)</span></th>
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">Ultimate Load <span className="text-[10px] lowercase text-zinc-400 font-medium block mt-1">(Kg/sq. in)</span></th>
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">Rolling Load <span className="text-[10px] lowercase text-zinc-400 font-medium block mt-1">(Kgs - 10 passes)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-100 text-sm">
                                        {[
                                            { grade: 'DZ-800', point: '362', uniform: '1650', ultimate: '905', rolling: '180' },
                                            { grade: 'DZ-1000', point: '454', uniform: '2361', ultimate: '1135', rolling: '225' },
                                            { grade: 'DZ-1200', point: '568', uniform: '2500', ultimate: '1420', rolling: '270' },
                                            { grade: 'DZ-1500', point: '680', uniform: '3100', ultimate: '1700', rolling: '315' },
                                        ].map((row) => (
                                            <tr key={row.grade} className="hover:bg-zinc-50/50 transition-colors">
                                                <td className="py-5 px-8 font-semibold text-zinc-900">{row.grade}</td>
                                                <td className="py-5 px-8 text-zinc-600 font-medium">{row.point}</td>
                                                <td className="py-5 px-8 text-zinc-600 font-medium">{row.uniform}</td>
                                                <td className="py-5 px-8 text-zinc-600 font-medium">{row.ultimate}</td>
                                                <td className="py-5 px-8 text-zinc-600 font-medium">{row.rolling}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ProductCTA
                heading="Need a Custom Raised Flooring Solution?"
                buttonText="Request a Quote"
                buttonLink="/contact"
            />
        </main>
    );
}
