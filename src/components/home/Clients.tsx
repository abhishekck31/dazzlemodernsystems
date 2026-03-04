"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";

const dummyClients = [
    { name: "Acme Corp", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Stark Ind", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Cyberdyne", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Wayne Ent", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "Umbrella", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Global", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" }
];

export function Clients() {
    return (
        <section className="py-20 md:py-24 bg-muted border-y border-border" id="clients">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <h2 className="text-[14px] md:text-[15px] font-bold tracking-widest text-muted-foreground uppercase">
                        Trusted by industry leaders
                    </h2>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
                    {dummyClients.map((client, i) => (
                        <MotionWrapper key={i} variants={fadeUp} className="group relative">
                            {/* In a real project you'd use <Image /> here for exact logos. Setting up standard img for generic display */}
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-7 sm:h-8 lg:h-9 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
