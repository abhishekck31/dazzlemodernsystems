import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { BarChart3, Settings, PieChart, Layers, Zap, CheckCircle2 } from "lucide-react";

const topFeatures = [
    {
        title: "All your data in one",
        description: "Connect your tools and analyze performance across platforms.",
        icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Organize workflows",
        description: "Streamline operations with automated task management.",
        icon: <Layers className="w-5 h-5 text-purple-500" />,
    },
    {
        title: "Optimize processes",
        description: "Identify bottlenecks and improve your overall efficiency.",
        icon: <PieChart className="w-5 h-5 text-green-500" />,
    },
];

export function Features() {
    return (
        <section className="py-24 bg-gray-50/50" id="products">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3 text-center">
                        FEATURES
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        Everything you need in one place
                    </h2>
                </MotionWrapper>

                {/* Top 3 Cards Grid */}
                <MotionWrapper
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
                >
                    {topFeatures.map((feature, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

                {/* Bottom Large Card Grid */}
                <MotionWrapper variants={fadeUp} delay={0.3}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">

                        {/* Dark abstract image side */}
                        <div className="bg-[#0f0f13] p-10 flex items-center justify-center relative min-h-[300px] overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[80px]" />
                            <div className="relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <Zap className="w-12 h-12 text-white" />
                            </div>
                            {/* Floating elements */}
                            <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-xl bg-green-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:-translate-y-4 group-hover:-translate-x-2 transition-transform duration-700">
                                <div className="w-4 h-4 rounded-full bg-green-400" />
                            </div>
                            <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-xl bg-orange-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:translate-y-4 group-hover:translate-x-2 transition-transform duration-700">
                                <div className="w-6 h-6 rounded-full bg-orange-400" />
                            </div>
                        </div>

                        {/* Content side */}
                        <div className="p-10 lg:p-14 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                A simple setup that gets you moving fast
                            </h3>
                            <p className="text-gray-500 mb-8 max-w-md text-lg">
                                Connect your existing tools and let our platform organize it for you.
                                Zero coding required.
                            </p>
                            <ul className="space-y-4">
                                {["One click integrations", "Automated syncs", "Real-time updates"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
