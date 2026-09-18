"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Interiors", href: "/interiors" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-nav py-3"
            : isHome
            ? "bg-transparent py-5"
            : "bg-white/95 backdrop-blur-lg shadow-nav py-3"
        )}
      >
        <div className="container-wide">
          <nav
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label="GP & Co. - Home"
            >
              <div
                className={cn(
                  "relative flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 p-1 bg-white border shadow-sm overflow-hidden flex-shrink-0",
                  scrolled || !isHome
                    ? "border-navy-200/60 shadow-sm"
                    : "border-white/30 shadow-md"
                )}
                style={{ width: 44, height: 44 }}
              >
                <Image
                  src={company.logo}
                  alt="GP & Co. Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-heading font-bold text-lg leading-tight transition-colors",
                    scrolled || !isHome ? "text-navy-900" : "text-white"
                  )}
                >
                  {company.name}
                </span>
                <span
                  className={cn(
                    "text-[10px] tracking-widest uppercase font-medium transition-colors leading-none",
                    scrolled || !isHome
                      ? "text-navy-700/60"
                      : "text-white/60"
                  )}
                >
                  Dental Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul
              className="hidden lg:flex items-center gap-1"
              role="list"
              aria-label="Navigation links"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        "hover:bg-navy-900/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        scrolled || !isHome
                          ? isActive
                            ? "text-accent"
                            : "text-navy-800 hover:text-navy-900"
                          : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white hover:bg-white/8"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className={cn(
                            "absolute bottom-1 left-4 right-4 h-0.5 rounded-full",
                            scrolled || !isHome ? "bg-accent" : "bg-white"
                          )}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                id="nav-cta-contact"
                className={cn(
                  "text-sm font-medium transition-colors px-4 py-2 rounded-lg",
                  scrolled || !isHome
                    ? "text-navy-700 hover:text-navy-900"
                    : "text-white/80 hover:text-white"
                )}
              >
                Contact
              </Link>
              <Link
                href="/contact#quote"
                id="nav-cta-quote"
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  "hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  scrolled || !isHome
                    ? "bg-navy-900 text-white hover:bg-navy-800"
                    : "bg-white text-navy-900 hover:bg-white/90"
                )}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                scrolled || !isHome
                  ? "text-navy-900 hover:bg-navy-900/8"
                  : "text-white hover:bg-white/10"
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-surface-tertiary">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-surface-tertiary shadow-sm p-1 overflow-hidden flex-shrink-0">
                    <Image
                      src={company.logo}
                      alt="GP & Co. Logo"
                      width={36}
                      height={36}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-900 text-base leading-tight">{company.name}</div>
                    <div className="text-[10px] tracking-widest uppercase text-navy-700/50 font-medium leading-none mt-0.5">Dental Solutions</div>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-navy-700 hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link, i) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all",
                            isActive
                              ? "bg-navy-900 text-white"
                              : "text-navy-800 hover:bg-surface-secondary"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer CTA */}
              <div className="p-6 border-t border-surface-tertiary space-y-3">
                <Link
                  href="/contact#quote"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3.5 bg-navy-900 text-white rounded-xl font-semibold text-sm hover:bg-navy-800 transition-colors"
                  id="mobile-cta-quote"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 border border-navy-200 text-navy-800 rounded-xl font-medium text-sm hover:bg-surface-secondary transition-colors"
                  id="mobile-cta-contact"
                >
                  Contact GP & Co.
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
