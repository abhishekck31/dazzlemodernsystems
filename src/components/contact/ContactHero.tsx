"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ContactForm } from "./ContactForm";

export function ContactHero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden mx-4 lg:mx-8 rounded-[40px] md:rounded-[60px] bg-[#0a0f1d] mt-4 mb-20 flex flex-col justify-center min-h-[85vh]">
            {/* Background Gradients & Grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#12071f] via-[#090b14] to-[#140b2e] z-0" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side Content */}
                    <MotionWrapper variants={staggerContainer} className="flex flex-col h-full justify-center">
                        <MotionWrapper variants={fadeUp} className="mb-8">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-gray-300 tracking-wider uppercase backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                Contact us
                            </span>
                        </MotionWrapper>

                        <MotionWrapper variants={fadeUp} delay={0.1}>
                            <h1 className="text-5xl lg:text-[64px] font-bold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-sm">
                                Let’s discuss <br className="hidden md:block" /> how we can help
                            </h1>
                        </MotionWrapper>

                        <MotionWrapper variants={fadeUp} delay={0.2}>
                            <p className="text-[17px] text-gray-400 mb-20 max-w-md font-medium leading-relaxed">
                                Whether you’re exploring the product, need help, or want to discuss a setup, we’re here to help you move forward.
                            </p>
                        </MotionWrapper>

                        {/* Testimonial Snippet */}
                        <MotionWrapper variants={fadeUp} delay={0.3} className="mt-8 border-t border-white/10 pt-10 w-full max-w-md">
                            <p className="text-gray-300 text-[15px] font-medium leading-[1.7] mb-6 drop-shadow-sm italic">
                                "The team took time to understand our setup before suggesting anything. That made all the difference."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 shrink-0 border border-white/5">
                                    <img
                                        src="https://i.pravatar.cc/150?u=sarah"
                                        alt="Sarah Collins"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-bold text-white leading-tight mb-1">Sarah Collins</h4>
                                    <p className="text-[13px] text-gray-400 font-medium">Co-Founder at Zeta</p>
                                </div>
                            </div>
                        </MotionWrapper>
                    </MotionWrapper>

                    {/* Right Side Form */}
                    <div className="w-full flex lg:justify-end">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
