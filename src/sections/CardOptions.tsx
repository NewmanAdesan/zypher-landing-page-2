import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";

// import { Reveal } from "@/components/ui/reveal";

export function CardOptions() {
    return (
        <Section className="overflow-hidden py-14 pb-2 md:pb-4 md:pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Content */}
                <div className="lg:order-1 space-y-4">
                    <div>
                        {/* <Reveal width="100%"> */}
                        <span className="text-metallic text-sm font-bold tracking-[0.2em] mb-4 block">AVAILABLE TIERS</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Card Options</h2>
                        {/* </Reveal> */}
                    </div>

                    <div className="space-y-6">
                        {/* <Reveal delay={0.2} width="100%"> */}
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
                        {/* </Reveal> */}
                    </div>
                </div>

                {/* Visual */}
                <div className="relative order-1 lg:order-2 flex justify-center">
                    <img
                        src="/cards-3.png"
                        alt="Zypher App Interface"
                        className="w-full max-w-[550px] h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                        loading="eager"
                        width={480}
                    />
                </div>


            </div>
        </Section>
    );
}



