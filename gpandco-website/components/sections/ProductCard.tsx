"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { Product } from "@/data/products";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-surface-tertiary flex flex-col"
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden bg-surface-secondary",
        compact ? "h-44" : "h-56"
      )}>
        <Image
          src={product.image}
          alt={`${product.name} — ${product.category}`}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-navy-800 text-label-md font-semibold border border-white/50">
            <Tag size={10} aria-hidden="true" />
            {product.category}
          </span>
        </div>
        {product.availability === "On Request" && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full bg-navy-900/80 text-white text-label-md">
              On Request
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-navy-900 text-body-lg leading-tight mb-2">
          {product.name}
        </h3>
        {!compact && (
          <p className="text-navy-700/65 text-body-sm leading-relaxed mb-4 flex-1">
            {product.description}
          </p>
        )}

        {/* CTAs */}
        <div className={cn("flex gap-2.5", compact ? "mt-3" : "")}>
          <Link
            href={`/products/${product.slug}`}
            id={`product-view-${product.id}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-navy-900 text-white rounded-xl text-body-sm font-semibold hover:bg-navy-800 transition-colors"
            aria-label={`View details for ${product.name}`}
          >
            View Details
          </Link>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}#quote`}
            id={`product-quote-${product.id}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 border border-navy-200 text-navy-800 rounded-xl text-body-sm font-semibold hover:bg-surface-secondary hover:border-navy-300 transition-all"
            aria-label={`Get a quote for ${product.name}`}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  compact?: boolean;
}

export function ProductGrid({ products, columns = 3, compact = false }: ProductGridProps) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn("grid grid-cols-1 gap-6", colClass)}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} compact={compact} />
      ))}
    </motion.div>
  );
}
