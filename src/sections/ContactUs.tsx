import { Section } from "@/components/ui/section";

export function ContactUs() {
    return (
        <Section className="py-4">
            <p className="mb-1.5 text-center text-2xl xxs:text-3xl xs:text-4xl md:text-5xl font-black tracking-tight" style={{ overflowWrap: 'normal', hyphens: 'none' }}>
                Contact us at {' '}
                <a href="mailto:support@zypher.cards" className="text-metallic">support@zypher.cards</a>
            </p>
        </Section>
    );
}
