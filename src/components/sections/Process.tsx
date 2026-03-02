import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Slack, Database, Mail, Folder, Layout, Grid } from "lucide-react";

const tools = [
    { name: "Slack Integration", icon: <Slack className="w-6 h-6 text-pink-500" />, desc: "Real-time sync" },
    { name: "Database Logs", icon: <Database className="w-6 h-6 text-blue-500" />, desc: "Historical records" },
    { name: "Drive Files", icon: <Folder className="w-6 h-6 text-green-500" />, desc: "Cloud storage" },
    { name: "Board Layouts", icon: <Layout className="w-6 h-6 text-purple-500" />, desc: "Project views" },
    { name: "System Metrics", icon: <Grid className="w-6 h-6 text-orange-500" />, desc: "Live dashboard" },
    { name: "Email Automations", icon: <Mail className="w-6 h-6 text-red-500" />, desc: "Direct outreach" },
];

export function Process() {
    return (
        <section className="py-24 bg-white" id="solutions">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">
                        INTEGRATIONS
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        Tools that rebuild your daily operations
                    </h2>
                </MotionWrapper>

                <div className="flex flex-col lg:flex-row gap-8">

                    <MotionWrapper variants={fadeUp} className="flex-1">
                        <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 h-full flex flex-col items-start justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect everything</h3>
                            <p className="text-gray-500 text-lg mb-8">
                                Seamlessly bring your favorite apps into one unified dashboard. From messaging to deep analytics.
                            </p>
                            <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                View All Integrations
                            </button>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper variants={staggerContainer} className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tools.map((tool, i) => (
                            <MotionWrapper
                                key={i}
                                variants={fadeUp}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                                    {tool.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{tool.desc}</p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </MotionWrapper>

                </div>
            </div>
        </section>
    );
}
