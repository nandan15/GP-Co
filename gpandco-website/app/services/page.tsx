import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

import { PageHero } from "@/components/ui/PageHero";
import { HashScrollHandler } from "@/components/ui/HashScrollHandler";

export const metadata: Metadata = {
  title: "Services | Dental Clinic Setup, Equipment & Support",
  description:
    "GP & Co. provides complete dental clinic services — clinic interiors, equipment supply, installation, commissioning, service and maintenance across Karnataka.",
  openGraph: {
    title: "Services | GP & Co. Dental Solutions",
    description:
      "Complete dental solutions services from GP & Co. — clinic planning, interiors, equipment, installation and ongoing support.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <HashScrollHandler />
      {/* ── Hero ───────────────────────────────────────────── */}
      <PageHero
        badge="What We Do"
        title="Complete Solutions for"
        titleHighlight="Modern Dental Practices."
        description="From the first planning conversation to equipment installation and ongoing support, GP & Co. brings the essential elements of a dental practice together."
      />

      {/* ── Services ───────────────────────────────────────── */}
      <div className="bg-surface">
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.slug}
              className={`py-section scroll-mt-24 ${isEven ? "bg-white" : "bg-surface-secondary"}`}
              aria-labelledby={`service-${service.id}-heading`}
            >
              <div className="container-wide">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <AnimatedSection
                    variant="fadeIn"
                    className={`relative ${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover">
                      <Image
                        src={service.image}
                        alt={`${service.title} — GP & Co. dental solutions`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/10 to-transparent" />
                    </div>
                    {/* Service number */}
                    <div
                      className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-navy-900 text-white flex items-center justify-center shadow-lg"
                      aria-hidden="true"
                    >
                      <span className="font-heading font-bold text-xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </AnimatedSection>

                  {/* Content */}
                  <AnimatedSection className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <p className="text-label-md text-accent uppercase tracking-widest font-semibold mb-4">
                      {service.subtitle}
                    </p>
                    <h2
                      id={`service-${service.id}-heading`}
                      className="font-heading font-bold text-navy-900 leading-tight mb-5"
                      style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-navy-700/70 text-body-lg leading-relaxed mb-8 max-w-lg">
                      {service.longDescription}
                    </p>
                    <ul className="space-y-2.5 mb-8" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="text-accent flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-navy-700/75 text-body-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact#quote"
                      id={`service-${service.id}-cta`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-navy-900 text-white rounded-xl font-semibold text-sm hover:bg-navy-800 transition-all hover:-translate-y-0.5 hover:shadow-card-hover group"
                    >
                      Request Information
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTASection
        theme="navy"
        title="Let's Build Your Practice."
        description="Contact GP & Co. to discuss your clinic requirements — from planning to complete setup."
        primaryLabel="Get a Quote"
        primaryHref="/contact#quote"
        secondaryLabel="Contact GP & Co."
        secondaryHref="/contact"
        primaryId="services-cta-quote"
        secondaryId="services-cta-contact"
      />
    </>
  );
}
