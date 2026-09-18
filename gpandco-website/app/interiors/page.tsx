"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import {
  interiors,
  featuredInteriors,
  horizontalJourneyInteriors,
  interiorCategories,
  allInteriorsSorted,
  type InteriorCategory,
  type InteriorImage,
} from "@/data/interiors";

// ── Easing presets ─────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const;
const easeOut = [0.0, 0.0, 0.2, 1] as const;

// ── Reduced motion hook ──────────────────────────────────────────────────
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}


// ── Parallax wrapper ─────────────────────────────────────────────────────
function ParallaxImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  strength = 20,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  strength?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-[-5%] w-[110%] h-[110%]"
        style={reduced ? {} : { y: smoothY }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}

// ── Typographic Break ────────────────────────────────────────────────────
function TypographicBreak({ text, sub }: { text: string; sub?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 bg-[#060D1E] overflow-hidden"
      aria-label="Editorial statement"
    >
      <div className="container-wide text-center">
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="font-heading text-white leading-[1.08] tracking-[-0.03em] mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {text.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h2>
        {sub && (
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.4, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="text-white/40 text-body-lg font-body mt-6 max-w-lg mx-auto"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}

// ── Fullscreen Viewer ────────────────────────────────────────────────────
function FullscreenViewer({
  images,
  initialIndex,
  onClose,
}: {
  images: InteriorImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  // Touch swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
  };

  const img = images[current];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-[#060D1E]/97 backdrop-blur-sm flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-label="Interior photograph viewer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Counter */}
        <div className="absolute top-6 left-8 text-white/40 text-sm font-mono tracking-widest select-none">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          id="viewer-close-btn"
          className="absolute top-6 right-8 p-2.5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Close viewer"
        >
          <X size={22} />
        </button>

        {/* Image */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-auto px-16 md:px-24"
          >
            <div className="relative w-full h-full">
              <Image
                src={img.image}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={prev}
          id="viewer-prev-btn"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Previous photograph"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          id="viewer-next-btn"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Next photograph"
        >
          <ChevronRight size={28} />
        </button>

        {/* Caption */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-widest">
          {img.title}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


// ── Horizontal Journey Section ───────────────────────────────────────────
function HorizontalJourney({ onOpen }: { onOpen: (idx: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);
  const smoothX = useSpring(x, { stiffness: 60, damping: 20 });

  const images = horizontalJourneyInteriors;

  if (reduced) {
    // Mobile / reduced motion: vertical grid
    return (
      <section className="py-section bg-[#060D1E]" aria-label="Selected interiors journey">
        <div className="container-wide mb-12">
          <p className="text-white/25 text-label-md uppercase tracking-widest mb-4">Selected Interiors</p>
          <h2 className="font-heading text-white text-display-md">A Visual Journey</h2>
        </div>
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={img.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => onOpen(interiors.findIndex((x) => x.id === img.id))}
            >
              <Image src={img.image} alt={img.alt} fill sizes="25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative hidden md:block"
      style={{ height: "350vh" }}
      aria-label="Selected interiors horizontal journey"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#060D1E]">
        {/* Label */}
        <div className="absolute top-10 left-10 z-10">
          <p className="text-white/25 text-label-md uppercase tracking-widest mb-1">Selected Interiors</p>
          <div className="h-px w-16 bg-white/15" />
        </div>

        {/* Track */}
        <motion.div
          ref={trackRef}
          className="flex items-center gap-6 pl-[15vw]"
          style={{ x: smoothX }}
        >
          {/* Intro text card */}
          <div className="flex-shrink-0 w-[32vw] pr-8">
            <h2 className="font-heading text-white leading-tight tracking-[-0.025em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              A Visual Journey Through Our Work.
            </h2>
            <p className="text-white/40 text-body-md max-w-xs">
              Selected dental environments created by GP&nbsp;&amp;&nbsp;Co.
            </p>
          </div>

          {/* Images */}
          {images.map((img, i) => {
            const heights = [
              "h-[65vh]",
              "h-[55vh]",
              "h-[70vh]",
              "h-[50vh]",
              "h-[68vh]",
              "h-[58vh]",
              "h-[62vh]",
              "h-[56vh]",
            ];
            const widths = [
              "w-[38vw]",
              "w-[28vw]",
              "w-[45vw]",
              "w-[32vw]",
              "w-[40vw]",
              "w-[30vw]",
              "w-[36vw]",
              "w-[28vw]",
            ];
            const globalIdx = interiors.findIndex((x) => x.id === img.id);

            return (
              <motion.div
                key={img.id}
                className={`flex-shrink-0 relative ${heights[i % heights.length]} ${widths[i % widths.length]} rounded-2xl overflow-hidden cursor-pointer group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                onClick={() => onOpen(globalIdx >= 0 ? globalIdx : 0)}
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                {/* Counter overlay */}
                <div className="absolute bottom-4 left-4 text-white/40 text-xs font-mono tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/30 transition-colors duration-400" />
              </motion.div>
            );
          })}

          {/* End padding */}
          <div className="flex-shrink-0 w-[10vw]" />
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-10 flex items-center gap-2 text-white/25 text-xs uppercase tracking-widest">
          <span>Scroll</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </section>
  );
}

// ── Layout A — Full screen with counter ──────────────────────────────────
function LayoutA({ image, counter, total, onOpen }: { image: InteriorImage; counter: number; total: number; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.0, 1.04]);
  const reduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className="relative h-[90vh] overflow-hidden cursor-pointer group"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.title}`}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(); }}
    >
      <motion.div className="absolute inset-0" style={reduced ? {} : { scale }}>
        <Image src={image.image} alt={image.alt} fill sizes="100vw" className="object-cover" priority={counter === 1} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#060D1E]/30 via-transparent to-[#060D1E]/40" />
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <p className="text-white/50 text-label-md uppercase tracking-widest">GP & CO. INTERIORS</p>
      </div>
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-right">
        <p className="text-white/40 font-mono text-sm tracking-widest">
          {String(counter).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
      <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/15 transition-colors duration-500" />
    </div>
  );
}

// ── Layout B — Large left + 2 right stacked ──────────────────────────────
function LayoutB({ images, onOpen }: { images: InteriorImage[]; onOpen: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 h-auto md:h-[85vh]">
      <motion.div
        className="relative rounded-2xl overflow-hidden cursor-pointer group min-h-[50vh] md:min-h-0"
        style={reduced ? {} : { y: y1 }}
        onClick={() => onOpen(0)}
        role="button" tabIndex={0} aria-label={images[0]?.title}
        onKeyDown={(e) => { if (e.key === "Enter") onOpen(0); }}
      >
        <Image src={images[0]?.image || ""} alt={images[0]?.alt || ""} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover group-hover:scale-[1.02] transition-transform duration-700" />
        <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-400" />
      </motion.div>
      <motion.div className="flex flex-col gap-3" style={reduced ? {} : { y: y2 }}>
        {images.slice(1, 3).map((img, i) => (
          <div
            key={img.id}
            className="relative flex-1 rounded-2xl overflow-hidden cursor-pointer group min-h-[30vh] md:min-h-0"
            onClick={() => onOpen(i + 1)}
            role="button" tabIndex={0} aria-label={img.title}
            onKeyDown={(e) => { if (e.key === "Enter") onOpen(i + 1); }}
          >
            <Image src={img.image} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-400" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Layout C — Large centered with overlap ────────────────────────────────
function LayoutC({ images, onOpen }: { images: InteriorImage[]; onOpen: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="relative h-[80vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 cursor-pointer group"
        style={reduced ? {} : { y }}
        onClick={() => onOpen(0)}
        role="button" tabIndex={0} aria-label={images[0]?.title}
        onKeyDown={(e) => { if (e.key === "Enter") onOpen(0); }}
      >
        <Image src={images[0]?.image || ""} alt={images[0]?.alt || ""} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/15 transition-colors duration-500" />
      </motion.div>
      {images[1] && (
        <motion.div
          className="absolute bottom-[-5%] right-[6%] w-[35%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          onClick={() => onOpen(1)}
          role="button" tabIndex={0} aria-label={images[1]?.title}
          onKeyDown={(e) => { if (e.key === "Enter") onOpen(1); }}
        >
          <Image src={images[1].image} alt={images[1].alt} fill sizes="35vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
          <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-400" />
        </motion.div>
      )}
    </div>
  );
}

// ── Layout D — Full width architectural ──────────────────────────────────
function LayoutD({ image, onOpen }: { image: InteriorImage; onOpen: () => void }) {
  return (
    <div
      className="relative h-[70vh] overflow-hidden cursor-pointer group"
      onClick={onOpen}
      role="button" tabIndex={0} aria-label={image.title}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(); }}
    >
      <ParallaxImage
        src={image.image}
        alt={image.alt}
        className="absolute inset-0 w-full h-full"
        sizes="100vw"
        strength={25}
      />
      <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-500" />
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
        <p className="text-white/50 text-label-md uppercase tracking-widest">GP & Co. Interiors</p>
      </div>
    </div>
  );
}

// ── Layout E — Two side by side with different scroll speeds ─────────────
function LayoutE({ images, onOpen }: { images: InteriorImage[]; onOpen: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-3 h-auto md:h-[80vh]">
      {images.slice(0, 2).map((img, i) => (
        <motion.div
          key={img.id}
          className="relative rounded-2xl overflow-hidden cursor-pointer group min-h-[50vh] md:min-h-0"
          style={reduced ? {} : { y: i === 0 ? y1 : y2 }}
          onClick={() => onOpen(i)}
          role="button" tabIndex={0} aria-label={img.title}
          onKeyDown={(e) => { if (e.key === "Enter") onOpen(i); }}
        >
          <Image src={img.image} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-[1.02] transition-transform duration-700" />
          <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-400" />
        </motion.div>
      ))}
    </div>
  );
}

// ── Layout F — Large with floating detail card ────────────────────────────
function LayoutF({ images, onOpen }: { images: InteriorImage[]; onOpen: (i: number) => void }) {
  return (
    <div className="relative h-[85vh] overflow-hidden">
      <div
        className="absolute inset-0 cursor-pointer group"
        onClick={() => onOpen(0)}
        role="button" tabIndex={0} aria-label={images[0]?.title}
        onKeyDown={(e) => { if (e.key === "Enter") onOpen(0); }}
      >
        <Image src={images[0]?.image || ""} alt={images[0]?.alt || ""} fill sizes="100vw" className="object-cover group-hover:scale-[1.02] transition-transform duration-700" />
        <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/15 transition-colors duration-500" />
      </div>
      {images[1] && (
        <motion.div
          className="absolute top-[10%] left-[5%] w-[28%] aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer group z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          onClick={() => onOpen(1)}
          role="button" tabIndex={0} aria-label={images[1].title}
          onKeyDown={(e) => { if (e.key === "Enter") onOpen(1); }}
        >
          <Image src={images[1].image} alt={images[1].alt} fill sizes="28vw" className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
          <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/20 transition-colors duration-400" />
        </motion.div>
      )}
    </div>
  );
}

// ── Main Interiors Page ──────────────────────────────────────────────────
export default function InteriorsPage() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<InteriorCategory>("all");

  const openViewer = useCallback((index: number) => {
    setViewerIndex(index);
    setViewerOpen(true);
  }, []);

  const closeViewer = useCallback(() => {
    setViewerOpen(false);
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return allInteriorsSorted;
    return allInteriorsSorted.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Hero scroll animation
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(heroProgress, [0, 1], [1.0, 1.08]);
  const heroOverlay = useTransform(heroProgress, [0, 1], [0.45, 0.7]);
  const reduced = useReducedMotion();

  // Featured images for portfolio sequence
  const featured = featuredInteriors;

  return (
    <>
      {/* ── Fullscreen Viewer ────────────────────────────────────────── */}
      {viewerOpen && (
        <FullscreenViewer
          images={allInteriorsSorted}
          initialIndex={viewerIndex}
          onClose={closeViewer}
        />
      )}

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-center justify-center bg-[#060D1E]"
        aria-labelledby="interiors-hero-heading"
      >
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          style={reduced ? {} : { scale: heroScale }}
        >
          <Image
            src="/images/interiors/interior-04.jpg"
            alt="GP & Co. dental clinic interior — cinematic hero photograph"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-[#060D1E]"
          style={reduced ? { opacity: 0.5 } : { opacity: heroOverlay }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="text-white/50 text-label-md uppercase tracking-[0.25em] mb-8"
          >
            GP & CO. INTERIORS
          </motion.p>

          {/* Heading */}
          <motion.h1
            id="interiors-hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease }}
            className="font-heading text-white leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
          >
            Spaces Designed
            <br />
            <span className="text-white/70">for Better Dentistry.</span>
          </motion.h1>

          {/* Supporting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease }}
            className="text-white font-body text-body-lg md:text-body-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Explore selected dental environments created by GP&nbsp;&amp;&nbsp;Co., bringing together
            thoughtful planning, clinical functionality and contemporary design.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease }}
          >
            <button
              onClick={() => {
                document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#060D1E] rounded-xl font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              id="hero-explore-work-btn"
            >
              Explore Our Work
              <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </motion.div>
      </section>

      {/* ── EDITORIAL INTRODUCTION ────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-white overflow-hidden" aria-labelledby="editorial-intro-heading">
        <div className="container-narrow text-center">
          <motion.h2
            id="editorial-intro-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="font-heading text-navy-900 leading-tight tracking-[-0.025em] mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Designed Around the Way
            <br />
            <span className="text-navy-900/40">Dentistry Works.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="text-navy-700/60 text-body-lg md:text-body-xl leading-relaxed max-w-2xl mx-auto"
          >
            Every dental practice has different spatial and functional requirements. GP&nbsp;&amp;&nbsp;Co. brings
            together interior planning, clinical workflow and dental equipment requirements to create
            practical and refined practice environments.
          </motion.p>
        </div>
      </section>

      {/* ── IMMERSIVE PORTFOLIO ───────────────────────────────────────── */}
      <div id="portfolio-section" className="bg-[#060D1E]">

        {/* Layout A — Full screen #1 */}
        {featured[0] && (
          <LayoutA
            image={featured[0]}
            counter={1}
            total={featured.length}
            onOpen={() => openViewer(allInteriorsSorted.findIndex(x => x.id === featured[0].id))}
          />
        )}

        {/* Layout B — Large + 2 stacked */}
        <div className="p-3">
          {featured[1] && featured[2] && featured[3] && (
            <LayoutB
              images={[featured[1], featured[2], featured[3]]}
              onOpen={(i) => {
                const imgs = [featured[1], featured[2], featured[3]];
                openViewer(allInteriorsSorted.findIndex(x => x.id === imgs[i]?.id));
              }}
            />
          )}
        </div>

        {/* Typography Break 1 */}
        <TypographicBreak text={"Where Clinical Function\nMeets Modern Design."} />

        {/* Layout E — Two side by side */}
        <div className="p-3">
          {featured[4] && featured[5] && (
            <LayoutE
              images={[featured[4], featured[5]]}
              onOpen={(i) => {
                const imgs = [featured[4], featured[5]];
                openViewer(allInteriorsSorted.findIndex(x => x.id === imgs[i]?.id));
              }}
            />
          )}
        </div>

        {/* Layout A — Full screen #2 */}
        {featured[6] && (
          <LayoutA
            image={featured[6]}
            counter={7}
            total={featured.length}
            onOpen={() => openViewer(allInteriorsSorted.findIndex(x => x.id === featured[6].id))}
          />
        )}

        {/* Typography Break 2 */}
        <TypographicBreak text={"Every Detail\nHas a Purpose."} />

        {/* Layout C — Large centered + overlap */}
        <div className="p-3">
          {featured[7] && featured[8] && (
            <LayoutC
              images={[featured[7], featured[8]]}
              onOpen={(i) => {
                const imgs = [featured[7], featured[8]];
                openViewer(allInteriorsSorted.findIndex(x => x.id === imgs[i]?.id));
              }}
            />
          )}
        </div>

        {/* Layout F — Large with floating card */}
        <div className="p-3 pt-0">
          {featured[9] && featured[10] && (
            <LayoutF
              images={[featured[9], featured[10]]}
              onOpen={(i) => {
                const imgs = [featured[9], featured[10]];
                openViewer(allInteriorsSorted.findIndex(x => x.id === imgs[i]?.id));
              }}
            />
          )}
        </div>

        {/* Layout D — Full-width architectural */}
        {featured[11] && (
          <LayoutD
            image={featured[11]}
            onOpen={() => openViewer(allInteriorsSorted.findIndex(x => x.id === featured[11].id))}
          />
        )}

        {/* Typography Break 3 */}
        <TypographicBreak
          text={"Built for the Practice.\nDesigned for the Experience."}
          sub="GP & Co. brings together clinical planning and considered design to create environments that work."
        />
      </div>

      {/* ── HORIZONTAL JOURNEY ───────────────────────────────────────── */}
      <HorizontalJourney onOpen={openViewer} />

      {/* Mobile horizontal strip */}
      <section className="md:hidden py-section bg-[#060D1E] overflow-hidden" aria-label="Selected interiors">
        <div className="container-wide mb-10">
          <p className="text-white/25 text-label-md uppercase tracking-widest mb-2">Selected Interiors</p>
          <h2 className="font-heading text-white text-display-md">A Visual Journey.</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scroll-x">
          {horizontalJourneyInteriors.map((img, i) => {
            const globalIdx = interiors.findIndex((x) => x.id === img.id);
            return (
              <div
                key={img.id}
                className="flex-shrink-0 snap-center relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ width: "80vw", height: "60vw" }}
                onClick={() => openViewer(globalIdx >= 0 ? globalIdx : 0)}
              >
                <Image src={img.image} alt={img.alt} fill sizes="80vw" className="object-cover" />
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EXPLORE ALL INTERIORS ─────────────────────────────────────── */}
      <section className="py-section bg-white" aria-labelledby="gallery-heading">
        <div className="container-wide">
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-navy-700/40 text-label-md uppercase tracking-widest mb-3"
            >
              GP & Co. Portfolio
            </motion.p>
            <motion.h2
              id="gallery-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="font-heading text-navy-900 tracking-[-0.025em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Explore Our Interior Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="text-navy-700/55 text-body-lg max-w-xl"
            >
              A closer look at selected spaces created by GP&nbsp;&amp;&nbsp;Co.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-12"
            role="tablist"
            aria-label="Filter interior photographs by category"
          >
            {interiorCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                role="tab"
                aria-selected={activeCategory === cat.key}
                id={`filter-${cat.key}`}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeCategory === cat.key
                    ? "bg-navy-900 text-white shadow-sm"
                    : "border border-navy-200 text-navy-700 hover:border-navy-400 hover:bg-surface-secondary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Masonry-style editorial grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0"
            >
              {filteredImages.map((image, index) => {
                const globalIdx = allInteriorsSorted.findIndex((img) => img.id === image.id);
                // Vary aspect ratios for editorial feel
                const aspectClasses = [
                  "aspect-[4/3]",
                  "aspect-[3/4]",
                  "aspect-[16/9]",
                  "aspect-[4/3]",
                  "aspect-square",
                  "aspect-[4/3]",
                  "aspect-[3/2]",
                  "aspect-[3/4]",
                ];
                const aspectClass = aspectClasses[index % aspectClasses.length];

                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: (index % 6) * 0.06 }}
                    className={`relative ${aspectClass} mb-4 rounded-xl overflow-hidden cursor-pointer group break-inside-avoid`}
                    onClick={() => openViewer(globalIdx >= 0 ? globalIdx : 0)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${image.title} — ${image.alt}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openViewer(globalIdx >= 0 ? globalIdx : 0);
                      }
                    }}
                  >
                    <Image
                      src={image.image}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#060D1E]/0 group-hover:bg-[#060D1E]/35 transition-colors duration-400 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-[#060D1E] text-sm font-semibold">View</span>
                        <ArrowRight size={14} className="text-[#060D1E]" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Image count */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy-700/30 text-label-md uppercase tracking-widest mt-12 text-center"
          >
            {filteredImages.length} Interior{filteredImages.length !== 1 ? "s" : ""} Shown
          </motion.p>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1E] text-center" aria-label="Contact GP & Co.">
        <div className="container-narrow">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-white/30 text-label-md uppercase tracking-widest mb-6"
          >
            GP & Co.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="font-heading text-white leading-tight tracking-[-0.025em] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Planning Your Dental Practice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="text-white text-body-lg max-w-xl mx-auto mb-10"
          >
            Talk to GP&nbsp;&amp;&nbsp;Co. about your clinic interiors, equipment and complete setup requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact#quote"
              id="interiors-cta-quote"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-[#060D1E] rounded-xl font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-xl group"
            >
              Get a Quote
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              id="interiors-cta-contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/8 hover:border-white/35 transition-all"
            >
              Contact GP & Co.
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
