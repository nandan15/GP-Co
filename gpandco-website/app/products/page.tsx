import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CategoryFilter } from "@/components/sections/CategoryFilter";
import { CTASection } from "@/components/sections/CTASection";

import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Dental Equipment Catalogue | Chairs, Compressors, Handpieces & More",
  description:
    "Browse GP & Co.'s dental equipment catalogue — dental chairs, oil-free compressors, suction machines, handpieces, simulators, teaching models, instruments and clinic accessories.",
  openGraph: {
    title: "Products | GP & Co. Dental Equipment",
    description:
      "Explore dental equipment for modern clinics, hospitals and educational institutions from GP & Co., Karnataka.",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <PageHero
        badge="Equipment Catalogue"
        title="Dental Equipment"
        titleHighlight="Designed Around Your Practice."
        description="Explore equipment and supporting solutions for modern dental clinics, hospitals and educational institutions."
      />

      {/* ── Products Catalogue ─────────────────────────────── */}
      <section
        className="py-section bg-surface"
        aria-label="Product catalogue"
      >
        <div className="container-wide">
          <CategoryFilter />
        </div>
      </section>

      {/* ── Info strip ─────────────────────────────────────── */}
      <section className="py-12 bg-navy-900" aria-label="Product information">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/60 text-body-md max-w-xl text-center md:text-left">
              For detailed specifications, pricing and availability, please contact GP & Co. directly.
              Our team will assist you with the right equipment selection for your practice.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="/contact#quote"
                className="px-5 py-2.5 bg-white text-navy-900 rounded-xl font-semibold text-sm hover:bg-surface transition-colors"
                id="products-strip-quote"
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                className="px-5 py-2.5 border border-white/20 text-white rounded-xl font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all"
                id="products-strip-contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTASection
        theme="light"
        title="Need Help Choosing Equipment?"
        description="Talk to GP & Co. about your practice requirements and we'll help you select the right equipment."
        primaryLabel="Get a Quote"
        primaryHref="/contact#quote"
        secondaryLabel="Contact GP & Co."
        secondaryHref="/contact"
        primaryId="products-cta-quote"
        secondaryId="products-cta-contact"
      />
    </>
  );
}
