"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Highlight {
    title: string;
    icon: LucideIcon;
}

interface TechnicalHighlightsProps {
    highlights: Highlight[];
}

export function TechnicalHighlights({ highlights }: TechnicalHighlightsProps) {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">Technical Highlights</h2>
                    <div className="w-20 h-1 bg-zinc-900 mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-start gap-5 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                    <Icon size={24} className="text-zinc-700 group-hover:text-zinc-900 transition-colors" />
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-semibold text-zinc-900 leading-tight">{item.title}</h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
