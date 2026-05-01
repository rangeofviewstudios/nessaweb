"use client";

import { useEffect, useRef, useState } from "react";

interface RevealResult {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}

export function useReveal(threshold = 0.15): RevealResult {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing — no re-animation on scroll back
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
