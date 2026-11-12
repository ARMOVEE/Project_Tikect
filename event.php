<?php
$pageTitle = 'Detail Event — NOVA LIVE';
$pageDesc = 'Detail event dan pilih tiket di NOVA LIVE.';
$active = 'jelajah';
include 'inc/header.php';
?>
<main id="main">

<section class="section" aria-label="Detail event">
  <div class="wrap">
    <p><a href="explore.php">← Kembali ke Jelajah</a></p>
    <div class="create-grid">
      <div>
        <img id="evPoster" src="assets/stage-sax.webp" alt="" style="border:var(--outline);border-radius:var(--radius);box-shadow:var(--shadow-lg);width:100%">
        <div class="map-box" style="margin-top:20px">
          
          <p><strong>Peta lokasi (placeholder)</strong><br><span id="evVenueText"></span><br>
          <span class="meta">Peta interaktif akan tampil di sini setelah backend peta disambungkan.</span></p>
        </div>
      </div>
      <div>
        <span class="sticker rot-2" id="evSeries"></span>
        <h1 id="evTitle" style="font-size:clamp(2rem,5vw,3.2rem);margin-top:12px"></h1>
        <p class="meta" id="evMeta"></p>
        <p id="evDesc"></p>
        <h3>Jadwal</h3>
        <p id="evSchedule"></p>
        <h3>Pilih Tiket</h3>
        <p class="meta">Maksimal 6 tiket per kategori. Harga sudah jelas, tanpa biaya tersembunyi.</p>
        <div id="ticketRows"></div>
        <div class="map-box" style="margin-top:20px">
          <h3 style="margin-top:0">Denah Kursi</h3>
          <p class="meta">Klik kursi untuk memilih (visual saja pada demo ini; yang dihitung tetap jumlah stepper di atas).</p>
          <div id="seatMap"></div>
          <p class="meta">Putih: Tersedia · Abu-abu: Habis · Biru: Dipilih</p>
        </div>
      </div>
    </div>
    <aside class="summary" style="max-width:480px;margin:28px 0 0 auto">
      <h3>Ringkasan</h3>
      <p class="meta" id="sumEvent"></p>
      <div id="sumLines"></div>
      <div class="sum-row"><span>Subtotal</span><span id="sumSubtotal">Rp 0</span></div>
      <div class="sum-row"><span>Biaya layanan (5%)</span><span id="sumFee">Rp 0</span></div>
      <div class="sum-row total"><span>Total</span><span id="sumTotal">Rp 0</span></div>
      <button class="btn" id="toCheckout" type="button" style="width:100%;justify-content:center" disabled>Lanjut ke Checkout →</button>
      <p class="meta" style="margin-top:10px">Tiketmu aman! Pembayaran pada demo ini hanya simulasi.</p>
    </aside>
  </div>
</section>

</main>
<?php include 'inc/footer.php'; ?>
<script src="js/event.js"></script>
</body>
</html>
