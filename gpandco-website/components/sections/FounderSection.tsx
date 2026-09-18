"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/data/company";
import { User } from "lucide-react";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animations";

export function FounderSection() {
  return (
    <section
      className="py-section bg-navy-950 overflow-hidden"
      aria-labelledby="founder-heading"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-white/8"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-accent/20"
                aria-hidden="true"
              />

              {/* Portrait */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy-900 border border-white/15 shadow-2xl group">
                <Image
                  src={company.founder.photo}
                  alt={company.founder.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Name card overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 z-10">
                <div className="glass-card-dark rounded-2xl px-5 py-4 text-center border border-white/15 shadow-xl backdrop-blur-md bg-navy-950/80">
                  <p className="font-heading font-bold text-white text-body-lg leading-tight">
                    {company.founder.name}
                  </p>
                  <p className="text-cyan-300 font-medium text-body-sm mt-1">
                    {company.founder.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-label-md text-white/35 uppercase tracking-widest font-semibold mb-5">
              Leadership
            </p>
            <h2
              id="founder-heading"
              className="font-heading font-bold text-white leading-tight mb-7"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}
            >
              Built on Experience.
              <br />
              <span className="text-white/50">Driven by Better Dental Practices.</span>
            </h2>

            <div className="space-y-4 text-white/55 text-body-lg leading-relaxed mb-10 max-w-lg">
              <p>{company.founder.quote}</p>
              <p>
                Under{" "}
                <span className="text-white/80 font-medium">{company.founder.name}'s</span>{" "}
                direction, GP & Co. has grown from a dental equipment supplier to a comprehensive
                dental solutions partner — providing clinic planning, interiors, equipment, installation
                and long-term maintenance across Karnataka.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-3xl leading-none">
                  {new Date().getFullYear() - 2002}+
                </span>
                <span className="text-white/40 text-body-sm mt-1">Years of experience</span>
              </div>
              <div className="w-px h-12 bg-white/10" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-3xl leading-none">
                  2002
                </span>
                <span className="text-white/40 text-body-sm mt-1">Year founded</span>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                id="founder-learn-more"
                className="inline-flex items-center gap-2 text-white/60 font-medium text-body-sm hover:text-white transition-colors border-b border-white/20 pb-0.5 hover:border-white/50"
              >
                Learn about GP & Co.
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
