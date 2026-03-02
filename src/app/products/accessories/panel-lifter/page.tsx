"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { ShieldCheck, ArrowUpFromLine, Settings, GripHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function PanelLifterPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Panel Lifter"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Raised Floor Accessories", href: "/products#accessories" },
                    { name: "Panel Lifter", href: "/products/accessories/panel-lifter" }
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
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Safe, Efficient Access Floor Maintenance.</h2>
                            <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed text-lg font-light">
                                <p>Dazzle’s double cup suction panel lifters allow panels to be lifted quickly, easily, and safely without damaging any of the adjoining access floor panels.</p>
                                <p>Not only are they more efficient and safer than using improper tools, but using them will also extend the life of your raised floor system. Designed for use on all access floor panels, including bare and high-pressure laminate surfaces.</p>
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
                                <GripHorizontal size={64} className="text-zinc-300" strokeWidth={1} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Highlight */}
            <div className="pb-24">
                <TechnicalHighlights
                    highlights={[
                        { title: "Easy and quick panel lifting", icon: ArrowUpFromLine },
                        { title: "Safely handle panels without damage", icon: ShieldCheck },
                        { title: "Complete system with easy operation", icon: Settings },
                    ]}
                />
            </div>

            <ProductCTA
                heading="Maintain Your Floor Safely"
                buttonText="Request a Quote"
                buttonLink="/contact"
            />
        </main>
    );
}
