import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Integrations", "Pricing", "Changelog", "Documentation"],
    },
    {
        title: "Solutions",
        links: ["Operations Teams", "Engineering Teams", "Finance Teams", "Sales Teams"],
    },
    {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Contact", "Partners"],
    },
    {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
    },
];

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-50 to-gray-100/50 pt-20 pb-10 border-t border-gray-200" id="contact">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <MotionWrapper variants={fadeUp} className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">
                    <div className="col-span-2 md:col-span-1">
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
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Industrial grade tools designed <br className="hidden lg:block" /> for modern operations teams.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all hover:-translate-y-1">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((column, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <h4 className="font-semibold text-gray-900">{column.title}</h4>
                            <ul className="space-y-3">
                                {column.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors inline-block relative group">
                                            {link}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </MotionWrapper>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Dazzle Modular Systems. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 relative flex items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-500">All systems operational</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
