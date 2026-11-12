# NOVA LIVE — versi PHP (dari varian profesional)

Versi PHP dari website NOVA LIVE profesional. Tampilan, data, dan alur
sama persis dengan `novalive-pro`; yang berubah hanya bentuk kodenya:
halaman memakai ekstensi `.php` dan bagian yang berulang (header, footer)
dipecah menjadi file include, jadi mengubah navigasi cukup di satu tempat.

## Menjalankan (WAJIB lewat server, tidak bisa double-click)
PHP tidak jalan dari `file://`. Jalankan lewat Apache XAMPP:
1. Salin folder ini ke `C:\xampp\htdocs\` (mis. jadi
   `C:\xampp\htdocs\novalive-php\`).
2. Jalankan Apache dari XAMPP Control Panel.
3. Buka http://localhost/novalive-php/index.php
   (bukan `localhost/.../index.html` — file `.html` sudah tidak ada).

## Struktur folder
- `index.php` — Beranda (hero video carousel, kategori, event populer,
  kenapa NOVA LIVE, bikin event, FAQ, footer)
- `explore.php` — Jelajah (pencarian, filter, urutan, muat lebih banyak)
- `event.php` — Detail event + pilih tiket
- `checkout.php` — Checkout (validasi real-time, pembayaran simulasi)
- `confirmation.php` — Konfirmasi (centang sukses, e-ticket, unduh, .ics)
- `info.php` — Pusat informasi (Tentang, Our Journey, Biaya, Tiket Gelang,
  Validasi Tiket, FAQ, Hubungi Kami, Syarat & Ketentuan, Kebijakan Privasi)
- `inc/header.php` — `<head>`, header dua lapis, menu mobile, modal login.
  Judul, deskripsi, dan menu aktif diatur lewat variabel `$pageTitle`,
  `$pageDesc`, `$active` di tiap halaman.
- `inc/footer.php` — footer 3 kolom + sosial + script umum
  (`js/events.js`, `js/main.js`). Tahun copyright otomatis via
  `<?= date('Y') ?>`.
- `css/style.css`, `js/*.js`, `assets/` — sama seperti varian profesional.

## Contoh pola halaman
```php
<?php
$pageTitle = 'Judul Halaman';
$pageDesc  = 'Deskripsi halaman.';
$active    = 'jelajah'; // beranda | jelajah | tentang | null
include 'inc/header.php';
?>
<main id="main">
  <!-- isi halaman -->
</main>
<?php include 'inc/footer.php'; ?>
<script src="js/namafile.js"></script>
</body>
</html>
```

## Yang masih sama seperti varian profesional
- Data event & harga masih di `js/events.js` (dipakai JavaScript di
  browser); tier tiket VIP Rp 350.000, Regular Rp 200.000, Festival
  Rp 150.000; biaya layanan 5%.
- Pembayaran, login, stok, dan QR masih simulasi/demo (lihat README varian
  profesional untuk daftar lengkapnya).
- Hero video: `assets/hero-video.mp4` (dan `-2`, `-3`) — selama file MP4
  belum ada, yang tampil adalah poster foto tiap slide.

## Langkah lanjut yang bisa diambil (opsional)
- Pindahkan data event dari `js/events.js` ke array PHP
  (`inc/data.php`) lalu render kartu event dengan `foreach` di server —
  sehingga halaman tetap tampil walau JavaScript dimatikan.
- Ganti `sessionStorage` di checkout/konfirmasi dengan `$_SESSION` PHP
  agar pesanan tersimpan di server.

## Navbar
Navbar satu baris (logo, tombol Kategori dengan dropdown, kolom pencarian
lebar, Bikin Eventmu, pemilih bahasa ID/EN, tombol Masuk, menu mobile).
Pencarian navbar mengarah ke Jelajah dengan parameter ?q=. Dropdown Kategori
diisi otomatis dari data kategori di js/events.js.

## Hero video tengah-melebar
Slide pinggir tampil sebagai kotak (440px), slide tengah melebar jadi
persegi panjang (62% lebar) dengan transisi 0,6 detik saat berpindah.
Atur ukuran di css/style.css (.video-slide dan .video-slide.active).
