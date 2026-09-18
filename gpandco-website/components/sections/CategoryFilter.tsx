"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, productCategories, type ProductCategory } from "@/data/products";
import { ProductGrid } from "@/components/sections/ProductCard";
import { cn } from "@/lib/utils";
import { fadeIn, viewportOnce } from "@/lib/animations";

export function CategoryFilter() {
  const [active, setActive] = useState<"All" | ProductCategory>("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  const categories: Array<"All" | ProductCategory> = ["All", ...productCategories];

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-10">
        <div className="scroll-x pb-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "px-4 py-2 rounded-full text-body-sm font-medium transition-all whitespace-nowrap",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active === cat
                    ? "bg-navy-900 text-white shadow-card"
                    : "bg-white text-navy-700 border border-surface-tertiary hover:border-navy-300 hover:bg-surface-secondary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {filtered.length > 0 ? (
            <ProductGrid products={filtered} columns={3} />
          ) : (
            <div className="text-center py-20">
              <p className="text-navy-700/50 text-body-lg">No products in this category yet.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
