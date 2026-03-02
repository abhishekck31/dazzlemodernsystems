"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    delay?: number;
    variants?: any;
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
