import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

export function CardOptions() {
    return (
        <Section className="overflow-hidden py-32">
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
                    <div className="w-[340px] h-[214px] md:w-[480px] md:h-[300px] bg-gradient-to-br from-[#1a1a1a] to-[#000] rounded-3xl relative shadow-2xl border border-[#FFF5D0]/20 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-metallic text-3xl font-black tracking-[0.3em] opacity-80 mb-2">ZYPHER</div>
                            <div className="text-white/30 tracking-widest font-mono">3D SECURE</div>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}
