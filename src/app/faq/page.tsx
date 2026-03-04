"use client";

import { useState } from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Plus, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ContactCTA } from "@/components/contact/ContactCTA";

const faqData = [
    {
        category: "General",
        items: [
            { q: "What is Worklane?", a: "Worklane is a smart workflow management platform that helps teams automate processes, organize tasks, and collaborate efficiently from one unified workspace." },
            { q: "Who is Worklane designed for?", a: "Worklane is built for modern operations, engineering, and product teams looking to scale their workflows." },
            { q: "Do I need technical skills to use Worklane?", a: "No, our intuitive no-code builder allows anyone to set up and manage complex workflows easily." },
            { q: "What makes Worklane different from other tools?", a: "We combine the power of enterprise automation with the simplicity of consumer software, focusing heavily on execution speed." }
        ]
    },
    {
        category: "Features & automation",
        items: [
            { q: "How does automation work in Worklane?", a: "You can create triggers and actions based on events occurring within the platform or third-party integrations." },
            { q: "How does AI help in Worklane?", a: "Our AI engine suggests optimal workflow paths, auto-fills repetitive tasks, and surfaces bottlenecks in your processes." },
            { q: "Can I customize workflows?", a: "Absolutely. Every built-in template can be customized completely, or you can build from scratch." },
            { q: "Can I share workflows with my team?", a: "Yes, workflows can be shared across departments, and you can standardize templates for company-wide use." }
        ]
    },
    {
        category: "Collaboration",
        items: [
            { q: "Can my team collaborate in real time?", a: "We support real-time presence, commenting, and task hand-offs so nothing falls through the cracks." },
            { q: "Is Worklane suitable for remote teams?", a: "Yes, Worklane was designed specifically to bridge the gap in asynchronous and remote functional environments." }
        ]
    },
    {
        category: "Support",
        items: [
            { q: "How can I contact support?", a: "You can reach us directly via the in-app chat or by emailing our support team." },
            { q: "Will onboarding support be provided?", a: "Yes, our enterprise plans include dedicated success managers and guided onboarding sessions." },
            { q: "Is there a help center or documentation?", a: "We maintain a comprehensive documentation hub with setup guides, API references, and best practices." },
            { q: "How are bug reports and feature requests handled?", a: "We have an open feedback loop. Users can submit requests in the dashboard, and you can track their status on our public roadmap." }
        ]
    }
];

export default function FAQPage() {
    // State to track which item is open across the entire page (assuming only one open at a time, or we can use a set for multiple)
    const [openId, setOpenId] = useState<string | null>("General-0");

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <main className="min-h-screen bg-background pt-28 pb-0">
            <div className="max-w-[720px] mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-border text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-6 shadow-sm">
                        FAQS
                    </span>
                    <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight">
                        Answers to<br className="hidden md:block" /> common questions
                    </h1>
                </MotionWrapper>

                <div className="space-y-16">
                    {faqData.map((section, sIdx) => (
                        <MotionWrapper key={sIdx} variants={staggerContainer} className="space-y-6">
                            <MotionWrapper variants={fadeUp}>
                                <h2 className="text-2xl font-bold text-foreground text-center mb-6">{section.category}</h2>
                            </MotionWrapper>

                            <div className="space-y-[10px]">
                                {section.items.map((faq, i) => {
                                    const id = `${section.category}-${i}`;
                                    const isOpen = openId === id;
                                    return (
                                        <MotionWrapper key={i} variants={fadeUp} className="group">
                                            <button
                                                onClick={() => toggle(id)}
                                                className={`w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[14px] md:text-[15px] transition-all duration-300 focus:outline-none ${isOpen
                                                        ? "bg-slate-900 text-white rounded-t-[10px] rounded-b-none"
                                                        : "bg-white text-foreground border border-border rounded-[10px] hover:border-border shadow-sm hover:shadow-md"
                                                    }`}
                                            >
                                                <span className="pr-4 leading-tight">{faq.q}</span>

                                                {isOpen ? (
                                                    <div className="w-6 h-6 rounded bg-[#222] border border-white/10 flex items-center justify-center shrink-0">
                                                        <X className="w-3.5 h-3.5 text-white" />
                                                    </div>
                                                ) : (
                                                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        className="overflow-hidden bg-muted border border-border border-t-0 rounded-b-[10px]"
                                                    >
                                                        <div className="px-5 py-5 text-[14px] text-slate-600 font-medium leading-relaxed">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </MotionWrapper>
                                    );
                                })}
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Still have questions Card */}
                <MotionWrapper variants={fadeUp} className="mt-20">
                    <div className="bg-muted rounded-lg border border-border text-center py-12 px-6 shadow-sm">
                        <h3 className="text-[18px] font-bold text-foreground mb-2">Still have questions?</h3>
                        <p className="text-[16px] text-muted-foreground font-medium mb-6 max-w-[280px] mx-auto">
                            Join the Worklane waitlist and get early access to smarter workflow automation.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-1.5 py-1.5 pr-5 bg-slate-900 text-white rounded-full font-semibold text-[13px] w-fit hover:bg-slate-800 transition-transform duration-200 hover:-translate-y-1 shadow-md">
                            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                <ArrowRight className="w-3.5 h-3.5 text-black" />
                            </div>
                            Contact us
                        </Link>
                    </div>
                </MotionWrapper>

            </div>

            <ContactCTA />
        </main>
    );
}
