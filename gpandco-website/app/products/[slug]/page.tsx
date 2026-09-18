import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Tag, Package, ChevronRight } from "lucide-react";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProductCard, ProductGrid } from "@/components/sections/ProductCard";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/data/company";

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Generate per-product metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} | ${product.category}`,
    description: product.description,
    openGraph: {
      title: `${product.name} | GP & Co.`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    offers: {
      "@type": "Offer",
      availability:
        product.availability === "Available"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      seller: {
        "@type": "Organization",
        name: company.name,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="pt-28 pb-6 bg-surface border-b border-surface-tertiary">
        <div className="container-wide">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* ── Product Detail ──────────────────────────────────── */}
      <section className="py-section bg-white" aria-labelledby="product-name">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <AnimatedSection variant="fadeIn" className="sticky top-28">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-surface-secondary border border-surface-tertiary shadow-card">
                <Image
                  src={product.image}
                  alt={`${product.name} — dental equipment from GP & Co.`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection>
              {/* Category badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/25 bg-accent/6 text-accent text-label-md font-semibold mb-5">
                <Tag size={11} aria-hidden="true" />
                {product.category}
              </span>

              {/* Name */}
              <h1
                id="product-name"
                className="font-heading font-bold text-navy-900 leading-tight mb-5"
                style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", letterSpacing: "-0.025em" }}
              >
                {product.name}
              </h1>

              {/* Availability */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`w-2 h-2 rounded-full ${
                    product.availability === "Available" ? "bg-green-500" : "bg-amber-400"
                  }`}
                  aria-hidden="true"
                />
                <span className="text-body-sm font-medium text-navy-700">
                  {product.availability}
                </span>
              </div>

              {/* Description */}
              <p className="text-navy-700/70 text-body-lg leading-relaxed mb-8 max-w-lg">
                {product.longDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}#quote`}
                  id="product-detail-quote"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 bg-navy-900 text-white rounded-xl font-semibold text-sm hover:bg-navy-800 transition-all hover:-translate-y-0.5 hover:shadow-card-hover group"
                >
                  Get a Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}&type=info`}
                  id="product-detail-info"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 border border-navy-200 text-navy-800 rounded-xl font-semibold text-sm hover:bg-surface-secondary hover:border-navy-300 transition-all"
                >
                  Request Information
                </Link>
              </div>

              <div className="divider mb-10" />

              {/* Features */}
              <div className="mb-8">
                <h2 className="font-heading font-bold text-navy-900 text-body-xl mb-5">
                  Key Features
                </h2>
                <ul className="space-y-3" role="list">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-navy-700/75 text-body-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h2 className="font-heading font-bold text-navy-900 text-body-xl mb-5">
                  Applications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1.5 rounded-full bg-surface-secondary text-navy-700 text-body-sm border border-surface-tertiary"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="p-5 rounded-2xl bg-surface-secondary border border-surface-tertiary">
                <div className="flex items-center gap-2 mb-2">
                  <Package size={16} className="text-navy-700/50" aria-hidden="true" />
                  <h2 className="font-heading font-bold text-navy-800 text-body-md">
                    Specifications
                  </h2>
                </div>
                <p className="text-navy-700/55 text-body-sm italic">{product.specifications}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Related Products ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-section bg-surface-secondary" aria-labelledby="related-heading">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-12">
              <h2
                id="related-heading"
                className="font-heading font-bold text-navy-900 text-display-sm"
              >
                Related Products
              </h2>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-accent font-medium text-body-sm hover:underline underline-offset-2 flex items-center gap-1"
              >
                View all {product.category}
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <ProductGrid products={related} columns={3} />
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────── */}
      <CTASection
        theme="navy"
        title={`Interested in the ${product.name}?`}
        description="Contact GP & Co. for specifications, pricing and availability. Our team will help you find the right solution."
        primaryLabel="Get a Quote"
        primaryHref={`/contact?product=${encodeURIComponent(product.name)}#quote`}
        secondaryLabel="Contact GP & Co."
        secondaryHref="/contact"
        primaryId="product-detail-final-quote"
        secondaryId="product-detail-final-contact"
      />
    </>
  );
}
