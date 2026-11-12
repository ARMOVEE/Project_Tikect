/* NOVA LIVE — konfirmasi: konfeti ringan, .ics, bagikan */
(function () {
  "use strict";
  var NOVA = window.NOVA;
  var order = null;
  try { order = JSON.parse(sessionStorage.getItem("nova_order") || "null"); } catch (e) {}
  if (!order) {
    document.getElementById("cfBox").innerHTML = '<p>Belum ada pesanan. <a href="explore.php">Jelajah event dulu, yuk!</a></p>';
    return;
  }
  var ev = NOVA.getEvent(order.eventId);
  var lines = NOVA.TICKET_TYPES.filter(function (t) { return order.items[t.id] > 0; })
    .map(function (t) { return t.name + " × " + order.items[t.id]; }).join(", ");
  document.getElementById("cfBox").innerHTML =
    '<p><strong>Nomor pesanan:</strong> ' + order.number + "</p>" +
    "<p><strong>Event:</strong> " + ev.title + " · " + ev.dateLabel + "</p>" +
    "<p><strong>Venue:</strong> " + ev.venue + ", " + ev.city + "</p>" +
    "<p><strong>Tiket:</strong> " + lines + "</p>" +
    "<p><strong>Atas nama:</strong> " + order.name + " (" + order.email + ")</p>" +
    "<p><strong>Pembayaran (demo):</strong> " + order.pay + "</p>" +
    '<p class="sum-row total"><span>Total dibayar (simulasi)</span><span>' + NOVA.formatIDR(order.totals.total) + "</span></p>";

  /* .ics */
  document.getElementById("cfIcs").addEventListener("click", function () {
    var d = ev.dateISO.replace(/[-:]/g, "").replace("+07:00", "");
    var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT",
      "UID:" + order.number + "@novalive.example.com",
      "DTSTART:" + d, "SUMMARY:" + ev.title, "LOCATION:" + ev.venue + ", " + ev.city,
      "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "novalive-" + order.number + ".ics";
    a.click();
  });
  document.getElementById("cfShare").addEventListener("click", function () {
    var text = "Aku sudah pesan tiket " + ev.title + " di NOVA LIVE! Nomor pesanan: " + order.number;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () {
        document.getElementById("cfShareNote").textContent = "Tersalin! Tempel di chat atau media sosialmu.";
      });
    } else {
      document.getElementById("cfShareNote").textContent = text;
    }
  });

  /* Konfeti ringan (canvas) — mati saat prefers-reduced-motion */
  if (false) {
    var canvas = document.getElementById("confetti");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    var colors = ["#FF4B6E", "#FFC93C", "#2EC4B6", "#4CC9F0", "#B69CFF"];
    var parts = [];
    for (var i = 0; i < 120; i++) {
      parts.push({ x: Math.random() * canvas.width, y: -20 - Math.random() * 200,
        w: 6 + Math.random() * 8, h: 8 + Math.random() * 8, c: colors[i % colors.length],
        vy: 2 + Math.random() * 3, vx: -1 + Math.random() * 2, r: Math.random() * Math.PI });
    }
    var frames = 0;
    (function tick() {
      if (frames++ > 240) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(function (p) {
        p.y += p.vy; p.x += p.vx; p.r += 0.05;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
      });
      requestAnimationFrame(tick);
    })();
  }
})();
