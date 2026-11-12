<?php
$pageTitle = 'Pusat Informasi — NOVA LIVE';
$pageDesc = 'Tentang Kami, Our Journey, Biaya, Tiket Gelang, Validasi Tiket, FAQ, dan Hubungi Kami.';
$active = 'tentang';
include 'inc/header.php';
?>
<main id="main">

<section class="section" aria-label="Halaman informasi">
  <div class="wrap">
    <h2>Pusat Informasi NOVA LIVE</h2>
    <p class="lead">Semua yang perlu kamu tahu tentang platform ini, dalam satu tempat.</p>
    <nav class="info-nav" aria-label="Navigasi informasi">
      <a class="chip" href="#tentang">Tentang Kami</a><a class="chip" href="#journey">Our Journey</a>
      <a class="chip" href="#biaya">Biaya</a><a class="chip" href="#gelang">Tiket Gelang</a>
      <a class="chip" href="#validasi">Validasi Tiket</a><a class="chip" href="#faq">FAQ</a>
      <a class="chip" href="#kontak">Hubungi Kami</a><a class="chip" href="#syarat">Syarat &amp; Ketentuan</a>
      <a class="chip" href="#privasi">Kebijakan Privasi</a>
    </nav>

    <section id="tentang" style="padding:32px 0"><h3>Tentang Kami</h3>
      <p>NOVA LIVE adalah platform tiket event Indonesia. Kami menghubungkan penyelenggara dengan penonton: konser, pameran, wahana, dan olahraga — dengan harga yang transparan dan proses yang ramah. Versi situs ini adalah demo konsep; seluruh data event, harga, dan stok adalah placeholder.</p></section>

    <section id="journey" style="padding:32px 0"><h3>Our Journey</h3>
      <ul class="timeline">
        <li><strong>2024 — Ide pertama:</strong> NOVA LIVE lahir dari keluhan klasik: beli tiket ribet dan biayanya muncul belakangan.</li>
        <li><strong>2025 — Peluncuran beta:</strong> 50 event pertama tayang, mayoritas konser kampus dan pameran komunitas.</li>
        <li><strong>2026 — Hari ini:</strong> ribuan penonton memakai NOVA LIVE setiap bulan (angka demo), dengan fitur Tiket Gelang dan Validasi Tiket.</li>
      </ul></section>

    <section id="biaya" style="padding:32px 0"><h3>Biaya</h3>
      <p>Kami percaya harga yang jujur. Ini satu-satunya biaya tambahan di NOVA LIVE:</p>
      <table class="biaya"><tr><th>Komponen</th><th>Besaran</th><th>Keterangan</th></tr>
      <tr><td>Harga tiket</td><td>Sesuai event</td><td>Ditetapkan penyelenggara</td></tr>
      <tr><td>Biaya layanan</td><td>5% dari subtotal</td><td>Ditampilkan jelas di ringkasan sebelum bayar</td></tr>
      <tr><td>Biaya pendaftaran event</td><td>Gratis</td><td>Untuk penyelenggara</td></tr></table></section>

    <section id="gelang" style="padding:32px 0"><h3>Tiket Gelang</h3>
      <p>Untuk event besar, tiketmu bisa berbentuk gelang (wristband): dipakai di pergelangan tangan, tidak mudah hilang, dan dipindai di gerbang. Gelang dikirim atau diambil di venue sesuai keterangan tiap event. Pada demo ini, gelang bersifat ilustrasi.</p></section>

    <section id="validasi" style="padding:32px 0"><h3>Validasi Tiket</h3>
      <p>Punya kode tiket? Masukkan di bawah untuk memeriksa keabsahannya (demo).</p>
      <form id="valForm" style="display:flex;gap:10px;flex-wrap:wrap;max-width:560px">
        <input id="valCode" type="text" placeholder="cth. NOVA-LIVE-TICKET-000123" style="flex:1;padding:12px 14px;border:var(--outline);border-radius:14px;font:inherit;min-width:220px">
        <button class="btn" type="submit">Cek Tiket</button>
      </form>
      <p id="valResult" style="margin-top:12px;font-weight:800"></p>
      <p class="meta">Kode demo yang dinyatakan valid: NOVA-LIVE-TICKET-000123 (tiket Midnight Jazz Session, VIP, No. 000123).</p></section>

    <section id="faq" style="padding:32px 0"><h3>FAQ</h3>
      <div class="acc"><button type="button" aria-expanded="false">Apakah harga tiket sudah termasuk biaya layanan? <span>+</span></button><div class="acc-panel"><p>Belum. Biaya layanan 5% ditambahkan di ringkasan sebelum kamu membayar.</p></div></div>
      <div class="acc"><button type="button" aria-expanded="false">Bagaimana cara menerima e-ticket saya? <span>+</span></button><div class="acc-panel"><p>Setelah pembayaran (simulasi), e-ticket muncul di halaman konfirmasi dan bisa diunduh. Di versi produksi, e-ticket juga dikirim ke emailmu.</p></div></div>
      <div class="acc"><button type="button" aria-expanded="false">Apa itu Tiket Gelang? <span>+</span></button><div class="acc-panel"><p>Tiket berbentuk gelang untuk event besar: praktis dan sulit dipalsukan.</p></div></div>
      <div class="acc"><button type="button" aria-expanded="false">Bolehkah membatalkan tiket? <span>+</span></button><div class="acc-panel"><p>Pada demo ini semua pesanan bersifat simulasi. Kebijakan versi produksi mengikuti Syarat &amp; Ketentuan tiap event.</p></div></div>
      <div class="acc"><button type="button" aria-expanded="false">Bagaimana cara menjadi penyelenggara? <span>+</span></button><div class="acc-panel"><p>Klik “Bikin Eventmu” di beranda atau hubungi kami lewat formulir di bawah.</p></div></div>
    </section>

    <section id="kontak" style="padding:32px 0"><h3>Hubungi Kami</h3>
      <p class="meta">Isi formulir ini (simulasi — tidak terkirim ke mana pun) atau chat kami via WhatsApp.</p>
      <form id="kontakForm" style="max-width:560px">
        <div class="field"><label for="kNama">Nama</label><input id="kNama" type="text" required></div>
        <div class="field"><label for="kEmail">Email</label><input id="kEmail" type="email" required></div>
        <div class="field"><label for="kPesan">Pesan</label><textarea id="kPesan" rows="4" required></textarea></div>
        <button class="btn" type="submit">Kirim Pesan</button>
        <a class="btn btn-mint" href="https://wa.me/6281200000000?text=Halo%20NOVA%20LIVE%2C%20saya%20butuh%20bantuan." target="_blank" rel="noopener">Chat WhatsApp</a>
        <p id="kNote" class="meta" style="margin-top:12px"></p>
      </form></section>

    <section id="syarat" style="padding:32px 0"><h3>Syarat &amp; Ketentuan</h3>
      <p class="meta">(Teks placeholder — ganti dengan dokumen hukum resmi sebelum publikasi.)</p>
      <p>Dengan membeli tiket di NOVA LIVE, kamu menyetujui bahwa: (1) tiket bersifat personal dan tidak dapat dipindahtangankan kecuali diizinkan penyelenggara; (2) jadwal dan venue dapat berubah atas keputusan penyelenggara dengan pemberitahuan; (3) pada demo ini tidak ada pembayaran nyata yang diproses.</p></section>

    <section id="privasi" style="padding:32px 0"><h3>Kebijakan Privasi &amp; Pemrosesan Data</h3>
      <p class="meta">(Teks placeholder — ganti dengan dokumen resmi sebelum publikasi.)</p>
      <p>Data yang kamu isi (nama, email, nomor HP) pada demo ini hanya tersimpan di perangkatmu (sessionStorage) dan tidak dikirim ke server mana pun. Versi produksi wajib menjelaskan dasar pemrosesan data, masa retensi, dan hak pengguna sesuai peraturan yang berlaku.</p></section>
  </div>
</section>

</main>
<?php include 'inc/footer.php'; ?>
<script src="js/info.js"></script>
</body>
</html>
