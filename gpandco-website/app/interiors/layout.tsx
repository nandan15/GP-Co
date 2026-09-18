import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GP & Co. Interiors | Dental Clinic Interior Design",
  description:
    "Explore selected dental clinic interiors and practice environments created by GP & Co. across Karnataka. Real photographs of completed dental spaces.",
  openGraph: {
    title: "GP & Co. Interiors | Dental Clinic Interior Design",
    description:
      "Explore selected dental clinic interiors and practice environments created by GP & Co. across Karnataka.",
    type: "website",
  },
};

export default function InteriorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
