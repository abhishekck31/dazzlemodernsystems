"use client";

import { useState } from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export function DemoForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <MotionWrapper
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-lg p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            {status === "success" ? (
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-10">
                    <div className="w-16 h-16 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Request Received</h3>
                    <p className="text-slate-400 text-[15px] font-medium max-w-sm">
                        Thank you for your interest! One of our product specialists will be in touch shortly to schedule your personalized demo.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400">First Name*</label>
                            <input required type="text" placeholder="First name" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-white/[0.15] transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400">Last Name*</label>
                            <input required type="text" placeholder="Last name" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-white/[0.15] transition-all" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-400">Work Email*</label>
                        <input required type="email" placeholder="name@company.com" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-white/[0.15] transition-all" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400">Company Name*</label>
                            <input required type="text" placeholder="Company" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-white/[0.15] transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400">Company Size*</label>
                            <select required className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-white/[0.15] transition-all appearance-none">
                                <option value="" disabled selected hidden className="text-foreground">Select size</option>
                                <option value="1-50" className="text-foreground">1 - 50 employees</option>
                                <option value="51-250" className="text-foreground">51 - 250 employees</option>
                                <option value="251-1000" className="text-foreground">251 - 1000 employees</option>
                                <option value="1000+" className="text-foreground">1000+ employees</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-400">What are you hoping to achieve?*</label>
                        <textarea required rows={3} placeholder="Tell us about your current workflow challenges" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-white/[0.15] transition-all resize-none"></textarea>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                        <div className="relative flex items-start">
                            <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded border border-gray-600 bg-transparent text-brand-500 focus:ring-blue-500 focus:ring-offset-gray-900 appearance-none cursor-pointer checked:bg-brand-500 checked:border-blue-500 transition-colors" />
                            <svg className="absolute top-[5px] left-[1px] w-3.5 h-3.5 text-white pointer-events-none opacity-0 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" id="check-icon">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <style jsx>{`
                                input:checked ~ svg { opacity: 1; }
                            `}</style>
                        </div>
                        <label htmlFor="consent" className="text-[13px] text-slate-400 leading-relaxed cursor-pointer select-none mt-[2px]">
                            I agree to receive communications from DazzleOS and accept the <a href="#" className="text-slate-300 underline underline-offset-2 hover:text-white transition-colors">Privacy Policy</a>.
                        </label>
                    </div>

                    <div className="pt-2">
                        <button type="submit" disabled={status === "loading"} className="w-full bg-white text-black text-[15px] font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            {status === "loading" ? "Submitting..." : "Schedule your demo"}
                        </button>
                    </div>
                </form>
            )}
        </MotionWrapper>
    );
}
