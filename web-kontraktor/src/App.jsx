import React, { useState, useMemo } from 'react';
import { MessageCircle, ChevronDown, MapPin, Handshake, Camera, X, Menu, Image as ImageIcon, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

/* ---------------------------------- DATA --------------------------------- */

const WHY_STEEL = [
  'Lebih Kuat dan Tahan Lama',
  'Proses Pengerjaan Lebih Cepat dan Efisien',
  'Bobot Struktur Lebih Ringan',
  'Desain Lebih Fleksibel',
  'Minim Perawatan dan Tahan Cuaca',
  'Material Ramah Lingkungan dan Dapat Didaur Ulang',
];

const WHY_US = [
  'Legalitas Resmi (NIB & NPWP Terdaftar)',
  'Berpengalaman Sejak 2007',
  'Tim Ahli dan Berpengalaman',
  'Harga Transparan dan Terjangkau',
  'Pengerjaan Tepat Waktu',
  'Material Ramah Lingkungan',
  'Konsultasi Awal Gratis',
];

const SERVICES = [
  'Desain Gambar Kerja 2D',
  'Fabrikasi & Ereksi Konstruksi Baja',
  'Bangun & Renovasi Rumah, Ruko, Pabrik',
  'Pemasangan Ducting',
  'Pembuatan Silo',
  'Pembuatan & Pemasangan Conveyor',
  'Pemasangan Sistem Perpipaan',
  'Pemasangan Dust Collector',
  'Pembuatan & Pemasangan Tangki',
  'Pembuatan & Pemasangan Cerobong',
  'Pembuatan Partisi',
  'Pembuatan & Pemasangan Alumunium',
  'Pemasangan Plafon',
  'Pemasangan Sistem Listrik',
  'Dan Lain-lain',
];

const CLIENTS = [
  'PT Kualimas Aditama', 'PT Kuda Laut Mas', 'PT Indraco', 'PT Jatim Taman Steel',
  'PT SGI Purwosari', 'PT SDA', 'Pabrik Snack', 'Pabrik Talang Pandan',
  'Rumah Tinggal Bapak', 'Kos Bapak Adi Wiyung', 'Show Room Mitra Niaga Motor',
];

/* ==========================================================================
   ✅ DATA GALERI PROYEK — Berdasarkan Dokumentasi Asli Anda
   ========================================================================== */

const PROJECT_GALLERY = [
  { id: 1,  title: 'Konstruksi Baja', category: 'Konstruksi Baja', image: '/assets/images/Konstruksi Baja (1).png' },
  { id: 2,  title: 'Konstruksi Baja', category: 'Konstruksi Baja', image: '/assets/images/Konstruksi Baja (2).png' },
  { id: 3,  title: 'Konstruksi Baja', category: 'Konstruksi Baja', image: '/assets/images/Konstruksi Baja (3).png' },
  { id: 4,  title: 'Konstruksi Baja', category: 'Konstruksi Baja', image: '/assets/images/Konstruksi Baja (4).png' },
  { id: 5,  title: 'Konstruksi Baja', category: 'Konstruksi Baja', image: '/assets/images/Konstruksi Baja (5).png' },
  { id: 6,  title: 'Konstruksi Baja', category: 'Konstruksi Baja', image: '/assets/images/Konstruksi Baja (6).png' },

  { id: 7,  title: 'Pemasangan Ducting — PT Kuda Laut Mas', category: 'Ducting & Perpipaan', image: '/assets/images/Pek Ducting Kudalaut Mas (1).png' },
  { id: 8,  title: 'Ducting Industri — Sistem Ventilasi Pabrik', category: 'Ducting & Perpipaan', image: '/assets/images/Pek Ducting Kudalaut Mas (2).png' },
  { id: 9,  title: 'Ducting Exhaust — Instalasi Pabrik', category: 'Ducting & Perpipaan', image: '/assets/images/Pek Ducting Kudalaut Mas (3).png' },
  { id: 10, title: 'Ducting System — Hasil Pemasangan', category: 'Ducting & Perpipaan', image: '/assets/images/Pek Ducting Kudalaut Mas (4).png' },
  { id: 11, title: 'Sistem Perpipaan — PT Kualimas Aditama', category: 'Ducting & Perpipaan', image: '/assets/images/Perpipaan Kualinas (1).png' },
  { id: 12, title: 'Perpipaan Industri — Instalasi Pabrik', category: 'Ducting & Perpipaan', image: '/assets/images/Perpipaan Kualinas (2).png' },
  { id: 13, title: 'Perpipaan Tekanan — Pemasangan Rapi', category: 'Ducting & Perpipaan', image: '/assets/images/Perpipaan Kualinas (3).png' },
  { id: 14, title: 'Sistem Perpipaan — Hasil Akhir', category: 'Ducting & Perpipaan', image: '/assets/images/Perpipaan Kualinas (4).png' },

  { id: 15, title: 'Pembuatan Silo — PT Kualimas Aditama', category: 'Silo & Conveyor', image: '/assets/images/Pembuatan Silo Kualimas Aditama (1).png' },
  { id: 16, title: 'Silo Industri — Struktur Baja', category: 'Silo & Conveyor', image: '/assets/images/Pembuatan Silo Kualimas Aditama (2).png' },
  { id: 17, title: 'Silo Penyimpanan — Hasil Pengerjaan', category: 'Silo & Conveyor', image: '/assets/images/Pembuatan Silo Kualimas Aditama (3).png' },
  { id: 18, title: 'Konveyor Belt — PT Kualimas Aditama', category: 'Silo & Conveyor', image: '/assets/images/Konveyor Belt  Kualimas (1).png' },
  { id: 19, title: 'Sistem Conveyor — Instalasi Pabrik', category: 'Silo & Conveyor', image: '/assets/images/Konveyor Belt  Kualimas (2).png' },

  { id: 20, title: 'Pabrik Ducting — PT Kuda Laut Mas', category: 'Pabrik & Gedung', image: '/assets/images/Pek Blower Kudalaut Mas (1).png' },
  { id: 21, title: 'Blower System — Instalasi Pabrik', category: 'Pabrik & Gedung', image: '/assets/images/Pek Blower Kudalaut Mas (2).png' },
  { id: 22, title: 'Sistem Blower — Pemasangan Lengkap', category: 'Pabrik & Gedung', image: '/assets/images/Pek Blower Kudalaut Mas (3).png' },
  { id: 23, title: 'Blower Industri — Hasil Akhir', category: 'Pabrik & Gedung', image: '/assets/images/Pek Blower Kudalaut Mas (4).png' },
  { id: 24, title: 'Peninggian Gedung — PT Indraco Jaya', category: 'Pabrik & Gedung', image: '/assets/images/Peninggian Gedung Indraco Jaya (1).png' },
  { id: 25, title: 'Peninggian Gedung — Proses Pengerjaan', category: 'Pabrik & Gedung', image: '/assets/images/Peninggian Gedung Indraco Jaya (2).png' },
  { id: 26, title: 'Peninggian Gedung — Struktur Baru', category: 'Pabrik & Gedung', image: '/assets/images/Peninggian Gedung Indraco Jaya (3).png' },
  { id: 27, title: 'Peninggian Gedung — Tahap Lanjut', category: 'Pabrik & Gedung', image: '/assets/images/Peninggian Gedung Indraco Jaya (4).png' },
  { id: 28, title: 'Peninggian Gedung — Hasil Akhir', category: 'Pabrik & Gedung', image: '/assets/images/Peninggian Gedung Indraco Jaya (5).png' },
  { id: 29, title: 'Mess Karyawan — PT Indraco Jaya', category: 'Pabrik & Gedung', image: '/assets/images/Mess Karyawan Indraco Jaya (1).png' },
  { id: 30, title: 'Fasilitas Karyawan — Bangunan Pabrik', category: 'Pabrik & Gedung', image: '/assets/images/Mess Karyawan Indraco Jaya (2).png' },
  { id: 31, title: 'Pekerjaan Ledel — PT Jatim Taman Steel', category: 'Pabrik & Gedung', image: '/assets/images/Pek Ledel JTS (1).png' },

  { id: 32, title: 'Dust Collector — PT Kualimas Aditama', category: 'Dust Collector', image: '/assets/images/Pekerjaan Dustcolektor Kualimas Aditama (1).png' },
  { id: 33, title: 'Sistem Dust Collector — Instalasi', category: 'Dust Collector', image: '/assets/images/Pekerjaan Dustcolektor Kualimas Aditama (2).png' },
  { id: 34, title: 'CO Chamber — PT Jatim Taman Steel', category: 'Dust Collector', image: '/assets/images/CO Chamber JTS (1).png' },
  { id: 35, title: 'CO Chamber — Sistem Filtrasi', category: 'Dust Collector', image: '/assets/images/CO Chamber JTS (2).png' },
  { id: 36, title: 'CO Chamber — Hasil Pemasangan', category: 'Dust Collector', image: '/assets/images/CO Chamber JTS (3).png' },

  // ✅ Hapus id 37-39 (Dak) — hanya tersisa Jembatan Forklift
  { id: 37, title: 'Jembatan Forklift — PT Kuda Laut Mas', category: 'Jembatan Forklift', image: '/assets/images/Pembuatan Jembatan Forklift Kudalaut Mas (1).png' },
  { id: 38, title: 'Jembatan Forklift — Struktur Baja', category: 'Jembatan Forklift', image: '/assets/images/Pembuatan Jembatan Forklift Kudalaut Mas (2).png' },
  { id: 39, title: 'Jembatan Forklift — Hasil Akhir', category: 'Jembatan Forklift', image: '/assets/images/Pembuatan Jembatan Forklift Kudalaut Mas (3).png' },

  { id: 40, title: 'Renovasi Rumah Tinggal — Tampak Depan', category: 'Renovasi Rumah', image: '/assets/images/Renovasi Rumah Tinggal (1).png' },
  { id: 41, title: 'Renovasi Rumah — Proses Pengerjaan', category: 'Renovasi Rumah', image: '/assets/images/Renovasi Rumah Tinggal (2).png' },
  { id: 42, title: 'Renovasi Rumah — Struktur Baja', category: 'Renovasi Rumah', image: '/assets/images/Renovasi Rumah Tinggal (3).png' },
  { id: 43, title: 'Renovasi Rumah — Pemasangan Atap', category: 'Renovasi Rumah', image: '/assets/images/Renovasi Rumah Tinggal (4).png' },
  { id: 44, title: 'Renovasi Rumah — Tahap Finishing', category: 'Renovasi Rumah', image: '/assets/images/Renovasi Rumah Tinggal (5).png' },
  { id: 45, title: 'Renovasi Rumah — Hasil Renovasi', category: 'Renovasi Rumah', image: '/assets/images/Renovasi Rumah Tinggal (6).png' },
  { id: 46, title: 'Renovasi Rumah — Tampak Akhir', category: 'Renovasi Rumah', image: '/assets/images/Renovasi Rumah Tinggal (7).png' },

  { id: 47, title: 'Renovasi Gedung — PT Jatim Taman Steel', category: 'Renovasi Pabrik', image: '/assets/images/Renovasi JTS 1.png' },
  { id: 48, title: 'Renovasi Pabrik — Struktur Baru', category: 'Renovasi Pabrik', image: '/assets/images/Renovasi JTS 2.png' },
  { id: 49, title: 'Renovasi Dak Lt.2 — PT Indraco Jaya', category: 'Renovasi Pabrik', image: '/assets/images/Renov dak Lt.2 Indraco Jaya (1).png' },
  { id: 50, title: 'Renovasi Dak — Hasil Pengerjaan', category: 'Renovasi Pabrik', image: '/assets/images/Renov dak Lt.2 Indraco Jaya (2).png' },

  { id: 51, title: 'Meja Kerja Produksi — PT Jatim Taman Steel', category: 'Fasilitas Produksi', image: '/assets/images/Meja Kerja Produksi JTS (1).png' },
  { id: 52, title: 'Meja Kerja — Fabrikasi Baja', category: 'Fasilitas Produksi', image: '/assets/images/Meja Kerja Produksi JTS (2).png' },
  { id: 53, title: 'Meja Kerja Produksi — Hasil Akhir', category: 'Fasilitas Produksi', image: '/assets/images/Meja Kerja Produksi JTS (3).png' },

  { id: 54, title: 'Pengecoran — Pekerjaan Pondasi', category: 'Pekerjaan Sipil', image: '/assets/images/Pengecoran 1.png' },
  { id: 55, title: 'Pengecoran — Proses Cor Beton', category: 'Pekerjaan Sipil', image: '/assets/images/Pengecoran 2.png' },
];

// ✅ FOTO FITUR
const FEATURE_PHOTOS = [
  { id: 'feat-1', label: 'Konstruksi Baja Profesional', image: '/assets/images/Konstruksi Baja (4).png' },
  { id: 'feat-2', label: 'Pemasangan Ducting Industri', image: '/assets/images/Pek Ducting Kudalaut Mas (1).png' },
  { id: 'feat-3', label: 'Renovasi Pabrik & Gedung', image: '/assets/images/Peninggian Gedung Indraco Jaya (2).png' },
  { id: 'feat-4', label: 'Silo & Conveyor System', image: '/assets/images/Pembuatan Silo Kualimas Aditama (2).png' },
  { id: 'feat-5', label: 'Renovasi Rumah Tinggal', image: '/assets/images/Renovasi Rumah Tinggal (7).png' },
];

// ✅ GALLERY_CATEGORIES — 'Dak & Jembatan' diubah menjadi 'Jembatan Forklift'
const GALLERY_CATEGORIES = [
  'Semua',
  'Konstruksi Baja',
  'Ducting & Perpipaan',
  'Silo & Conveyor',
  'Pabrik & Gedung',
  'Dust Collector',
  'Jembatan Forklift',
  'Renovasi Rumah',
  'Renovasi Pabrik',
  'Fasilitas Produksi',
  'Pekerjaan Sipil',
];

const ADDRESS = 'Jl. Cempaka Putih RT005/RW001, Kelurahan Popoh, Kec. Wonoayu, Kab. Sidoarjo, Jawa Timur 61261';
const WA_NUMBER = '6285655223839';
const WA_MESSAGE = 'Halo CV Liwon Jaya Makmur, saya ingin konsultasi mengenai proyek konstruksi baja.';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

/* ------------------------------- SUB PARTS -------------------------------- */

function Heading({ children }) {
  return <h2 className="text-center text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">{children}</h2>;
}

function SubHeading({ children }) {
  return <p className="mx-auto mt-3 max-w-md text-center text-[14px] leading-relaxed text-slate-500">{children}</p>;
}

function BulletList({ items }) {
  return (
    <ul className="mx-auto mt-5 max-w-sm space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-left">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
          <span className="text-[15px] leading-relaxed text-slate-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PhotoBlock({ label, image }) {
  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      {image ? (
        <img src={image} alt={label} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="flex flex-col items-center gap-2 text-white/60">
          <Camera size={30} />
          <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
        </div>
      )}
    </div>
  );
}

function CTAButton({ children }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-[1.02] hover:bg-amber-600"
    >
      <MessageCircle size={20} />
      {children}
    </a>
  );
}

