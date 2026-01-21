import { Section } from "@/components/ui/section";
import { Check, Eye } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

export function CardOptions() {
    return (
        <Section className="overflow-hidden py-18 pb-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <div className="order-2 lg:order-1 space-y-10">
                    <div>
                        <Reveal width="100%">
                            <span className="text-metallic text-sm font-bold tracking-[0.2em] mb-4 block">AVAILABLE TIERS</span>
                            <h2 className="text-5xl md:text-6xl font-black mb-6">Card Options</h2>
                        </Reveal>
                    </div>

                    <div className="space-y-6">
                        <Reveal delay={0.2} width="100%">
                            <div className="p-6 rounded-2xl bg-card border border-border shadow-xl">
                                <h3 className="text-2xl font-bold text-foreground mb-2">3D Secure Card</h3>
                                <p className="text-muted-foreground mb-6">The standard for secure online transactions.</p>

                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-foreground dark:text-[#FFF5D0]" />
                                        <span className="text-foreground">Valid for up to 2 years</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-foreground dark:text-[#FFF5D0]" />
                                        <span className="text-foreground">Reloadable anytime</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative order-1 lg:order-2 flex justify-center">
                    <div className="w-[340px] h-[215px] md:w-[480px] md:h-[300px] rounded-3xl relative shadow-2xl overflow-hidden group select-none transition-transform hover:scale-[1.02] duration-500">

                        {/* Background - Gradient and simulated grain */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4a4a4a] via-[#2d2d2d] to-[#121212] z-0"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

                        {/* Decorative Gold Arcs */}
                        <div className="absolute -right-20 -top-32 w-80 h-80 md:w-96 md:h-96 rounded-full border border-[#D4AF37]/30 z-0"></div>
                        <div className="absolute -right-10 -top-40 w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem] rounded-full border border-[#D4AF37]/20 z-0"></div>
                        <div className="absolute right-10 bottom-10 w-64 h-64 rounded-full border border-[#D4AF37]/10 z-0"></div>

                        {/* Sheen Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Card Content */}
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">

                            {/* Logo Row */}
                            <div className="flex justify-between items-start">
                                {/* Z Logo */}
                                <div className="text-white/90">
                                    <svg width="40" height="40" viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg">
                                        <path d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 Z" fill="none" stroke="#D4AF37" strokeWidth="2" fillOpacity="0.2" />
                                        <path d="M35 35 L65 35 L35 65 L65 65" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Balance */}
                            <div className="mt-4">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-3xl md:text-4xl font-medium text-white tracking-widest drop-shadow-md">$3,424.31</span>
                                    <Eye className="w-5 h-5 text-white/50 cursor-pointer hover:text-white transition-colors" />
                                </div>
                            </div>

                            {/* Bottom Details */}
                            <div className="flex justify-between items-end">
                                <div className="space-y-3 md:space-y-4">
                                    <div className="text-white/90 text-lg md:text-xl font-mono tracking-widest drop-shadow-sm">
                                        •••• •••• •••• 2314
                                    </div>
                                    <div className="text-white/70 text-xs md:text-sm font-medium tracking-widest uppercase">
                                        John Doe
                                    </div>
                                </div>

                                {/* Mastercard Logo Simulation */}
                                <div className="flex items-center">
                                    <div className="relative flex">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#EB001B] opacity-90 z-10"></div>
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F79E1B] opacity-90 -ml-3 md:-ml-4 z-20 mix-blend-screen"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}
