import Image from "next/image";
import NavClient from "@/components/NavClient";
import PillarCard from "@/components/PillarCard";
import AksiStep from "@/components/AkarStep";
import "./aksi.css";

// ─── Static data (lives on the server, never sent as JS to client) ────────────

const pillars = [
  {
    icon: "🛡",
    title: "Keamanan",
    subtitle: "Fondasi yang tak terlihat",
    desc: "Perlindungan data pelanggan, keamanan transaksi, hingga edukasi social engineering untuk seluruh tim — karena ancaman terbesar sering datang dari dalam.",
    accent: "#E07B54",
    delay: 0,
  },
  {
    icon: "⚡",
    title: "Kenyamanan",
    subtitle: "Bukan kemudahan yang menipu",
    desc: "UX yang intuitif, kecepatan akses, dan operasional harian yang efisien — kenyamanan sejati adalah yang tidak mengorbankan keamanan diam-diam.",
    accent: "#C8A96E",
    delay: 120,
  },
  {
    icon: "⚙",
    title: "Kapabilitas",
    subtitle: "Sistem yang bisa tumbuh",
    desc: "Teknologi yang kompatibel dengan kapasitas UMKM hari ini, namun dirancang untuk berkembang bersama bisnis Anda — tanpa harus ganti sistem dari nol.",
    accent: "#8FB89A",
    delay: 240,
  },
];

const aksiSteps = [
  {
    letter: "A",
    word: "Analisis Akar",
    desc: "Menemukan alasan fundamental The Why kenapa bisnis Anda harus digital. Efisiensi biaya? Skalabilitas? Jangkauan pasar?",
  },
  {
    letter: "K",
    word: "Kenali Risiko",
    desc: "Pemetaan ancaman secara jujur. Tidak ada sistem 100% aman — tapi ada sistem yang 100% siap menghadapi ancaman.",
  },
  {
    letter: "S",
    word: "Strategi Sistem",
    desc: "Membangun infrastruktur yang kompatibel dengan kapasitas UMKM hari ini, namun scalable untuk masa depan.",
  },
  {
    letter: "I",
    word: "Implementasi Sadar",
    desc: "Eksekusi dengan pemahaman trade-off penuh. Anda tahu apa yang didapat dan apa yang dikompromikan — secara sadar.",
  },
];

const balanceBars = [
  { label: "Keamanan",   value: 72, color: "#E07B54" },
  { label: "Kenyamanan", value: 88, color: "#C8A96E" },
  { label: "Kapabilitas", value: 65, color: "#8FB89A" },
];

