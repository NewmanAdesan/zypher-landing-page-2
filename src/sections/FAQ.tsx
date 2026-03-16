import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Play, X, Loader2 } from "lucide-react";

const faqs = [
    {
        question: "How do I log in to Zypher?",
        description: "A quick walkthrough of accessing your Zypher account for the first time and on returning visits.",
        videoId: "JOBu7M5OHoE",
        videoTitle: "How to Log In to Zypher",
    },
    {
        question: "How do I buy a Zypher card?",
        description: "Step-by-step guide to purchasing your Zypher card and getting it ready to use.",
        videoId: "Fv97U7knopw",
        videoTitle: "How to Buy a Zypher Card",
    },
    {
        question: "How do I deposit crypto to my wallet?",
        description: "Learn how to deposit USDC or USDT into your Zypher wallet.",
        videoId: "HFt9vtAtcz8",
        videoTitle: "How to Deposit Crypto to Your Zypher Wallet",
    },
    {
        question: "How do I transfer funds to my card?",
        description: "Learn how to move funds from your Zypher wallet directly onto your card.",
        videoId: "tSzOlGh2FuY",
        videoTitle: "How to Transfer Funds to Your Zypher Card",
    },
    {
        question: "How do I add my card to Apple Pay?",
        description: "Set up contactless payments by adding your Zypher card to Apple Pay in seconds.",
        videoId: "eeZfozGeXlo",
        videoTitle: "How to Add Your Zypher Card to Apple Pay",
    },
    {
        question: "How do I find my referral code?",
        description: "Locate your unique referral code to invite friends and earn rewards.",
        videoId: "IT1zhVJZFAo",
        videoTitle: "How to Find Your Zypher Referral Code",
    },
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
};

const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 24 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
        opacity: 0,
        scale: 0.94,
        y: 16,
        transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
    },
};

interface VideoModalProps {
    videoId: string;
    title: string;
    onClose: () => void;
}

function VideoModal({ videoId, title, onClose }: VideoModalProps) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <motion.div
                className="relative w-full max-w-3xl z-10"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-4 px-1">
                    <p className="text-sm font-semibold text-metallic tracking-wide uppercase">
                        Tutorial
                    </p>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                        aria-label="Close video"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Video container */}
                <div className="rounded-xl overflow-hidden border border-border bg-black shadow-2xl relative">
                    <h3 className="px-5 py-4 text-base font-bold text-foreground border-b border-border relative z-10 bg-black">
                        {title}
                    </h3>

                    {/* 16:9 iframe container */}
                    <div className="relative w-full bg-[#0a0a0a]" style={{ paddingBottom: "56.25%" }}>
                        {/* Smooth loader overlay */}
                        <AnimatePresence>
                            {!isVideoLoaded && (
                                <motion.div
                                    className="absolute inset-0 flex flex-col items-center justify-center z-0"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative flex flex-col items-center justify-center">
                                        {/* Glowing behind the loader */}
                                        <div className="absolute w-16 h-16 rounded-full bg-metallic opacity-20 blur-2xl animate-pulse" />

                                        <Loader2 className="w-8 h-8 text-[#FFF5D0] animate-spin relative z-10" />

                                        <span className="text-sm font-medium text-[#FFF5D0]/70 animate-pulse tracking-widest uppercase mt-4">
                                            Loading
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <iframe
                            className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-700 ease-in-out ${isVideoLoaded ? "opacity-100" : "opacity-0"
                                }`}
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={() => setIsVideoLoaded(true)}
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function FAQ() {
    const [activeVideo, setActiveVideo] = useState<{
        videoId: string;
        title: string;
    } | null>(null);

    const openModal = (videoId: string, title: string) => {
        setActiveVideo({ videoId, title });
    };

    const closeModal = () => {
        setActiveVideo(null);
    };

    return (
        <>
            <Section className="py-18 pb-0 pt-0 max-w-4xl mx-auto">
                <div className="text-center mb-28">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">FAQ</h2>
                    </Reveal>
                </div>

                <div className="mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <AccordionItem
                                    value={`item-${i}`}
                                    className="border border-border bg-card rounded-lg px-6 transition-colors hover:border-accent/30"
                                >
                                    <AccordionTrigger className="text-lg font-bold text-foreground dark:hover:text-[#FFF5D0] text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6">
                                        {/* Description */}
                                        <p className="text-muted-foreground text-base leading-relaxed mb-5">
                                            {faq.description}
                                        </p>

                                        {/* Watch Tutorial button */}
                                        <button
                                            onClick={() => openModal(faq.videoId, faq.videoTitle)}
                                            className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-lg border border-accent/40 bg-accent/5 hover:bg-accent/10 hover:border-accent/60 transition-all duration-200"
                                        >
                                            {/* Play icon circle */}
                                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-metallic shrink-0 group-hover:scale-110 transition-transform duration-200">
                                                <Play
                                                    size={13}
                                                    className="text-black fill-black ml-0.5"
                                                />
                                            </span>
                                            <span className="text-sm font-semibold text-metallic tracking-wide">
                                                Watch Tutorial
                                            </span>
                                        </button>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </Section>

            {/* Modal — rendered outside Section via AnimatePresence */}
            <AnimatePresence>
                {activeVideo && (
                    <VideoModal
                        videoId={activeVideo.videoId}
                        title={activeVideo.title}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </>
    );
}