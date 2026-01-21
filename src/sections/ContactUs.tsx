import { Section } from "@/components/ui/section";

export function ContactUs() {
    return (
        <Section className="py-4">
            <p className="mb-1.5 text-center text-4xl md:text-5xl font-black tracking-tight">
                Contact us at{' '}
                <span className="text-metallic">support@zypher.cards</span>
            </p>
        </Section>
    );
}
