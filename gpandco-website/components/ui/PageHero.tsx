"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-36 pb-24 md:pb-28 bg-navy-950 overflow-hidden"
      aria-label={`${title} hero`}
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-[#0B1A36] to-navy-950 z-0" />

      {/* Ambient Lighting Orbs */}
      <div
        className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(46,114,204,0.25) 0%, rgba(56,189,248,0.1) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(30,90,168,0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      {/* Precision Grid Pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          {/* Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 text-label-md font-semibold uppercase tracking-widest backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(56,189,248,0.12)]"
          >
            <span
              className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
              aria-hidden="true"
            />
            <span>{badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-white leading-[1.08] mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              letterSpacing: "-0.035em",
              color: "#FFFFFF",
              WebkitTextFillColor: "#FFFFFF",
            }}
          >
            <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>
              {title}
            </span>{" "}
            {titleHighlight && (
              <>
                <br className="hidden sm:inline" />
                <span
                  style={{
                    background: "linear-gradient(135deg, #93C5FD 0%, #38BDF8 50%, #67E8F9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {titleHighlight}
                </span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/85 text-body-lg md:text-body-xl max-w-2xl leading-relaxed mb-8"
          >
            {description}
          </motion.p>

          {/* Optional children (buttons, tags, quick info) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
