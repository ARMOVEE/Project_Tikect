/* NOVA LIVE — halaman info: validasi tiket & form kontak (simulasi) */
(function () {
  "use strict";
  var valForm = document.getElementById("valForm");
  if (valForm) {
    valForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var code = document.getElementById("valCode").value.trim().toUpperCase();
      var res = document.getElementById("valResult");
      if (code === "NOVA-LIVE-TICKET-000123") {
        res.textContent = "Tiket VALID — Midnight Jazz Session, VIP, Sec A / Row 5 / Seat 12, No. 000123.";
        res.style.color = "#1B7A4D";
      } else if (!code) {
        res.textContent = "Masukkan dulu kode tiketnya, ya.";
        res.style.color = "";
      } else {
        res.textContent = "Kode tidak ditemukan. Periksa lagi penulisannya, atau hubungi kami via WhatsApp.";
        res.style.color = "#C81E3A";
      }
    });
  }
  var kontak = document.getElementById("kontakForm");
  if (kontak) {
    kontak.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("kNote").textContent = "Terima kasih! Pesanmu tercatat di demo ini (tidak benar-benar terkirim). Tim kami akan membalas via email/WhatsApp di versi produksi.";
    });
  }
})();
