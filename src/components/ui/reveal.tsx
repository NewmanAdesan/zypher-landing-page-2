"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    blur?: boolean;
}

export const Reveal = ({
    children,
    width = "fit-content",
    className,
    delay = 0.25,
    duration = 0.5,
    direction = "up",
    blur = true,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const getVariants = () => {
        const base: any = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { duration, delay, ease: "easeOut" }
            },
        };

        if (direction === "up") base.hidden = { ...base.hidden, y: 75 };
        if (direction === "down") base.hidden = { ...base.hidden, y: -75 };
        if (direction === "left") base.hidden = { ...base.hidden, x: 75 };
        if (direction === "right") base.hidden = { ...base.hidden, x: -75 };

        if (blur) base.hidden.filter = "blur(10px)";
        if (blur) base.visible.filter = "blur(0px)";

        return base as Variants;
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const TextReveal = ({
    text,
    className,
    delay = 0,
}: {
    text: string;
    className?: string;
    delay?: number;
}) => {
    const words = text.split(" ");

    // Simple variant for text reveal to avoid layout issues
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn(className)}
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
