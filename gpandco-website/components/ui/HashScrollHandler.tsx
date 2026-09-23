"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = decodeURIComponent(hash.replace("#", ""));
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Run after mount
    handleScrollToHash();

    // Delayed retry to handle framer-motion / layout mounts
    const timer = setTimeout(handleScrollToHash, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
