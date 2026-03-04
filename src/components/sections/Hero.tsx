import Image from "next/image";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer, fadeUpQuick } from "@/lib/animations";

export function Hero() {
    return (
        <section className="relative pt-28 pb-24 overflow-hidden bg-[#5a5a5a] rounded-b-2xl md:rounded-b-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-[#4e4d4d] to-[#5a5a5a] z-0" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 flex flex-col items-center xl:flex-row xl:items-start gap-12 lg:gap-8 pt-10 pb-20">

                {/* Left Content */}
                <MotionWrapper
                    variants={staggerContainer}
                    className="flex-1 w-full flex flex-col text-left xl:pt-20 lg:pr-10"
                >
                    <MotionWrapper variants={fadeUpQuick} className="mb-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            Introducing DazzleOS
                        </span>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUpQuick}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Take control of your daily <span className="text-brand-300">Operations.</span>
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUpQuick}>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-[65ch] font-medium">
                            All your data, tools and people in one place. Streamline your workflow now.
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUpQuick} className="flex flex-col sm:flex-row items-center gap-4 mb-16 xl:max-w-md">
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                            Contact Sales
                        </button>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUpQuick} className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#5a5a5a] overflow-hidden">
                                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} width={40} height={40} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex gap-1 text-yellow-400 text-sm mb-1">
                                {"★★★★★".split("").map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>
                            <p className="text-xs text-slate-300 font-medium tracking-wide">
                                40.8K+ HAPPY USERS <span className="mx-1">•</span> 4.9/5 RATING
                            </p>
                        </div>
                    </MotionWrapper>
                </MotionWrapper>

                {/* Right Content - Mockup */}
                <MotionWrapper
                    variants={fadeUp}
                    delay={0.3}
                    className="flex-1 w-full relative"
                >
                    {/* subtle glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-500/20 blur-[100px] rounded-full z-0 pointer-events-none" />

                    <div className="relative z-10 w-full rounded-2xl md:rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black/40 xl:translate-x-10 xl:-translate-y-4">
                        <Image
                            src="/hero-dashboard.png"
                            alt="DazzleOS Dashboard"
                            width={1000}
                            height={700}
                            className="w-full h-auto object-cover object-left-top"
                            priority
                        />
                    </div>
                </MotionWrapper>

            </div>
        </section>
    );
}
