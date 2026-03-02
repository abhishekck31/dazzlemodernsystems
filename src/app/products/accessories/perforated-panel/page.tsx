"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { Wind, Settings, ArrowUpToLine, CheckCircle2, SlidersHorizontal, Layers, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function PerforatedPanelPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Perforated Panel"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Raised Floor Accessories", href: "/products#accessories" },
                    { name: "Perforated Panel", href: "/products/accessories/perforated-panel" }
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
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Controlled Underfloor Air Distribution.</h2>
                            <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed text-lg font-light">
                                <p>Perforated Panels are 600 x 600mm raised access floor panels specially constructed to allow for highly efficient air flow distribution from under the raised access floor.</p>
                                <p>Fabricated from a mild steel oval perforated top and a specially designed side channel section, a heavy duty vertical mesh supports the grating at regular locations to ensure flatness and high load carrying capacity.</p>
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
                                <Wind size={64} className="text-zinc-300" strokeWidth={1} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Highlight */}
            <TechnicalHighlights
                highlights={[
                    { title: "26% open surface area", icon: Wind },
                    { title: "Load ratings equal to standard panels", icon: ArrowUpToLine },
                    { title: "40-micron epoxy coated", icon: Layers },
                    { title: "Resistance welded at approx 100 locations", icon: Settings },
                    { title: "Oval arrangement of small holes", icon: CheckCircle2 },
                    { title: "Optional volume control dampers", icon: SlidersHorizontal },
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
                            className="lg:col-span-6 flex flex-col gap-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-zinc-100"
                        >
                            <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-100 pb-4">Performance Data</h3>
                            <ul className="flex flex-col gap-6">
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Panel Dimensions</span>
                                    <span className="text-zinc-900 font-medium leading-snug">600mm x 600mm</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Point Load</span>
                                    <span className="text-zinc-900 font-medium">360 Kgs <span className="text-zinc-500 font-normal text-sm ml-1">(on 25x25mm square indenter)</span></span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Uniform Distributed Load (UDL)</span>
                                    <span className="text-zinc-900 font-medium">1080 Kgs / sq.mt</span>
                                </li>
                                <li className="flex flex-col gap-1">
                                    <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Open Area</span>
                                    <span className="text-zinc-900 font-medium">26% <span className="text-zinc-500 font-normal text-sm ml-1">(Oval arrangement)</span></span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Optional Add-ons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-6 flex flex-col gap-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-zinc-100"
                        >
                            <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                                <SlidersHorizontal className="text-zinc-400" size={24} />
                                <h3 className="text-xl font-bold text-zinc-900">Optional Damper System</h3>
                            </div>

                            <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed font-light mt-2">
                                <p>Perforated floor panels can be equipped with volume control aluminum dampers fixed to the bottom of the panel.</p>
                                <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-start gap-4">
                                    <CheckCircle2 className="text-zinc-900 shrink-0 mt-0.5" size={20} />
                                    <p className="text-zinc-900 font-medium text-sm">
                                        The Damper control is fully accessible from the top of the panel, allowing adjustments without removing the panel from its existing laid position.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ProductCTA
                heading="Need Airflow Optimization?"
                buttonText="Request a Quote"
                buttonLink="/contact"
            />
        </main>
    );
}
