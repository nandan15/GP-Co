"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layout, Building2, Settings, Wrench, Shield, GraduationCap, Compass, Stethoscope,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { staggerContainer, fadeUp, scaleIn, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layout, Building2, Settings, Wrench, Shield, GraduationCap, Compass, Stethoscope,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Layout;

  return (
    <motion.div
      variants={scaleIn}
      className="group relative bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-surface-tertiary overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Full card clickable link */}
      <Link
        href={`/services#${service.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Learn more about ${service.title}`}
      >
        <span className="sr-only">Learn more about {service.title}</span>
      </Link>

      {/* Background hover fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/0 to-navy-900/0 group-hover:from-navy-900/[0.02] group-hover:to-navy-900/[0.04] transition-all duration-500 rounded-2xl pointer-events-none" aria-hidden="true" />

      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-navy-900/6 group-hover:bg-navy-900/10 transition-colors mb-5">
        <Icon size={26} className="text-navy-800 group-hover:text-accent transition-colors" />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-navy-900 text-body-xl mb-3 leading-tight group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-navy-700/65 text-body-sm leading-relaxed flex-1 mb-6">
        {service.description}
      </p>

      {/* CTA */}
      <div className="inline-flex items-center gap-2 text-accent font-semibold text-body-sm group/link mt-auto">
        <span className="group-hover:underline underline-offset-2">Learn More</span>
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

interface ServicesGridProps {
  services: Service[];
  columns?: 2 | 3 | 4;
}

export function ServicesGrid({ services, columns = 3 }: ServicesGridProps) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn("grid grid-cols-1 gap-6", colClass)}
    >
      {services.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}
    </motion.div>
  );
}
