"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-20 md:py-24 bg-background" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded border border-slate-200 text-[12px] font-bold text-slate-500 tracking-widest uppercase mb-6 shadow-sm bg-white">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-[1.2]">
                        What Our Clients Say
                    </h2>
                </MotionWrapper>

                <div className="flex justify-center">
                    <MotionWrapper variants={fadeUp} className="max-w-[65ch] w-full">
                        <div className="bg-muted rounded-lg p-10 md:p-14 border border-border shadow-md relative text-center flex flex-col items-center">

                            <div className="w-12 h-12 rounded bg-slate-200 border border-slate-300 flex items-center justify-center mb-10 shadow-sm text-brand-600">
                                <Quote className="w-5 h-5 fill-current opacity-80" />
                            </div>

                            <p className="text-[20px] md:text-[24px] font-semibold text-foreground leading-[1.6] tracking-tight text-balance mb-12">
                                "The engineering quality behind Dazzle Modular Systems' raised flooring is exceptional. Their team ensured a seamless installation and structurally bulletproof results for our high-demand critical facility."
                            </p>

                            <div className="flex items-center gap-4 text-left">
                                <div className="w-12 h-12 rounded bg-slate-300 border border-slate-400 overflow-hidden shrink-0 flex items-center justify-center">
                                    <span className="text-slate-600 font-bold text-sm">PRK</span>
                                </div>
                                <div>
                                    <h4 className="text-[16px] font-bold text-foreground leading-[1.2]">PRK Raju</h4>
                                    <p className="text-[16px] text-muted-foreground font-medium mt-1">Ramoji Film City, Hyderabad</p>
                                </div>
                            </div>

                        </div>
                    </MotionWrapper>
                </div>

            </div>
        </section>
    );
}
