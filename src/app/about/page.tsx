import { AboutHero } from "@/components/sections/about/AboutHero";
import { CompanyOverview } from "@/components/sections/about/CompanyOverview";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { Certifications } from "@/components/sections/about/Certifications";
import { Facilities } from "@/components/sections/about/Facilities";
import { WhyChooseUs } from "@/components/sections/about/WhyChooseUs";
import { Cta } from "@/components/sections/Cta";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <CompanyOverview />
            <MissionVision />
            <Facilities />
            <WhyChooseUs />
            <Certifications />
            <Cta />
        </>
    );
}
