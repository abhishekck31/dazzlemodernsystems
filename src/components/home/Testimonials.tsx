"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-white" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-gray-200 text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-5 shadow-sm">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        What Our Clients Say
                    </h2>
                </MotionWrapper>

                <div className="flex justify-center">
                    <MotionWrapper variants={fadeUp} className="max-w-3xl w-full">
                        <div className="bg-[#fafafa] rounded-[32px] p-10 md:p-14 border border-gray-100 shadow-sm relative text-center flex flex-col items-center">

                            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 shadow-sm text-blue-500">
                                <Quote className="w-5 h-5 fill-current opacity-80" />
                            </div>

                            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed tracking-tight text-balance mb-10">
                                "The engineering quality behind Dazzle Modular Systems' raised flooring is exceptional. Their team ensured a seamless installation and structurally bulletproof results for our high-demand critical facility."
                            </p>

                            <div className="flex items-center gap-4 text-left">
                                <div className="w-12 h-12 rounded-full bg-gray-200 border border-gray-300 overflow-hidden shrink-0 flex items-center justify-center">
                                    <span className="text-gray-500 font-bold text-sm">PRK</span>
                                </div>
                                <div>
                                    <h4 className="text-[15px] font-bold text-gray-900 leading-tight">PRK Raju</h4>
                                    <p className="text-[13px] text-gray-500 font-medium">Ramoji Film City, Hyderabad</p>
                                </div>
                            </div>

                        </div>
                    </MotionWrapper>
                </div>

            </div>
        </section>
    );
}
