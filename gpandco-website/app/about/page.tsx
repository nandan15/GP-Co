import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About GP & Co. | Dental Solutions Since 2002",
  description:
    "GP & Co. has been serving the dental industry since 2002, providing end-to-end dental clinic solutions across Karnataka including equipment, interiors, installation and support.",
  openGraph: {
    title: "About GP & Co. | Dental Solutions Since 2002",
    description:
      "Learn about GP & Co. — over two decades of experience in dental equipment supply, clinic interiors and complete dental practice setup across Karnataka.",
  },
};

const values = [
  { title: "Precision", description: "Careful attention to every element of clinic planning and equipment selection." },
  { title: "Reliability", description: "Consistent, dependable service from initial consultation to long-term support." },
  { title: "Professional Service", description: "A professional approach to every project, regardless of scale." },
  { title: "Technology", description: "Focus on modern dental equipment and technology that supports effective clinical practice." },
  { title: "Long-Term Support", description: "A commitment to ongoing maintenance and technical support after installation." },
  { title: "Customer Focus", description: "Understanding and responding to the specific requirements of each dental professional." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <PageHero
        badge="About GP & Co."
        title="Experience. Expertise."
        titleHighlight="End-to-End Dental Solutions."
        description="GP & Co. has been serving the dental industry since 2002 — providing integrated solutions for dental professionals, clinics, hospitals and educational institutions across Karnataka."
      />

      {/* ── Company Introduction ────────────────────────────── */}
      <section className="py-section bg-white" aria-labelledby="company-intro-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeIn">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover">
                <Image
                  src="/images/clinic-multi.png"
                  alt="Multi-chair dental clinic equipped by GP & Co."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-label-md text-accent uppercase tracking-widest font-semibold mb-5">
                Who We Are
              </p>
              <h2
                id="company-intro-heading"
                className="font-heading font-bold text-navy-900 leading-tight mb-7"
                style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", letterSpacing: "-0.025em" }}
              >
                A Complete Dental Solutions Partner Since 2002
              </h2>
              <div className="space-y-4 text-navy-700/70 text-body-lg leading-relaxed mb-8 max-w-lg">
                <p>
                  GP & Co. was established in 2002 with a focus on providing practical, reliable dental
                  solutions to professionals setting up and operating dental practices.
                </p>
                <p>
                  Over more than two decades, we have developed capabilities across every aspect of
                  dental clinic establishment — from equipment supply and installation to clinic interior
                  planning and long-term technical support.
                </p>
                <p>
                  Today, GP & Co. serves dental clinics, dental hospitals and educational institutions
                  across Karnataka, providing integrated solutions from a single, experienced partner.
                </p>
              </div>

              {/* What we provide */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  "Dental Equipment",
                  "Dental Chairs",
                  "Compressors",
                  "Suction Systems",
                  "Handpieces",
                  "Clinic Interiors",
                  "Installation",
                  "Service & Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="text-navy-700/70 text-body-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Founder ─────────────────────────────────────────── */}
      <section
        className="py-section bg-white"
        aria-labelledby="about-founder-heading"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* Portrait */}
            <AnimatedSection className="flex justify-center lg:justify-start">
              <div className="relative w-80">
                <div
                  className="absolute -top-3 -left-3 w-full h-full rounded-3xl border border-navy-100"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-accent/20"
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-navy-900 border border-surface-tertiary shadow-xl group">
                  <Image
                    src={company.founder.photo}
                    alt={company.founder.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Name card */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-4/5 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-surface-tertiary text-center z-10">
                  <p className="font-heading font-bold text-navy-900 text-body-md leading-tight">
                    {company.founder.name}
                  </p>
                  <p className="text-accent font-medium text-body-sm mt-0.5">{company.founder.title}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection>
              <p className="text-label-md text-accent uppercase tracking-widest font-semibold mb-5">
                Leadership
              </p>
              <h2
                id="about-founder-heading"
                className="font-heading font-bold text-navy-900 leading-tight mb-6"
                style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}
              >
                {company.founder.name}
              </h2>
              <p className="text-accent font-medium text-body-md mb-6">{company.founder.title}</p>
              <div className="space-y-4 text-navy-700/65 text-body-lg leading-relaxed max-w-lg">
                <p>{company.founder.quote}</p>
                <p>
                  GP & Co. has been built on a foundation of practical, reliable dental solutions —
                  focusing on what dental professionals actually need to establish and operate
                  effective dental practices.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section
        className="py-section bg-surface-secondary"
        aria-labelledby="values-heading"
      >
        <div className="container-wide">
          <SectionHeading
            label="Our Principles"
            title="What Guides"
            titleHighlight="GP & Co."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.06}>
                <div className="p-7 rounded-2xl bg-white border border-surface-tertiary hover:shadow-card hover:border-navy-100 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-navy-900/6 flex items-center justify-center mb-5">
                    <span className="font-heading font-bold text-navy-700 text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 text-body-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy-700/60 text-body-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <CTASection
        theme="navy"
        title="Your Practice Starts With the Right Foundation."
        description="Talk to GP & Co. about your dental clinic setup, equipment and complete practice requirements."
        primaryLabel="Get a Quote"
        primaryHref="/contact#quote"
        secondaryLabel="Contact GP & Co."
        secondaryHref="/contact"
        primaryId="about-cta-quote"
        secondaryId="about-cta-contact"
      />
    </>
  );
}
