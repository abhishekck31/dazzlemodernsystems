"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Server, Sliders, Presentation, Users, BookOpen, ArrowRight } from "lucide-react";

const applications = [
    {
        title: "Open Office",
        description: "Raised access floor systems are designed keeping in mind the constantly evolving needs of the new age workspace. They can efficiently respond to organizational and technological changes quickly and easily, attenuate noise, improve personal comfort control and enhance the aesthetics of the building.",
        link: "/products/steel-cementitious/standard-bare-panels",
        icon: Building2,
    },
    {
        title: "Data Center",
        description: "Standard laminated panels are epoxy coated unitized Shells consisting of a flat steel top sheet welded to a formed steel bottom sheet. The panel is in filled with a lightweight proprietary cementitious mixture. The top finishes is of High Pressure Anti-Static Laminate or PVC finish.",
        link: "/products/steel-cementitious/anti-static-panels",
        icon: Server,
    },
    {
        title: "Control Room",
        description: "Standard laminated panels are epoxy coated unitized Shells consisting of a flat steel top sheet welded to a formed steel bottom sheet. The panel is in filled with a lightweight proprietary cementitious mixture. The top finishes is of High Pressure Anti-Static Laminate or PVC finish.",
        link: "/products/steel-cementitious/anti-static-panels",
        icon: Sliders,
    },
    {
        title: "Auditorium Room",
        description: "Raised access floor systems are designed keeping in mind the constantly evolving needs of the new age workspace. They can efficiently respond to organizational and technological changes quickly and easily, attenuate noise, improve personal comfort control and enhance the aesthetics of the building.",
        link: "/products/steel-cementitious/standard-bare-panels",
        icon: Presentation,
    },
    {
        title: "Conference Room",
        description: "Raised access floor systems are designed keeping in mind the constantly evolving needs of the new age workspace. They can efficiently respond to organizational and technological changes quickly and easily, attenuate noise, improve personal comfort control and enhance the aesthetics of the building.",
        link: "/products/steel-cementitious/standard-bare-panels",
        icon: Users,
    },
    {
        title: "Class Room",
        description: "Raised access floor systems are designed keeping in mind the constantly evolving needs of the new age workspace. They can efficiently respond to organizational and technological changes quickly and easily, attenuate noise, improve personal comfort control and enhance the aesthetics of the building.",
        link: "/products/steel-cementitious/standard-bare-panels",
        icon: BookOpen,
    }
];

export default function ApplicationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Applications"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Applications", href: "/application" }
                ]}
            />

            <section className="py-24 md:py-24 bg-zinc-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-zinc-200/50 rounded-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-[65ch] mx-auto mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6"
                        >
                            Versatile Solutions for Every Environment
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-zinc-600 font-light leading-relaxed"
                        >
                            Our raised access floor systems are engineered for diverse applications, ensuring optimal performance, safety, and adaptability across all modern workspaces.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {applications.map((app, i) => (
                            <motion.div
                                key={app.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-lg p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-zinc-100 flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                                    <app.icon size={24} className="text-zinc-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">{app.title}</h3>
                                <p className="text-zinc-600 font-light leading-relaxed mb-8 flex-grow">
                                    {app.description}
                                </p>
                                <Link
                                    href={app.link}
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors w-fit"
                                >
                                    Explore Solution
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ProductCTA
                heading="Need a Custom Setup for Your Space?"
                buttonText="Contact Sales"
                buttonLink="/contact"
            />
        </main>
    );
}
