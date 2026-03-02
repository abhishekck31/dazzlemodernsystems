"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { BlogCard } from "@/components/blog/BlogCard";
import { ContactCTA } from "@/components/contact/ContactCTA";

const dummyPosts = [
    {
        id: "building-clarity",
        title: "Building clarity through better SaaS dashboard design",
        date: "Jan 6, 2026",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        featured: true
    },
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
    },
    {
        id: "microinteractions",
        title: "Using microinteractions to improve SaaS usability",
        date: "Jan 2, 2026",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "saas-scalability",
        title: "Designing SaaS products for long-term scalability",
        date: "Jan 1, 2026",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    }
];

export default function BlogListingPage() {
    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-0">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-10 pb-24">

                <MotionWrapper variants={fadeUp} className="mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                        Our Blogs
                    </h1>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-16">
                    {dummyPosts.map((post, i) => (
                        <div key={post.id} className={i === 0 ? "md:col-span-1" : ""}>
                            <BlogCard post={post} isFeatured={i === 0 && false} />
                        </div>
                    ))}
                </MotionWrapper>

            </div>

            <ContactCTA />
        </main>
    );
}
