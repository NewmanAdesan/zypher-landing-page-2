import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const features = [
    { id: "01.", title: "Fully Encrypted Wallet System", desc: "Your funds stay secure 24/7." },
    { id: "02.", title: "Instant Virtual Card Issuance", desc: "Get your card in minutes – use online or offline." },
    { id: "03.", title: "Global USD Accounts", desc: "Spend in USD anywhere Visa or Mastercard is accepted." },
    { id: "04.", title: "Deposit Options", desc: "Fund your wallet using USDC, TETHER." },
    { id: "05.", title: "High Transaction Limits", desc: "No daily/monthly spending limits. Higher limits available upon request." },
    { id: "06.", title: "Mobile Payments Enabled", desc: "Works with Apple Pay & Google Pay." },
    { id: "07.", title: "Transaction Monitoring", desc: "View spending and balances at any time." },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function CoreFeatures() {
    return (
        <Section className="pt-8 pb-2 md:pt-18 md:pb-4 relative overflow-hidden">
            {/* Subtle Grid Background */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /> */}
            <div className="-mt-14 mb-10 md:mb-10">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <Reveal width="100%">
                            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Core Features</h2>
                        </Reveal>
                    </div>
                </div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5 md:gap-y-12"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="flex flex-col gap-0.5 md:gap-2 group"
                    >
                        <div className="text-metallic-dark text-3xl font-bold tracking-tight">
                            {feature.id}
                        </div>

                        <h3 className="text-xl font-semibold mt-1 md:mt-2 text-foreground group-hover:text-foreground dark:group-hover:text-[#FFF5D0] transition-colors">{feature.title}</h3>

                        <p className="text-base text-muted-foreground leading-relaxed font-light">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
