import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-50 to-gray-100/50 pt-20 pb-10 border-t border-gray-200" id="contact">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 mb-16">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="font-semibold text-xl tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">Dazzle</span>
                        </Link>

                        <div className="text-gray-500 text-[14px] leading-relaxed mb-6 font-medium">
                            <p>Plot no. 10C, Hoskote Industrial Area,</p>
                            <p>Survey no. 85, Chokahally, Kasaba Hobli,</p>
                            <p>Hoskote, Bangalore – 562114,</p>
                            <p>Karnataka, India.</p>
                        </div>

                        <div className="flex items-center gap-4">
                            {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all hover:-translate-y-1">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-gray-900">Products</h4>
                        <ul className="space-y-3">
                            {["Standard Bare Panels", "Anti-static HPL & PVC", "Bare Encapsulated", "Laminated Non-Encap", "Accessories"].map((link, j) => (
                                <li key={j}>
                                    <Link href="#" className="text-gray-500 text-sm font-medium hover:text-blue-600 transition-colors inline-block relative group">
                                        {link}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-gray-900">Quick Links</h4>
                        <ul className="space-y-3">
                            {["About Us", "Applications", "Projects", "Blog", "Contact"].map((link, j) => (
                                <li key={j}>
                                    {/* Usually mapping lowercased route, but dummy paths for now */}
                                    <Link href={`/${link.toLowerCase().replace(" ", "-") === 'home' ? '' : link.toLowerCase().replace(" ", "-")}`} className="text-gray-500 text-sm font-medium hover:text-blue-600 transition-colors inline-block relative group">
                                        {link}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-gray-900">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-500 font-medium">
                            <li><a href="tel:+919448370989" className="hover:text-blue-600 transition-colors">+91 94483 70989</a></li>
                            <li><a href="tel:+919972432825" className="hover:text-blue-600 transition-colors">+91 99724 32825</a></li>
                            <li><a href="tel:08025430989" className="hover:text-blue-600 transition-colors">080 - 25430989</a></li>
                            <li className="pt-2"><a href="mailto:sales@dazzletech.in" className="hover:text-blue-600 transition-colors text-blue-600 font-semibold">sales@dazzletech.in</a></li>
                        </ul>
                    </div>
                </MotionWrapper>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm font-medium">
                        © {new Date().getFullYear()} Dazzle Modular Systems. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm font-medium text-gray-500">
                        <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
