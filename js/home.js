/* NOVA LIVE — beranda: hero chips, kategori, event populer */
(function () {
  "use strict";
  var NOVA = window.NOVA;

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  }


  /* 2. Kategori Event: circle icon + pill button sesuai gambar */
  var catGrid = document.getElementById("catGrid");
  if (catGrid) {
    catGrid.innerHTML = NOVA.CATEGORIES.map(function (c) {
      return '<a class="cat-item" href="explore.php?cat=' + encodeURIComponent(c.id) + '">' +
        '<div class="cat-circle">' + c.svg + '</div>' +
        '<span class="cat-pill">' + esc(c.name || c.id) + '</span>' +
        '</a>';
    }).join("");
  }

  /* Kartu event pola platform referensi: poster, judul, tanggal, harga, penyelenggara */
  function eventCard(e) {
    var initials = (e.org || "").split(" ").map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
    var badge = e.badge
      ? '<span class="sticker rot-2" style="position:absolute;top:10px;left:10px;z-index:2">' + e.badge + "</span>"
      : "";
    return '<article class="card event-card">' +
      '<div style="position:relative">' + badge +
      '<img src="' + e.img + '" alt="' + esc(e.alt) + '" loading="lazy"></div>' +
      '<div class="body">' +
      '<span class="cat-sticker sticker" style="background:' + NOVA.catColor(e.category) + '">' + e.category + "</span>" +
      "<h3>" + esc(e.title) + "</h3>" +
      '<p class="meta"><strong>' + esc(e.dateLabel) + "</strong></p>" +
      '<p class="meta">' + esc(e.venue) + ", " + esc(e.city) + "</p>" +
      '<p class="price">Mulai dari ' + NOVA.formatIDR(e.priceFrom) + "</p>" +
      '<div style="border-top:2px dashed var(--line);padding-top:10px;display:flex;align-items:center;gap:8px">' +
      '<span style="width:32px;height:32px;border-radius:50%;background:' + NOVA.catColor(e.category) + ';color:var(--ink);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;border:2px solid var(--ink)">' + initials + "</span>" +
      '<span class="meta">' + esc(e.org || "") + "</span></div>" +
      '<p style="margin-top:12px"><a class="btn btn-sm" href="event.php?event=' + e.id + '">Beli Tiket</a></p>' +
      "</div></article>";
  }

  /* Event populer + filter kategori */
  var popGrid = document.getElementById("popGrid");
  var popChips = document.getElementById("popChips");
  var popEmpty = document.getElementById("popEmpty");
  if (popGrid) {
    var cats = ["Semua"].concat(NOVA.CATEGORIES.filter(function (c) { return c.id !== "Semua Kategori"; }).map(function (c) { return c.id; }));
    var active = "Semua";
    function renderPop() {
      var list = active === "Semua" ? NOVA.EVENTS : NOVA.EVENTS.filter(function (e) { return e.category === active; });
      popGrid.innerHTML = list.map(eventCard).join("");
      if (popEmpty) popEmpty.style.display = list.length ? "none" : "block";
    }
    if (popChips) {
      popChips.innerHTML = cats.map(function (c) {
        return '<button type="button" class="chip' + (c === active ? " active" : "") + '" data-cat="' + c + '">' + c + "</button>";
      }).join("");
      popChips.addEventListener("click", function (ev) {
        var b = ev.target.closest("[data-cat]");
        if (!b) return;
        active = b.dataset.cat;
        popChips.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x.dataset.cat === active); });
        renderPop();
      });
    }
    renderPop();
  }

  window.NOVA_EVENT_CARD = eventCard;
})();
