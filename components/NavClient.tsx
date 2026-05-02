"use client";

import { useEffect, useState } from "react";

export default function NavClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        AKSI<span> ·</span> Akar Sistem
      </div>
      <ul className="nav-links">
        <li><a href="#pilar">Pilar</a></li>
        <li><a href="#metodologi">Metodologi</a></li>
        <li><a href="#trade-off">Trade-off</a></li>
      </ul>
      <button className="nav-cta">Konsultasi Gratis</button>
    </nav>
  );
}