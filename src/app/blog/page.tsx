"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { BlogCard } from "@/components/blog/BlogCard";
import { ContactCTA } from "@/components/contact/ContactCTA";

const dummyPosts = [
    {
        id: "raised-floor-installation-guide",
        title: "Beginner's guide to raised access floor installation in commercial spaces",
        date: "Jan 6, 2026",
        image: "/blog-raised-floor-install.jpg",
        featured: true
    },
    {
        id: "data-center-flooring",
        title: "Why raised access flooring is essential for modern data center infrastructure",
        date: "Jan 10, 2026",
        image: "/blog-data-center-floor.jpg",
    },
    {
        id: "office-flooring-design",
        title: "Designing smarter offices: the role of modular raised floor systems",
        date: "Jan 8, 2026",
        image: "/blog-office-design.jpg",
    },
    {
        id: "engineering-underfloor",
        title: "Understanding pedestal and stringer systems in steel cementitious flooring",
        date: "Jan 4, 2026",
        image: "/blog-engineering-detail.jpg",
    },
    {
        id: "airflow-management",
        title: "Airflow management through perforated raised floor panels in server environments",
        date: "Jan 2, 2026",
        image: "/blog-airflow-panel.jpg",
    },
    {
        id: "commercial-construction",
        title: "How raised floor systems accelerate timelines in large commercial construction",
        date: "Jan 1, 2026",
        image: "/blog-construction-overview.jpg",
    }
];


export default function BlogListingPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-0">
            <div className="max-w-[1120px] mx-auto px-6 lg:px-10 pb-24">

                <MotionWrapper variants={fadeUp} className="mb-20 text-center">
                    <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-foreground leading-tight mb-4">
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
