import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact GP & Co. | Get a Quote for Your Dental Practice",
  description:
    "Contact GP & Co. for dental clinic setup, equipment, interiors and support across Karnataka. Get in touch to discuss your practice requirements.",
  openGraph: {
    title: "Contact GP & Co. | Let's Build Your Dental Practice",
    description:
      "Get in touch with GP & Co. for dental equipment, clinic setup, interiors and installation across Karnataka.",
  },
};

const contactReasons = [
  { label: "New Dental Clinic Setup", desc: "Planning a complete dental clinic from scratch" },
  { label: "Equipment Requirements", desc: "Chairs, compressors, handpieces and more" },
  { label: "Clinic Interior Design", desc: "Planning and design for dental environments" },
  { label: "Service & Maintenance", desc: "Ongoing support for existing equipment" },
  { label: "Dental Education Equipment", desc: "Simulators and teaching models for institutions" },
  { label: "General Enquiry", desc: "Any other questions for GP & Co." },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <PageHero
        badge="Get in Touch"
        title="Let's Build Your"
        titleHighlight="Dental Practice."
        description="Talk to GP & Co. about your clinic interiors, equipment and complete setup requirements. We're ready to help."
      />

      {/* ── Contact Info + Reasons ──────────────────────────── */}
      <section
        id="quote"
        className="py-section bg-surface"
        aria-labelledby="contact-info-heading"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2
                  id="contact-info-heading"
                  className="font-heading font-bold text-navy-900 text-display-sm mb-10"
                >
                  Contact GP & Co.
                </h2>

                {/* Contact blocks */}
                <div className="space-y-6 mb-12">
                  {/* Phone */}
                  <div className="group p-5 rounded-2xl bg-white border border-surface-tertiary hover:border-navy-200 hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-900/6 flex-shrink-0 mt-0.5">
                        <Phone size={20} className="text-navy-800" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-label-md text-navy-700/45 uppercase tracking-wider mb-1">
                          Phone
                        </p>
                        {company.phone !== "[PHONE NUMBER]" ? (
                          <a
                            href={`tel:${company.phone}`}
                            className="font-heading font-bold text-navy-900 text-body-xl hover:text-accent transition-colors"
                            aria-label={`Call GP & Co. at ${company.phoneDisplay}`}
                          >
                            {company.phoneDisplay}
                          </a>
                        ) : (
                          <p className="font-heading font-bold text-navy-900/30 text-body-xl italic">
                            [PHONE NUMBER]
                          </p>
                        )}
                        <p className="text-navy-700/45 text-body-sm mt-1">Call GP & Co.</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group p-5 rounded-2xl bg-white border border-surface-tertiary hover:border-navy-200 hover:shadow-card transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-900/6 flex-shrink-0 mt-0.5">
                        <Mail size={20} className="text-navy-800" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-label-md text-navy-700/45 uppercase tracking-wider mb-1">
                          Email
                        </p>
                        {company.email !== "[EMAIL ADDRESS]" ? (
                          <a
                            href={`mailto:${company.email}`}
                            className="font-heading font-bold text-navy-900 text-body-lg hover:text-accent transition-colors break-all"
                            aria-label={`Email GP & Co. at ${company.email}`}
                          >
                            {company.email}
                          </a>
                        ) : (
                          <p className="font-heading font-bold text-navy-900/30 text-body-lg italic">
                            [EMAIL ADDRESS]
                          </p>
                        )}
                        <p className="text-navy-700/45 text-body-sm mt-1">Write to us</p>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <a
                    href={company.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-2xl bg-white border border-surface-tertiary hover:border-navy-200 hover:shadow-card transition-all duration-300 group"
                    aria-label="View GP & Co. location on Google Maps"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-900/6 flex-shrink-0 mt-0.5 group-hover:bg-accent/8 transition-colors">
                        <MapPin size={20} className="text-navy-800 group-hover:text-accent transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-label-md text-navy-700/45 uppercase tracking-wider mb-1">
                          Location
                        </p>
                        <p className="font-medium text-navy-900 text-body-md leading-snug">
                          {company.addressLine1}<br />
                          {company.addressLine2}<br />
                          {company.addressLine3}
                        </p>
                        <p className="text-accent text-body-sm mt-2 font-medium group-hover:underline">
                          View on Google Maps →
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Service area */}
                  <div className="p-5 rounded-2xl bg-navy-900 border border-navy-800">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 flex-shrink-0 mt-0.5">
                        <Clock size={20} className="text-white/60" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-label-md text-white/40 uppercase tracking-wider mb-1">
                          Service Area
                        </p>
                        <p className="font-medium text-white text-body-lg">
                          {company.serviceArea}
                        </p>
                        <p className="text-white/45 text-body-sm mt-1">
                          Serving dental professionals statewide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* What to enquire about */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <h2 className="font-heading font-bold text-navy-900 text-display-sm mb-3">
                  How Can We Help?
                </h2>
                <p className="text-navy-700/65 text-body-lg mb-10">
                  GP & Co. can assist with a wide range of dental practice requirements.
                  Contact us to discuss your specific needs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {contactReasons.map((reason, i) => (
                    <AnimatedSection key={reason.label} delay={0.1 + i * 0.05}>
                      <div className="p-5 rounded-2xl bg-white border border-surface-tertiary hover:border-navy-200 hover:shadow-card transition-all duration-300 h-full">
                        <h3 className="font-heading font-bold text-navy-900 text-body-md mb-1.5">
                          {reason.label}
                        </h3>
                        <p className="text-navy-700/55 text-body-sm">{reason.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {/* Direct action buttons */}
                <div className="p-8 rounded-2xl bg-navy-900 text-center">
                  <h3 className="font-heading font-bold text-white text-body-xl mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-white/55 text-body-md mb-6">
                    Reach out to GP & Co. directly to discuss your dental practice requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {company.phone !== "[PHONE NUMBER]" ? (
                      <a
                        href={`tel:${company.phone}`}
                        id="contact-call-cta"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-navy-900 rounded-xl font-semibold text-sm hover:bg-surface transition-colors"
                      >
                        <Phone size={16} aria-hidden="true" />
                        Call GP & Co.
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white/40 rounded-xl font-semibold text-sm border border-white/10 cursor-not-allowed">
                        <Phone size={16} aria-hidden="true" />
                        [PHONE NUMBER]
                      </div>
                    )}
                    {company.email !== "[EMAIL ADDRESS]" ? (
                      <a
                        href={`mailto:${company.email}`}
                        id="contact-email-cta"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-xl font-semibold text-sm hover:border-white/40 hover:bg-white/6 transition-all"
                      >
                        <Mail size={16} aria-hidden="true" />
                        Email GP & Co.
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/10 text-white/40 rounded-xl font-semibold text-sm cursor-not-allowed">
                        <Mail size={16} aria-hidden="true" />
                        [EMAIL ADDRESS]
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service coverage banner ─────────────────────────── */}
      <section className="py-14 bg-surface-secondary border-y border-surface-tertiary" aria-label="Service coverage">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-label-md text-accent uppercase tracking-widest font-semibold mb-4">
              Service Area
            </p>
            <h2 className="font-heading font-bold text-navy-900 text-display-sm mb-4">
              Serving Dental Professionals Across {company.serviceArea}
            </h2>
            <p className="text-navy-700/60 text-body-lg max-w-lg mx-auto">
              GP & Co. serves dental clinics, hospitals and educational institutions throughout Karnataka.
              Contact us to discuss your requirements and our service availability in your location.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
