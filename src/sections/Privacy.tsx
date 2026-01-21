
import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";
// import { Reveal } from "@/components/ui/reveal";

export function Privacy() {
    return (
        <Section className="py-8 md:py-12 relative overflow-hidden">

            {/* Radial gradient background distinct for this section - adjusted for light/dark */}
            <div className="absolute inset-0 bg-dark-radial pointer-events-none dark:opacity-30 opacity-10 pb-5" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
                {/* <Reveal width="100%" className="flex justify-center"> */}
                <div className="inline-flex items-center px-4 py-2 mt-8 rounded-full border border-border bg-card/5 backdrop-blur-sm">
                    <span className="text-foreground dark:text-[#FFF5D0] text-xs font-bold uppercase tracking-[0.2em] animate-pulse">Built for Privacy-First Users</span>
                </div>
                {/* </Reveal> */}

                <h2 className="text-5xl md:text-7xl font-black leading-tighter">
                    {/* <Reveal width="100%"> */}
                    <span className="block text-foreground">"Finally, a card that</span>
                    {/* </Reveal> */}
                    {/* <Reveal delay={0.2} width="100%"> */}
                    <span className="text-metallic block">respects your privacy."</span>
                    {/* </Reveal> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full -mt-4">
                    {[
                        "No ID checks",
                        "No data harvesting",
                        "No government surveillance",
                        "Used by professionals worldwide"
                    ].map((item, i) => (
                        // <Reveal key={i} delay={0.4 + (i * 0.1)} width="100%" className="h-full">
                        <div key={i} className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all group h-full min-h-[140px] shadow-lg dark:shadow-none text-center">
                            <Check className="w-8 h-8 text-foreground dark:text-[#FFF5D0] opacity-50 group-hover:opacity-100 transition-opacity" />
                            <span className="font-bold text-lg text-foreground group-hover:text-foreground dark:group-hover:text-[#FFF5D0] transition-colors">{item}</span>
                        </div>
                        // </Reveal>
                    ))}
                </div>

                {/* <Reveal delay={0.8}> */}
                <p className="mb-8 text-2xl text-muted-foreground max-w-4xl leading-relaxed mx-auto font-light -mt-6">
                    ZYPHER empowers free financial access with total privacy.
                    Our offshore-based infrastructure guarantees <span className="text-foreground font-medium">zero KYC, encrypted transactions, and absolute control over your crypto.</span>
                </p>
                {/* </Reveal> */}
            </div>
        </Section>
    );
}
