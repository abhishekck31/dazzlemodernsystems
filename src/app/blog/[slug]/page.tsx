"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { BlogCard, BlogPost } from "@/components/blog/BlogCard";

// Mock data to match Figma visual for the related posts
const relatedPosts: BlogPost[] = [
    {
        id: "saas-onboarding",
        title: "Designing SaaS onboarding that users actually finish",
        date: "Jan 10, 2026",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "smart-automation",
        title: "How smart automation reduces friction in SaaS products",
        date: "Jan 8, 2026",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "complex-workflows",
        title: "Turning complex workflows into simple user experiences",
        date: "Jan 4, 2026",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    }
];

export default function BlogDetailPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-0">
            {/* Hero Section */}
            <section className="relative pt-24 pb-32 overflow-hidden mx-4 lg:mx-8 rounded-xl md:rounded-xl bg-slate-900 flex flex-col items-center justify-center min-h-[50vh]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0" />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <MotionWrapper variants={fadeUp} className="mb-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-slate-300 tracking-wider uppercase backdrop-blur-sm">
                            Jan 6, 2026
                        </span>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.1}>
                        <h1 className="text-3xl md:text-[40px] lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15] drop-shadow-sm max-w-[65ch] mx-auto">
                            Building clarity through better SaaS dashboard design
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper variants={fadeUp} delay={0.2}>
                        <p className="text-[16px] md:text-[18px] text-slate-400 font-medium max-w-[65ch] mx-auto">
                            Decisions that guide action, avoid overwhelming users, and increase daily retention.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-20">
                <div className="max-w-[720px] mx-auto px-6 lg:px-10">
                    <MotionWrapper variants={fadeUp} className="prose prose-lg md:prose-xl prose-gray max-w-none text-slate-600">
                        <h2 className="text-2xl md:text-[28px] font-bold text-foreground mb-6 leading-tight tracking-tight mt-10">
                            The most common business debate isn't as black and white as you might think
                        </h2>
                        <p className="mb-6 text-[16px] leading-[1.8] font-medium text-slate-600">
                            You'll hear it every time a new product starts gaining traction. "We need to build features faster!" versus "We need to fix technical debt!" In the early days, you optimize for discovery. You want to see what sticks. But as the user base expands, the cracks begin to show. The codebase becomes fragile.
                        </p>

                        <p className="mb-6 text-[16px] leading-[1.8] font-medium text-slate-600">
                            Users don't care about your technical debt. They care that the workflow they've built their entire department around suddenly fails on a Friday afternoon. When this happens:
                        </p>

                        <ul className="mb-8 space-y-2 text-[16px] leading-[1.8] font-medium text-slate-600 pl-4 list-disc marker:text-slate-300">
                            <li>The mental strain for the user increases over months, silently.</li>
                            <li>Feature adoption tanks for those new features.</li>
                            <li>Support tickets start blocking engineering.</li>
                        </ul>

                        <p className="mb-12 text-[16px] leading-[1.8] font-medium text-slate-600">
                            To truly balance feature development and design, you must view every decision through the lens of a user trying to complete an action. An action should be clear, concise, and immediately actionable. Let's look at how we handled this for our trigger logic.
                        </p>

                        {/* Article Image / Visual representation */}
                        <div className="my-14 rounded-2xl overflow-hidden shadow-sm border border-border bg-[#f5f5f5] p-2 aspect-[16/9] relative group">
                            {/* Abstract mockup resembling "Triggers & Animations" image from Figma */}
                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-red-400 to-rose-600 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                                <div className="w-[80px] h-[80px] bg-white/20 rounded-full mb-4 backdrop-blur-md flex items-center justify-center">
                                    <span className="text-3xl">🗲</span>
                                </div>
                                <h3 className="text-white text-3xl md:text-[40px] font-bold tracking-tight mb-2 drop-shadow-md z-10">
                                    TRIGGERS &
                                </h3>
                                <h3 className="text-white text-3xl md:text-[40px] font-bold tracking-tight drop-shadow-md z-10">
                                    ANIMATIONS
                                </h3>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-[28px] font-bold text-foreground mb-6 leading-tight tracking-tight mt-14">
                            Ten questions you should answer truthfully
                        </h2>

                        <p className="mb-8 text-[16px] leading-[1.8] font-medium text-slate-600">
                            Before committing to an entirely new workflow builder architecture, we had to admit some hard truths about our legacy layout. The previous app had become a Frankenstein of features. Good design rarely comes from adding more buttons. Good design comes from making the right buttons obvious. Ask your product team these questions before the next sprint planning:
                        </p>

                        {/* Callout Box */}
                        <div className="my-10 p-8 md:p-10 rounded-[20px] bg-slate-50 border border-border">
                            <p className="text-[16px] md:text-[18px] leading-[1.8] font-semibold text-slate-700 italic text-center text-balance max-w-[65ch] mx-auto">
                                "If a user is completely exhausted from returning a dozen emails to customers and finally opens your app to resolve an issue, does your dashboard make them sigh in relief, or curse the screen?"
                            </p>
                        </div>

                        <p className="mb-12 text-[16px] leading-[1.8] font-medium text-slate-600">
                            The defining metric for your operations tool shouldn't just be session length. Session length can imply confusion as easily as it implies productivity. The metric should be 'time-to-completed-action'. Everything else is vanity.
                        </p>

                    </MotionWrapper>
                </div>
            </section>

            {/* Other Blogs Section */}
            <section className="py-24 border-t border-border bg-slate-50/50">
                <div className="max-w-[1120px] mx-auto px-6 lg:px-10">
                    <MotionWrapper variants={fadeUp} className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Other blogs
                        </h2>
                    </MotionWrapper>

                    <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {relatedPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </MotionWrapper>
                </div>
            </section>

            <ContactCTA />
        </main>
    );
}
