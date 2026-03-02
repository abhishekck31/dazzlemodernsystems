import { Hero } from "@/components/sections/Hero";
import { TrustedLogos } from "@/components/sections/TrustedLogos";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { Automation } from "@/components/sections/Automation";
import { Stats } from "@/components/sections/Stats";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <Features />
      <Process />
      <Automation />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
