import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Cpu, Zap, Activity } from "lucide-react";

export function Automation() {
    return (
        <section className="relative py-32 overflow-hidden bg-black flex justify-center mt-12 mb-12 rounded-[40px] md:rounded-[60px] mx-4 lg:mx-8">
            {/* Background Gradients & Glows */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#12071f] via-[#090b14] to-[#140b2e]" />

            {/* Subtle floating background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">

                <MotionWrapper variants={fadeUp} className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 p-[1px] shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                        <div className="w-full h-full bg-[#0a0f1d] rounded-2xl flex items-center justify-center">
                            <Cpu className="w-8 h-8 text-purple-400" />
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.1}>
                    <p className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase mb-4 shadow-sm">
                        AI POWERED
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                        Automation that <br className="hidden md:block" /> removes busywork.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                        Train custom AI agents to label, summarize, and route tasks instantly.
                        Free up your team to focus on what matters.
                    </p>
                </MotionWrapper>

                <MotionWrapper
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto"
                >
                    {[
                        {
                            idx: "01",
                            title: "Smart Routing",
                            desc: "Automatically send tickets to the right department based on intent.",
                            icon: <Activity className="w-5 h-5 text-blue-400" />
                        },
                        {
                            idx: "02",
                            title: "Auto-Drafting",
                            desc: "Draft context-aware responses to common operations queries.",
                            icon: <Zap className="w-5 h-5 text-yellow-400" />
                        },
                        {
                            idx: "03",
                            title: "Data Extraction",
                            desc: "Pull key fields from incoming forms without manual entry.",
                            icon: <Cpu className="w-5 h-5 text-purple-400" />
                        },
                    ].map((feature, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-sm font-mono text-gray-500 bg-black/40 px-2 py-1 rounded-md">{feature.idx}</span>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
