"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { ReactNode } from "react";

interface Highlight {
    title: string;
    icon: ReactNode;
}

interface TechnicalHighlightsProps {
    highlights: Highlight[];
}

export function TechnicalHighlights({ highlights }: TechnicalHighlightsProps) {
    return (
        <section className="py-24 md:py-24 bg-white">
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
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-start gap-5 p-8 rounded-lg bg-slate-50 border border-border hover:border-slate-300 transition-colors group"
                            >
                                <div className="w-12 h-12 shrink-0 rounded bg-white border border-border flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow text-slate-700 group-hover:text-foreground">
                                    {item.icon}
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
