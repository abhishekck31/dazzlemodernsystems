import { ProductHero } from "@/components/products/ProductHero";
import { ProductCard } from "@/components/products/ProductCard";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { ProductApplications } from "@/components/products/ProductApplications";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ShieldCheck, ArrowUpToLine, Shield, Settings, Zap, Clock, Database, Server, Monitor, Building2 } from "lucide-react";

export const metadata = {
    title: "Steel Cementitious Raised Access Floor System | Dazzle Modular",
    description: "Premium steel cementitious raised access panels engineered for superior strength and durability.",
};

export default function SteelCementitiousPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <ProductHero
                title="Steel Cementitious Raised Access Flooring"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/products" },
                    { name: "Raised Access Floor System", href: "/products#raised-access-floor" },
                    { name: "Steel Cementitious", href: "/products/steel-cementitious" }
                ]}
            />

            {/* 2. Product Category Introduction */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center text-xl md:text-2xl text-zinc-600 leading-relaxed md:leading-snug font-light">
                    Steel cementitious raised access panels are engineered for superior strength, durability, and non-combustible performance. Designed for mission-critical environments such as data centers and corporate infrastructure, these panels offer structural reliability with lightweight efficiency.
                </div>
            </section>

            {/* 3. Product Cards Section */}
            <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                        <ProductCard
                            index={0}
                            title="Standard Bare Panels"
                            description="Epoxy-coated unitized steel shell consisting of a flat steel top sheet welded to a formed bottom sheet, filled with proprietary lightweight cementitious core. Manufactured to exact tolerances for maximum strength and durability."
                            imageUrl="/products/bare-panel.jpg"
                            linkUrl="/contact"
                        />
                        <ProductCard
                            index={1}
                            title="Anti-Static High Pressure Laminate & PVC Panels"
                            description="Steel cementitious core panels with anti-static HPL or PVC finish, providing enhanced electrostatic control for sensitive environments such as data centers and IT facilities."
                            imageUrl="/products/hpl-panel.jpg"
                            linkUrl="/contact"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Technical Highlights Section */}
            <TechnicalHighlights
                highlights={[
                    { title: "Non-Combustible Core", icon: ShieldCheck },
                    { title: "High Load Bearing Capacity", icon: ArrowUpToLine },
                    { title: "Precision Manufacturing", icon: Settings },
                    { title: "Lightweight Construction", icon: Zap },
                    { title: "Electrostatic Control (HPL/PVC)", icon: Shield },
                    { title: "Long-Term Durability", icon: Clock },
                ]}
            />

            {/* 5. Applications Section */}
            <ProductApplications
                applications={[
                    { title: "Data Centers", icon: Database },
                    { title: "IT Infrastructure", icon: Server },
                    { title: "Control Rooms", icon: Monitor },
                    { title: "Corporate Offices", icon: Building2 },
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
