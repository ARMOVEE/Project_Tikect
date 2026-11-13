<?php
$pageTitle = 'NOVA LIVE — Tiket Event Terpercaya, dalam Satu Tempat';
$pageDesc = 'NOVA LIVE: platform tiket event Indonesia. Konser, pameran, wahana, dan olahraga. Beli tiket mudah, harga transparan, tiket gelang, dan validasi cepat.';
$active = 'beranda';
include __DIR__ . '/app/layouts/header.php';
?>
<main id="main">
  <!-- 1. HERO VIDEO -->
<section class="video-hero" aria-label="Video utama">
  <div class="video-viewport">
    <div class="video-track" id="videoTrack">
      <div class="video-slide active">
        <video autoplay muted loop playsinline preload="metadata" poster="assets/midnight.jpeg" aria-label="Video konser jazz">
          <source src="assets/hero-video.mp4" type="video/mp4">
        </video>
        <span class="video-slide-badge">Midnight Jazz Session Vol. 4</span>
      </div>
      <div class="video-slide">
        <video autoplay muted loop playsinline preload="metadata" poster="assets/nadin.jpeg" aria-label="Video sesi akustik">
          <source src="assets/hero-video-2.mp4" type="video/mp4">
        </video>
        <span class="video-slide-badge">Nadin Amizah: Intimate Acoustic</span>
      </div>
      <div class="video-slide">
        <video autoplay muted loop playsinline preload="metadata" poster="assets/tulus1.jpeg" aria-label="Video konser pop">
          <source src="assets/hero-video-3.mp4" type="video/mp4">
        </video>
        <span class="video-slide-badge">Tulus Live in Concert 2026</span>
      </div>
    </div>
  <button class="video-arrow prev" id="videoPrev" type="button" aria-label="Slide sebelumnya">‹</button>
  <button class="video-arrow next" id="videoNext" type="button" aria-label="Slide berikutnya">›</button>
  </div>
  <div class="video-dots" id="videoDots"></div>
