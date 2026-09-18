import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
}

export function Breadcrumb({ items, className, theme = "light" }: BreadcrumbProps) {
  const isDark = theme === "dark";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: item.href,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center gap-1.5 flex-wrap", className)}
      >
        <Link
          href="/"
          className={cn(
            "flex items-center gap-1 text-label-md transition-colors",
            isDark
              ? "text-white/40 hover:text-white/70"
              : "text-navy-600/60 hover:text-navy-700"
          )}
          aria-label="Home"
        >
          <Home size={13} />
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight
              size={13}
              className={isDark ? "text-white/20" : "text-navy-300"}
              aria-hidden="true"
            />
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className={cn(
                  "text-label-md transition-colors",
                  isDark
                    ? "text-white/40 hover:text-white/70"
                    : "text-navy-600/60 hover:text-navy-700"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "text-label-md font-medium",
                  isDark ? "text-white/70" : "text-navy-700"
                )}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
