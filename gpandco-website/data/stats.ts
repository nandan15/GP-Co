// ============================================================
// GP & Co. — Statistics
// ============================================================
// EDIT THIS FILE to update the trust strip and statistics sections.
// These numbers appear on the homepage and about page.

export const stats = [
  {
    value: "24+",
    label: "Years of Experience",
    sublabel: "Established 2002",
  },
  {
    value: "500+",
    label: "Clinic Solutions",
    sublabel: "Across Karnataka",
  },
  {
    value: "1000+",
    label: "Equipment Installations",
    sublabel: "Professionally commissioned",
  },
  {
    value: "Karnataka",
    label: "Service Coverage",
    sublabel: "Serving dental professionals statewide",
  },
] as const;

export type Stat = (typeof stats)[number];
