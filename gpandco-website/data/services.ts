// ============================================================
// GP & Co. — Services Data
// ============================================================

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string; // Lucide icon name
  image: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "s01",
    slug: "dental-clinic-interiors",
    title: "Dental Clinic Interiors",
    subtitle: "Designed for Dentistry",
    description:
      "Comprehensive clinic interior solutions from space planning to final fit-out, creating efficient and professional dental environments.",
    longDescription:
      "Every dental practice has different spatial, functional and operational needs. GP & Co. brings together clinic planning, interior design and dental equipment requirements to create practical, efficient and professional environments that work for both clinicians and patients.",
    features: [
      "Dental operatory space planning",
      "Reception and waiting area design",
      "Consultation room planning",
      "Sterilization area layout",
      "Storage and cabinetry",
      "Clinical lighting design",
      "Electrical planning",
      "Plumbing coordination",
      "Functional workflow optimization",
    ],
    icon: "Layout",
    image: "/images/clinic-reception.png",
    color: "from-blue-950 to-slate-900",
  },
  {
    id: "s02",
    slug: "complete-clinic-setup",
    title: "Complete Clinic Setup",
    subtitle: "End-to-End Practice Building",
    description:
      "From initial concept through planning, interior design, equipment selection, installation, commissioning and ongoing support.",
    longDescription:
      "GP & Co. manages the complete journey of setting up a dental clinic. From the first planning conversation through to a fully commissioned, operational practice — we coordinate every element so you don't have to.",
    features: [
      "Concept and feasibility planning",
      "Clinic space planning",
      "Interior design and execution",
      "Equipment selection and procurement",
      "Professional installation",
      "System commissioning",
      "Staff orientation on equipment",
      "Ongoing technical support",
    ],
    icon: "Building2",
    image: "/images/clinic-multi.png",
    color: "from-slate-900 to-blue-950",
  },
  {
    id: "s03",
    slug: "dental-equipment-supply",
    title: "Dental Equipment Supply",
    subtitle: "Advanced Equipment for Modern Practices",
    description:
      "A comprehensive range of dental equipment for clinics, hospitals and educational institutions across Karnataka.",
    longDescription:
      "GP & Co. supplies a comprehensive range of dental equipment to meet the varied requirements of dental clinics, hospitals and educational institutions. Our portfolio spans chairs, compressors, suction systems, handpieces, simulators and instruments.",
    features: [
      "Dental chairs with delivery systems",
      "Oil-free and reciprocating compressors",
      "Suction and section machines",
      "High-speed and slow-speed handpieces",
      "Hospital and clinical chairs",
      "Dental simulators",
      "Teaching models",
      "Dental instruments",
      "Clinic accessories",
    ],
    icon: "Settings",
    image: "/images/product-dental-chair.png",
    color: "from-blue-950 to-slate-800",
  },
  {
    id: "s04",
    slug: "installation-commissioning",
    title: "Installation & Commissioning",
    subtitle: "Professional Equipment Setup",
    description:
      "Professional installation and commissioning of dental equipment, ensuring correct setup and operational readiness from day one.",
    longDescription:
      "Proper installation is critical for the performance and longevity of dental equipment. GP & Co. provides professional installation and commissioning services, ensuring all equipment is correctly set up, tested and ready for clinical use.",
    features: [
      "Professional equipment installation",
      "Electrical and plumbing connections",
      "System integration and testing",
      "Operational verification",
      "Equipment calibration guidance",
      "Handover and orientation",
      "Installation documentation",
    ],
    icon: "Wrench",
    image: "/images/clinic-multi.png",
    color: "from-slate-900 to-blue-900",
  },
  {
    id: "s05",
    slug: "service-maintenance",
    title: "Service & Maintenance",
    subtitle: "Long-Term Equipment Support",
    description:
      "Ongoing service, preventive maintenance and technical support to keep your dental practice running efficiently.",
    longDescription:
      "Equipment performance and reliability are essential to clinical operations. GP & Co. provides preventive maintenance, technical servicing and responsive support to help dental practices maintain their equipment in optimal condition.",
    features: [
      "Preventive maintenance programs",
      "Technical troubleshooting",
      "Equipment servicing",
      "Compressor maintenance",
      "Suction system servicing",
      "Handpiece servicing",
      "Responsive technical support",
      "Post-installation support",
    ],
    icon: "Shield",
    image: "/images/product-suction-machine.png",
    color: "from-blue-900 to-slate-900",
  },
  {
    id: "s06",
    slug: "dental-education-simulation",
    title: "Dental Education & Simulation",
    subtitle: "Equipment for Training Institutions",
    description:
      "Dental simulators, teaching models and educational equipment for dental colleges, universities and training programs.",
    longDescription:
      "GP & Co. supplies dental simulation equipment and teaching models to dental educational institutions. Our simulation equipment supports practical training for dental students and professionals in a realistic clinical environment.",
    features: [
      "Dental training simulators",
      "Phantom head systems",
      "Typodont teaching models",
      "Anatomical dental models",
      "Simulation unit delivery systems",
      "Educational instrument sets",
      "Institutional supply solutions",
    ],
    icon: "GraduationCap",
    image: "/images/clinic-simulation-lab.png",
    color: "from-slate-800 to-blue-950",
  },
  {
    id: "s07",
    slug: "clinic-planning-consultation",
    title: "Clinic Planning & Consultation",
    subtitle: "Expert Practice Planning",
    description:
      "Professional consultation for new clinic setup, clinic expansion, equipment upgrades and practice modernization.",
    longDescription:
      "Setting up or upgrading a dental practice involves many interdependent decisions. GP & Co. provides professional consultation to help dental professionals make informed choices about clinic design, equipment selection and practice planning.",
    features: [
      "New clinic setup consultation",
      "Expansion planning",
      "Equipment upgrade assessment",
      "Practice modernization planning",
      "Budget and scope planning",
      "Equipment selection guidance",
      "Layout and workflow advice",
    ],
    icon: "Compass",
    image: "/images/clinic-reception.png",
    color: "from-blue-950 to-slate-900",
  },
  {
    id: "s08",
    slug: "clinic-accessories-instruments",
    title: "Clinic Accessories & Instruments",
    subtitle: "Supporting Your Clinical Operations",
    description:
      "A complete range of dental instruments, clinic accessories and supporting equipment for daily clinical operations.",
    longDescription:
      "Beyond major equipment, the day-to-day operation of a dental clinic requires a wide range of instruments and accessories. GP & Co. supplies quality dental instruments and clinic accessories to support efficient clinical operations.",
    features: [
      "Dental hand instruments",
      "Sterilization accessories",
      "Bib holders and dispensers",
      "Curing lights",
      "Air-water syringes",
      "Saliva ejectors",
      "Instrument trays and cassettes",
      "Supporting clinical accessories",
    ],
    icon: "Stethoscope",
    image: "/images/product-instruments.png",
    color: "from-slate-900 to-blue-950",
  },
];

export type ServiceCategory = Service["slug"];
