/* NOVA LIVE — header, drawer, modal login, akordeon, reveal, bahasa */
(function () {
  "use strict";

  /* Header shadow saat scroll */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Drawer mobile */
  var burger = document.getElementById("burgerBtn");
  var drawer = document.getElementById("drawer");
  var backdrop = document.getElementById("drawerBackdrop");
  function closeDrawer() {
    if (drawer) drawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    if (burger) burger.setAttribute("aria-expanded", "false");
  }
  if (burger && drawer) {
    burger.addEventListener("click", function () {
      var open = drawer.classList.toggle("open");
      if (backdrop) backdrop.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (backdrop) backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeDrawer(); closeLogin(); }
  });

  /* Modal Masuk (simulasi — tanpa autentikasi nyata) */
  var loginBackdrop = document.getElementById("loginBackdrop");
  function openLogin() { if (loginBackdrop) loginBackdrop.classList.add("open"); }
  function closeLogin() { if (loginBackdrop) loginBackdrop.classList.remove("open"); }
  document.querySelectorAll("[data-open-login]").forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); closeDrawer(); openLogin(); });
  });
  if (loginBackdrop) {
    loginBackdrop.addEventListener("click", function (e) {
      if (e.target === loginBackdrop) closeLogin();
    });
    var closeBtn = loginBackdrop.querySelector(".close");
    if (closeBtn) closeBtn.addEventListener("click", closeLogin);
    var form = document.getElementById("loginForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("loginNote");
      if (note) note.textContent = "Mode demo: ini hanya simulasi masuk. Akun belum dibuat dan tidak ada data yang dikirim.";
    });
  }

  /* Akordeon (FAQ & info) */
  document.querySelectorAll(".acc button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".acc");
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* Reveal saat discroll */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }

  /* Toggle bahasa ID/EN (label antarmuka utama) */
  var DICT = {
    "Beranda": "Home", "Jelajah": "Explore", "Tentang": "About", "Hubungi Kami": "Contact Us",
    "Masuk": "Sign In", "Jelajahi Event": "Explore Events", "Bikin Eventmu": "Create Your Event",
    "Yuk, cari event seru!": "Let's find fun events!",
    "Tiket event seru, tinggal klik!": "Fun event tickets, just one click!"
  };
  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var idText = el.getAttribute("data-i18n");
      el.textContent = lang === "en" ? (DICT[idText] || idText) : idText;
    });
    document.querySelectorAll(".lang-toggle button, .nav-lang-menu button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });
    try { localStorage.setItem("nova_lang", lang); } catch (e) {}
    document.documentElement.lang = lang === "en" ? "en" : "id";
    var lbl = document.getElementById("navLangLabel");
    if (lbl) lbl.textContent = lang === "en" ? "EN" : "ID";
  }
  document.querySelectorAll(".lang-toggle button, .nav-lang-menu button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.dataset.lang); });
  });
  var saved = "id";
  try { saved = localStorage.getItem("nova_lang") || "id"; } catch (e) {}
  applyLang(saved);
})();

/* NOVA LIVE — navbar: dropdown kategori, dropdown bahasa, pencarian */
(function () {
  "use strict";
  function bindMenu(btnId, menuId) {
    var btn = document.getElementById(btnId), menu = document.getElementById(menuId);
    if (!btn || !menu) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }
  bindMenu("navCatBtn", "navCatMenu");
  bindMenu("navLangBtn", "navLangMenu");
  // isi dropdown kategori dari data yang sama dengan chip di beranda
  var catMenu = document.getElementById("navCatMenu");
  if (catMenu && window.NOVA && window.NOVA.CATEGORIES) {
    var all = document.createElement("a");
    all.href = "explore.php";
    all.textContent = "Semua Kategori";
    catMenu.appendChild(all);
    window.NOVA.CATEGORIES.forEach(function (c) {
      var a = document.createElement("a");
      a.href = "explore.php?cat=" + encodeURIComponent(c.id);
      var dot = document.createElement("span");
      dot.className = "dot"; dot.style.background = c.color;
      a.appendChild(dot);
      a.appendChild(document.createTextNode(c.icon + " " + c.id));
      catMenu.appendChild(a);
    });
  }
  // tutup menu bahasa setelah memilih bahasa
  var langMenu = document.getElementById("navLangMenu");
  if (langMenu) langMenu.addEventListener("click", function () {
    langMenu.classList.remove("open");
    var b = document.getElementById("navLangBtn");
    if (b) b.setAttribute("aria-expanded", "false");
  });
  // pencarian navbar -> halaman jelajah
  var navSearch = document.getElementById("navSearch");
  if (navSearch) navSearch.addEventListener("submit", function (e) {
    e.preventDefault();
    var q = document.getElementById("navQ").value.trim();
    window.location.href = "explore.php" + (q ? "?q=" + encodeURIComponent(q) : "");
  });
})();
