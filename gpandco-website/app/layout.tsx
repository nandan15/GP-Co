import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `GP & Co. | Complete Dental Solutions from Vision to Practice`,
    template: `%s | GP & Co.`,
  },
  description: company.siteDescription,
  keywords: [
    "dental clinic setup",
    "dental equipment Karnataka",
    "dental chairs",
    "dental compressors",
    "dental suction",
    "dental handpieces",
    "dental clinic interiors",
    "dental simulators",
    "dental clinic solutions",
    "GP and Co",
    "Karnataka dental equipment",
  ],
  authors: [{ name: "GP & Co." }],
  creator: "GP & Co.",
  publisher: "GP & Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "GP & Co.",
    title: "GP & Co. | Complete Dental Solutions from Vision to Practice",
    description: company.siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "GP & Co. | Complete Dental Solutions from Vision to Practice",
    description: company.siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": company.siteUrl,
  name: company.name,
  description: company.siteDescription,
  url: company.siteUrl,
  foundingDate: "2002",
  founder: {
    "@type": "Person",
    name: company.founder.name,
    jobTitle: company.founder.title,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.addressLine1}, ${company.addressLine2}`,
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560004",
    addressCountry: "IN",
  },
  hasMap: company.googleMapsUrl,
  areaServed: {
    "@type": "State",
    name: "Karnataka",
    containedInPlace: {
      "@type": "Country",
      name: "India",
    },
  },
  serviceType: [
    "Dental Clinic Setup",
    "Dental Equipment Supply",
    "Dental Clinic Interiors",
    "Dental Equipment Installation",
    "Dental Equipment Service and Maintenance",
  ],
  telephone: company.phone,
  email: company.email,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-surface text-navy-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
