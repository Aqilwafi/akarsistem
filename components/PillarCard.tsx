"use client";

import { useEffect, useRef, useState } from "react";

interface PillarCardProps {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  accent: string;
  delay: number;
}

export default function PillarCard({
  icon,
  title,
  subtitle,
  desc,
  accent,
  delay,
}: PillarCardProps) {
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
      className="pillar-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        borderTop: `3px solid ${accent}`,
      }}
    >
      <div className="pillar-icon" style={{ color: accent }}>
        {icon}
      </div>
      <h3 className="pillar-title">{title}</h3>
      <p className="pillar-sub">{subtitle}</p>
      <p className="pillar-desc">{desc}</p>
    </div>
  );
}