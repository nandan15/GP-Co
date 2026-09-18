"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckSquare, Cpu, Home, Wrench, Map } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const reasons = [
  {
    number: "01",
    icon: Award,
    title: "Established Since 2002",
    description:
      "Over two decades of focused experience in the dental solutions industry, building lasting relationships with dental professionals across Karnataka.",
  },
  {
    number: "02",
    icon: CheckSquare,
    title: "End-to-End Solutions",
    description:
      "From clinic planning and interiors through equipment supply, installation and ongoing maintenance — a complete practice solution from one partner.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Advanced Dental Technology",
    description:
      "Supplying modern dental equipment designed for contemporary clinical practice, with a focus on reliability and clinical effectiveness.",
  },
  {
    number: "04",
    icon: Home,
    title: "Equipment + Interiors",
    description:
      "The ability to coordinate both dental equipment and clinic interior requirements means better integration and a more coherent practice environment.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Installation & Support",
    description:
      "Professional installation and commissioning, followed by ongoing service and maintenance support to keep your practice running efficiently.",
  },
  {
    number: "06",
    icon: Map,
    title: "Karnataka-wide Service",
    description:
      "Serving dental professionals across Karnataka, providing local, accessible support for equipment and clinic requirements.",
  },
];

export function WhyGPSection() {
  return (
    <section
      className="py-section bg-white"
      aria-labelledby="why-gp-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Why GP & Co."
          title="Experience That Goes"
          titleHighlight="Beyond Equipment."
          description="GP & Co. is not simply a dental equipment supplier. We help dental professionals plan, equip, install and support complete dental practices."
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.number}
              variants={fadeUp}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-surface-tertiary hover:border-navy-200 hover:shadow-card bg-white transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900/6 group-hover:bg-navy-900/10 transition-colors">
                  <reason.icon size={22} className="text-navy-800 group-hover:text-accent transition-colors" />
                </div>
                <span className="font-heading font-bold text-4xl text-navy-900/6 leading-none select-none">
                  {reason.number}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-900 text-body-xl mb-2 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-navy-700/65 text-body-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
