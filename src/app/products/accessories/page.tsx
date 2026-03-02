"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCTA } from "@/components/products/ProductCTA";

export default function AccessoriesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <ProductHero
                title="Raised Floor Accessories"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Raised Floor Accessories", href: "/products/accessories" }
                ]}
            />

            {/* 2. Product Category Introduction */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center text-xl md:text-2xl text-zinc-600 leading-relaxed md:leading-snug font-light">
                    Complete your raised access flooring system with our engineered range of professional accessories. From precision airflow management to safe lifting tools and cable routing.
                </div>
            </section>

            {/* 3. Product Cards Section */}
            <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                        <ProductCard
                            index={0}
                            title="Grating Panel"
                            description="600x600mm panels with 46% open area for optimized underfloor air distribution. Available with optional volume control dampers."
                            imageUrl="/products/bare-panel.jpg"
                            linkUrl="/products/accessories/grating-panel"
                        />
                        <ProductCard
                            index={1}
                            title="Perforated Panel"
                            description="600x600mm panels with 26% open area for controlled underfloor air distribution with high load carrying capacity."
                            imageUrl="/products/hpl-panel.jpg"
                            linkUrl="/products/accessories/perforated-panel"
                        />
                        <ProductCard
                            index={2}
                            title="Brush Grommet"
                            description="Advanced offset double-row brush sealing for climate-controlled rooms. Keeps cool air trapped beneath floor and prevents system failures."
                            imageUrl="/products/hpl-panel.jpg"
                            linkUrl="/products/accessories/brush-grommet"
                        />
                        <ProductCard
                            index={3}
                            title="Panel Lifter"
                            description="Heavy-duty double cup suction panel lifters for safe, quick, and efficient floor maintenance without damaging adjoining panels."
                            imageUrl="/products/bare-panel.jpg"
                            linkUrl="/products/accessories/panel-lifter"
                        />
                        <ProductCard
                            index={4}
                            title="Vision Panel"
                            description="Specialized 600x600mm panels with clear viewing cutouts for visually monitoring critical points beneath the floor."
                            imageUrl="/products/hpl-panel.jpg"
                            linkUrl="/products/accessories/vision-panel"
                        />
                        <ProductCard
                            index={5}
                            title="Round Grommet"
                            description="Neat and safe cable routing through floor panels, available in PVC and Metal finishes."
                            imageUrl="/products/bare-panel.jpg"
                            linkUrl="/products/accessories/round-grommet"
                        />
                    </div>
                </div>
            </section>

            {/* 6. CTA Section */}
            <ProductCTA
                heading="Looking for Something Specific?"
                buttonText="Contact Sales"
                buttonLink="/contact"
            />
        </main>
    );
}
