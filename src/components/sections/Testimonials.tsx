"use client";

import { useRef } from "react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "DazzleOS transformed how we manage our factory floor. The AI automation alone saved us hundreds of hours.",
        author: "Sarah Jenkins",
        role: "Operations Director, Globex",
        imgId: "42",
    },
    {
        quote: "We consolidated 5 different tools into one dashboard. Setup took less than a week, and the results are incredible.",
        author: "David Chen",
        role: "VP Engineering, Acme Corp",
        imgId: "33",
    },
    {
        quote: "The best enterprise software we've ever purchased. It's actually user-friendly while being incredibly powerful.",
        author: "Elena Rodriguez",
        role: "COO, Soylent",
        imgId: "12",
    },
    {
        quote: "Real-time syncs with our legacy databases were a breeze. A true game-changer for data connectivity.",
        author: "Markus Schmidt",
        role: "IT Lead, Initech",
        imgId: "26",
    },
];

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden" id="company">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="flex justify-between items-end mb-16">
                    <div className="max-w-[65ch]">
                        <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight">
                            Trusted by teams who run real work
                        </h2>
                    </div>
                    <div className="hidden md:flex gap-3 pb-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors border border-border"
                        >
                            <ChevronLeft className="w-5 h-5 text-slate-700" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 transition-colors border border-border"
                        >
                            <ChevronRight className="w-5 h-5 text-slate-700" />
                        </button>
                    </div>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="relative">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:-mx-10 lg:px-10"
                        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
                    >
                        {testimonials.map((test, i) => (
                            <MotionWrapper
                                key={i}
                                variants={fadeUp}
                                className="snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[400px] h-auto p-8 lg:p-10 rounded-lg bg-slate-50 border border-border flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
                            >
                                {/* Decorative quote mark */}
                                <div className="absolute top-8 right-8 text-7xl font-serif leading-none text-slate-200 group-hover:text-blue-100 transition-colors">
                                    &ldquo;
                                </div>

                                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-12 relative z-10">
                                    {test.quote}
                                </p>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
                                        <Image src={`https://i.pravatar.cc/150?img=${test.imgId}`} alt={test.author} width={48} height={48} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{test.author}</h4>
                                        <p className="text-sm text-muted-foreground">{test.role}</p>
                                    </div>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </MotionWrapper>

            </div>
        </section>
    );
}
