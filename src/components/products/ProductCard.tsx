"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    index: number;
}

export function ProductCard({ title, description, imageUrl, linkUrl, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 h-full"
        >
            <div className="relative h-64 md:h-80 w-full bg-zinc-100 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 group-hover:scale-105 transition-transform duration-700" />
                {/* 
                  When product images are available, use:
                  <Image src={imageUrl} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> 
                */}
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-zinc-600 transition-colors">{title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">
                    {description}
                </p>
                <Link
                    href={linkUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-900 group-hover:text-zinc-500 transition-colors mt-auto w-fit"
                >
                    View Details
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
