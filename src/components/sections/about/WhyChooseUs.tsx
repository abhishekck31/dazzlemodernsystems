"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { ShieldCheck, Zap, Clock, Users, Award } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Dark Image */}
                    <MotionWrapper variants={fadeUp} className="flex-1 w-full relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full z-0 pointer-events-none" />

                        <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-black/90">
                            <Image
                                src="/why-choose-us.png"
                                alt="Advanced Analytics UI"
                                fill
                                className="object-cover opacity-80 mix-blend-luminosity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#110e16]/90 via-transparent to-transparent mix-blend-multiply" />

                            {/* Stat Badge Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
                                <div className="flex -space-x-4 justify-center mb-4">
                                    {[21, 22, 23, 24].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden relative shadow-lg">
                                            <Image src={`https://i.pravatar.cc/100?img=${i}`} alt="user" fill />
                                        </div>
                                    ))}
                                </div>
                                <h3 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2">
                                    10,000+
                                </h3>
                                <p className="text-gray-300 font-medium text-sm md:text-base tracking-wide uppercase">Successful Installations globally</p>
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Right Content */}
                    <MotionWrapper variants={staggerContainer} className="flex-1 w-full">
                        <MotionWrapper variants={fadeUp}>
                            <p className="text-[13px] font-bold tracking-widest text-blue-600 uppercase mb-3">
                                WHY CHOOSE US
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                                Built for companies that demand excellence
                            </h2>
                            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                                From initial design consultation to final installation, we provide an integrated approach without compromising on load stability and safety.
                            </p>
                        </MotionWrapper>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-12">
                            {[
                                { title: "Dedicated Team", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
                                { title: "On-time Delivery", icon: Clock, color: "text-purple-600", bg: "bg-purple-100" },
                                { title: "Large-scale Capable", icon: Zap, color: "text-orange-600", bg: "bg-orange-100" },
                                { title: "Customer First", icon: Award, color: "text-green-600", bg: "bg-green-100" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <MotionWrapper key={i} variants={fadeUp} className="flex items-start gap-4 group cursor-default">
                                        <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 ${item.bg} group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white/50`}>
                                            <Icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <span className="font-bold text-gray-900 text-lg mt-2 tracking-tight group-hover:text-blue-600 transition-colors">{item.title}</span>
                                    </MotionWrapper>
                                );
                            })}
                        </div>

                        <MotionWrapper variants={fadeUp}>
                            <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-900 font-bold rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-gray-400" />
                                View Quality Standards
                            </button>
                        </MotionWrapper>

                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
