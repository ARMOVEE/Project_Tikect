/* NOVA LIVE — detail event: stepper tiket, ringkasan, denah kursi */
(function () {
  "use strict";
  var NOVA = window.NOVA;
  var id = new URLSearchParams(window.location.search).get("event");
  var ev = NOVA.getEvent(id);
  var items = {};
  NOVA.TICKET_TYPES.forEach(function (t) { items[t.id] = 0; });

  document.getElementById("evPoster").src = ev.img;
  document.getElementById("evPoster").alt = ev.alt;
  document.getElementById("evSeries").textContent = ev.series + " · " + ev.category;
  document.getElementById("evTitle").textContent = ev.title;
  document.getElementById("evMeta").textContent = ev.dateLabel + "  ·  " + ev.venue + ", " + ev.city + "  ·  " + ev.artist;
  document.getElementById("evDesc").textContent = ev.desc;
  document.getElementById("evSchedule").textContent = ev.dateLabel + " — pintu dibuka 1 jam sebelum acara. " + ev.venue + ", " + ev.city + ".";
  document.getElementById("evVenueText").textContent = ev.venue + ", " + ev.city;
  document.getElementById("sumEvent").textContent = ev.title + " · " + ev.dateLabel;

  var rowsEl = document.getElementById("ticketRows");
  function renderRows() {
    rowsEl.innerHTML = NOVA.TICKET_TYPES.map(function (t) {
      return '<div class="ticket-card-row"><div style="flex:1"><strong>' + t.name + "</strong> — " + NOVA.formatIDR(t.price) +
        '<p class="meta" style="margin:0">' + t.desc + " · " + t.stock + "</p></div>" +
        '<div class="stepper"><button type="button" data-dec="' + t.id + '" aria-label="Kurangi ' + t.name + '">−</button>' +
        '<span id="qty-' + t.id + '">' + items[t.id] + "</span>" +
        '<button type="button" data-inc="' + t.id + '" aria-label="Tambah ' + t.name + '">+</button></div></div>';
    }).join("");
    rowsEl.querySelectorAll("[data-inc]").forEach(function (b) {
      b.addEventListener("click", function () {
        var t = NOVA.getTicketType(b.dataset.inc);
        if (items[t.id] < t.max) { items[t.id]++; renderAll(); }
      });
    });
    rowsEl.querySelectorAll("[data-dec]").forEach(function (b) {
      b.addEventListener("click", function () {
        var t = NOVA.getTicketType(b.dataset.dec);
        if (items[t.id] > 0) { items[t.id]--; renderAll(); }
      });
    });
  }
  function renderSummary() {
    var tot = NOVA.calcTotals(items);
    var lines = NOVA.TICKET_TYPES.filter(function (t) { return items[t.id] > 0; })
      .map(function (t) {
        return '<div class="sum-row"><span>' + t.name + " × " + items[t.id] + "</span><span>" + NOVA.formatIDR(t.price * items[t.id]) + "</span></div>";
      }).join("");
    document.getElementById("sumLines").innerHTML = lines || '<p class="meta">Belum ada tiket dipilih.</p>';
    document.getElementById("sumSubtotal").textContent = NOVA.formatIDR(tot.subtotal);
    document.getElementById("sumFee").textContent = NOVA.formatIDR(tot.fee);
    document.getElementById("sumTotal").textContent = NOVA.formatIDR(tot.total);
    document.getElementById("toCheckout").disabled = tot.total === 0;
  }
  function renderAll() { renderRows(); renderSummary(); }

  /* Denah kursi SVG sederhana: 3 seksi, kursi habis deterministik */
  (function seatMap() {
    var svg = ['<svg viewBox="0 0 620 250" role="img" aria-label="Denah kursi" style="width:100%;max-width:560px">'];
    svg.push('<rect x="210" y="8" width="200" height="26" rx="13" fill="#FFC93C" stroke="#1B1B2F" stroke-width="2"/><text x="310" y="26" text-anchor="middle" font-weight="800" font-size="13">PANGGUNG</text>');
    ["A", "B", "C"].forEach(function (sec, si) {
      var y0 = 56 + si * 64;
      svg.push('<text x="8" y="' + (y0 + 24) + '" font-weight="800">Seksi ' + sec + "</text>");
      for (var r = 0; r < 2; r++) {
        for (var c = 0; c < 12; c++) {
          var sold = ((r * 10 + c + si) % 7 === 0);
          var x = 70 + c * 42, y = y0 + r * 30;
          svg.push('<g class="seat' + (sold ? " sold" : "") + '" data-seat="' + sec + (r + 1) + "-" + (c + 1) + '">' +
            '<rect x="' + x + '" y="' + y + '" width="34" height="24" rx="6"/>' +
            '<text x="' + (x + 17) + '" y="' + (y + 16) + '">' + (c + 1) + "</text></g>");
        }
      }
    });
    svg.push("</svg>");
    document.getElementById("seatMap").innerHTML = svg.join("");
    document.querySelectorAll("#seatMap .seat:not(.sold)").forEach(function (g) {
      g.addEventListener("click", function () { g.classList.toggle("sel"); });
    });
  })();

  document.getElementById("toCheckout").addEventListener("click", function () {
    NOVA.saveCart({ eventId: ev.id, items: items });
    window.location.href = "checkout.php";
  });
  renderAll();
})();
