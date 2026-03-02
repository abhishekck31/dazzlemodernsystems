"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { ShieldCheck, ThermometerSnowflake, Settings, Layers, Wind, CircleDashed, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function BrushGrommetPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Brush Grommet"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Raised Floor Accessories", href: "/products#accessories" },
                    { name: "Brush Grommet", href: "/products/accessories/brush-grommet" }
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
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Advanced Sealing & Cable Management.</h2>
                            <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed text-lg font-light">
                                <p>Brush grommets are developed specifically for sealing raised flooring in climate-controlled rooms and for efficient cable management, cutting operational costs by keeping cold and warm air separate.</p>
                                <p>The system consists of two double-row brush segments in an offset position, creating a perfect seal around cable passages while retaining cool air under the raised flooring.</p>
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
                                <CircleDashed size={64} className="text-zinc-300" strokeWidth={1} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Highlight */}
            <div className="pb-24">
                <TechnicalHighlights
                    highlights={[
                        { title: "Reliable sealing against dust", icon: ShieldCheck },
                        { title: "Prevention of system failures due to overheating", icon: ThermometerSnowflake },
                        { title: "Complete system with easy installation", icon: Settings },
                        { title: "Can be installed before or after laying of cables", icon: Layers },
                        { title: "Air is prevented from escaping", icon: Wind },
                        { title: "Cooling units run at lower capacity, saving money", icon: Zap },
                    ]}
                />
            </div>

            <ProductCTA
                heading="Improve Your Cooling Efficiency Today"
                buttonText="Request a Quote"
                buttonLink="/contact"
            />
        </main>
    );
}
