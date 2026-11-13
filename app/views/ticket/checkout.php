<?php
$pageTitle = 'Checkout — NOVA LIVE';
$pageDesc = 'Checkout tiket event di NOVA LIVE (mode demo).';
$active = 'jelajah';
include 'inc/header.php';
?>
<main id="main">

<section class="section" aria-labelledby="coTitle">
  <div class="wrap" style="max-width:900px">
    <h2 id="coTitle">Checkout</h2>
    <div class="steps" aria-label="Langkah checkout">
      <span class="done">✓ Tiket</span><span class="now">Data Diri</span><span>Pembayaran</span><span>Selesai</span>
    </div>
    <div class="demo-note">Mode demo: pembayaran ini hanya simulasi. Jangan memasukkan data kartu asli — tidak ada pembayaran nyata yang diproses.</div>
    <div id="coEmpty" class="empty" style="display:none">Keranjang Anda masih kosong.<br><a class="btn" href="explore.php">Jelajah Event</a></div>
    <form id="coForm" novalidate>
      <div class="create-grid" style="align-items:start">
        <div>
          <h3>Data Diri</h3>
          <div class="field"><label for="fNama">Nama lengkap</label><input id="fNama" type="text" autocomplete="name" required><span class="err" id="eNama"></span></div>
          <div class="field"><label for="fEmail">Email</label><input id="fEmail" type="email" autocomplete="email" required><span class="err" id="eEmail"></span></div>
          <div class="field"><label for="fTelp">Nomor HP / WhatsApp</label><input id="fTelp" type="tel" autocomplete="tel" required placeholder="08xxxxxxxxxx"><span class="err" id="eTelp"></span></div>
          <h3>Pembayaran (simulasi)</h3>
          <label class="pay-option"><input type="radio" name="pay" value="Transfer Bank" checked> Transfer Bank (BCA / Mandiri / BNI)</label>
          <label class="pay-option"><input type="radio" name="pay" value="E-Wallet"> E-Wallet (GoPay / OVO / DANA)</label>
          <label class="pay-option"><input type="radio" name="pay" value="Kartu"> Kartu (demo — tanpa nomor kartu asli)</label>
          <p class="meta">Dengan melanjutkan, kamu menyetujui Syarat &amp; Ketentuan NOVA LIVE.</p>
        </div>
        <aside class="summary" style="position:static">
          <h3>Ringkasan Pesanan</h3>
          <p class="meta" id="coEvent"></p>
          <div id="coLines"></div>
          <div class="sum-row"><span>Subtotal</span><span id="coSubtotal">Rp 0</span></div>
          <div class="sum-row"><span>Biaya layanan (5%)</span><span id="coFee">Rp 0</span></div>
          <div class="sum-row total"><span>Total</span><span id="coTotal">Rp 0</span></div>
          <button class="btn" type="submit" style="width:100%;justify-content:center">Bayar Sekarang (Demo)</button>
        </aside>
      </div>
    </form>
  </div>
</section>

</main>
<?php include 'inc/footer.php'; ?>
<script src="js/checkout.js"></script>
</body>
</html>
