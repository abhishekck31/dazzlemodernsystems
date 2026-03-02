import { Hero } from "@/components/home/Hero";
import { Applications } from "@/components/home/Applications";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { VisionMission } from "@/components/home/VisionMission";
import { Testimonials } from "@/components/home/Testimonials";
import { Clients } from "@/components/home/Clients";
import { ContactCTA } from "@/components/contact/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Applications />
      <AboutPreview />
      <ProductsGrid />
      <VisionMission />
      <Testimonials />
      <Clients />
      <ContactCTA />
    </>
  );
}
