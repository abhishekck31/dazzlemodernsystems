import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export const fadeUpQuick: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
