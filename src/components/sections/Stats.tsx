"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

function Counter({ from, to, suffix = "", duration = 2 }: { from: number; to: number; suffix?: string; duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration,
                ease: "easeOut",
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = value.toFixed(0) + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [from, to, inView, duration, suffix]);

    return <span ref={nodeRef}>{from}{suffix}</span>;
}

const stats = [
    { value: 99, suffix: "%", label: "Client retention rate", color: "text-green-500" },
    { value: 45, suffix: "M+", label: "Tasks automated daily", color: "text-blue-500" },
    { value: 300, suffix: "%", label: "Increase in productivity", color: "text-purple-500" },
];

export function Stats() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">

                <MotionWrapper
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100"
                >
                    {stats.map((stat, i) => (
                        <MotionWrapper key={i} variants={fadeUp} className="pt-8 md:pt-0">
                            <div className="flex flex-col items-center justify-center">
                                <div className="bg-gray-50 rounded-full py-2 px-4 shadow-sm border border-gray-100 mb-6 group hover:scale-105 transition-transform">
                                    <span className={`text-4xl md:text-5xl font-black ${stat.color} tracking-tighter`}>
                                        <Counter from={0} to={stat.value} suffix={stat.suffix} duration={2 + i * 0.5} />
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                                <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
                                    Measured across all enterprise deployments last quarter.
                                </p>
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
