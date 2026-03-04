"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCTA } from "@/components/products/ProductCTA";
import { motion } from "framer-motion";

const galleryImages = [
    {
        title: "Auditorium Room",
        src: "http://dazzletech.in/uploads/gallery/auditorium-room.jpg",
        category: "Auditorium"
    },
    {
        title: "Data Center",
        src: "http://dazzletech.in/uploads/gallery/data-center.jpg",
        category: "Data Center"
    },
    {
        title: "Conference Room",
        src: "http://dazzletech.in/uploads/gallery/conference-room.jpg",
        category: "Meeting"
    },
    {
        title: "Class Room",
        src: "http://dazzletech.in/uploads/gallery/class-room.jpg",
        category: "Education"
    },
    {
        title: "Office Space",
        src: "http://dazzletech.in/uploads/gallery/office.jpg",
        category: "Corporate"
    },
    {
        title: "Control Room",
        src: "http://dazzletech.in/uploads/gallery/control-room.jpg",
        category: "Mission Critical"
    },
    {
        title: "Google Office Hub",
        src: "http://dazzletech.in/uploads/gallery/google.jpg",
        category: "Corporate"
    },
    {
        title: "Google Workspace",
        src: "http://dazzletech.in/uploads/gallery/google-office1.jpg",
        category: "Corporate"
    },
    {
        title: "Google Office Main",
        src: "http://dazzletech.in/uploads/gallery/google-office.jpg",
        category: "Corporate"
    },
    {
        title: "Google Mini Conference",
        src: "http://dazzletech.in/uploads/gallery/google-meet.jpg",
        category: "Meeting"
    },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Project Gallery"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Gallery", href: "/gallery" }
                ]}
            />

            <section className="py-24 md:py-24 bg-white relative overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-50 rounded-[100%] blur-[100px] opacity-70 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-[65ch] mx-auto mb-16 md:mb-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-[40px] font-bold text-zinc-900 mb-6 tracking-tight"
                        >
                            Our Photo Showcase
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed"
                        >
                            Explore our installations across data centers, command nodes, intelligent corporate offices, and dynamic learning environments.
                        </motion.p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {galleryImages.map((image, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-2">
                                        {image.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white tracking-wide">
                                        {image.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ProductCTA
                heading="Ready to Transform Your Space?"
                buttonText="Start Your Project"
                buttonLink="/contact"
            />
        </main>
    );
}
