"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactCTA } from "@/components/contact/ContactCTA";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-0 flex flex-col items-center justify-center">
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-10 md:mt-20">
                <MotionWrapper variants={fadeUp}>
                    <h1 className="text-[120px] md:text-[180px] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500/50 mb-6 drop-shadow-sm">
                        404
                    </h1>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.1}>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                        Page not found
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.2}>
                    <p className="text-muted-foreground text-[15px] max-w-sm mx-auto mb-8 font-medium">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.3}>
                    <Link href="/" className="mt-auto inline-flex items-center gap-3 px-1.5 py-1.5 pr-5 bg-slate-900 text-white rounded-full font-semibold text-[13px] w-fit hover:bg-slate-800 transition-transform duration-200 hover:-translate-y-1 shadow-md">
                        <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                            <ArrowRight className="w-3.5 h-3.5 text-black" />
                        </div>
                        Back to home
                    </Link>
                </MotionWrapper>
            </div>

            <div className="w-full mt-24">
                <ContactCTA />
            </div>
        </div>
    );
}
