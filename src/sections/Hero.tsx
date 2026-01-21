
import { Section } from "@/components/ui/section";
import { Globe, CreditCard } from "lucide-react";
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
        <Section className="pt-32 md:pt-48 pb-20 overflow-visible relative z-20">
            {/* Ambient Background Glows */}
            <div className="absolute top-20 right-0 md:right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 animate-pulse" />
            <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#7A766B]/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-30" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_480px] gap-12 items-center justify-between">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                        <div>
                            <h3 className="text-metallic text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                                Welcome to ZYPHER Crypto Cards
                            </h3>
                            <Reveal delay={0.2} width="100%" className="-mt-10">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.05]">
                                    Banking Without <br />
                                    <span className="text-muted-foreground">the Bank.</span>
                                </h1>
                                <p className="text-2xl md:text-3xl font-bold text-metallic mt-6">
                                    Your Crypto. Your Card. Your Privacy.
                                </p>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light mt-6 mx-auto lg:mx-0">
                                    The world's most private, secure, and anonymous crypto card platform.
                                    Spend anywhere — <span className="text-foreground font-medium">no KYC, no ID, no tracking.</span>
                                </p>
                            </Reveal>

                            <Reveal delay={0.6} className="mx-auto">
                                <div className="flex flex-col sm:flex-row gap-5 pt-8 justify-center lg:justify-start">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="h-16 px-8 text-lg font-bold bg-metallic text-[#1a1a1a] rounded-lg shadow-[0_0_30px_-5px_rgba(255,245,208,0.3)] flex items-center justify-center gap-2"
                                    >
                                        👉 Get Started Instantly
                                    </motion.button>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <Reveal delay={0.6} width="100%" className="">
                        <div className="relative order-1 lg:order-2 flex justify-center">
                            <img
                                src="/hero-image.svg"
                                alt="Zypher App Interface"
                                className="w-full max-w-[550px] h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                                loading="eager"
                                width={600}
                                height={600}
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Bottom: Stats */}
                <Reveal delay={0.8} width="100%" className="">
                    <div className="py-10 pb-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 border-t border-border/40 mt-4">
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
    );
}
