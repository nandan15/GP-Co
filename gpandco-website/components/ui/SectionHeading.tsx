"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  label,
  title,
  titleHighlight,
  description,
  align = "center",
  theme = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCentered = align === "center";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col",
        isCentered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {label && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "text-label-md uppercase tracking-widest font-semibold mb-4",
            isDark ? "text-white/40" : "text-accent"
          )}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "font-heading font-bold leading-tight",
          "text-display-sm md:text-display-md lg:text-display-lg",
          isDark ? "text-white" : "text-navy-900",
          titleClassName
        )}
      >
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="text-gradient">{titleHighlight}</span>
          </>
        )}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-5 text-body-lg max-w-2xl",
            isDark ? "text-white/60" : "text-navy-700/70",
            isCentered && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
