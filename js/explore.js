/* NOVA LIVE — Jelajah: pencarian, filter, urutan, muat lebih banyak */
(function () {
  "use strict";
  var NOVA = window.NOVA;
  var params = new URLSearchParams(window.location.search);
  var state = {
    q: params.get("q") || "",
    cat: params.get("cat") || "Semua",
    city: "",
    date: "",
    sort: "date",
    shown: 6
  };
  var PAGE = 6;
  var grid = document.getElementById("exGrid");
  var empty = document.getElementById("exEmpty");
  var count = document.getElementById("exCount");
  var moreBtn = document.getElementById("exMore");
  var catsEl = document.getElementById("exCats");
  var citySel = document.getElementById("exCity");

  var cats = ["Semua"].concat(NOVA.CATEGORIES.filter(function (c) { return c.id !== "Semua Kategori"; }).map(function (c) { return c.id; }));
  catsEl.innerHTML = cats.map(function (c) {
    return '<button type="button" class="chip' + (c === state.cat ? " active" : "") + '" data-cat="' + c + '">' + c + "</button>";
  }).join("");
  catsEl.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-cat]");
    if (!b) return;
    state.cat = b.dataset.cat; state.shown = PAGE;
    catsEl.querySelectorAll("button").forEach(function (x) { x.classList.toggle("active", x.dataset.cat === state.cat); });
    render();
  });

  var cities = [];
  NOVA.EVENTS.forEach(function (e) { if (cities.indexOf(e.city) < 0) cities.push(e.city); });
  cities.sort().forEach(function (c) {
    var o = document.createElement("option");
    o.value = c; o.textContent = c; citySel.appendChild(o);
  });

  function filtered() {
    var q = state.q.toLowerCase();
    var list = NOVA.EVENTS.filter(function (e) {
      if (state.cat !== "Semua" && e.category !== state.cat) return false;
      if (state.city && e.city !== state.city) return false;
      if (state.date && !e.dateISO.startsWith(state.date)) return false;
      if (q && (e.title + " " + e.artist + " " + e.venue + " " + e.city).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    if (state.sort === "priceAsc") list.sort(function (a, b) { return a.priceFrom - b.priceFrom; });
    if (state.sort === "priceDesc") list.sort(function (a, b) { return b.priceFrom - a.priceFrom; });
    if (state.sort === "date") list.sort(function (a, b) { return a.dateISO.localeCompare(b.dateISO); });
    return list;
  }

  function render() {
    var list = filtered();
    var shown = list.slice(0, state.shown);
    grid.innerHTML = shown.map(window.NOVA_EVENT_CARD).join("");
    empty.style.display = list.length ? "none" : "block";
    count.textContent = "Menampilkan " + shown.length + " dari " + list.length + " event.";
    moreBtn.style.display = list.length > state.shown ? "inline-flex" : "none";
  }

  document.getElementById("exQ").value = state.q;
  document.getElementById("exSearch").addEventListener("submit", function (e) {
    e.preventDefault();
    state.q = document.getElementById("exQ").value.trim(); state.shown = PAGE; render();
  });
  citySel.addEventListener("change", function () { state.city = citySel.value; state.shown = PAGE; render(); });
  document.getElementById("exDate").addEventListener("change", function (e) { state.date = e.target.value; state.shown = PAGE; render(); });
  document.getElementById("exSort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });
  moreBtn.addEventListener("click", function () { state.shown += PAGE; render(); });
  render();
})();
