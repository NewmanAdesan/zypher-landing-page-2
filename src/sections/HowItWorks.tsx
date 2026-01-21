import { Section } from "@/components/ui/section";
import { UserPlus, Wallet as WalletIcon, CreditCard, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const steps = [
    { icon: UserPlus, title: "Create Your Account", desc: "No documents. Just an email or phone number." },
    { icon: WalletIcon, title: "Deposit Crypto", desc: "Choose from supported cryptocurrencies – for full anonymity, use Monero or decentralized wallets." },
    { icon: CreditCard, title: "Issue & Load Your Card", desc: "Get your card instantly and fund it in seconds." },
    { icon: ShoppingBag, title: "Spend Anywhere, Anonymously", desc: "Online or in-store. From Amazon to Airbnb, groceries to ads – spend freely and privately." },
];

export function HowItWorks() {
    return (
        <Section className="pb-1 md:pb-8 pt-0 relative">
            <div className="text-center -mt-18 -mb-1 md:mb-18">
                <Reveal width="100%">
                    <h2 className="text-5xl md:text-6xl font-black mb-6">How It Works</h2>
                </Reveal>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-accent/30 to-transparent z-0" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 mt-32">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Step Circle */}
                            <div className="relative mb-8">
                                <div className="w-20 h-20 rounded-full bg-card border border-border group-hover:border-accent flex items-center justify-center transition-all duration-500 shadow-2xl z-20 relative">
                                    <step.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors duration-500" />
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-metallic text-[#1a1a1a] font-bold flex items-center justify-center text-sm shadow-lg z-30">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{step.title}</h3>
                            <p className="text-muted-foreground font-light leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
