"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ContactCTA } from "@/components/contact/ContactCTA";

const changelogData = [
    {
        version: "Version 2.1",
        date: "10 January 2026",
        image: null,
        sections: [
            {
                title: "New",
                items: [
                    "AI Workflow Builder – Automatically generate complete workflows based on your goals and tools.",
                    "Dark Mode Interface for improved focus and late-night productivity.",
                    "Shared Workflows – Create, share, and reuse workflows across teams or departments."
                ]
            },
            {
                title: "Improved",
                items: [
                    "Dashboard and workflow views now load up to 2x faster.",
                    "Smoother real-time syncing between tasks, automations, and integrations.",
                    "Improved accuracy in AI-driven workflow suggestions and triggers."
                ]
            },
            {
                title: "Fixed",
                items: [
                    "Resolved edge cases with workflow restart and duplication.",
                    "Fixed delays in auto-action triggers under high activity."
                ]
            }
        ]
    },
    {
        version: "Version 1.1",
        date: "27 March 2026",
        image: "/changelog-1.png", // Or we can use a placeholder gradient
        sections: [
            {
                title: "New",
                items: [
                    "AI Automation Suggestions – Recommend smarter steps in workflows based on usage patterns.",
                    "Custom Workflow Rules – Add boolean conditions, exceptions, and branching logic."
                ]
            },
            {
                title: "Improved",
                items: [
                    "Streamlined onboarding with a newer step-by-step workflow setup.",
                    "Faster syncing across connected apps and team workspaces.",
                    "More reliable AI decision logic for complex workflows."
                ]
            },
            {
                title: "Fixed",
                items: [
                    "Fixed occasional UI delay when loading large workflows.",
                    "Resolved an issue causing duplicate task creation in repeated automations."
                ]
            }
        ]
    }
];

export default function ChangelogPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-0">
            <div className="max-w-[720px] mx-auto px-6 lg:px-10 pb-20">

                <MotionWrapper variants={fadeUp} className="mb-20">
                    <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight mb-4">
                        Changelog
                    </h1>
                    <p className="text-muted-foreground text-[15px] font-medium max-w-sm">
                        Explore the latest features, performance updates, and AI enhancements.
                    </p>
                </MotionWrapper>

                <div className="space-y-24">
                    {changelogData.map((log, i) => (
                        <MotionWrapper key={i} variants={staggerContainer} className="relative">

                            {/* Header: Date Badge & Version */}
                            <MotionWrapper variants={fadeUp} className="mb-8 border-b border-border pb-6">
                                <span className="inline-block py-1 px-3 rounded-full border border-border text-[10px] font-bold text-muted-foreground tracking-widest uppercase mb-3 shadow-sm">
                                    • {log.date} •
                                </span>
                                <h2 className="text-2xl font-bold tracking-tight text-foreground">{log.version}</h2>
                            </MotionWrapper>

                            {/* Optional Image */}
                            {log.image && (
                                <MotionWrapper variants={fadeUp} className="mb-10 w-full h-[320px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-slate-950 shadow-md border border-border">
                                    {/* Placeholder styling mimicking a graphic */}
                                    <div className="w-full h-full opacity-60 mix-blend-screen" style={{ backgroundImage: "url('/changelog-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
                                </MotionWrapper>
                            )}

                            {/* Sections */}
                            <div className="space-y-10">
                                {log.sections.map((sec, j) => (
                                    <MotionWrapper key={j} variants={fadeUp}>
                                        <h3 className="text-[16px] md:text-[18px] font-bold text-foreground mb-4">{sec.title}</h3>
                                        <ul className="space-y-3 pl-5 list-disc list-outside text-slate-600 text-[14px] font-medium leading-relaxed marker:text-slate-300">
                                            {sec.items.map((item, k) => {
                                                const parts = item.split(" – ");
                                                return (
                                                    <li key={k} className="pl-1">
                                                        {parts.length > 1 ? (
                                                            <>
                                                                <span className="text-foreground font-semibold">{parts[0]}</span>
                                                                {" – " + parts.slice(1).join(" – ")}
                                                            </>
                                                        ) : (
                                                            item
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </MotionWrapper>
                                ))}
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

            </div>

            <ContactCTA />
        </main>
    );
}
