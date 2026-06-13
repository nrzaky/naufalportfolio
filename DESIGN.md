# Naufal Portfolio UI/UX Design Document

Dokumen ini menguraikan sistem desain, prinsip UI/UX, dan arsitektur visual untuk proyek Naufal Portfolio. Fokus utamanya adalah menghadirkan pengalaman pengguna bergaya "Premium Tech Blog" yang terinspirasi oleh platform modern seperti Vercel, Medium, dan Hashnode.

## 1. Prinsip Desain (Design Principles)

1. **Mobile-First & Responsif**: Semua komponen dirancang mulai dari ukuran layar 360px hingga 1440px+ tanpa ada tata letak yang rusak.
2. **Keterbacaan Tinggi (Readability)**: Fokus utama dari platform ini adalah artikel. Tipografi, spasi, dan lebar maksimal pembacaan (`max-w-[65ch]`) sangat dijaga.
3. **Glassmorphism & Elevasi Halus**: Penggunaan *border* tegas dikurangi dan digantikan dengan efek *glassmorphism* (blur) pada navbar dan bayangan super halus (*soft shadow*) untuk menciptakan hirarki visual (kedalaman).
4. **Dark Mode Eksklusif**: Mode gelap tidak lagi abu-abu atau hitam murni, melainkan warna *Zinc/Slate* yang kaya untuk kenyamanan mata di malam hari.

---

## 2. Design System Tokens (Tokens)

Sistem warna dikonfigurasikan di `index.css` menggunakan variabel HSL untuk mendukung *theming* secara dinamis di Tailwind CSS.

### Color Palette (Palet Warna)

- **Primary (Biru Premium)**
  - Light & Dark Mode (mendekati biru Vercel/Tailwind Blue-600): `hsl(221.2 83.2% 53.3%)`
  - Warna ini cerah, kontras, dan sangat cocok untuk Call to Action (CTA) serta link aktif.

- **Background & Surface (Latar Belakang & Permukaan)**
  - **Light Mode**: Latar putih bersih `hsl(0 0% 100%)` dengan teks `hsl(240 10% 3.9%)` (Zinc 950).
  - **Dark Mode**: Latar gelap kebiruan elegan `hsl(240 10% 3.9%)` dengan teks putih keabuan `hsl(0 0% 98%)`.

- **Muted & Borders (Warna Halus & Garis)**
  - Menggunakan variasi dari *gray-scale* agar serasi. Garis tepi (*borders*) dibuat hampir transparan (`border/50`) sehingga UI tidak terasa kaku.

### Tipografi (Typography)

Menggunakan font **Plus Jakarta Sans** sebagai font utama, di-*fallback* ke `system-ui`. Font ini memiliki karakter *tech-savvy* yang modern.

- **Headings (H1, H2, H3)**: Menggunakan ketebalan `font-extrabold` hingga `font-bold` dengan *tracking-tight* (huruf lebih rapat) agar terlihat seperti headline koran modern.
- **Article Body (`.article-prose`)**:
  - Ukuran teks diperbesar (`1.05rem`)
  - Jarak antar baris (`leading-[1.8]`) dioptimalkan.
  - Paragraf dibatasi lebarnya agar bola mata pengguna tidak perlu terlalu jauh berpindah antar ujung paragraf (*optimal reading width*).

### Shadows & Depth (Bayangan & Kedalaman)

Garis keras (hard borders) digantikan dengan sistem bayangan halus:
- `shadow-soft`: Bayangan blur tipis (`rgba(0,0,0,0.05)`) untuk komponen *card* dalam keadaan statis.
- `shadow-elevated`: Bayangan lebih tebal dan menyebar (`rgba(0,0,0,0.1)`) untuk komponen yang sedang difokuskan (saat di-hover).

---

## 3. Komponen Utama (Core Components)

### 3.1. Navigation Bar (Navbar)
- **Glassmorphism**: Navbar mengambang (`sticky / fixed`) di atas konten. Ketika halaman di-*scroll*, Navbar menambahkan *background* semi-transparan dengan efek *backdrop-blur-lg*.
- **Active States (Desktop)**: Indikator halaman aktif bukan berupa garis bawah, melainkan berupa `pill` (kotak dengan `rounded-full`) dengan teks tebal, memberikan nuansa antarmuka *app-like*.
- **Mobile Menu**: Diubah menjadi konsep *full-screen drawer* (overlay layar penuh). Animasi transisi menggunakan efek bertingkat (*staggered animations*) untuk setiap tautan menu.

### 3.2. Article Card (Kartu Artikel)
- **Rasio Gambar**: Menggunakan rasio `16:10` untuk keseimbangan ruang.
- **Micro-Interaction**: Saat kartu di-*hover*, keseluruhan kartu sedikit terangkat (`-translate-y-1`) dan bayangan membesar, sementara gambar artikel melakukan *zoom-in* pelan (`scale-105`) sebesar 5% dengan durasi lambat (`700ms`).
- **Kategori Badge**: Dibuat uppercase dengan *tracking-widest* dan huruf tebal, menggunakan warna *background opacity* tipis (misal `bg-primary/10`) agar badge tidak mendominasi isi.

### 3.3. Footer
- Menggunakan pendekatan ruang luas (spacious) dengan *gradient background* di bagian atasnya yang memudar dari transparan ke warna sekunder.
- Dibuat struktur grid (12 kolom pada desktop) untuk menyeimbangkan deskripsi *brand*, menu navigasi, dan tautan sosial media.

---

## 4. Pola Halaman (Page Layouts)

### 4.1. Homepage (`Index.tsx`)
- **Hero Section**: Pendekatan minimalis namun berdampak besar. Dihilangkan gambar penuh, fokus pada *Typography Hero* tebal dan *Call-To-Action*. Efek pola *grid* ditempatkan di latar belakang secara *faded* untuk aura "developer/coding".
- **Featured Story**: Artikel fitur mendapatkan tempat spesial dengan gambar berukuran separuh halaman yang besar dan deskripsi lengkap di sebelahnya, langsung menarik perhatian pembaca.

### 4.2. Article Detail (`ArticleDetail.tsx`)
- **Pola Medium-style**: 
  - Mengedepankan **Judul -> Metadata -> Gambar -> Konten**. 
  - Hal ini jauh lebih terbaca (*legible*) di perangkat kecil (*mobile*) dibanding pola lama (teks menimpa gambar).
- **Progress Bar**: Menambahkan indikator membaca di bar teratas (top bar) berwarna primer yang bertambah seiring pengguna melakukan *scroll*.
- **TOC (Table of Contents)**: Menempel secara *sticky* di area kanan pada layar besar (Desktop XL) sehingga pengguna mudah berpindah sub-topik tanpa perlu *scroll* jauh ke atas.
- **Share Sidebar**: Tautan sosial media menempel rapi di area kiri pada desktop, dan berubah menjadi *footer-like action bar* di bagian bawah artikel pada layar kecil (mobile).

---

## 5. Performance & UX Checklist

- [x] Kontras teks dan background optimal di Dark & Light mode.
- [x] Tidak menggunakan animasi rumit, hanya menggunakan atribut CSS transform & opacity untuk menjaga render stabil di 60fps.
- [x] Menyediakan properti `loading="lazy"` pada gambar di Article Cards agar *bandwidth* pengguna hemat.
- [x] Mendukung transisi tema halaman secara mulus (smooth color transition) melalui `html { transition: ... }`.
