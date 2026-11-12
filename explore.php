<?php
$pageTitle = 'Jelajah Event — NOVA LIVE';
$pageDesc = 'Jelajahi konser, pameran, wahana, dan olahraga di NOVA LIVE.';
$active = 'jelajah';
include 'inc/header.php';
?>
<main id="main">

<section class="section" aria-labelledby="exTitle">
  <div class="wrap">
    <h2 id="exTitle">Jelajah Event</h2>
    <p class="lead">Cari berdasarkan kata kunci, kategori, kota, atau tanggal. Temukan event terbaik di kotamu.</p>
    <form class="searchbar" id="exSearch" role="search" style="max-width:640px;margin:20px 0">
      <input id="exQ" type="search" placeholder="Cari event, artis, atau kota…" aria-label="Cari event">
      <button class="btn" type="submit">Cari</button>
    </form>
    <div class="chips" id="exCats"></div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin:16px 0">
      <div class="field" style="margin:0"><label for="exCity">Kota</label>
        <select id="exCity"><option value="">Semua kota</option></select></div>
      <div class="field" style="margin:0"><label for="exDate">Tanggal</label>
        <input id="exDate" type="date"></div>
      <div class="field" style="margin:0"><label for="exSort">Urutkan</label>
        <select id="exSort"><option value="date">Tanggal terdekat</option><option value="priceAsc">Harga termurah</option><option value="priceDesc">Harga termahal</option></select></div>
    </div>
    <p class="meta" id="exCount"></p>
    <div class="event-grid reveal visible" id="exGrid"></div>
    <p class="empty" id="exEmpty" style="display:none">Belum ada event yang sesuai.<br>Silakan coba kata kunci atau filter lain.</p>
    <p style="text-align:center;margin-top:24px"><button class="btn btn-yellow" id="exMore" type="button" style="display:none">Muat lebih banyak</button></p>
  </div>
</section>

</main>
<?php include 'inc/footer.php'; ?>
<script src="js/home.js"></script>
<script src="js/explore.js"></script>
</body>
</html>
