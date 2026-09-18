// ============================================================
// GP & Co. — Testimonials
// ============================================================
// IMPORTANT: These are SAMPLE/PLACEHOLDER testimonials.
// Replace with verified testimonials before going live.
// Each item is clearly marked as sample content.

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  location: string;
  isSample: true; // Always true — ensures these are never mistaken as verified
}

export const testimonials: Testimonial[] = [
  {
    id: "t01",
    quote:
      "GP & Co. provided us with a complete solution for our clinic, from equipment selection to installation. The entire process was handled professionally and efficiently.",
    name: "Dental Practitioner",
    designation: "General Dental Practice",
    location: "Karnataka",
    isSample: true,
  },
  {
    id: "t02",
    quote:
      "The team understood our requirements and helped us plan the equipment and clinic setup efficiently. Their knowledge of dental equipment requirements was evident throughout.",
    name: "Dental Clinic Owner",
    designation: "Multi-Chair Dental Clinic",
    location: "Karnataka",
    isSample: true,
  },
  {
    id: "t03",
    quote:
      "We appreciated the technical support and guidance throughout the installation process. The team was responsive and knowledgeable.",
    name: "Dental Professional",
    designation: "Specialist Dental Practice",
    location: "Karnataka",
    isSample: true,
  },
  {
    id: "t04",
    quote:
      "The combination of clinic planning and equipment supply made the setup process much easier. Having one point of contact for everything was valuable.",
    name: "Dental Practitioner",
    designation: "New Clinic Setup",
    location: "Karnataka",
    isSample: true,
  },
  {
    id: "t05",
    quote:
      "Professional service, good product guidance and responsive support. GP & Co. helped us make informed decisions about our equipment selection.",
    name: "Dental Clinic",
    designation: "Dental Clinic",
    location: "Karnataka",
    isSample: true,
  },
  {
    id: "t06",
    quote:
      "GP & Co. gave us a practical solution that worked well for our clinical requirements. Their experience in dental clinic setup was clear from the start.",
    name: "Dental Practitioner",
    designation: "Dental Practice",
    location: "Karnataka",
    isSample: true,
  },
];
