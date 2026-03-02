"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ArrowRight, Lock } from "lucide-react";
import { useState } from "react";

export default function WaitlistPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-36 pb-0 flex flex-col items-center">

            <div className="flex-1 w-full max-w-3xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center justify-center pt-10 pb-24">

                <MotionWrapper variants={fadeUp} className="mb-8">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[11px] font-bold text-gray-500 tracking-wider uppercase shadow-sm">
                        <Lock className="w-3 h-3 text-blue-500" />
                        Early Access
                    </span>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.1}>
                    <h1 className="text-5xl md:text-[64px] font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Join the future of <br className="hidden md:block" /> workflow automation
                    </h1>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.2} className="w-full">
                    <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
                        We are currently in private beta. Join the waitlist to secure your spot and get early access to DazzleOS before our public launch.
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[2px] opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative flex items-center bg-white border border-gray-200 rounded-full p-1.5 shadow-sm hover:shadow-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                            <input
                                type="email"
                                required
                                placeholder="Enter your work email"
                                className="w-full bg-transparent px-5 py-3 text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none"
                                disabled={status !== "idle"}
                            />
                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="min-w-[120px] h-full py-3 px-6 bg-gray-900 text-white rounded-full font-bold text-[14px] hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-80 disabled:hover:scale-100"
                            >
                                {status === "loading" ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : status === "success" ? (
                                    "Joined!"
                                ) : (
                                    <>
                                        Join Waitlist
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>

                        {status === "success" && (
                            <p className="text-green-600 font-semibold text-sm mt-4 animate-in fade-in slide-in-from-bottom-2">
                                You're on the list! Keep an eye on your inbox.
                            </p>
                        )}
                    </form>
                </MotionWrapper>
            </div>

            <div className="w-full">
                <ContactCTA />
            </div>

        </main>
    );
}
