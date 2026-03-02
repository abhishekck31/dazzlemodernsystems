import { AboutHero } from "@/components/sections/about/AboutHero";
import { CompanyOverview } from "@/components/sections/about/CompanyOverview";
import { Facilities } from "@/components/sections/about/Facilities";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { WhyChooseDazzle } from "@/components/sections/about/WhyChooseDazzle";
import { PolicyValues } from "@/components/sections/about/PolicyValues";
import { Certifications } from "@/components/sections/about/Certifications";
import { ContactCTA } from "@/components/contact/ContactCTA";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <CompanyOverview />
            <Facilities />
            <MissionVision />
            <WhyChooseDazzle />
            <PolicyValues />
            <Certifications />
            <ContactCTA />
        </>
    );
}
