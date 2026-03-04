"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    delay?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variants?: any; // kept as any to avoid complex nested Variants casting
}

export function MotionWrapper({
    children,
    className,
    delay = 0,
    variants = fadeUp,
    ...props
}: MotionWrapperProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                ...variants,
                show: {
                    ...variants.show,
                    transition: { ...variants.show?.transition, delay },
                },
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