// ─── Page (Server Component) ──────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* NavClient handles scroll state on the client */}
      <NavClient />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Konsultan Digital UMKM Indonesia</p>
          <h1 className="hero-title">
            Bukan sekadar<br />
            <em>go digital.</em>
          </h1>
          <p className="hero-tagline">
            Banyak UMKM membangun bisnis digital seperti membangun rumah di atas
            pasir —{" "}
            <strong>terlihat indah, tapi rapuh.</strong> Di AKSI, kami tidak
            hanya mendigitalkan bisnis Anda. Kami menanamkan fondasinya.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">BerAKSI Sekarang</button>
            <button className="btn-secondary">Pelajari Metodologi</button>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/akarsistemlogo.png"
            alt="Dashboard AKSI"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", borderRadius: "4px", opacity: 0.85 }}
          />
        </div>
      </section>

      {/* QUOTE BAND */}
      <div className="quote-band">
        <p className="quote-text">
          Kami membantu Anda memahami setiap risiko, mengelola setiap ancaman,
          dan mengambil langkah digital dengan{" "}
          <em>kesadaran penuh</em> — bukan sekadar kecepatan.
        </p>
        <p className="quote-attr">— Filosofi AKSI · Akar Sistem</p>
      </div>

      {/* PILLARS */}
      <section id="pilar" className="pillars-section">
        <div className="pillars-header">
          <p className="section-eyebrow">Tiga Pilar Keseimbangan</p>
          <h2 className="section-title">
            Satu saja goyah,<br />semuanya ikut roboh.
          </h2>
          <p className="section-sub">
            UMKM sering terjebak: terlalu fokus pada kenyamanan hingga
            mengabaikan keamanan, atau terlalu takut hingga tidak bergerak sama
            sekali. Kami hadir untuk menyeimbangkan ketiganya.
          </p>
        </div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <PillarCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="metodologi" style={{ background: "var(--bg)" }}>
        <div className="aksi-section">
          <div className="aksi-left">
            <p className="section-eyebrow">Metodologi Kerja</p>
            <h2 className="section-title">
              Kenapa berAKSI<br />dari akar?
            </h2>
            <p className="section-sub">
              Sebelum bicara tools, platform, atau fitur — kami menggali alasan
              fundamental kenapa bisnis Anda harus digital. Jawaban itu yang
              menentukan segalanya.
            </p>
            <div className="aksi-problem">
              <p>
                <strong>Masalah nyata:</strong> Sebagian besar UMKM memulai
                digitalisasi karena ikut-ikutan atau tekanan, bukan karena
                pemahaman. Hasilnya? Sistem yang mahal, rapuh, dan tidak sesuai
                kapasitas.
              </p>
            </div>
          </div>

          <div className="aksi-steps">
            {aksiSteps.map((s, i) => (
              <AksiStep key={s.letter} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TRADE-OFF */}
      <section id="trade-off" className="tradeoff-section">
        <p className="section-eyebrow">The Conscious Trade-off</p>
        <h2 className="section-title">
          Kami tidak menjual<br />janji manis.
        </h2>
        <p className="section-sub">
          Setiap keputusan digital membawa konsekuensi. Kami memastikan Anda
          memahami setiap trade-off sebelum mengambil langkah — bukan sesudahnya.
        </p>
        <div className="tradeoff-grid">
          <div className="tradeoff-example">
            <p className="tradeoff-example-label">
              Contoh skenario konsultasi nyata
            </p>
            <p className="tradeoff-scenario">
              Jika kita menambah fitur{" "}
              <em>pembayaran otomatis</em> ini (Kenyamanan ↑), risiko kebocoran
              data meningkat (Keamanan ↓).
            </p>
            <div className="tradeoff-arrow">
              Pilihannya: tambah enkripsi berlapis (biaya naik)
            </div>
            <div className="tradeoff-arrow">
              Atau: batasi limit transaksi (sistem sedikit melambat)
            </div>
            <p
              className="tradeoff-scenario"
              style={{ marginTop: "1rem", fontSize: "0.82rem" }}
            >
              Tidak ada pilihan sempurna. Yang ada hanya{" "}
              <em>pilihan yang Anda buat dengan sadar.</em>
            </p>
          </div>

          <div className="tradeoff-visual">
            {balanceBars.map((b) => (
              <div key={b.label} className="balance-bar-wrapper">
                <div className="balance-bar-label">
                  <span>{b.label}</span>
                  <span style={{ color: b.color }}>{b.value}%</span>
                </div>
                <div className="balance-bar">
                  <div
                    className="balance-bar-fill"
                    style={{ width: `${b.value}%`, background: b.color }}
                  />
                </div>
              </div>
            ))}
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--muted)",
                marginTop: "0.5rem",
                lineHeight: "1.7",
              }}
            >
              Ilustrasi keseimbangan pilar dalam satu skenario UMKM ritel
              online. Setiap bisnis memiliki profil risikonya sendiri.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">
          Siap membangun fondasi,<br />
          bukan sekadar <em>tampilan?</em>
        </h2>
        <p className="cta-sub">
          Sesi konsultasi pertama gratis. Kami tidak akan memaksa Anda digital —
          kami akan membantu Anda memutuskan apakah ini langkah yang tepat untuk
          bisnis Anda sekarang.
        </p>
        <div className="cta-btns">
          <button className="btn-primary">Mulai Konsultasi Gratis</button>
          <button className="btn-secondary">Pelajari Lebih Lanjut</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">AKSI · Akar Sistem</div>
        <p className="footer-copy">
          © 2025 Akar Sistem. Untuk UMKM Indonesia yang ingin tumbuh dengan
          sadar.
        </p>
      </footer>
    </>
  );
}