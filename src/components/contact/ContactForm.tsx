"use client";

import { useState } from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export function ContactForm() {
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
            className="w-full bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-[24px] p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400">Full Name*</label>
                        <input required type="text" placeholder="Your full name" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/[0.15] transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400">Company Name</label>
                        <input type="text" placeholder="Your company name" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/[0.15] transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400">Email address*</label>
                        <input required type="email" placeholder="example@gmail.com" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/[0.15] transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400">Phone number*</label>
                        <input required type="tel" placeholder="Your number" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/[0.15] transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400">Message*</label>
                    <textarea required rows={4} placeholder="Briefly describe your question or request" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-white/[0.15] transition-all resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                    <div className="relative flex items-start">
                        <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded border border-gray-600 bg-transparent text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900 appearance-none cursor-pointer checked:bg-blue-500 checked:border-blue-500 transition-colors" />
                        <svg className="absolute top-[5px] left-[1px] w-3.5 h-3.5 text-white pointer-events-none opacity-0 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" id="check-icon">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <style jsx>{`
                            input:checked ~ svg { opacity: 1; }
                        `}</style>
                    </div>
                    <label htmlFor="consent" className="text-[13px] text-gray-400 leading-relaxed cursor-pointer select-none mt-[2px]">
                        I agree to receive emails and accept the <a href="#" className="text-gray-300 underline underline-offset-2 hover:text-white transition-colors">Privacy Policy</a>.
                    </label>
                </div>

                <div className="pt-2">
                    <button type="submit" disabled={status === "loading" || status === "success"} className="bg-white text-black text-[15px] font-bold px-7 py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send message"}
                    </button>
                </div>
            </form>
        </MotionWrapper>
    );
}
