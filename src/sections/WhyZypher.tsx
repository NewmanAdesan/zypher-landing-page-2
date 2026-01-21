import { Section } from "@/components/ui/section";
// import { Reveal } from "@/components/ui/reveal";


export function WhyZypher() {
    return (
        <Section className="relative overflow-hidden py-8 pb-2 md:py-10 md:pb-4">
            {/* Background Decor */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-accent/5 to-transparent -z-10" />
            <div className="absolute -left-20 bottom-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-9 items-center">
                <div className="flex flex-col gap-2 overflow-hidden">
                    {/* <Reveal width="100%"> */}
                    <h2 className="text-5xl md:text-7xl font-black xl:mb-2 leading-[0.9]">
                        Why <br /> ZYPHER?
                    </h2>
                    {/* </Reveal> */}

                    {/* <Reveal width="100%"> */}
                    <div className="relative justify-center hidden xl:flex">
                        <img
                            src="/core-features-image.svg"
                            alt="Zypher Core"
                            className="max-w-[550px] h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 ml-48"
                            loading="eager"
                            width={320}
                            height={320}
                        />
                    </div>
                    {/* </Reveal> */}
                </div>


                <div className="flex flex-col justify-center space-y-4 md:space-y-8">
                    {/* <Reveal delay={0.2} width="100%"> */}
                    <div className="space-y-1 md:space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2 md:gap-3">
                            <span className="text-xl md:text-2xl text-metallic">01.</span> No KYC. No Limits. No Surveillance.
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-light pl-5.5 md:pl-8 border-l border-border ml-3">
                            Use crypto like cash – without identity checks or background verification.
                        </p>
                    </div>
                    {/* </Reveal> */}

                    {/* <Reveal delay={0.4} width="100%"> */}
                    <div className="space-y-1 md:space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2 md:gap-3">
                            <span className="text-xl md:text-2xl text-metallic">02.</span> Global Access. No Nationality Restrictions.
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-light pl-5.5 md:pl-8 border-l border-border ml-3">
                            Available in 160+ countries, accepted at 150M+ merchants and ATMs worldwide.
                        </p>
                    </div>
                    {/* </Reveal> */}
                </div>
            </div>
        </Section>
    );
}
