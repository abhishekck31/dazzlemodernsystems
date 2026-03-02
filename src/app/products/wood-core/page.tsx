"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCard } from "@/components/products/ProductCard";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { ProductApplications } from "@/components/products/ProductApplications";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ShieldCheck, ArrowUpToLine, Shield, Settings, Zap, Clock, Database, Server, Monitor, Building2 } from "lucide-react";

export default function WoodCorePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <ProductHero
                title="Wood Core Raised Access Flooring"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Raised Access Floor System", href: "/products#raised-access-floor" },
                    { name: "Wood Core", href: "/products/wood-core" }
                ]}
            />

            {/* 2. Product Category Introduction */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center text-xl md:text-2xl text-zinc-600 leading-relaxed md:leading-snug font-light">
                    Wood Core panels consist of high density composite wood glued to and encased in hot dipped galvanized formed steel sheets. These panels provide excellent rigidity, durability, and acoustic performance for demanding environments.
                </div>
            </section>

            {/* 3. Product Cards Section */}
            <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                        <ProductCard
                            index={0}
                            title="Bare Encapsulated Panels"
                            description="High density composite wood core encased in hot dipped galvanized formed steel sheets. ULC Listed for flame spread and smoke development with excellent acoustic performance."
                            imageUrl="/products/bare-panel.jpg"
                            linkUrl="/products/wood-core/bare-encapsulated-panels"
                        />
                        <ProductCard
                            index={1}
                            title="Laminated Non-Encapsulated Panels"
                            description="High density composite wood core with factory laminated finishes. Combines superior acoustic performance with elegant aesthetics."
                            imageUrl="/products/hpl-panel.jpg"
                            linkUrl="/products/wood-core/laminated-non-encapsulated-panels"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Technical Highlights Section */}
            <TechnicalHighlights
                highlights={[
                    { title: "High Strength to Weight", icon: ArrowUpToLine },
                    { title: "Acoustic Performance", icon: ShieldCheck },
                    { title: "Precision Manufacturing", icon: Settings },
                    { title: "No added urea formaldehyde", icon: Zap },
                    { title: "Internally Grounded", icon: Shield },
                    { title: "Long-Term Durability", icon: Clock },
                ]}
            />

            {/* 5. Applications Section */}
            <ProductApplications
                applications={[
                    { title: "General Offices", icon: Building2 },
                    { title: "Call Centers", icon: Server },
                    { title: "Libraries", icon: Monitor },
                    { title: "Computer Rooms", icon: Database },
                ]}
            />

            {/* 6. CTA Section */}
            <ProductCTA
                heading="Need a Custom Raised Flooring Solution?"
                buttonText="Request a Quote"
                buttonLink="/contact"
            />
        </main>
    );
}
