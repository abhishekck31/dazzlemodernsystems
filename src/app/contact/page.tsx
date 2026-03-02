import { ContactHero } from "@/components/contact/ContactHero";
import { SupportOptions } from "@/components/contact/SupportOptions";
import { FAQSection } from "@/components/contact/FAQSection";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const metadata = {
    title: "Contact Us | Dazzle Modular Systems",
    description: "Get in touch with our team for support, product demos, or documentation.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <SupportOptions />
            <FAQSection />
            <ContactCTA />
        </>
    );
}
