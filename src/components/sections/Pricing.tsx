import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "$49",
        billing: "/mo",
        description: "Perfect for small teams getting started with operations.",
        features: ["5 Custom integrations", "10,000 Syncs/month", "Community support"],
        highlight: false,
        cta: "Start Free Trial",
    },
    {
        name: "Professional",
        price: "$199",
        billing: "/mo",
        description: "Advanced automation for growing industrial businesses.",
        features: ["Unlimited integrations", "100,000 Syncs/month", "24/7 Priority support", "Custom AI agents"],
        highlight: true,
        cta: "Start Free Trial",
    },
    {
        name: "Enterprise",
        price: "Custom",
        billing: "",
        description: "Dedicated infrastructure and SLA for large scale operations.",
        features: ["Unlimited everything", "Dedicated success manager", "White-labeling", "On-premise deployment options"],
        highlight: false,
        cta: "Contact Sales",
    },
];

export function Pricing() {
    return (
        <section className="py-24 bg-gray-50/50" id="pricing">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-20 max-w-2xl mx-auto">
                    <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">
                        PRICING
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                        Simple pricing that grows with your team
                    </h2>
                    <div className="inline-flex bg-gray-100 p-1 rounded-full items-center justify-center">
                        <button className="px-6 py-2 rounded-full text-sm font-semibold bg-white shadow-sm text-black">
                            Monthly
                        </button>
                        <button className="px-6 py-2 rounded-full text-sm font-semibold text-gray-500 hover:text-black">
                            Annually <span className="text-green-600 text-xs ml-1">-20%</span>
                        </button>
                    </div>
                </MotionWrapper>

                <MotionWrapper
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                    {plans.map((plan, i) => (
                        <MotionWrapper
                            key={i}
                            variants={fadeUp}
                            className={cn(
                                "relative rounded-3xl p-8 border transition-all duration-300",
                                plan.highlight
                                    ? "bg-[#110e16] border-white/20 text-white shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)] md:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.5)]"
                                    : "bg-white border-gray-200 text-gray-900 shadow-md hover:shadow-xl hover:-translate-y-1"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold tracking-wider uppercase py-1 px-4 rounded-full shadow-lg">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={cn("text-lg font-semibold mb-2", plan.highlight ? "text-gray-300" : "text-gray-600")}>
                                    {plan.name}
                                </h3>
                                <div className="flex items-end gap-1 mb-4">
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight">{plan.price}</span>
                                    <span className={cn("text-lg font-medium pb-1", plan.highlight ? "text-gray-400" : "text-gray-500")}>
                                        {plan.billing}
                                    </span>
                                </div>
                                <p className={cn("text-sm", plan.highlight ? "text-gray-400" : "text-gray-500")}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-10">
                                <p className="text-sm font-semibold mb-6">What's included</p>
                                <ul className="space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex flex-start gap-4 text-sm">
                                            <div className={cn("shrink-0 p-0.5 rounded-full mt-0.5", plan.highlight ? "bg-purple-500/20 text-purple-400" : "bg-blue-50 text-blue-500")}>
                                                <Check className="w-3.5 h-3.5" strokeWidth={3} />
                                            </div>
                                            <span className={cn(plan.highlight ? "text-gray-300" : "text-gray-600")}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={cn(
                                    "w-full py-4 rounded-2xl font-semibold transition-colors",
                                    plan.highlight
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-black text-white hover:bg-gray-800"
                                )}
                            >
                                {plan.cta}
                            </button>

                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
