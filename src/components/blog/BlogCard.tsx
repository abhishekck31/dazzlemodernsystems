"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    image: string;
    featured?: boolean;
}

interface BlogCardProps {
    post: BlogPost;
    isFeatured?: boolean;
}

export function BlogCard({ post, isFeatured = false }: BlogCardProps) {
    return (
        <MotionWrapper variants={fadeUp} className="group relative">
            <Link href={`/blog/${post.id}`} className="block">
                <div className={`relative mb-6 rounded-xl overflow-hidden ${isFeatured ? 'h-[260px] md:h-[320px]' : 'h-[210px] md:h-[240px]'} border border-border shadow-sm transition-all duration-500 group-hover:shadow-xl`}>

                    {/* Dark gradient on hover for title preview */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent group-hover:from-slate-900/30 transition-colors duration-500 z-10" />

                    {post.featured && (
                        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#111] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md backdrop-blur-md">
                            Featured Post
                        </div>
                    )}

                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-[0.22,1,0.36,1]"
                        unoptimized
                    />
                </div>

                <p className="text-[12px] font-bold text-slate-400 mb-3 tracking-wide">{post.date}</p>
                <h3 className="text-[19px] md:text-[21px] font-bold text-foreground leading-[1.3] group-hover:text-brand-600 transition-colors">
                    {post.title}
                </h3>
            </Link>
        </MotionWrapper>
    );
}
