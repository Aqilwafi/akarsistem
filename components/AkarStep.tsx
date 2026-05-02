"use client";

import { useEffect, useRef, useState } from "react";

interface AksiStepProps {
  letter: string;
  word: string;
  desc: string;
  index: number;
}

export default function AksiStep({ letter, word, desc, index }: AksiStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="aksi-step"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      <div className="aksi-letter">{letter}</div>
      <div className="aksi-content">
        <span className="aksi-word">{word}</span>
        <p className="aksi-desc">{desc}</p>
      </div>
    </div>
  );
}