"use client";

import { ProductHero } from "@/components/products/ProductHero";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ProductHero
                title="Contact Us"
                breadcrumbs={[
                    { name: "Home", href: "/" },
                    { name: "Contact", href: "/contact" }
                ]}
            />

            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 rounded-l-[100px] opacity-50 pointer-events-none hidden lg:block" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Contact Information (Left Column) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-4 flex flex-col gap-12"
                        >
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                                    Get in Touch.
                                </h2>
                                <p className="text-lg text-zinc-600 font-light leading-relaxed">
                                    Reach out to DB Dazzle for more details regarding inquiries, specifications, quotes, or product support.
                                </p>
                            </div>

                            <div className="flex flex-col gap-8">
                                {/* Address */}
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                                        <MapPin size={24} className="text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">Address</h4>
                                        <p className="text-zinc-900 leading-relaxed font-medium">
                                            Plot no. 10C, <br />
                                            Hoskote Industrial Area, Survey no. 85<br />
                                            Chokahally, Kasaba Hobli, Hoskote,<br />
                                            Bangalore – 562114.<br />
                                            Karnataka, India.
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                                        <Phone size={24} className="text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">Contact Info</h4>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:+919448370989" className="text-zinc-900 font-medium hover:text-zinc-500 transition-colors">Phone: +91 9448370989</a>
                                            <a href="tel:+919972432825" className="text-zinc-900 font-medium hover:text-zinc-500 transition-colors">Mobile: +91 9972432825</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email & Web */}
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                                        <Mail size={24} className="text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">Digital Reach</h4>
                                        <div className="flex flex-col gap-1">
                                            <a href="mailto:sales@dazzletech.in" className="text-zinc-900 hover:text-zinc-500 transition-colors font-medium">
                                                Email: sales@dazzletech.in
                                            </a>
                                            <a href="http://www.dazzletech.in" target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:text-zinc-500 font-medium transition-colors flex items-center gap-2">
                                                <Globe size={16} className="text-zinc-400 shrink-0" />
                                                Website: www.dazzletech.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form (Right Column) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-zinc-100 relative">
                                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        {/* Email */}
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all placeholder:text-zinc-400 text-zinc-900"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="country" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Country</label>
                                        <select
                                            id="country"
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all appearance-none text-zinc-600 focus:text-zinc-900"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>-- Select Country --</option>
                                            <option value="India">India</option>
                                            <option value="United States">United States</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Source */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="source" className="text-xs font-bold uppercase tracking-widest text-zinc-500">How did you learn about DB Dazzle Modular Systems</label>
                                        <select
                                            id="source"
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all appearance-none text-zinc-600 focus:text-zinc-900"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>-- Select Option --</option>
                                            <option value="Email">Email</option>
                                            <option value="Friend/associate">Friend / associate</option>
                                            <option value="Partner">Partner</option>
                                            <option value="Press release/news article">Press release / news article</option>
                                            <option value="Search engine">Search engine</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Product */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="product" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Product</label>
                                        <select
                                            id="product"
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all appearance-none text-zinc-600 focus:text-zinc-900"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>-- Select Product --</option>
                                            <option value="Standard Bare Panels">Standard Bare Panels</option>
                                            <option value="Anti-static High pressure laminate and PVC Panels">Anti-static High pressure laminate and PVC Panels</option>
                                            <option value="Bare Encapsulated Panels">Bare Encapsulated Panels</option>
                                            <option value="Laminated Non-Encapsulated Panels">Laminated Non-Encapsulated Panels</option>
                                            <option value="Grating Panel">Grating Panel</option>
                                            <option value="Perforated Panel">Perforated Panel</option>
                                            <option value="Brush Grommet">Brush Grommet</option>
                                            <option value="Panel lifter">Panel lifter</option>
                                            <option value="Vision Panel">Vision Panel</option>
                                            <option value="Round Grommet">Round Grommet</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Message (Optional)</label>
                                        <textarea
                                            id="message"
                                            rows={3}
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all placeholder:text-zinc-400 text-zinc-900 resize-none"
                                            placeholder="Tell us about your project requirements..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="mt-4 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-5 rounded-xl font-bold tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-3 transition-all group w-full sm:w-auto"
                                    >
                                        Send Messages
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
