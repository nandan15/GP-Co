"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { company } from "@/data/company";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-24 md:py-32 flex items-center justify-center overflow-hidden bg-navy-950"
      aria-label="Hero section"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/hero-clinic.png"
          alt="Premium modern dental clinic interior with professional equipment"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/30" />
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(circle at 25% 40%, rgba(30, 90, 168, 0.4) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container-wide w-full pt-16 md:pt-24"
      >
        <div className="max-w-3xl">
          {/* Label Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/35 bg-navy-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.15)] max-w-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs md:text-sm text-cyan-200 font-semibold uppercase tracking-widest whitespace-nowrap">
                Since {company.founded} · Karnataka, India
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold leading-[1.06] mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              WebkitTextFillColor: "#FFFFFF",
            }}
          >
            <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>
              Complete Dental
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #93C5FD 0%, #38BDF8 50%, #67E8F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Solutions.
            </span>
            <br />
            <span style={{ color: "rgba(255, 255, 255, 0.85)", WebkitTextFillColor: "rgba(255, 255, 255, 0.85)" }}>
              From Vision to Practice.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/85 text-body-lg md:text-body-xl max-w-2xl mb-10 leading-relaxed font-normal"
          >
            From thoughtfully designed dental interiors to advanced equipment, installation
            and long-term support, GP & Co. helps transform dental spaces into complete,
            functional practices.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/services"
              id="hero-cta-explore"
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-white via-blue-50 to-white text-navy-950 rounded-xl font-bold text-base hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
            >
              Explore Our Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-navy-950" />
            </Link>
            <Link
              href="/contact#quote"
              id="hero-cta-quote"
              className="inline-flex items-center gap-2.5 px-7 py-4 border border-cyan-400/30 bg-cyan-950/30 text-white rounded-xl font-semibold text-base hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all backdrop-blur-md shadow-lg"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Glass Stats Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-4"
            aria-label="Key statistics"
          >
            {[
              { value: `${company.yearsExperience}`, label: "Years Experience" },
              { value: "500+", label: "Clinics Setup" },
              { value: "1000+", label: "Installations" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/8 backdrop-blur-md border border-white/12 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-white text-2xl leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-cyan-300 text-label-md uppercase tracking-wider mt-1 font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-label-md uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
