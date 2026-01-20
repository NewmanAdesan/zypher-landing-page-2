import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is KYC required to use ZYPHER.CARDS?",
        answer: "No. We do not require any ID verification or documents."
    },
    {
        question: "Where can I use my card?",
        answer: "Anywhere Visa or Mastercard is accepted — over 150 million merchants and ATMs worldwide."
    },
    {
        question: "What cryptocurrencies can I deposit?",
        answer: "We support USDC and TETHER."
    },
    {
        question: "Are there spending limits?",
        answer: "There are no daily or monthly spending limits. High-limit cards are available upon request."
    }
];

export function FAQ() {
    return (
        <Section className="py-24 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">FAQ</h2>
                </Reveal>
            </div>

            <div className="mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <Reveal key={i} delay={i * 0.1} width="100%">
                            <AccordionItem value={`item-${i}`} className="border border-border bg-card rounded-lg px-6 transition-colors hover:border-accent/30">
                                <AccordionTrigger className="text-lg font-bold text-foreground dark:hover:text-[#FFF5D0] text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </Reveal>
                    ))}
                </Accordion>
            </div>
        </Section>
    );
}
