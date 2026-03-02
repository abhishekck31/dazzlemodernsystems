"use client";

import { useState } from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Do I need a credit card to start?",
        answer: "No. You can start the free trial with just your email. No payment details required.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time from your account settings. You will continue to have access until the end of your billing cycle.",
    },
    {
        question: "Is this suitable for small teams only?",
        answer: "Not at all. While great for small teams, our enterprise features are built to scale with organizations of thousands of employees.",
    },
    {
        question: "How long does setup take?",
        answer: "Basic setup takes less than 5 minutes. Integration with your existing data sources typically takes less than an hour.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we employ bank-level encryption, SOC 2 Type II compliance, and strict data privacy protocols. Your data is always encrypted at rest and in transit.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-24 bg-[#fdfdfd]">
            <div className="max-w-[720px] mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-gray-200 text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-6 shadow-sm">
                        FAQS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        Answers to <br className="hidden md:block" /> common questions
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="space-y-[10px]">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <MotionWrapper
                                key={i}
                                variants={fadeUp}
                                className="group"
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className={`w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[15px] transition-all duration-300 focus:outline-none ${isOpen
                                            ? "bg-[#0a0a0a] text-white rounded-t-[10px] rounded-b-none"
                                            : "bg-white text-gray-900 border border-gray-100 rounded-[10px] hover:border-gray-200 shadow-sm hover:shadow-md"
                                        }`}
                                >
                                    <span className="pr-4">{faq.question}</span>

                                    {isOpen ? (
                                        <div className="w-6 h-6 rounded bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                                            <X className="w-3.5 h-3.5 text-white" />
                                        </div>
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden bg-[#fafafa] border border-gray-100 border-t-0 rounded-b-[10px]"
                                        >
                                            <div className="px-5 py-5 text-[14px] text-gray-600 font-medium leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </MotionWrapper>
                        );
                    })}
                </MotionWrapper>

            </div>
        </section>
    );
}
