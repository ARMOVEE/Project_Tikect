/* NOVA LIVE — carousel hero video tengah-melebar:
   slide pinggir = kotak, slide tengah = persegi panjang yang melebar
   dengan transisi saat berpindah. */
(function () {
  "use strict";
  var viewport = document.querySelector(".video-viewport");
  var track = document.getElementById("videoTrack");
  if (!track || !viewport) return;
  var slides = Array.prototype.slice.call(track.children);
  var dotsWrap = document.getElementById("videoDots");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var current = 0, timer = null;

  // Ruler tak terlihat untuk mengukur target lebar kotak & lebar active secara akurat
  var rulerActive = document.createElement("div");
  rulerActive.className = "video-slide active";
  rulerActive.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;height:0;padding:0;border:0;margin:0;transition:none!important";
  viewport.appendChild(rulerActive);

  var rulerInactive = document.createElement("div");
  rulerInactive.className = "video-slide";
  rulerInactive.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;height:0;padding:0;border:0;margin:0;transition:none!important";
  viewport.appendChild(rulerInactive);

  // titik indikator
  slides.forEach(function (_, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", "Ke slide " + (i + 1));
    b.addEventListener("click", function () { goTo(i); restart(); });
    dotsWrap.appendChild(b);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function getGap() {
    var st = window.getComputedStyle(track);
    return parseFloat(st.gap || st.columnGap) || 20;
  }

  function mark() {
    dots.forEach(function (d, i) { d.classList.toggle("active", i === current); });
    // hanya video slide aktif yang diputar
    slides.forEach(function (s, i) {
      var v = s.querySelector("video");
      if (!v) return;
      if (i === current && !reduced) { var p = v.play(); if (p) p.catch(function () {}); }
      else { v.pause(); }
    });
  }

  function center() {
    var vpWidth = viewport.clientWidth;
    var gap = getGap();
    var inactiveWidth = rulerInactive.getBoundingClientRect().width;
    var activeWidth = rulerActive.getBoundingClientRect().width;

    // Posisi target track agar slide current pas di tengah viewport
    var targetOffsetLeft = current * (inactiveWidth + gap);
    var slideCenter = targetOffsetLeft + (activeWidth / 2);
    var translateX = (vpWidth / 2) - slideCenter;

    track.style.transform = "translateX(" + translateX + "px)";
  }

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, j) { s.classList.toggle("active", j === current); });
    center();
    mark();
  }

  function next() { goTo(current + 1); }
  function restart() {
    if (reduced) return;
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }

  document.getElementById("videoPrev").addEventListener("click", function () { goTo(current - 1); restart(); });
  document.getElementById("videoNext").addEventListener("click", function () { goTo(current + 1); restart(); });
  window.addEventListener("resize", function () { center(); });

  // Dukungan geser (swipe) di layar sentuh / HP
  var touchStartX = 0;
  viewport.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  viewport.addEventListener("touchend", function (e) {
    var touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else goTo(current - 1);
      restart();
    }
  }, { passive: true });

  // hormati reduced motion: tanpa autoplay video & tanpa geser otomatis
  if (reduced) {
    slides.forEach(function (s) { var v = s.querySelector("video"); if (v) { v.removeAttribute("autoplay"); v.pause(); } });
  }

  goTo(0);
  restart();
})();