</section>


  <div class="wave" style="color:#fff" aria-hidden="true"><svg preserveAspectRatio="none" viewBox="0 0 1200 40"><path fill="currentColor" d="M0,40 C150,0 300,0 450,20 C600,40 750,40 900,20 C1050,0 1150,0 1200,20 L1200,40 Z"/></svg></div>

  <!-- 2. KATEGORI EVENT -->
  <section class="section" style="background:#fff" aria-labelledby="catTitle">
    <div class="wrap">
      <div class="section-head" style="margin-bottom:24px;justify-content:flex-start">
        <h2 id="catTitle" style="margin:0">Kategori Event</h2>
      </div>
      <div class="cat-grid reveal" id="catGrid"></div>
    </div>
  </section>

  <!-- 3. EVENT POPULER (pola kartu platform referensi: poster, tanggal, harga, penyelenggara) -->
  <section class="section" aria-labelledby="popTitle">
    <div class="wrap">
      <div class="section-head">
        <div><h2 id="popTitle">Event Populer</h2><p class="lead">Yang paling banyak diburu minggu ini. Jangan sampai kehabisan!</p></div>
        <a class="btn btn-sm" href="explore.php">Lihat Semua →</a>
      </div>
      <div class="chips" id="popChips" style="margin-top:0"></div>
      <div class="event-grid reveal" id="popGrid"></div>
      <p id="popEmpty" class="empty" style="display:none">Belum ada event pada kategori ini.<br>Silakan coba kategori lain.</p>
    </div>
  </section>

  <!-- 4. KENAPA NOVA LIVE -->
  <section class="section" style="background:#fff" aria-labelledby="whyTitle">
    <div class="wrap">
      <div class="section-head"><div><h2 id="whyTitle">Kenapa NOVA LIVE?</h2><p class="lead">Mitra tiketmu dari cari event sampai masuk venue.</p></div></div>
      <div class="feature-grid reveal">
        <article class="card feature-card"><span class="doodle"><svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="none" stroke="#0F2A46" stroke-width="2"/><text x="20" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#0F2A46">Rp</text></svg></span><h3>Biaya transparan</h3><p class="meta">Harga yang kamu lihat adalah harga yang kamu bayar, plus biaya layanan 5% yang jelas di ringkasan.</p><a href="info.php#biaya">Lihat rincian biaya →</a></article>
        <article class="card feature-card"><span class="doodle"><svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><rect x="4" y="11" width="32" height="18" rx="4" fill="none" stroke="#0F2A46" stroke-width="2"/><circle cx="20" cy="20" r="4" fill="#0F2A46"/></svg></span><h3>Tiket Gelang</h3><p class="meta">Untuk event besar, tiketmu bisa berbentuk gelang (wristband) yang praktis dan anti hilang.</p><a href="info.php#gelang">Tentang Tiket Gelang →</a></article>
        <article class="card feature-card"><span class="doodle"><svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="none" stroke="#0F2A46" stroke-width="2"/><path d="M22 8 L13 22 h6 l-2 10 9-14 h-6 z" fill="#0F2A46"/></svg></span><h3>Validasi Tiket cepat</h3><p class="meta">Scan QR di gerbang, langsung masuk. Punya kode tiket? Cek keabsahannya di halaman Validasi.</p><a href="info.php#validasi">Cek kode tiket →</a></article>
        <article class="card feature-card"><span class="doodle"><svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4 C11 4 4 10 4 18 c0 8 7 14 16 14 1 0 2 0 3-.2 L30 36 v-6.5 C35 26 36 22 36 18 36 10 29 4 20 4z" fill="none" stroke="#0F2A46" stroke-width="2"/></svg></span><h3>Dukungan via WhatsApp</h3><p class="meta">Ada kendala pesanan? Tim kami siap bantu lewat WhatsApp di jam kerja.</p><a href="info.php#kontak">Hubungi kami →</a></article>
      </div>
    </div>
  </section>

  <!-- 5. BIKIN EVENTMU SENDIRI -->
  <section class="section" id="create" aria-labelledby="createTitle">
    <div class="wrap create-grid">
      <div class="reveal">
        <span class="sticker">Untuk penyelenggara</span>
        <h2 id="createTitle">Bikin Eventmu Sendiri</h2>
        <p class="lead">Punya konser, pameran, atau lomba? Buat dan kelola eventmu sendiri di NOVA LIVE — dari publikasi sampai penjualan tiket.</p>
        <div class="step"><span class="step-num">1</span><div><strong>Daftarkan eventmu</strong><p class="meta">Isi judul, jadwal, venue, dan kategori. Gratis, tanpa biaya pendaftaran.</p></div></div>
        <div class="step"><span class="step-num">2</span><div><strong>Atur tiket &amp; harga</strong><p class="meta">Buat tier VIP, Regular, dan Festival, pantau stoknya secara langsung.</p></div></div>
        <div class="step"><span class="step-num">3</span><div><strong>Jual &amp; validasi</strong><p class="meta">Bagikan tautan eventmu, terima pesanan, dan validasi tiket di gerbang.</p></div></div>
        <a class="btn btn-yellow" href="info.php#kontak">Daftarkan Event →</a>
      </div>
      <div class="reveal">
        <div class="card" style="padding:24px">
          
          <h3>Eventmu, panggungmu.</h3>
          <p class="meta">Konser indie di kafe, pameran tugas akhir, sampai fun run kampus — semua bisa tayang di NOVA LIVE. Penyelenggara mendapat dasbor pesanan dan laporan penjualan (simulasi pada versi demo ini).</p>
          <p></p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FAQ SINGKAT -->
  <section class="section" style="background:#fff" aria-labelledby="faqTitle">
    <div class="wrap" style="max-width:820px">
      <h2 id="faqTitle">Pertanyaan yang sering ditanyakan</h2>
      <div class="acc"><button type="button" aria-expanded="false">Apakah harga tiket sudah termasuk biaya layanan? <span>+</span></button><div class="acc-panel"><p>Belum. Biaya layanan 5% ditambahkan di ringkasan sebelum kamu membayar, jadi totalnya selalu jelas.</p></div></div>
      <div class="acc"><button type="button" aria-expanded="false">Bagaimana cara menerima e-ticket saya? <span>+</span></button><div class="acc-panel"><p>Setelah pembayaran (simulasi), e-ticket muncul di halaman konfirmasi dan bisa diunduh sebagai gambar. Di versi produksi, e-ticket juga dikirim ke emailmu.</p></div></div>
      <div class="acc"><button type="button" aria-expanded="false">Apa itu Tiket Gelang? <span>+</span></button><div class="acc-panel"><p>Tiket berbentuk gelang untuk event besar: praktis dipakai seharian dan sulit dipalsukan. Detailnya ada di halaman Tiket Gelang.</p></div></div>
      <div class="acc"><button type="button" aria-expanded="false">Bolehkah membatalkan atau memindahkan tiket? <span>+</span></button><div class="acc-panel"><p>Pada versi demo ini semua pesanan bersifat simulasi. Kebijakan pembatalan versi produksi mengikuti Syarat &amp; Ketentuan tiap event.</p></div></div>
      <p><a href="info.php#faq">Lihat semua FAQ →</a></p>
    </div>
  </section>
</main>
<?php include __DIR__ . '/app/layouts/footer.php'; ?>
<script src="js/home.js"></script>
<script src="js/hero-video.js"></script>
</body>
</html>
