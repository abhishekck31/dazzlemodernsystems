import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";

const logos = [
    "Acme Corp",
    "Globex",
    "Soylent",
    "Initech",
    "Umbrella",
    "Stark Ind.",
];

export function TrustedLogos() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <MotionWrapper variants={fadeUp} className="text-center mb-10">
                    <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                        TRUSTED BY INDUSTRY LEADERS
                    </p>
                </MotionWrapper>

                <MotionWrapper variants={fadeUp} delay={0.2} className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="group flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            <h3 className="text-[16px] md:text-[18px] font-bold tracking-tight text-foreground drop-shadow-xs">
                                {logo}
                            </h3>
                        </div>
                    ))}
                </MotionWrapper>
            </div>
        </section>
    );
}
