import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <Section className="py-32 relative overflow-hidden">
            {/* Background noise */}
            <div className="absolute inset-0 bg-background z-0" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <Reveal width="100%">
                    <h2 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
                        Ready to Take Control?
                    </h2>
                </Reveal>

                <Reveal delay={0.2} width="100%">
                    <p className="text-xl md:text-2xl text-muted-foreground font-light mx-auto max-w-2xl">
                        Join thousands of users worldwide using ZYPHER.CARDS to protect their privacy and spend crypto freely.
                    </p>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="pt-8 mx-auto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-20 px-12 text-xl font-bold bg-metallic text-[#1a1a1a] rounded-full shadow-[0_0_40px_-5px_rgba(255,245,208,0.3)]"
                        >
                            Start Now – No KYC, No Barriers Get Your Card
                        </motion.button>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
