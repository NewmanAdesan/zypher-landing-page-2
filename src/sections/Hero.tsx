
import { Section } from "@/components/ui/section";
import { Shield, Globe, CreditCard } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Reveal } from "@/components/ui/reveal";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    // Using framer-motion approach for smoother large number animation:
    const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
    const rounded = useTransform(spring, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            spring.set(to);
        }
    }, [isInView, to, spring]);

    return <span ref={nodeRef}><motion.span>{rounded}</motion.span>{suffix}</span>;
}

export function Hero() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 relative z-20">
            <Section className="pt-32 md:pt-48 pb-20 overflow-visible relative z-20">
                <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto pt-4">

                    {/* <Reveal delay={0.1}> */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-metallic text-sm md:text-base font-bold tracking-[0.2em] mb-4 uppercase">
                            Welcome to ZYPHER
                        </h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-foreground dark:text-[#FFF5D0] text-sm font-medium tracking-wide">
                            <Shield className="w-4 h-4" />
                            <span>PRIVACY FIRST FINANCE</span>
                        </div>
                    </div>
                    {/* </Reveal> */}

                    <Reveal delay={0.2} width="100%">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.05]">
                            Banking Without <br />
                            <span className="text-muted-foreground">the Bank.</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-bold text-metallic mt-6">
                            Your Crypto. Your Card. Your Privacy.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light mx-auto mt-4">
                            The world's most private, secure, and anonymous crypto card platform.
                            Spend anywhere — <span className="text-foreground font-medium">no KYC, no ID, no tracking.</span>
                        </p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="h-16 px-8 text-lg font-bold bg-metallic text-[#1a1a1a] rounded-lg shadow-[0_0_30px_-5px_rgba(255,245,208,0.3)] flex items-center justify-center gap-2"
                            >
                                👉 Get Started Instantly – No Verification Required
                            </motion.button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.8} width="100%">
                        <div className="pt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
                            <div className="flex items-center gap-3">
                                <Globe className="w-10 h-10 text-foreground dark:text-[#FFF5D0]" />
                                <div className="text-left">
                                    <div className="text-4xl font-black text-foreground leading-none">
                                        <CountUp to={160} suffix="+" />
                                    </div>
                                    <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Countries</span>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-border" />
                            <div className="flex items-center gap-3">
                                <CreditCard className="w-10 h-10 text-foreground dark:text-[#FFF5D0]" />
                                <div className="text-left">
                                    <div className="text-4xl font-black text-foreground leading-none">
                                        <CountUp to={150} suffix="M+" />
                                    </div>
                                    <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Merchants</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </Section>
        </BackgroundLines>
    );
}
