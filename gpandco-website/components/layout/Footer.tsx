import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { company } from "@/data/company";

const footerNav = {
  main: [
    { label: "Home", href: "/" },
    { label: "Interiors", href: "/interiors" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Dental Clinic Interiors", href: "/services#dental-clinic-interiors" },
    { label: "Complete Clinic Setup", href: "/services#complete-clinic-setup" },
    { label: "Equipment Supply", href: "/services#dental-equipment-supply" },
    { label: "Installation & Commissioning", href: "/services#installation-commissioning" },
    { label: "Service & Maintenance", href: "/services#service-maintenance" },
    { label: "Dental Education", href: "/services#dental-education-simulation" },
  ],
  products: [
    { label: "Dental Chairs", href: "/products?category=Dental+Chairs" },
    { label: "Compressors", href: "/products?category=Oil-Free+Compressors" },
    { label: "Suction Systems", href: "/products?category=Suction+Machines" },
    { label: "Handpieces", href: "/products?category=Dental+Handpieces" },
    { label: "Simulators", href: "/products?category=Dental+Simulators" },
    { label: "Instruments", href: "/products?category=Dental+Instruments" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-navy-950 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Pre-footer CTA */}
      <div className="border-b border-white/8">
        <div className="container-wide py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-label-md text-white/40 uppercase tracking-widest mb-3">
                Ready to get started?
              </p>
              <h2 className="font-heading text-display-sm text-white leading-tight">
                Planning Your Dental Practice?
              </h2>
              <p className="mt-3 text-white/60 text-body-md max-w-md">
                Talk to GP & Co. about your clinic interiors, equipment and complete setup requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact#quote"
                id="footer-cta-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy-900 rounded-xl font-semibold text-sm hover:bg-surface transition-colors group"
              >
                Get a Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                id="footer-cta-contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-xl font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Contact GP & Co.
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative flex items-center justify-center w-11 h-11 p-1 rounded-xl bg-white border border-white/20 group-hover:border-white/40 transition-colors shadow-md overflow-hidden flex-shrink-0">
                <Image
                  src={company.logo}
                  alt="GP & Co. Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-xl leading-tight">{company.name}</div>
                <div className="text-[10px] text-white/40 tracking-widest uppercase font-medium leading-none mt-0.5">
                  Dental Solutions
                </div>
              </div>
            </Link>

            <p className="text-white/50 text-body-sm leading-relaxed mb-6 max-w-xs">
              {company.tagline}
            </p>
            <p className="text-white/35 text-body-sm">
              Serving dental professionals across Karnataka since 2002.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-3">
              {company.phone !== "[PHONE NUMBER]" ? (
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-body-sm group"
                  aria-label={`Phone: ${company.phoneDisplay}`}
                >
                  <Phone size={15} className="text-white/30 group-hover:text-accent-light transition-colors flex-shrink-0" />
                  {company.phoneDisplay}
                </a>
              ) : (
                <div className="flex items-center gap-3 text-white/30 text-body-sm">
                  <Phone size={15} className="flex-shrink-0" />
                  <span className="italic">[PHONE NUMBER]</span>
                </div>
              )}

              {company.email !== "[EMAIL ADDRESS]" ? (
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-body-sm group"
                  aria-label={`Email: ${company.email}`}
                >
                  <Mail size={15} className="text-white/30 group-hover:text-accent-light transition-colors flex-shrink-0" />
                  {company.email}
                </a>
              ) : (
                <div className="flex items-center gap-3 text-white/30 text-body-sm">
                  <Mail size={15} className="flex-shrink-0" />
                  <span className="italic">[EMAIL ADDRESS]</span>
                </div>
              )}

              <a
                  href={company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/40 hover:text-white/70 transition-colors text-body-sm group"
                  aria-label="View GP & Co. on Google Maps"
                >
                  <MapPin size={15} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <div>{company.addressLine1}</div>
                    <div>{company.addressLine2}</div>
                    <div>{company.addressLine3}</div>
                    <div className="text-white/55 mt-0.5">{company.serviceArea}</div>
                  </div>
                </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-label-md uppercase tracking-widest text-white/40 font-semibold mb-5">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {footerNav.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-label-md uppercase tracking-widest text-white/40 font-semibold mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-label-md uppercase tracking-widest text-white/40 font-semibold mb-5">
              Products
            </h3>
            <ul className="space-y-3" role="list">
              {footerNav.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-body-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-body-sm">
              &copy; {year} {company.name}. All Rights Reserved.
            </p>
            <p className="text-white/20 text-body-sm">
              Service Area: {company.serviceArea}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
