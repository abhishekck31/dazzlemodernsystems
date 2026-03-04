"use client";

import { useState } from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How long does implementation take?",
        answer: "Most of our customers are fully launched within 1-2 weeks. Complex enterprise deployments with legacy on-premise systems may take up to 4 weeks.",
    },
    {
        question: "Do I need engineering resources?",
        answer: "No. DazzleOS is built for operations teams. You can set up workflows, routing, and automation using our intuitive no-code builder.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we are SOC 2 Type II certified and GDPR compliant. We offer end-to-end encryption for all data at rest and in transit.",
    },
    {
        question: "Can I connect my own database?",
        answer: "Absolutely. We support direct connections to PostgreSQL, MySQL, Snowflake, BigQuery, and many other data warehouses via our marketplace integrations.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-24 bg-slate-50/50">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight">
                        Answers to common questions
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Have a question that isn't answered here? <a href="#contact" className="text-brand-600 font-semibold hover:underline">Contact sales.</a>
                    </p>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="space-y-4">
                    {faqs.map((faq, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full text-left px-6 py-6 flex items-center justify-between font-semibold text-lg hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                aria-expanded={openIndex === i}
                            >
                                <span className="text-foreground pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-brand-500" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden bg-white"
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
