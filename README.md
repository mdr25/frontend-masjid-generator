# Website Masjid Otomatis (SaaS Frontend)

## Overview

Project ini adalah frontend untuk platform SaaS "Website Masjid Otomatis". Platform ini memudahkan pengurus masjid untuk mengelola data masjid dan secara otomatis menghasilkan website publik yang profesional.

## Fitur Utama

1. **Public Landing Page**: Halaman muka yang menarik untuk marketing platform.
2. **Authentication**: Sistem login & register untuk pengurus masjid.
3. **Dashboard Admin**:
   - **Profil Masjid**: Pengaturan identitas dan lokasi.
   - **Program & Kegiatan**: Jadwal sholat dan kajian (CRUD).
   - **Administrasi**: Manajemen data pengurus (DKM) dan Jamaah.
   - **Keuangan**: Pencatatan donasi/infaq.
   - **Informasi**: Publikasi artikel dan berita.
4. **Template Engine**:
   - Sistem template yang dinamis.
   - **Preview Mode**: Melihat hasil website secara real-time berdasarkan data yang diinput di dashboard.

## Teknologi

- **React v18**
- **Vite** (Build tool)
- **Bootstrap 5** (UI Framework)
- **React-Router-Dom** (Routing)
- **Mock API Service** (Menggunakan LocalStorage untuk simulasi backend)

## Cara Menjalankan

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173`.

## Struktur Project

- `/src/components`: Komponen reusable (Layout, Common UI).
- `/src/pages`: Halaman-halaman aplikasi (Public, Auth, Dashboard).
- `/src/templates`: Komponen template website publik.
- `/src/services`: Mock API client.

## Catatan

- Karena belum ada backend, semua data disimpan di browser (`localStorage`). Jika browser dibersihkan, data akan hilang.
- Gunakan menu **"Lihat Website"** di dashboard untuk melihat website publik masjid Anda.
