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
        <Section className="py-24">
            <div className="mb-20">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <Reveal width="100%">
                            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Core Features</h2>
                        </Reveal>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-metallic text-lg tracking-[0.2em] font-light">03</span>
                    </div>
                </div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="flex flex-col gap-4 group"
                    >
                        <div className="text-metallic text-5xl font-bold tracking-tight">
                            {feature.id}
                        </div>

                        <h3 className="text-2xl font-semibold mt-2 text-foreground group-hover:text-foreground dark:group-hover:text-[#FFF5D0] transition-colors">{feature.title}</h3>

                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
