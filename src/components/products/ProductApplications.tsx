"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Application {
    title: string;
    icon: LucideIcon;
}

interface ProductApplicationsProps {
    applications: Application[];
}

export function ProductApplications({ applications }: ProductApplicationsProps) {
    return (
        <section className="py-24 md:py-24 bg-zinc-50 border-y border-zinc-200">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Ideal Applications</h2>
                    <p className="mt-4 text-zinc-500 uppercase tracking-widest text-sm font-semibold">Engineered For Critical Environments</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {applications.map((app, index) => {
                        const Icon = app.icon;
                        return (
                            <motion.div
                                key={app.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col items-center justify-center gap-5 p-8 md:p-10 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Icon size={36} className="text-zinc-400" strokeWidth={1.5} />
                                <span className="font-semibold text-zinc-900 text-center text-sm md:text-base tracking-wide">{app.title}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
