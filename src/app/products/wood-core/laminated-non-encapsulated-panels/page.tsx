"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { ShieldCheck, ArrowUpToLine, Shield, Settings, Zap, CheckCircle2, Download, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function LaminatedNonEncapsulatedPanelsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Laminated Non-Encapsulated Panels"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Wood Core", href: "/products/wood-core" },
                    { name: "Laminated Non-Encapsulated Panels", href: "/products/wood-core/laminated-non-encapsulated-panels" }
                ]}
            />

            {/* Overview Section */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
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
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Excellent Rigidity & Acoustic Performance.</h2>
                            <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed text-lg font-light">
                                <p>Laminated non-encapsulated panels consist of high density composite wood core glued to and encased in hot dipped galvanized formed steel sheets.</p>
                                <p>These panels are ULC Listed for flame spread and smoke development and provide excellent rigidity, durability, and acoustic performance.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10" />
                            <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
                                <Layers size={64} className="text-zinc-300" strokeWidth={1} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Highlight */}
            <TechnicalHighlights
                highlights={[
                    { title: "No added urea formaldehyde wood available", icon: ShieldCheck },
                    { title: "High strength to weight performance", icon: ArrowUpToLine },
                    { title: "Full range of factory laminated finishes", icon: Settings },
                    { title: "Finishes available with Integral Trim® edge", icon: CheckCircle2 },
                    { title: "Internally grounded", icon: Zap },
                    { title: "Wide range of understructure support systems", icon: Shield },
                ]}
            />

            {/* Specifications Details Section */}
            <section className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200">
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
                            className="lg:col-span-4 flex flex-col gap-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-zinc-100"
                        >
                            <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-4">Standard Info</h3>
                            <ul className="flex flex-col gap-6">
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Safety Factor</span>
                                    <span className="text-zinc-900 font-medium leading-snug">2, 3</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Classes of Deflection</span>
                                    <span className="text-zinc-900 font-medium">A, B, C</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Deviation</span>
                                    <span className="text-zinc-900 font-medium">Class 2</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Chart Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-zinc-100/50">
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">DAZZLE @ DZWC 25 LG</th>
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">BSEN 12825 classification</th>
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">Ultimate Load</th>
                                            <th className="py-6 px-8 text-xs font-bold tracking-widest uppercase text-zinc-500 border-b border-zinc-200">Working Load</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-100 text-sm">
                                        {[
                                            { type: 'Stringerless', class: 'Class 4', ultimate: '>9kN', working: '2-6kN' },
                                            { type: 'Light Stringers', class: 'Class 5', ultimate: '>10kN', working: '3-6kN' },
                                            { type: 'Medium Stringers', class: 'Class 5', ultimate: '>11kN', working: '3-7kN' },
                                            { type: 'Heavy Stringers', class: 'Class 6', ultimate: '>13kN', working: '3-8kN' },
                                        ].map((row) => (
                                            <tr key={row.type} className="hover:bg-zinc-50/50 transition-colors">
                                                <td className="py-5 px-8 font-semibold text-zinc-900">{row.type}</td>
                                                <td className="py-5 px-8 text-zinc-600 font-medium">{row.class}</td>
                                                <td className="py-5 px-8 text-zinc-600 font-medium">{row.ultimate}</td>
                                                <td className="py-5 px-8 text-zinc-600 font-medium">{row.working}</td>
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
