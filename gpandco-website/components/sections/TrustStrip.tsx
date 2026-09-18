"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustStrip() {
  return (
    <section
      className="bg-navy-900 py-12 relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="text-center text-label-md text-white/40 uppercase tracking-widest mb-10"
        >
          Serving Dental Professionals Since {new Date().getFullYear() - 24}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col items-center text-center px-6 relative"
            >
              {/* Vertical divider (desktop) */}
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/10"
                  aria-hidden="true"
                />
              )}

              <AnimatedCounter
                value={stat.value}
                className="font-heading font-bold text-white text-4xl md:text-5xl leading-none tracking-tight mb-2"
              />
              <p className="text-white font-medium text-body-md mb-1">{stat.label}</p>
              <p className="text-white/40 text-body-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
