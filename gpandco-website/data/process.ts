// ============================================================
// GP & Co. — Process Steps
// ============================================================

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understanding your practice requirements, space, budget and operational goals through an in-depth initial consultation.",
    icon: "MessageCircle",
  },
  {
    number: "02",
    title: "Clinic Planning",
    description:
      "Space assessment and functional layout planning to optimize workflow, operatory placement and support areas.",
    icon: "Ruler",
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Translating the plan into a professional dental clinic interior — cabinetry, lighting, materials and finishes.",
    icon: "Palette",
  },
  {
    number: "04",
    title: "Equipment Selection",
    description:
      "Guided selection of dental chairs, compressors, suction systems, handpieces and supporting equipment.",
    icon: "Settings2",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Professional installation of all equipment, electrical connections, plumbing and system integration.",
    icon: "Wrench",
  },
  {
    number: "06",
    title: "Commissioning",
    description:
      "Full system testing, calibration and verification to confirm everything operates correctly before clinical use.",
    icon: "CheckCircle",
  },
  {
    number: "07",
    title: "Service & Support",
    description:
      "Ongoing preventive maintenance, technical support and servicing to keep your practice running efficiently.",
    icon: "Shield",
  },
];
