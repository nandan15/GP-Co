"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: AnimatedSectionProps) {
  const variants = {
    hidden: variant === "fadeUp" ? { opacity: 0, y: 32 } : { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut" as const,
      },
    },
  };


  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}
