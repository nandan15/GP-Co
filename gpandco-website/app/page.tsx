import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { featuredProducts } from "@/data/products";
import { homepageInteriors } from "@/data/interiors";

// Section components
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesGrid } from "@/components/sections/ServiceCard";
import { ProductGrid } from "@/components/sections/ProductCard";
import { WhyGPSection } from "@/components/sections/WhyGPSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "GP & Co. | Complete Dental Solutions from Vision to Practice",
  description: company.siteDescription,
  openGraph: {
    title: "GP & Co. | Complete Dental Solutions from Vision to Practice",
    description: company.siteDescription,
    type: "website",
  },
};

export default function HomePage() {
  const coreServices = services.slice(0, 6);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <Hero />

      {/* ── Trust Strip ─────────────────────────────────────── */}
      <TrustStrip />

      {/* ── Process Timeline ─────────────────────────────────── */}
      <ProcessTimeline />

      {/* ── Core Solutions ───────────────────────────────────── */}
      <section
        className="py-section bg-white"
        aria-labelledby="solutions-heading"
      >
        <div className="container-wide">
          <SectionHeading
            label="Our Services"
            title="Built Around"
            titleHighlight="Your Practice."
            description="GP & Co. provides the complete range of services dental professionals need to plan, build, equip and maintain a modern dental clinic."
            align="center"
            className="mb-16"
          />
          <ServicesGrid services={coreServices} columns={3} />
          <AnimatedSection className="flex justify-center mt-12">
            <Link
              href="/services"
              id="home-view-all-services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-navy-200 text-navy-800 rounded-xl font-semibold text-sm hover:bg-surface-secondary hover:border-navy-300 transition-all group"
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Interiors Portfolio Preview ────────────────────────────── */}
      <section
        className="py-section bg-[#060D1E] overflow-hidden"
        aria-labelledby="interiors-preview-heading"
      >
        <div className="container-wide">
          {/* Header */}
          <AnimatedSection className="mb-14">
            <p className="text-white/30 text-label-md uppercase tracking-widest mb-4">GP & Co. Interiors</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                id="interiors-preview-heading"
                className="font-heading text-white leading-tight tracking-[-0.025em]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Spaces Designed for
                <br />
                <span className="text-white/45">Better Dentistry.</span>
              </h2>
              <Link
                href="/interiors"
                id="home-explore-interiors"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/20 text-white rounded-xl text-sm font-semibold hover:bg-white/8 hover:border-white/40 transition-all group flex-shrink-0"
              >
                Explore Our Interiors
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Asymmetric photograph grid */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 md:h-[75vh]">
            {/* Large main image */}
            <AnimatedSection variant="fadeIn" className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[50vw] md:min-h-0">
              <Link href="/interiors" className="absolute inset-0 z-10" aria-label="Explore GP & Co. interiors">
                <span className="sr-only">Explore our interiors</span>
              </Link>
              <Image
                src={homepageInteriors[0]?.image || "/images/interiors/interior-04.jpg"}
                alt="Dental clinic interior completed by GP & Co."
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-500" />
            </AnimatedSection>

            {/* Two stacked smaller images */}
            <div className="flex flex-col gap-3">
              {homepageInteriors.slice(1, 3).map((img, i) => (
                <AnimatedSection
                  key={img.id}
                  delay={0.12 * (i + 1)}
                  className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer min-h-[35vw] md:min-h-0"
                >
                  <Link href="/interiors" className="absolute inset-0 z-10" aria-label="Explore GP & Co. interiors">
                    <span className="sr-only">Explore our interiors</span>
                  </Link>
                  <Image
                    src={img.image}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-500" />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Supporting text */}
          <AnimatedSection delay={0.2} className="mt-10 max-w-xl">
            <p className="text-white/40 text-body-md leading-relaxed">
              GP&nbsp;&amp;&nbsp;Co. brings together interior planning, clinical workflow and dental
              equipment requirements to create practical and refined practice environments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Clinic Transformation Journey ───────────────────── */}
      <section
        className="py-section bg-surface-secondary overflow-hidden"
        aria-labelledby="journey-heading"
      >
        <div className="container-wide">
          <SectionHeading
            label="Complete Practice Journey"
            title="From Empty Space to"
            titleHighlight="Complete Dental Practice."
            description="GP & Co. manages the full transformation — from the initial space to a fully equipped, operational dental clinic."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Empty Space", emoji: "⬜", desc: "Raw space" },
              { label: "Planning", emoji: "📐", desc: "Layout design" },
              { label: "Interior Design", emoji: "🏗️", desc: "Fit-out" },
              { label: "Equipment", emoji: "⚙️", desc: "Installation" },
              { label: "Commissioning", emoji: "✅", desc: "Testing" },
              { label: "Complete Practice", emoji: "🦷", desc: "Operational clinic" },
            ].map((stage, i) => (
              <AnimatedSection key={stage.label} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-surface-tertiary shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                  <span className="text-4xl mb-3" aria-hidden="true">{stage.emoji}</span>
                  <h3 className="font-heading font-bold text-navy-900 text-body-sm mb-1">
                    {stage.label}
                  </h3>
                  <p className="text-navy-700/45 text-label-md">{stage.desc}</p>
                  {i < 5 && (
                    <div className="hidden lg:flex absolute right-0 top-1/2 text-navy-300 text-lg" aria-hidden="true">→</div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────── */}
      <section
        className="py-section bg-white"
        aria-labelledby="products-heading"
      >
        <div className="container-wide">
          <SectionHeading
            label="Equipment Catalogue"
            title="Advanced Equipment for"
            titleHighlight="Modern Dental Practices."
            description="Explore selected dental equipment for clinics, hospitals and educational institutions."
            align="center"
            className="mb-16"
          />
          <ProductGrid products={featuredProducts} columns={3} />
          <AnimatedSection className="flex justify-center mt-12">
            <Link
              href="/products"
              id="home-view-all-products"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-navy-200 text-navy-800 rounded-xl font-semibold text-sm hover:bg-surface-secondary hover:border-navy-300 transition-all group"
            >
              View All Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Product Visual Showcase ──────────────────────────── */}
      <section
        className="py-section bg-surface-secondary"
        aria-label="Product visual showcase"
      >
        <div className="container-wide mb-10">
          <SectionHeading
            label="Product Gallery"
            title="Precision Equipment for"
            titleHighlight="Every Requirement."
            align="center"
          />
        </div>
        <div className="scroll-x px-6 md:px-12">
          <div className="flex gap-5 min-w-max pb-4">
            {[
              { src: "/images/product-dental-chair.png", label: "Dental Chair" },
              { src: "/images/product-oil-free-compressor.png", label: "Oil-Free Compressor" },
              { src: "/images/product-suction-machine.png", label: "Suction Machine" },
              { src: "/images/product-handpiece.png", label: "Dental Handpiece" },
              { src: "/images/product-simulator.png", label: "Dental Simulator" },
              { src: "/images/product-hospital-chair.png", label: "Hospital Chair" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex-shrink-0 relative group"
                style={{ width: 280 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden bg-white shadow-card border border-surface-tertiary">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-heading font-semibold text-body-sm">{item.label}</p>
                  </div>
                </div>
                <p className="text-center text-navy-700/70 text-body-sm mt-3 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why GP & Co. ─────────────────────────────────────── */}
      <WhyGPSection />

      {/* ── Founder ──────────────────────────────────────────── */}
      <FounderSection />

      {/* ── Testimonials ─────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <CTASection
        theme="navy"
        title="Planning Your Dental Practice?"
        description="Talk to GP & Co. about your clinic interiors, equipment and complete setup requirements."
        primaryLabel="Get a Quote"
        primaryHref="/contact#quote"
        secondaryLabel="Contact GP & Co."
        secondaryHref="/contact"
        primaryId="home-final-cta-quote"
        secondaryId="home-final-cta-contact"
      />
    </>
  );
}
