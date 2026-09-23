// ============================================================
// GP & Co. — Central Business Information
// ============================================================
// EDIT THIS FILE to update company details across the entire website.
// Replace placeholder values with actual information before going live.

export const company = {
  name: "GP & Co.",
  tagline: "Complete Dental Solutions. From Vision to Practice.",
  founded: 2002,
  yearsExperience: "24+",
  logo: "/images/logo.png",
  founder: {
    name: "Mr. GP Kumar",
    title: "Founder & Managing Director",
    photo: "/images/owner.jpg",
    quote:
      "Since 2002, GP & Co. has focused on providing practical, reliable and technology-driven solutions for dental professionals.",
  },
  // ── Contact ─────────────────────────────────────────────
  phone: "080-26624983",
  phoneDisplay: "080-2662 4983",
  mobile: "+919845140056",
  mobileDisplay: "+91 98451 40056",
  email: "kumargpco@gmail.com",
  // ── Location ────────────────────────────────────────────
  city: "Bengaluru",
  address: "#5, 1st Floor, Puttanna Cross Road, D.V.G. Road, Basavanagudi, Bengaluru, Karnataka 560004",
  addressLine1: "#5, 1st Floor, Puttanna Cross Road",
  addressLine2: "D.V.G. Road, Basavanagudi",
  addressLine3: "Bengaluru, Karnataka 560004",
  googleMapsUrl: "https://maps.app.goo.gl/pRdxfruYnrUdnudZ6",
  serviceArea: "Karnataka, India",
  // ── SEO ─────────────────────────────────────────────────
  siteUrl: "https://gpandco.in", // Update when domain is confirmed
  siteDescription:
    "GP & Co. provides complete dental clinic solutions across Karnataka, including dental interiors, dental chairs, compressors, equipment, instruments, installation, service and support.",
} as const;

export type Company = typeof company;
