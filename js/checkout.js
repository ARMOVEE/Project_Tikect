/* NOVA LIVE — checkout: validasi real-time, ringkasan, pesanan demo */
(function () {
  "use strict";
  var NOVA = window.NOVA;
  var cart = NOVA.loadCart();
  var form = document.getElementById("coForm");
  if (!cart || NOVA.calcTotals(cart.items).total === 0) {
    document.getElementById("coEmpty").style.display = "block";
    form.style.display = "none";
    return;
  }
  var ev = NOVA.getEvent(cart.eventId);
  var tot = NOVA.calcTotals(cart.items);
  document.getElementById("coEvent").textContent = ev.title + " · " + ev.dateLabel + " · " + ev.venue + ", " + ev.city;
  document.getElementById("coLines").innerHTML = NOVA.TICKET_TYPES.filter(function (t) { return cart.items[t.id] > 0; })
    .map(function (t) {
      return '<div class="sum-row"><span>' + t.name + " × " + cart.items[t.id] + "</span><span>" + NOVA.formatIDR(t.price * cart.items[t.id]) + "</span></div>";
    }).join("");
  document.getElementById("coSubtotal").textContent = NOVA.formatIDR(tot.subtotal);
  document.getElementById("coFee").textContent = NOVA.formatIDR(tot.fee);
  document.getElementById("coTotal").textContent = NOVA.formatIDR(tot.total);

  function check(id, errId, ok, msg) {
    var el = document.getElementById(id);
    var err = document.getElementById(errId);
    var field = el.closest(".field");
    var valid = ok(el.value.trim());
    field.classList.toggle("invalid", !valid);
    err.textContent = valid ? "" : msg;
    return valid;
  }
  function validateAll() {
    var a = check("fNama", "eNama", function (v) { return v.length >= 3; }, "Nama minimal 3 huruf, ya.");
    var b = check("fEmail", "eEmail", function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, "Format email belum benar.");
    var c = check("fTelp", "eTelp", function (v) { return /^[0-9+]{9,15}$/.test(v.replace(/[\s-]/g, "")); }, "Nomor HP 9–15 digit angka.");
    return a && b && c;
  }
  ["fNama", "fEmail", "fTelp"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () { validateAll(); });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateAll()) return;
    var pay = document.querySelector('input[name="pay"]:checked').value;
    var order = {
      number: "NV" + String(Date.now()).slice(-6),
      eventId: ev.id, items: cart.items, totals: tot,
      name: document.getElementById("fNama").value.trim(),
      email: document.getElementById("fEmail").value.trim(),
      pay: pay
    };
    sessionStorage.setItem("nova_order", JSON.stringify(order));
    sessionStorage.removeItem("nova_cart");
    window.location.href = "confirmation.php";
  });
})();