/* --------------------------- HEADER + NAVIGATION -------------------------- */

const NAV_ITEMS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Klien', href: '#klien' },
  { label: 'Kontak', href: '#kontak' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          {/* ✅ LOGO HEADER — diperbesar agar lebih jelas */}
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
            <img
              src="/assets/images/Logo.png"
              alt="Logo Liwon Jaya Makmur"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-sm font-bold uppercase tracking-wide text-slate-900 leading-tight">CV Liwon Jaya<br className="sm:hidden" /> Makmur</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-amber-600"
          >
            <MessageCircle size={14} /> Hubungi
          </a>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-xl px-6 py-3">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      style={{ backgroundColor: '#25D366' }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
    >
      <MessageCircle size={26} />
    </a>
  );
}

/* ----------------------------- GALLERY SECTION ---------------------------- */

// Fisher-Yates shuffle
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightbox, setLightbox] = useState(null);

  // ✅ Acak galeri saat pertama kali load (berubah tiap refresh)
  const [shuffledGallery, setShuffledGallery] = useState(() => shuffleArray(PROJECT_GALLERY));

  const handleShuffle = () => {
    setShuffledGallery(shuffleArray(PROJECT_GALLERY));
  };

  // Saat filter "Semua" → tampilkan hanya 6 gambar acak dari seluruh kategori
  const filtered = useMemo(() => {
    if (activeCategory === 'Semua') {
      return shuffledGallery.slice(0, 6);
    }
    return PROJECT_GALLERY.filter((p) => p.category === activeCategory);
  }, [activeCategory, shuffledGallery]);

  const openLightbox = (project) => setLightbox(project);
  const closeLightbox = () => setLightbox(null);

  const goToPrev = () => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    const prev = filtered[(idx - 1 + filtered.length) % filtered.length];
    setLightbox(prev);
  };

  const goToNext = () => {
    if (!lightbox) return;
    const idx = filtered.findIndex((p) => p.id === lightbox.id);
    const next = filtered[(idx + 1) % filtered.length];
    setLightbox(next);
  };

  return (
    <section id="galeri" className="mt-14">
      <Heading>Galeri Proyek Kami</Heading>
      <SubHeading>Dokumentasi hasil pengerjaan proyek konstruksi baja oleh tim CV Liwon Jaya Makmur.</SubHeading>

      {/* Category Filter */}
      <div className="mt-6 -mx-6 overflow-x-auto px-6 pb-2">
        <div className="flex gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Info bar untuk mode "Semua" */}
      {activeCategory === 'Semua' && (
        <div className="mt-4 flex items-center justify-between gap-2 rounded-xl bg-amber-50 px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-amber-700">
            <RefreshCw size={14} className="animate-spin-slow" />
            <span className="font-semibold">Menampilkan 6 foto acak dari semua kategori</span>
          </div>
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-1.5 text-[11px] font-bold uppercase text-white transition-colors hover:bg-amber-600"
          >
            <RefreshCw size={12} /> Acak Ulang
          </button>
        </div>
      )}

      {/* Photo Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {filtered.map((project) => (
          <button
            key={project.id}
            onClick={() => openLightbox(project)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-white">
              <span className="inline-block rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                {project.category}
              </span>
              <p className="mt-1.5 line-clamp-2 text-xs font-bold leading-tight">{project.title}</p>
            </div>
            <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
              <ImageIcon size={14} />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Tutup"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            aria-label="Sebelumnya"
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Selanjutnya"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.image} alt={lightbox.title} className="max-h-[85vh] w-full object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
              <span className="inline-block rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                {lightbox.category}
              </span>
              <p className="mt-1.5 text-base font-bold">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------------------------- APP ---------------------------------- */

function App() {
  return (
    <div className="ljm-simple min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .ljm-simple { font-family: 'Poppins', sans-serif; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>

      <Header />

      <main className="mx-auto max-w-xl px-6 pb-20 pt-12">

        {/* HERO */}
        <section id="beranda" className="text-center">
          <h1 className="text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Jasa Konstruksi Baja &amp; Bangunan Profesional
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-slate-600">
            <span className="font-bold text-slate-900">CV Liwon Jaya Makmur</span> menghadirkan layanan konstruksi baja dan bangunan dengan material berkualitas tinggi. Proses pengerjaan efisien dan hasil yang tahan lama. Cocok untuk pabrik, gudang, ruko, hingga rumah tinggal.
          </p>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
            Dikerjakan oleh tim profesional berpengalaman sejak 2007 untuk memastikan struktur bangunan yang kokoh dan efisien.
          </p>
        </section>

        {/* FEATURE PHOTOS */}
        <div className="mt-8 space-y-4">
          <PhotoBlock label={FEATURE_PHOTOS[0].label} image={FEATURE_PHOTOS[0].image} />
          <PhotoBlock label={FEATURE_PHOTOS[1].label} image={FEATURE_PHOTOS[1].image} />
        </div>

        {/* WHY STEEL */}
        <section className="mt-14">
          <Heading>Kenapa Memilih Konstruksi Baja?</Heading>
          <BulletList items={WHY_STEEL} />
        </section>

        {/* FEATURE PHOTOS */}
        <div className="mt-8 space-y-4">
          <PhotoBlock label={FEATURE_PHOTOS[2].label} image={FEATURE_PHOTOS[2].image} />
          <PhotoBlock label={FEATURE_PHOTOS[3].label} image={FEATURE_PHOTOS[3].image} />
          <PhotoBlock label={FEATURE_PHOTOS[4].label} image={FEATURE_PHOTOS[4].image} />
        </div>

        {/* ABOUT */}
        <section className="mt-14 text-center">
          <Heading>CV Liwon Jaya Makmur</Heading>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
            <span className="font-bold text-slate-900">CV Liwon Jaya Makmur</span> adalah kontraktor konstruksi baja yang dikerjakan oleh tim profesional berpengalaman di bidang struktur dan pembangunan. Kami menggunakan material berkualitas tinggi dan teknik pemasangan yang presisi untuk memastikan hasil konstruksi yang <span className="font-bold text-slate-900">kokoh, tahan lama, dan efisien</span>.
          </p>
        </section>

        {/* SERVICE AREA */}
        <section className="mt-12 text-center">
          <Heading>Wilayah Layanan</Heading>
          <div className="mx-auto mt-4 max-w-sm">
            <p className="font-bold text-slate-900">Seluruh Indonesia</p>
            <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
              CV Liwon Jaya Makmur melayani proyek konstruksi baja di seluruh Indonesia.
            </p>
          </div>
        </section>

        {/* WHY US */}
        <section className="mt-12 text-center">
          <Heading>Kenapa Memilih CV Liwon Jaya Makmur?</Heading>
          <BulletList items={WHY_US} />
        </section>

        {/* ARROWS POINTING TO CTA */}
        <div className="mt-10 flex justify-center gap-3">
          {[-20, 0, 20].map((deg) => (
            <ChevronDown key={deg} size={30} className="text-amber-500" style={{ transform: `rotate(${deg}deg)` }} />
          ))}
        </div>

        <div className="mt-6">
          <CTAButton>Hubungi Kami</CTAButton>
        </div>

        {/* SERVICES LIST */}
        <section id="layanan" className="mt-14 text-center">
          <Heading>Produk dan Layanan Unggulan CV Liwon Jaya Makmur</Heading>
          <BulletList items={SERVICES} />
        </section>

        {/* GALERI PROYEK */}
        <GallerySection />

        <hr className="mx-auto mt-12 max-w-[120px] border-slate-300" />

        {/* TRUST */}
        <div className="mt-8 flex justify-center">
          <Handshake size={40} className="text-amber-500" />
        </div>
        <section id="klien" className="mt-4 text-center">
          <Heading>Dipercaya 10+ Klien di Jawa Timur</Heading>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
            CV Liwon Jaya Makmur telah dipercaya oleh berbagai perusahaan dan perorangan dalam pembangunan pabrik, gudang, ruko, hingga renovasi rumah tinggal.
          </p>
        </section>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CLIENTS.map((name) => (
            <div key={name} className="flex min-h-[64px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xs font-semibold text-slate-700">
              {name}
            </div>
          ))}
        </div>

        {/* FINAL CTA BLOCK */}
        <div id="kontak" className="mt-14 rounded-2xl bg-slate-900 px-6 py-10 text-center text-white">
          <h2 className="text-xl font-extrabold uppercase sm:text-2xl">Hubungi Kami Sekarang!</h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
            Hubungi kami untuk konsultasi proyek, survei lokasi, maupun penawaran harga. Tim kami siap melayani dengan cepat dan profesional.
          </p>
          <div className="mx-auto mt-6 max-w-xs">
            <p className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-400">
              <MapPin size={14} /> Alamat Kantor
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">{ADDRESS}</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-4 text-base font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-amber-600"
          >
            <MessageCircle size={20} /> Chat Via WhatsApp
          </a>
        </div>

        {/* FOOTER */}
        <p className="mt-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} CV Liwon Jaya Makmur
        </p>
      </main>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
