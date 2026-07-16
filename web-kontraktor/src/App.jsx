import React, { useState } from 'react';
import { MessageCircle, ChevronDown, MapPin, Handshake, Camera, X, Menu, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

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

// ✅ DATA GALERI PROYEK — tambahkan foto hasil proyek di sini
//    Ganti URL dengan gambar lokal: image: '/assets/images/nama-file.png'
const PROJECT_GALLERY = [
  {
    id: 1,
    title: 'Fabrikasi Struktur Baja',
    category: 'Fabrikasi',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 2,
    title: 'Ereksi Konstruksi Baja',
    category: 'Ereksi',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 3,
    title: 'Bangunan Pabrik & Gudang',
    category: 'Pabrik',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 4,
    title: 'Pemasangan Rangka Atap',
    category: 'Atap',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 5,
    title: 'Bangunan Komersial / Ruko',
    category: 'Komersial',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 6,
    title: 'Pemasangan Ducting & Piping',
    category: 'Ducting',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 7,
    title: 'Silo & Conveyor System',
    category: 'Industrial',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 8,
    title: 'Rumah Tinggal Baja Ringan',
    category: 'Residensial',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
];

// ✅ FOTO FITUR — foto untuk section hero & highlight (terpisah dari galeri)
//    Ganti URL di bawah dengan foto asli proyek Anda
//    Contoh: image: '/assets/images/nama-file-anda.png'
const FEATURE_PHOTOS = [
  {
    id: 'feat-1',
    label: 'Fabrikasi Struktur Baja',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 'feat-2',
    label: 'Pemasangan Konstruksi Baja',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 'feat-3',
    label: 'Renovasi Pabrik & Gudang',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 'feat-4',
    label: 'Struktur Rangka Atap',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
  {
    id: 'feat-5',
    label: 'Bangunan Komersial',
    image: '/assets/images/hero.png', // Ganti dengan foto proyek Anda
  },
];

const GALLERY_CATEGORIES = ['Semua', 'Fabrikasi', 'Ereksi', 'Pabrik', 'Atap', 'Komersial', 'Ducting', 'Industrial', 'Residensial'];

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
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-extrabold text-amber-400">LJM</div>
          <span className="text-sm font-bold uppercase tracking-wide text-slate-900">Liwon Jaya Makmur</span>
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

      {/* Mobile Nav Drawer */}
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

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'Semua'
    ? PROJECT_GALLERY
    : PROJECT_GALLERY.filter((p) => p.category === activeCategory);

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
      <SubHeading>Dokumentasi hasil pengerjaan proyek konstruksi baja oleh tim Liwon Jaya Makmur.</SubHeading>

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
      `}</style>

      <Header />

      <main className="mx-auto max-w-xl px-6 pb-20 pt-12">

        {/* HERO */}
        <section id="beranda" className="text-center">
          <h1 className="text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Jasa Konstruksi Baja &amp; Bangunan Profesional
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-slate-600">
            <span className="font-bold text-slate-900">Liwon Jaya Makmur</span> menghadirkan layanan konstruksi baja dan bangunan dengan material berkualitas tinggi. Proses pengerjaan efisien dan hasil yang tahan lama. Cocok untuk pabrik, gudang, ruko, hingga rumah tinggal.
          </p>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
            Dikerjakan oleh tim profesional berpengalaman sejak 2007 untuk memastikan struktur bangunan yang kokoh dan efisien.
          </p>
        </section>

        {/* ✅ Gunakan FEATURE_PHOTOS (terpisah dari PROJECT_GALLERY) */}
        <div className="mt-8 space-y-4">
          <PhotoBlock label={FEATURE_PHOTOS[0].label} image={FEATURE_PHOTOS[0].image} />
          <PhotoBlock label={FEATURE_PHOTOS[1].label} image={FEATURE_PHOTOS[1].image} />
        </div>

        {/* WHY STEEL */}
        <section className="mt-14">
          <Heading>Kenapa Memilih Konstruksi Baja?</Heading>
          <BulletList items={WHY_STEEL} />
        </section>

        {/* ✅ Gunakan FEATURE_PHOTOS (terpisah dari PROJECT_GALLERY) */}
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
            <p className="font-bold text-slate-900">Sidoarjo &amp; Jawa Timur</p>
            <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
              Liwon Jaya Makmur melayani proyek konstruksi baja di Sidoarjo, Surabaya, dan sekitar wilayah Jawa Timur.
            </p>
          </div>
        </section>

        {/* WHY US */}
        <section className="mt-12 text-center">
          <Heading>Kenapa Memilih Liwon Jaya Makmur?</Heading>
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
          <Heading>Produk dan Layanan Unggulan Liwon Jaya Makmur</Heading>
          <BulletList items={SERVICES} />
        </section>

        {/* ============================================ */}
        {/* ✅ GALERI PROYEK — posisi ideal: setelah     */}
        {/*    Layanan & sebelum section Klien/Trust.    */}
        {/*    Alasan: user sudah tahu layanan apa yang  */}
        {/*    ditawarkan, sekarang lihat bukti hasilnya.*/}
        {/* ============================================ */}
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
