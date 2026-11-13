<?php
$pageTitle = 'Pesanan Berhasil — NOVA LIVE';
$pageDesc = 'Konfirmasi pesanan tiket NOVA LIVE.';
$active = 'jelajah';
include 'inc/header.php';
?>
<main id="main">

<canvas id="confetti" aria-hidden="true"></canvas>
<section class="section" aria-labelledby="cfTitle">
  <div class="wrap" style="max-width:760px;text-align:center">
    <div class="success-check">✓</div>
    <h2 id="cfTitle">Pesanan Anda berhasil.</h2>
    <p class="lead">Berikut detail pesanan Anda:</p>
    <div class="card" style="padding:24px;text-align:left" id="cfBox"></div>
    <div style="margin:28px 0">
      <img id="cfTicket" src="assets/ticket-landscape.png" alt="E-ticket NOVA LIVE dengan QR code" style="border:var(--outline);border-radius:var(--radius);box-shadow:var(--shadow-lg);width:100%">
      <p class="meta">QR pada e-ticket ini adalah kode demo NOVA-LIVE-TICKET-000123. Di versi produksi, QR dibuat unik per nomor pesanan.</p>
    </div>
    <p style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
      <a class="btn" id="cfDownload" href="assets/ticket-landscape.png" download>Unduh E-Ticket</a>
      <button class="btn btn-yellow" id="cfIcs" type="button">Tambah ke Kalender (.ics)</button>
      <button class="btn btn-white" id="cfShare" type="button">Bagikan</button>
    </p>
    <p id="cfShareNote" class="meta"></p>
    <p><a href="explore.php">Jelajah event lainnya →</a></p>
  </div>
</section>

</main>
<?php include 'inc/footer.php'; ?>
<script src="js/confirmation.js"></script>
</body>
</html>
