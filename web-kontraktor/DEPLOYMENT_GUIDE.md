# 🚀 Tutorial Deployment ke Vercel - CV Liwon Jaya Makmur

## ✅ Status Kesiapan Deployment

**YA, kode sudah siap untuk deployment!** 

Website ini adalah landing page statis yang tidak memerlukan database. Semua data sudah hardcode di dalam komponen React, sehingga:
- ✅ Tidak perlu setup database
- ✅ Tidak ada risiko sistem down karena database
- ✅ Lebih cepat dan stabil (static hosting)
- ✅ Biaya hosting gratis di Vercel

---

## 📁 Struktur Folder Gambar

Gambar sekarang disimpan di folder `public/assets/images/`. Ini memudahkan Anda untuk mengganti gambar tanpa perlu mengubah kode.

```
web-kontraktor/
├── public/
│   └── assets/
│       └── images/
│           ├── hero.png          # Gambar utama hero section
│           ├── logo.png          # Logo perusahaan (opsional)
│           ├── project-1.png     # Foto proyek 1
│           ├── project-2.png     # Foto proyek 2
│           └── ...               # Tambahkan foto lainnya
├── src/
│   ├── App.jsx                   # Kode utama (di sini Anda edit URL gambar)
│   └── assets/                   # Asset internal Vite (biarkan saja)
```

---

## 🖼️ Cara Mengganti Gambar

### Metode 1: Ganti File Langsung (RECOMMENDED)

1. **Siapkan gambar Anda** dengan nama yang sama atau nama baru
2. **Simpan di folder** `public/assets/images/`
3. **Update kode di `src/App.jsx`** dengan path baru

Contoh:
```javascript
// Di src/App.jsx, cari bagian FEATURE_PHOTOS atau PROJECT_GALLERY

// Sebelum:
image: 'https://image.qwenlm.ai/public_source/...',

// Sesudah (menggunakan gambar lokal):
image: '/assets/images/nama-file-anda.png',
```

### Metode 2: Ganti Logo di Header

Untuk mengganti logo/text di header, cari bagian ini di `App.jsx`:

```javascript
// Baris ~212-214
<div className="flex items-center gap-2.5">
  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[10px] font-extrabold text-amber-400">LJM</div>
  <span className="text-sm font-bold uppercase tracking-wide text-slate-900">Liwon Jaya Makmur</span>
</div>
```

**Opsi A: Gunakan Text Saja**
```javascript
<span className="text-sm font-bold uppercase tracking-wide text-slate-900">CV LIWON JAYA MAKMUR</span>
```

**Opsi B: Gunakan Gambar Logo**
```javascript
<img 
  src="/assets/images/logo.png" 
  alt="Logo Liwon Jaya Makmur" 
  className="h-9 w-9 object-contain"
/>
<span className="text-sm font-bold uppercase tracking-wide text-slate-900">Liwon Jaya Makmur</span>
```

---

## 🌐 Tutorial Deployment ke Vercel (LENGKAP)

### Prasyarat
- Akun GitHub (gratis)
- Akun Vercel (gratis) - bisa login dengan GitHub

### Langkah 1: Push Kode ke GitHub

```bash
# Masuk ke folder project
cd /workspace/web-kontraktor

# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit - Website CV Liwon Jaya Makmur"

# Buat branch main (jika perlu)
git branch -M main

# Tambahkan remote GitHub (ganti URL dengan repo Anda)
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO.git

# Push ke GitHub
git push -u origin main
```

### Langkah 2: Deploy ke Vercel

#### Opsi A: Deploy Otomatis via GitHub (RECOMMENDED)

1. **Buka [vercel.com](https://vercel.com)**
2. **Login dengan GitHub**
3. **Klik "Add New Project"**
4. **Pilih repository GitHub** yang baru saja Anda push
5. **Klik "Import"**
6. **Biarkan pengaturan default:**
   - Framework Preset: Vite
   - Root Directory: `./` (atau `web-kontraktor` jika repo berisi folder ini)
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. **Klik "Deploy"**
8. **Tunggu proses selesai** (~1-2 menit)
9. **Website Anda live!** 🎉

#### Opsi B: Deploy Manual dengan Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login ke Vercel
vercel login

# Masuk ke folder project
cd /workspace/web-kontraktor

# Deploy (pertama kali)
vercel

# Ikuti instruksi:
# - Set up and deploy? Y
# - Which scope? (pilih akun Anda)
# - Link to existing project? N
# - Project name? (tekan Enter untuk default)
# - Directory? ./ (tekan Enter)
# - Override settings? N

# Deploy selesai! Anda dapat URL seperti: https://your-project.vercel.app
```

### Langkah 3: Update Deployment (Setiap Ada Perubahan)

```bash
# Setelah edit kode, jalankan:
git add .
git commit -m "Update galeri proyek"
git push

# Vercel akan otomatis deploy ulang! 🚀
```

Atau manual:
```bash
vercel --prod
```

---

## 🔧 Konfigurasi Tambahan (Opsional)

### Custom Domain

1. Beli domain (Niagahoster, Domainesia, dll)
2. Di dashboard Vercel: **Project Settings → Domains**
3. Tambahkan domain Anda
4. Setup DNS di provider domain:
   ```
   Type: CNAME
   Name: @ atau www
   Value: cname.vercel-dns.com
   ```

### Environment Variables (Jika Perlu)

Jika nanti butuh API key atau konfigurasi sensitif:
1. Dashboard Vercel → Project → Settings → Environment Variables
2. Tambahkan variable
3. Redeploy

---

## 📋 Checklist Pre-Deployment

- [ ] Semua gambar sudah diganti dengan foto asli proyek
- [ ] Nomor WhatsApp sudah benar (`6285655223839`)
- [ ] Alamat lengkap sudah sesuai
- [ ] Nama perusahaan konsisten
- [ ] Test lokal: `npm run dev`
- [ ] Build test: `npm run build`
- [ ] Push ke GitHub
- [ ] Deploy ke Vercel

---

## 🛠️ Perintah Berguna

```bash
# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build lokal
npm run preview

# Deploy ke Vercel
vercel

# Deploy production
vercel --prod
```

---

## ❓ FAQ

**Q: Apakah perlu database?**
A: Tidak. Website ini statis, semua data hardcode. Database hanya diperlukan jika ada fitur login admin atau konten dinamis.

**Q: Bagaimana cara update konten?**
A: Edit file `src/App.jsx`, ganti teks/gambar, commit, push ke GitHub, Vercel auto-deploy.

**Q: Berapa biaya hosting di Vercel?**
A: Gratis untuk penggunaan pribadi/komersial kecil (hingga 100GB bandwidth/bulan).

**Q: Apakah bisa down?**
A: Sangat kecil kemungkinannya. Vercel menggunakan CDN global dengan uptime 99.99%.

**Q: Bagaimana backup data?**
A: Semua kode ada di GitHub. Cukup clone repo untuk restore.

---

## 📞 Support

Jika ada masalah saat deployment:
1. Cek log build di dashboard Vercel
2. Pastikan `npm run build` sukses di lokal
3. Periksa console browser untuk error

---

**Dibuat dengan ❤️ untuk CV Liwon Jaya Makmur**
