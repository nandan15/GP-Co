"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-surface-tertiary flex flex-col gap-5 relative overflow-hidden"
    >
      {/* Large quotation mark */}
      <div
        className="absolute top-4 right-5 text-[80px] leading-none text-navy-900/5 font-heading font-bold select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      <Quote size={20} className="text-accent flex-shrink-0" aria-hidden="true" />

      <blockquote className="text-navy-800 text-body-md leading-relaxed flex-1 relative z-10">
        "{testimonial.quote}"
      </blockquote>

      <footer className="flex items-center gap-3 pt-2 border-t border-surface-tertiary">
        {/* Profile placeholder */}
        <div
          className="w-10 h-10 rounded-full bg-navy-900/8 flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="font-heading font-bold text-navy-700 text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-heading font-bold text-navy-900 text-body-sm leading-tight">
            {testimonial.name}
          </p>
          <p className="text-navy-700/55 text-label-md mt-0.5">{testimonial.designation}</p>
          {testimonial.location && (
            <p className="text-navy-700/40 text-label-md">{testimonial.location}</p>
          )}
        </div>
      </footer>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="py-section bg-surface-secondary"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Client Feedback"
          title="What Dental Professionals"
          titleHighlight="Say About Us"
          description="Feedback from dental professionals who have worked with GP & Co. on their clinic setup and equipment requirements."
          align="center"
          className="mb-16"
        />

        {/* Note: sample content */}
        <p className="text-center text-label-md text-navy-700/35 mb-10 italic">
          Sample testimonials — to be replaced with verified client feedback.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
