import { ProductHero } from "@/components/products/ProductHero";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCTA } from "@/components/products/ProductCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Products | Dazzle Modular",
    description: "Explore our premium range of raised access floor systems and industrial engineering solutions.",
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Our Products"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" }
                ]}
            />

            <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200">
                <div className="max-w-4xl mx-auto px-6 text-center text-xl md:text-2xl text-zinc-600 leading-relaxed md:leading-snug font-light mb-16 md:mb-24">
                    Engineered for mission-critical environments. Discover our high-performance infrastructure solutions built for strength, durability, and precision.
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        <ProductCard
                            index={0}
                            title="Steel Cementitious Panels"
                            description="Premium steel cementitious raised access panels engineered for superior strength, durability, and non-combustible performance."
                            imageUrl="/products/bare-panel.jpg"
                            linkUrl="/products/steel-cementitious"
                        />
                        {/* Placeholder for future products */}
                        <div className="hidden lg:block"></div>
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </section>

            <ProductCTA
                heading="Need help finding the right solution?"
                buttonText="Contact Sales"
                buttonLink="/contact"
            />
        </main>
    );
}
