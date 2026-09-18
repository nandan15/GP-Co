// ============================================================
// GP & Co. — Products Data
// ============================================================
// Add actual product specifications, images, and details here.
// This file is the single source of truth for all product data.

export type ProductCategory =
  | "Dental Chairs"
  | "Oil-Free Compressors"
  | "Reciprocating Compressors"
  | "Suction Machines"
  | "Section Machines"
  | "Dental Handpieces"
  | "Hospital Chairs"
  | "Dental Simulators"
  | "Teaching Models"
  | "Dental Instruments"
  | "Clinic Accessories"
  | "Other Equipment";

export const productCategories: ProductCategory[] = [
  "Dental Chairs",
  "Oil-Free Compressors",
  "Reciprocating Compressors",
  "Suction Machines",
  "Section Machines",
  "Dental Handpieces",
  "Hospital Chairs",
  "Dental Simulators",
  "Teaching Models",
  "Dental Instruments",
  "Clinic Accessories",
  "Other Equipment",
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  specifications: string; // "Specifications available on request." until actual specs are provided
  image: string;
  availability: "Available" | "On Request" | "Coming Soon";
  featured: boolean;
}

export const products: Product[] = [
  // ── Dental Chairs ──────────────────────────────────────────
  {
    id: "p01",
    slug: "modern-dental-chair",
    name: "Modern Dental Treatment Chair",
    category: "Dental Chairs",
    description:
      "A premium dental treatment chair with integrated delivery unit, adjustable operating light and assistant module for complete operatory functionality.",
    longDescription:
      "Designed for clinical efficiency and patient comfort, this dental treatment chair integrates all essential operatory components into a cohesive, ergonomically designed unit. Suitable for general dentistry and specialist practice environments.",
    features: [
      "Ergonomic patient positioning",
      "Integrated dental delivery unit",
      "Adjustable dental operating light",
      "Assistant's module",
      "Foot control operation",
      "Instrument bracket table",
      "Spittoon assembly",
      "Multiple upholstery options",
    ],
    applications: [
      "General dental practice",
      "Specialist dental clinics",
      "Dental hospitals",
      "Multi-chair dental facilities",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-dental-chair.png",
    availability: "Available",
    featured: true,
  },
  // ── Oil-Free Compressors ───────────────────────────────────
  {
    id: "p02",
    slug: "oil-free-dental-compressor",
    name: "Oil-Free Dental Air Compressor",
    category: "Oil-Free Compressors",
    description:
      "Clean compressed air solutions designed specifically for dental practice environments, providing oil-free air for clinical use.",
    longDescription:
      "Oil-free dental air compressors deliver clean, uncontaminated compressed air essential for dental procedures. Designed for quiet, reliable operation in dental clinic environments where air quality is critical.",
    features: [
      "100% oil-free air delivery",
      "Quiet operation",
      "Suitable for dental clinical use",
      "Pressure regulation system",
      "Integrated moisture management",
      "Low maintenance design",
    ],
    applications: [
      "Dental chair air supply",
      "Handpiece operation",
      "Air-water syringe supply",
      "General dental compressed air requirements",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-oil-free-compressor.png",
    availability: "Available",
    featured: true,
  },
  // ── Reciprocating Compressors ──────────────────────────────
  {
    id: "p03",
    slug: "reciprocating-dental-compressor",
    name: "Reciprocating Dental Compressor",
    category: "Reciprocating Compressors",
    description:
      "Industrial-grade reciprocating compressors for larger dental facilities and multi-chair dental practices requiring higher air volume.",
    longDescription:
      "Reciprocating compressors provide robust compressed air supply for larger dental facilities with multiple chairs and higher air consumption requirements. Designed for reliability in demanding dental clinic environments.",
    features: [
      "Higher capacity air delivery",
      "Suitable for multi-chair setups",
      "Durable construction",
      "Pressure safety systems",
      "Large capacity tank",
    ],
    applications: [
      "Multi-chair dental clinics",
      "Dental hospitals",
      "Larger dental facilities",
      "High-demand compressed air requirements",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-oil-free-compressor.png",
    availability: "Available",
    featured: false,
  },
  // ── Suction Machines ───────────────────────────────────────
  {
    id: "p04",
    slug: "dental-suction-machine",
    name: "Dental Suction Machine",
    category: "Suction Machines",
    description:
      "Professional dental suction systems for effective fluid and debris evacuation during dental procedures.",
    longDescription:
      "Dental suction machines provide effective evacuation of fluids, debris and aerosols during dental procedures. Essential equipment for maintaining a clear operative field and supporting infection control protocols.",
    features: [
      "High-volume evacuation",
      "Low-volume suction",
      "Hygienic collection system",
      "Easy maintenance",
      "Quiet motor operation",
      "Compact design",
    ],
    applications: [
      "General dental procedures",
      "Oral surgery",
      "Restorative dentistry",
      "Periodontal procedures",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-suction-machine.png",
    availability: "Available",
    featured: true,
  },
  // ── Section Machines ───────────────────────────────────────
  {
    id: "p05",
    slug: "dental-section-machine",
    name: "Dental Section Machine",
    category: "Section Machines",
    description:
      "Precision dental section machines for clinical applications requiring controlled cutting and sectioning.",
    longDescription:
      "Dental section machines provide controlled, precise cutting capabilities for dental clinical applications. Designed for reliable, consistent performance in dental practice environments.",
    features: [
      "Controlled cutting mechanism",
      "Clinical precision",
      "Durable construction",
      "Safe operation design",
    ],
    applications: [
      "Dental clinical procedures",
      "Dental laboratory support",
      "Dental educational institutions",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-suction-machine.png",
    availability: "On Request",
    featured: false,
  },
  // ── Dental Handpieces ──────────────────────────────────────
  {
    id: "p06",
    slug: "high-speed-dental-handpiece",
    name: "High-Speed Dental Handpiece",
    category: "Dental Handpieces",
    description:
      "Precision high-speed turbine handpieces for efficient tooth preparation and restorative dental procedures.",
    longDescription:
      "High-speed dental handpieces are essential instruments for tooth preparation, cavity preparation and restorative procedures. Precision engineering delivers consistent clinical performance across a full range of dental applications.",
    features: [
      "High rotational speed",
      "Precision turbine mechanism",
      "Fibre-optic illumination options",
      "Ergonomic grip design",
      "Standard bur compatibility",
      "Sterilisable design",
    ],
    applications: [
      "Tooth preparation",
      "Cavity preparation",
      "Crown preparation",
      "Restorative dentistry",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-handpiece.png",
    availability: "Available",
    featured: true,
  },
  {
    id: "p07",
    slug: "slow-speed-dental-handpiece",
    name: "Slow-Speed Dental Handpiece",
    category: "Dental Handpieces",
    description:
      "Versatile slow-speed handpiece systems for prophylaxis, endodontic procedures and laboratory applications.",
    longDescription:
      "Slow-speed dental handpiece systems provide the controlled torque and speed range required for prophylaxis, endodontics, finishing procedures and dental laboratory applications.",
    features: [
      "Variable speed control",
      "Contra-angle attachment",
      "Straight nose cone attachment",
      "Prophylaxis angle compatibility",
      "Durable motor design",
    ],
    applications: [
      "Dental prophylaxis",
      "Endodontic procedures",
      "Finishing and polishing",
      "Dental laboratory use",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-handpiece.png",
    availability: "Available",
    featured: false,
  },
  // ── Hospital Chairs ────────────────────────────────────────
  {
    id: "p08",
    slug: "clinical-hospital-chair",
    name: "Clinical Hospital Chair",
    category: "Hospital Chairs",
    description:
      "Professional clinical patient chairs for dental hospitals, examination areas and patient waiting or treatment support.",
    longDescription:
      "Clinical hospital chairs provide patient comfort and clinical functionality for dental hospitals and larger clinical environments. Designed for durability and ease of maintenance in high-use settings.",
    features: [
      "Adjustable positioning",
      "Durable upholstery",
      "Easy-clean surfaces",
      "Sturdy frame construction",
      "Patient comfort design",
    ],
    applications: [
      "Dental hospital waiting areas",
      "Clinical examination support",
      "Patient recovery areas",
      "Consultation rooms",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-hospital-chair.png",
    availability: "Available",
    featured: false,
  },
  // ── Dental Simulators ──────────────────────────────────────
  {
    id: "p09",
    slug: "dental-training-simulator",
    name: "Dental Training Simulator",
    category: "Dental Simulators",
    description:
      "Professional dental simulation units with phantom head systems for student training and clinical skill development.",
    longDescription:
      "Dental training simulators replicate clinical dental procedures in a controlled educational environment. Complete with phantom head systems, these units enable dental students to develop and refine clinical skills before entering clinical practice.",
    features: [
      "Integrated phantom head system",
      "Simulated patient positioning",
      "Instrument delivery system",
      "Adjustable height and positioning",
      "Durable educational design",
      "Suitable for institutional use",
    ],
    applications: [
      "Dental student clinical training",
      "Pre-clinical skill development",
      "Dental college laboratories",
      "Professional skills refresher training",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-simulator.png",
    availability: "Available",
    featured: true,
  },
  // ── Teaching Models ────────────────────────────────────────
  {
    id: "p10",
    slug: "dental-teaching-models",
    name: "Dental Anatomy Teaching Models",
    category: "Teaching Models",
    description:
      "High-quality anatomical dental teaching models for educational institutions and clinical training programs.",
    longDescription:
      "Dental anatomy teaching models provide accurate, detailed representations of dental anatomy for educational use. Used in dental colleges, institutions and training environments to support theoretical and practical dental education.",
    features: [
      "Accurate anatomical detail",
      "Removable tooth models",
      "Durable material construction",
      "Upper and lower arch models",
      "Suitable for repeated educational use",
    ],
    applications: [
      "Dental anatomy teaching",
      "Clinical procedure demonstration",
      "Patient education",
      "Dental educational institutions",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-teaching-models.png",
    availability: "Available",
    featured: false,
  },
  // ── Dental Instruments ─────────────────────────────────────
  {
    id: "p11",
    slug: "dental-instrument-set",
    name: "Dental Instrument Set",
    category: "Dental Instruments",
    description:
      "Professional-grade sterile dental instruments for clinical dental practice, including examination and restorative instrument sets.",
    longDescription:
      "GP & Co. supplies quality dental instruments for clinical practice. Our instrument range includes examination instruments, restorative instruments, extraction instruments and supporting clinical tools for comprehensive dental practice.",
    features: [
      "Stainless steel construction",
      "Autoclavable design",
      "Precision clinical finish",
      "Comfortable ergonomic handles",
      "Full range of clinical instruments",
    ],
    applications: [
      "General dental examination",
      "Restorative dentistry",
      "Periodontics",
      "Oral surgery support",
      "Endodontic procedures",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-instruments.png",
    availability: "Available",
    featured: false,
  },
  // ── Clinic Accessories ─────────────────────────────────────
  {
    id: "p12",
    slug: "dental-clinic-accessories",
    name: "Dental Clinic Accessories",
    category: "Clinic Accessories",
    description:
      "Supporting dental clinic accessories for daily clinical operations, infection control and practice organization.",
    longDescription:
      "A well-equipped dental practice requires a wide range of supporting accessories for daily clinical operations. GP & Co. supplies clinic accessories that support efficient, organized and safe dental practice environments.",
    features: [
      "Curing light systems",
      "Air-water syringes",
      "Saliva ejectors",
      "Bib holders",
      "Instrument trays and cassettes",
      "Supporting clinical accessories",
    ],
    applications: [
      "Daily clinical operations",
      "Infection control support",
      "Clinical organization",
      "Restorative dentistry support",
    ],
    specifications: "Specifications available on request.",
    image: "/images/product-clinic-accessories.png",
    availability: "Available",
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
