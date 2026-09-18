"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  theme?: "dark" | "navy" | "light";
  className?: string;
  primaryId?: string;
  secondaryId?: string;
}

export function CTASection({
  title = "Planning Your Dental Practice?",
  description = "Talk to GP & Co. about your clinic interiors, equipment and complete setup requirements.",
  primaryLabel = "Get a Quote",
  primaryHref = "/contact#quote",
  secondaryLabel = "Contact GP & Co.",
  secondaryHref = "/contact",
  theme = "navy",
  className,
  primaryId = "cta-primary",
  secondaryId = "cta-secondary",
}: CTASectionProps) {
  const isNavy = theme === "navy";
  const isDark = theme === "dark";

  return (
    <section
      className={cn(
        "py-section relative overflow-hidden",
        isNavy && "bg-navy-900 noise-overlay",
        isDark && "bg-navy-950",
        theme === "light" && "bg-surface-secondary",
        className
      )}
      aria-labelledby="cta-heading"
    >
      {/* Decorative gradient orb */}
      {(isNavy || isDark) && (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #1E5AA8 0%, transparent 70%)" }}
          aria-hidden="true"
        />
      )}

      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className={cn(
              "text-label-md uppercase tracking-widest font-semibold mb-4",
              isNavy || isDark ? "text-white/40" : "text-accent"
            )}
          >
            Get Started
          </motion.p>

          <motion.h2
            variants={fadeUp}
            id="cta-heading"
            className={cn(
              "font-heading font-bold leading-tight mb-6",
              "text-display-sm md:text-display-md",
              isNavy || isDark ? "text-white" : "text-navy-900"
            )}
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={cn(
              "text-body-lg mb-10 max-w-xl mx-auto",
              isNavy || isDark ? "text-white/60" : "text-navy-700/70"
            )}
          >
            {description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={primaryHref}
              id={primaryId}
              className={cn(
                "group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 active:translate-y-0",
                isNavy || isDark
                  ? "bg-white text-navy-900 hover:bg-surface hover:shadow-card-hover"
                  : "bg-navy-900 text-white hover:bg-navy-800 hover:shadow-card-hover"
              )}
            >
              {primaryLabel}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={secondaryHref}
              id={secondaryId}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-base transition-all",
                isNavy || isDark
                  ? "border border-white/20 text-white hover:border-white/40 hover:bg-white/6"
                  : "border border-navy-200 text-navy-700 hover:border-navy-300 hover:bg-surface"
              )}
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
