import { Section } from "@/components/ui/section";
import Squares from "@/components/ui/squares";
import { Reveal } from "@/components/ui/reveal";


export function WhyZypher() {
    return (
        <Section className="relative overflow-hidden py-32">
            <Squares
                speed={0.15}
                squareSize={40}
                direction="diagonal"
                borderColor="#333"
                hoverFillColor="#222"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="flex justify-between items-center mb-16 border-t border-white/10 pt-8">
                        <span className="text-sm font-light tracking-wider text-white/50">ZYPHER</span>
                        <span className="text-metallic text-sm font-bold tracking-[0.2em]">02</span>
                    </div>

                    <Reveal width="100%">
                        <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9]">
                            Why <br /> ZYPHER?
                        </h2>
                    </Reveal>
                </div>

                <div className="flex flex-col justify-center space-y-12">
                    <Reveal delay={0.2} width="100%">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="text-metallic">01.</span> No KYC. No Limits. No Surveillance.
                            </h3>
                            <p className="text-xl text-muted-foreground font-light pl-12 border-l border-border">
                                Use crypto like cash – without identity checks or background verification.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} width="100%">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                                <span className="text-metallic">02.</span> Global Access. No Nationality Restrictions.
                            </h3>
                            <p className="text-xl text-muted-foreground font-light pl-12 border-l border-border">
                                Available in 160+ countries, accepted at 150M+ merchants and ATMs worldwide.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}
