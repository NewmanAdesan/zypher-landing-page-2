
import { Section } from "@/components/ui/section";
import { Globe, CreditCard, Eye } from "lucide-react";
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
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_480px] gap-12 items-center justify-between">

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
                    </Reveal>
                </div>

                {/* Bottom: Stats */}
                <Reveal delay={0.8} width="100%">
                    <div className="pt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 border-t border-border/40 mt-10">
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
