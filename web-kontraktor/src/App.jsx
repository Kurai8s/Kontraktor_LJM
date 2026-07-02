import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-wider text-amber-600">PRIMA<span className="text-slate-900">KARYA</span></div>
        <div className="space-x-6 hidden md:flex font-medium">
          <a href="#" className="hover:text-amber-600 transition">Beranda</a>
          <a href="#" className="hover:text-amber-600 transition">Tentang Kami</a>
          <a href="#" className="hover:text-amber-600 transition">Proyek</a>
          <a href="#" className="hover:text-amber-600 transition">Kontak</a>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-amber-600 transition hidden md:block">
          Konsultasi Gratis
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm block mb-3">Kontraktor & Arsitektur Profesional</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Mewujudkan Bangunan Impian Anda Tanpa Khawatir.
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Kami menghadirkan layanan konstruksi transparan, tepat waktu, dan hasil berkualitas tinggi berstandar modern untuk hunian maupun bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-amber-700 transition shadow-lg shadow-amber-600/20">
              Lihat Portofolio
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-md font-semibold hover:border-slate-900 hover:text-slate-900 transition">
              Hubungi Kami
            </button>
          </div>
        </div>
        
        {/* GAMBAR TEMPAT HOLDER (Bisa diganti foto proyek Anda nanti) */}
        <div className="bg-slate-300 h-[450px] rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
          <p className="text-slate-500 font-medium z-10">[ Tempat Foto Proyek Terbaik Anda ]</p>
        </div>
      </header>
    </div>
  );
}

export default App;