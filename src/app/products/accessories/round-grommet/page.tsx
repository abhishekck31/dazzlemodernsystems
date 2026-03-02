"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { Circle, FastForward, Shield, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

export default function RoundGrommetPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Round Grommet"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Raised Floor Accessories", href: "/products#accessories" },
                    { name: "Round Grommet", href: "/products/accessories/round-grommet" }
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
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Clean & Safe Cable Penetration.</h2>
                            <div className="flex flex-col gap-6 text-zinc-600 leading-relaxed text-lg font-light">
                                <p>Round grommets allow wires and cables to neatly and safely penetrate from the cavity below the raised floor directly to the required location above.</p>
                                <p>Available in both PVC and Metal finishes, they are designed to seamlessly integrate into your floor panels while preventing edge damage to your critical cabling.</p>
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
                                <Circle size={64} className="text-zinc-300" strokeWidth={1} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Highlight */}
            <div className="pb-24">
                <TechnicalHighlights
                    highlights={[
                        { title: "Safe cable passage from underfloor cavity", icon: Shield },
                        { title: "Neat and organized wire management", icon: FastForward },
                        { title: "Available in PVC finish", icon: LayoutGrid },
                        { title: "Available in Metal finish", icon: LayoutGrid },
                    ]}
                />
            </div>

            <ProductCTA
                heading="Organize Your Cable Management"
                buttonText="Request a Quote"
                buttonLink="/contact"
            />
        </main>
    );
}
