"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle, Ruler, Palette, Settings2, Wrench, CheckCircle, Shield,
} from "lucide-react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageCircle,
  Ruler,
  Palette,
  Settings2,
  Wrench,
  CheckCircle,
  Shield,
};

export function ProcessTimeline() {
  return (
    <section
      className="py-section bg-surface-secondary"
      aria-labelledby="process-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="How We Work"
          title="Everything Your Dental Practice Needs."
          titleHighlight="In One Place."
          description="From the first conversation to a fully commissioned dental practice — we manage every step of the journey."
          align="center"
          className="mb-20"
        />

        {/* Desktop timeline — horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent"
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-7 gap-4"
          >
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  custom={i}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step icon circle */}
                  <div className={cn(
                    "relative z-10 flex items-center justify-center w-24 h-24 rounded-2xl mb-6 transition-all duration-300",
                    "bg-white border-2 border-surface-tertiary shadow-card",
                    "group-hover:border-accent group-hover:shadow-glow group-hover:-translate-y-1"
                  )}>
                    <Icon size={28} className="text-navy-700 group-hover:text-accent transition-colors" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-900 text-white text-[10px] font-bold flex items-center justify-center font-heading">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 text-body-md mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-700/60 text-body-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile timeline — vertical */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:hidden space-y-6 relative"
        >
          {/* Vertical line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-navy-200 to-transparent"
            aria-hidden="true"
          />

          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex items-start gap-6 relative"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-surface-tertiary shadow-card flex items-center justify-center relative z-10">
                    <Icon size={22} className="text-navy-700" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-navy-900 text-white text-[9px] font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="pt-3">
                  <h3 className="font-heading font-bold text-navy-900 text-body-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-navy-700/60 text-body-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
