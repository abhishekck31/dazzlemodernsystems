"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { DemoForm } from "@/components/request-demo/DemoForm";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Identify automation opportunities specific to your unique workflow",
    "See live examples of triggered actions and data syncing",
    "Understand pricing and get a personalized implementation plan"
];

export default function RequestDemoPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-0">

            {/* Dark Hero Section containing the Form */}
            <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden mx-4 lg:mx-8 rounded-xl md:rounded-xl bg-slate-900 mt-4 mb-20 flex flex-col justify-center min-h-[85vh]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0" />
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left Side Content */}
                        <MotionWrapper variants={staggerContainer} className="flex flex-col h-full justify-center">
                            <MotionWrapper variants={fadeUp} className="mb-8">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-slate-300 tracking-wider uppercase backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                    Book a demo
                                </span>
                            </MotionWrapper>

                            <MotionWrapper variants={fadeUp} delay={0.1}>
                                <h1 className="text-5xl lg:text-[64px] font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-sm">
                                    See DazzleOS <br className="hidden md:block" /> in action
                                </h1>
                            </MotionWrapper>

                            <MotionWrapper variants={fadeUp} delay={0.2}>
                                <p className="text-[16px] md:text-[18px] text-slate-400 mb-10 max-w-md font-medium leading-relaxed">
                                    Book a guided tour tailored to your team's specific operations and learn how you can eliminate bottlenecks permanently.
                                </p>
                            </MotionWrapper>

                            {/* Bullet points */}
                            <MotionWrapper variants={staggerContainer} delay={0.3} className="space-y-4 mb-14">
                                {benefits.map((text, i) => (
                                    <MotionWrapper key={i} variants={fadeUp} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-brand-500" />
                                        </div>
                                        <p className="text-[15px] font-medium text-slate-300 leading-relaxed">{text}</p>
                                    </MotionWrapper>
                                ))}
                            </MotionWrapper>

                            {/* Trusted by Logos simplified row */}
                            <MotionWrapper variants={fadeUp} delay={0.5} className="pt-8 border-t border-white/10">
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">Trusted by industry leaders</p>
                                <div className="flex flex-wrap items-center gap-6 opacity-60 grayscale brightness-200">
                                    <h4 className="font-bold text-white text-xl">Acme Corp</h4>
                                    <h4 className="font-bold text-white text-xl">Stark Industries</h4>
                                    <h4 className="font-bold text-white text-xl">Cyberdyne</h4>
                                </div>
                            </MotionWrapper>
                        </MotionWrapper>

                        {/* Right Side Form */}
                        <div className="w-full flex lg:justify-end">
                            <DemoForm />
                        </div>

                    </div>
                </div>
            </section>

            <ContactCTA />
        </main>
    );
}
