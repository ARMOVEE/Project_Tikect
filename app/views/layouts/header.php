<?php
// Variabel dari tiap halaman (boleh diubah): $pageTitle, $pageDesc, $active.
$pageTitle = $pageTitle ?? 'NOVA LIVE — Tiket Event Terpercaya, dalam Satu Tempat';
$pageDesc = $pageDesc ?? 'NOVA LIVE: platform tiket event Indonesia. Konser, pameran, wahana, dan olahraga.';
$active = $active ?? null;
?>
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?= htmlspecialchars($pageTitle) ?></title>
<meta name="description" content="<?= htmlspecialchars($pageDesc) ?>">
<meta property="og:title" content="NOVA LIVE — Tiket Event Terpercaya, dalam Satu Tempat">
<meta property="og:description" content="Temukan konser, pameran, wahana, dan olahraga di seluruh Indonesia. Harga transparan, tiket aman.">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/stage-sax.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<?php if ($active === 'beranda'): ?>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Event","name":"Midnight Jazz Session","startDate":"2026-11-14T19:30:00+07:00","location":{"@type":"Place","name":"The Grand Hall","address":"Jl. Merdeka No. 88, Jakarta"},"offers":{"@type":"Offer","price":"150000","priceCurrency":"IDR","availability":"https://schema.org/InStock"}}</script>
<?php endif; ?>
</head>
<body>
<a class="skip-link" href="#main">Lewati ke konten utama</a>

<header class="topnav" id="topNav">
  <div class="topnav-row" id="topNavRow">
    <a class="logo" href="index.php" title="NOVA LIVE">NOVA <span>LIVE</span></a>
    <div class="nav-cat">
      <button class="nav-cat-btn" id="navCatBtn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="navCatMenu" title="Kategori Event">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/></svg><span class="nav-text" data-i18n="Kategori">Kategori</span>
      </button>
      <div class="nav-cat-menu" id="navCatMenu" role="menu"></div>
    </div>
    <form class="nav-search" id="navSearch" role="search">
      <input id="navQ" type="search" placeholder="Cari event, artis, atau kota…" aria-label="Cari event, artis, atau kota">
      <button type="submit" aria-label="Cari" class="nav-search-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
    </form>
    <a class="nav-partner" href="info.php#buat-event" title="Bikin Eventmu">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z" fill="currentColor"/></svg><span class="nav-text" data-i18n="Bikin Eventmu">Bikin Eventmu</span>
    </a>
    <div class="nav-lang">
      <button class="nav-lang-btn" id="navLangBtn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="navLangMenu" title="Pilih Bahasa">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" stroke="currentColor" stroke-width="2"/></svg><span id="navLangLabel" class="nav-text">ID</span><svg class="nav-lang-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
      <div class="nav-lang-menu" id="navLangMenu" role="menu">
        <button type="button" data-lang="id" class="active" aria-pressed="true">Indonesia (ID)</button>
        <button type="button" data-lang="en" aria-pressed="false">English (EN)</button>
      </div>
    </div>
    <a class="nav-account" href="#" data-open-login title="Masuk">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="nav-text" data-i18n="Masuk">Masuk</span>
    </a>
    <button class="burger" id="burgerBtn" aria-label="Buka menu" aria-expanded="false" aria-controls="drawer">☰</button>
  </div>
</header>
<div class="drawer-backdrop" id="drawerBackdrop"></div>
<aside class="drawer" id="drawer" aria-label="Menu mobile">
  <a href="index.php">Beranda</a>
  <a href="explore.php">Jelajah</a>
  <a href="info.php#tentang">Tentang</a>
  <a href="info.php#kontak">Hubungi Kami</a>
  <a href="info.php#journey">Our Journey</a>
  <a href="info.php#biaya">Biaya</a>
  <a href="info.php#gelang">Tiket Gelang</a>
  <a href="info.php#faq">FAQ</a>
  <a href="#" data-open-login>Masuk</a>
</aside>
<div class="modal-backdrop" id="loginBackdrop" role="dialog" aria-modal="true" aria-label="Masuk">
  <div class="modal">
    <button class="close" aria-label="Tutup">×</button>
    <h2>Yuk, masuk dulu!</h2>
    <p class="lead">Masuk untuk melihat pesananmu dan presale member.</p>
    <form id="loginForm">
      <div class="field"><label for="loginEmail">Email</label><input id="loginEmail" type="email" required placeholder="kamu@email.com"></div>
      <div class="field"><label for="loginPass">Kata sandi</label><input id="loginPass" type="password" required placeholder="••••••••"></div>
      <button class="btn" type="submit" style="width:100%;justify-content:center">Masuk</button>
      <p id="loginNote" class="meta" style="margin-top:12px"></p>
    </form>
    <div class="demo-note">Mode demo: login ini hanya simulasi, tanpa autentikasi nyata dan tanpa data yang dikirim.</div>
  </div>
</div>
