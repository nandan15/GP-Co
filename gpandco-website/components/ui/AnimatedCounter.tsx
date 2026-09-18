"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseValue(value: string): { num: number; suffix: string; prefix: string } {
  const match = value.match(/^([^0-9]*)([0-9,.]*)([^0-9]*)$/);
  if (!match) return { num: 0, suffix: value, prefix: "" };
  const num = parseFloat(match[2].replace(/,/g, "")) || 0;
  return { num, suffix: match[3], prefix: match[1] };
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");

  const { num, suffix, prefix } = parseValue(value);
  const isNumeric = num > 0;

  useEffect(() => {
    if (!isInView || !isNumeric) {
      setDisplayed(value);
      return;
    }

    const duration = 1800;
    const start = performance.now();
    let frame: number;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * num);
      setDisplayed(`${prefix}${current}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, isNumeric, num, prefix, suffix, value]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {isNumeric ? displayed : value}
    </span>
  );
}
