"use client";

import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

const facilities = [
    { name: "Press Shop", img: "/facility-1.png", desc: "Hydraulic forming lines for dimensional accuracy." },
    { name: "Spot Welding", img: "/facility-2.png", desc: "Automated robotics for strong point integrity." },
    { name: "Pre-Treatment", img: "/facility-3.png", desc: "Chemical baths against corrosion." },
    { name: "Powder Coating", img: "/facility-1.png", desc: "Electrostatic finishing for durability." },
    { name: "Lamination", img: "/facility-2.png", desc: "High pressure bonding of surface materials." },
    { name: "Quality Testing", img: "/facility-3.png", desc: "Rigorous load & deflection testing." },
];

export function Facilities() {
    return (
        <section className="py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="text-center mb-16">
                    <p className="text-[13px] font-bold tracking-widest text-blue-600 uppercase mb-3">
                        CAPABILITIES
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                        The infrastructure behind the product
                    </h2>
                    <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
                        Our 150,000 sq.ft state-of-the-art manufacturing facility ensures every raised access panel meets strict international tolerances.
                    </p>
                </MotionWrapper>

                <MotionWrapper variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {facilities.map((fac, i) => (
                        <MotionWrapper key={i} variants={fadeUp} className="group cursor-pointer">
                            <div className="relative h-[220px] md:h-[260px] rounded-[24px] overflow-hidden mb-6 bg-gray-900 border border-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <Image
                                    src={fac.img}
                                    alt={fac.name}
                                    fill
                                    className="object-cover group-hover:scale-110 opacity-90 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 mix-blend-multiply" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">{fac.name}</h3>
                                <p className="text-base text-gray-500 mt-2 font-medium">{fac.desc}</p>
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>

            </div>
        </section>
    );
}
