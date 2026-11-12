/* ============================================================
   NOVA LIVE — satu-satunya file data (konsep/demo, bukan penjualan
   resmi). Ganti event, harga, dan teks di sini saja.
   Kategori mengikuti pola platform ticketing Indonesia: Musik · Pameran · Wahana · Olahraga.
   ============================================================ */
window.NOVA = window.NOVA || {};
window.NOVA.BRAND = "NOVA LIVE";

window.NOVA.CATEGORIES = [
  {
    id: "Musik",
    name: "Musik",
    color: "#EFF6FF",
    icon: "🎸",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M36.5 8.5l-2.2 2.2 3.8 3.8 2.2-2.2a1.8 1.8 0 0 0 0-2.5l-1.3-1.3a1.8 1.8 0 0 0-2.5 0z" fill="#2563EB"/><path d="M26 19l9-9-2-2-9 9 2 2z" fill="#2563EB"/><path d="M27 21.5l-3.2-3.2a2 2 0 0 0-2.8 0l-1.3 1.3c-.6.6-1.5.8-2.3.4l-.8-.4a2.5 2.5 0 0 0-3.5.8l-1.2 1.8a5 5 0 0 0 1.4 6.4l1.9 1.1c.8.5 1.2 1.4.9 2.3l-.4 1.2a2.5 2.5 0 0 0 1.6 3.2l1.9.7a5 5 0 0 0 5.8-2.1l1-2a1.8 1.8 0 0 1 2.2-1l1.5.5a2.5 2.5 0 0 0 3.2-1.6l.8-2a5 5 0 0 0-1.6-5.5l-1.4-.7a1.8 1.8 0 0 1-1-2.2l.5-1.3c.3-.8.1-1.7-.5-2.3z" fill="#2563EB"/><circle cx="21" cy="27" r="1.5" fill="#FFFFFF"/></svg>'
  },
  {
    id: "Pameran",
    name: "Pameran",
    color: "#EDE9FE",
    icon: "🖼️",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="9" y="10" width="30" height="15" rx="2" fill="#2563EB"/><path d="M16 15l2.5 4h-5z" fill="#FFFFFF"/><circle cx="24" cy="17" r="2.2" fill="#FFFFFF"/><rect x="29.5" y="15" width="4" height="4" rx="0.5" fill="#FFFFFF"/><path d="M12 28c4 2 8 2 12 0 4 2 8 2 12 0" stroke="#2563EB" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="12" cy="27" r="1.5" fill="#2563EB"/><circle cx="24" cy="27" r="1.5" fill="#2563EB"/><circle cx="36" cy="27" r="1.5" fill="#2563EB"/><path d="M12 28v11M24 28v11M36 28v11" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/><path d="M9 39h6M21 39h6M33 39h6" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/></svg>'
  },
  {
    id: "Teater",
    name: "Teater",
    color: "#FCE7F3",
    icon: "🎭",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="9" y="10" width="30" height="28" rx="3" fill="#2563EB"/><rect x="9" y="10" width="30" height="6" rx="1.5" fill="#1D4ED8"/><path d="M9 16h6c0 6-3 10-6 13v9h9c-1-5 1-10 6-12s7 7 6 12h9v-9c-3-3-6-7-6-13h6V16H9z" fill="#93C5FD"/><path d="M18 16c0 6-3 10-9 12V16h9z" fill="#1E40AF"/><path d="M30 16c0 6 3 10 9 12V16h-9z" fill="#1E40AF"/></svg>'
  },
  {
    id: "Olahraga",
    name: "Olahraga",
    color: "#DCFCE7",
    icon: "⚽",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="8" y="12" width="32" height="24" rx="4" fill="#2563EB"/><path d="M24 14v20" stroke="#FFFFFF" stroke-width="2"/><circle cx="24" cy="24" r="4.5" stroke="#FFFFFF" stroke-width="1.8" fill="none"/><path d="M8 18h5v12H8" stroke="#FFFFFF" stroke-width="1.8" fill="none"/><path d="M40 18h-5v12h5" stroke="#FFFFFF" stroke-width="1.8" fill="none"/></svg>'
  },
  {
    id: "Wisata",
    name: "Wisata",
    color: "#E0F2FE",
    icon: "🗺️",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M10 27l8-4.5 12 4.5 8-4.5v12l-8 4.5-12-4.5-8 4.5V27z" fill="#93C5FD"/><path d="M18 22.5l12 4.5v12l-12-4.5v-12z" fill="#60A5FA"/><path d="M24 9c-4.4 0-8 3.6-8 8 0 5.8 8 14 8 14s8-8.2 8-14c0-4.4-3.6-8-8-8z" fill="#2563EB"/><circle cx="24" cy="17" r="3" fill="#FFFFFF"/></svg>'
  },
  {
    id: "Talkshow",
    name: "Talkshow",
    color: "#FEF3C7",
    icon: "🎙️",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="18" y="9" width="12" height="20" rx="6" fill="#2563EB"/><path d="M21 14h6M21 18h6M21 22h6" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/><path d="M14 19v3a10 10 0 0 0 20 0v-3" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M24 32v6M17 38h14" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/></svg>'
  },
  {
    id: "Workshop",
    name: "Workshop",
    color: "#FEE2E2",
    icon: "📋",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="9" y="10" width="30" height="3" rx="1.5" fill="#2563EB"/><rect x="11" y="13" width="26" height="17" fill="#60A5FA" opacity="0.6"/><path d="M24 15l4.5 8h-9l4.5-8z" fill="#2563EB"/><path d="M24 15v6" stroke="#FFFFFF" stroke-width="1.5"/><circle cx="24" cy="21" r="1" fill="#FFFFFF"/><rect x="9" y="30" width="30" height="3" rx="1.5" fill="#2563EB"/><circle cx="24" cy="35" r="2" stroke="#2563EB" stroke-width="2" fill="none"/></svg>'
  },
  {
    id: "Kompetisi",
    name: "Kompetisi",
    color: "#FEF9C3",
    icon: "🏆",
    svg: '<svg width="42" height="42" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M16 11h16v10c0 4.4-3.6 8-8 8s-8-3.6-8-8V11z" fill="#2563EB"/><path d="M16 13h-3c-1.7 0-3 1.3-3 3v2c0 3.3 2.7 6 6 6h0M32 13h3c1.7 0 3 1.3 3 3v2c0 3.3-2.7 6-6 6h0" stroke="#2563EB" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M22 29h4v5h-4z" fill="#2563EB"/><rect x="17" y="34" width="14" height="4.5" rx="1.5" fill="#60A5FA"/></svg>'
  }
];
window.NOVA.catColor = function (cat) {
  var c = window.NOVA.CATEGORIES.find(function (x) { return x.id === cat; });
  return c ? c.color : "#EFF6FF";
};

window.NOVA.EVENTS = [
  { id: "midnight-jazz", org: "NOVA Live", title: "Midnight Jazz Session", artist: "The Blue Note Quartet",
    category: "Musik", series: "Spotlight Series",
    dateLabel: "SAT, NOV 14 · 7:30PM", dateShort: "14 NOV", dateISO: "2026-11-14T19:30:00+07:00",
    venue: "The Grand Hall", city: "Jakarta",
    img: "assets/midnight.jpeg", alt: "Pemain saksofon tampil di panggung jazz dengan sorot lampu hangat",
    badge: null, priceFrom: 150000,
    desc: "Malam jazz intim bersama The Blue Note Quartet: standar klasik, aransemen baru, dan satu set dadakan yang tak pernah sama dua kali." },
  { id: "tulus-live", org: "NOVA Live", title: "Tulus Live in Concert", artist: "Tulus",
    category: "Musik", series: "Headliner",
    dateLabel: "SAT, DEC 06 · 8:00PM", dateShort: "06 DEC", dateISO: "2026-12-06T20:00:00+07:00",
    venue: "Istora Senayan", city: "Jakarta",
    img: "assets/tulus1.jpeg", alt: "Penampil vokal di atas panggung konser yang terang",
    badge: "Tinggal Sedikit", priceFrom: 450000,
    desc: "Satu malam penuh lagu-lagu Tulus, dari balada pelan sampai sing-along massal. Panggung utama, tata cahaya penuh." },
  { id: "nadin-intimate", org: "NOVA Live", title: "Nadin Amizah: Intimate Session", artist: "Nadin Amizah",
    category: "Musik", series: "Intimate Session",
    dateLabel: "FRI, DEC 11 · 7:30PM", dateShort: "11 DEC", dateISO: "2026-12-11T19:30:00+07:00",
    venue: "The Hall", city: "Bandung",
    img: "assets/nadin.jpeg", alt: "Penampil akustik di panggung dengan pencahayaan hangat",
    badge: null, priceFrom: 350000,
    desc: "Format intim dan akustik: Nadin Amizah dengan band kecil, jarak dekat, dan setlist yang jarang dibawakan live." },
  { id: "ghea-live", org: "NOVA Live", title: "Ghea Indrawari Live", artist: "Ghea Indrawari",
    category: "Musik", series: "Rising Star",
    dateLabel: "SAT, DEC 19 · 7:00PM", dateShort: "19 DEC", dateISO: "2026-12-19T19:00:00+07:00",
    venue: "Jogja Expo Center", city: "Yogyakarta",
    img: "assets/63006-ghea-indrawari.jpg", alt: "Penampil pop di atas panggung konser malam hari",
    badge: null, priceFrom: 300000,
    desc: "Energi pop masa kini: Ghea Indrawari dengan band lengkap dan koreografi panggung penuh warna." },
  { id: "galeri-warna", org: "Kolektif Ruang Seni", title: "Galeri Warna: Pameran Seni Kontemporer", artist: "Kolektif Ruang Seni",
    category: "Pameran", series: "Pameran",
    dateLabel: "15 NOV – 15 DEC · 10:00AM", dateShort: "15 NOV", dateISO: "2026-11-15T10:00:00+07:00",
    venue: "Galeri Nasional", city: "Jakarta",
    img: "assets/kontemporer.jpg", alt: "Ruang pameran seni kontemporer dengan lukisan warna-warni",
    badge: "BARU", priceFrom: 50000,
    desc: "120 karya dari 40 seniman muda Indonesia. Satu tiket berlaku seharian, boleh keluar-masuk galeri." },
  { id: "foto-analog", org: "Komunitas Analog Jogja", title: "Pameran Fotografi Analog", artist: "Komunitas Analog Jogja",
    category: "Pameran", series: "Pameran",
    dateLabel: "SAT, NOV 28 · 9:00AM", dateShort: "28 NOV", dateISO: "2026-11-28T09:00:00+07:00",
    venue: "Taman Budaya", city: "Yogyakarta",
    img: "assets/potografi.jpeg", alt: "Pengunjung menikmati pameran foto di ruang galeri",
    badge: null, priceFrom: 35000,
    desc: "Kamar gelap, cetakan tangan, dan cerita di balik setiap frame. Termasuk tur kurator tiap akhir pekan." },
  { id: "lakon-teater", org: "Teater Mandiri", title: "Lakon Panggung: Sang Pangeran", artist: "Teater Mandiri",
    category: "Teater", series: "Teater & Seni",
    dateLabel: "FRI, JAN 08 · 7:30PM", dateShort: "08 JAN", dateISO: "2027-01-08T19:30:00+07:00",
    venue: "Teater Jakarta, TIM", city: "Jakarta",
    img: "assets/sangpangeran.jpg", alt: "Panggung teater dengan tata cahaya megah",
    badge: "BARU", priceFrom: 120000,
    desc: "Kisah drama klasik yang dibawakan dengan aransemen panggung modern, musik orkestra, dan akting memukau." },
  { id: "fun-run", org: "Jakarta Runners", title: "Fun Run 10K: Jakarta City Run", artist: "Jakarta Runners",
    category: "Olahraga", series: "Lomba",
    dateLabel: "SUN, DEC 13 · 5:30AM", dateShort: "13 DEC", dateISO: "2026-12-13T05:30:00+07:00",
    venue: "Bundaran HI", city: "Jakarta",
    img: "assets/fun-run.jpg", alt: "Pelari fun run dengan kaus warna-warni di jalan kota pagi hari",
    badge: null, priceFrom: 150000,
    desc: "Lari santai 10K melewati ikon kota. Termasuk kaus, medali finisher, dan sarapan bersama." },
  { id: "final-basket", org: "Liga Basket Indonesia", title: "Final Kejuaraan Basket Nasional", artist: "Liga Basket Indonesia",
    category: "Olahraga", series: "Pertandingan",
    dateLabel: "SAT, JAN 23 · 7:00PM", dateShort: "23 JAN", dateISO: "2027-01-23T19:00:00+07:00",
    venue: "DBL Arena", city: "Surabaya",
    img: "assets/kejuaraan basket.jpg", alt: "Suasana arena olahraga yang meriah saat pertandingan",
    badge: "Tinggal Sedikit", priceFrom: 100000,
    desc: "Laga final yang menentukan juara musim ini. Tribun keluarga dan tribun suporter tersedia." },
  { id: "kincir-ria", org: "Ancol Parks", title: "Karnaval Kincir Ria Ancol", artist: "Ancol Parks",
    category: "Wisata", series: "Wahana & Wisata",
    dateLabel: "SAT–SUN · 10:00AM", dateShort: "12 DEC", dateISO: "2026-12-12T10:00:00+07:00",
    venue: "Taman Impian Jaya Ancol", city: "Jakarta",
    img: "assets/karnavalria.avif", alt: "Kincir ria warna-warni di karnaval siang hari",
    badge: null, priceFrom: 125000,
    desc: "Seharian penuh wahana, parade, dan jajanan karnaval. Anak di bawah 3 tahun gratis." },
  { id: "balon-udara", org: "Bali Festival Co.", title: "Festival Balon Udara Wonosobo", artist: "Komunitas Balon Udara Wonosobo",
    category: "Wisata", series: "Festival Wisata",
    dateLabel: "SAT, JAN 16 · 6:00AM", dateShort: "16 JAN", dateISO: "2027-01-16T06:00:00+07:00",
    venue: "Alun Alun Wonosobo", city: "Wonosobo",
    img: "assets/balon udara.jpg", alt: "Balon udara warna-warni mengudara di pagi hari",
    badge: "Tinggal Sedikit", priceFrom: 200000,
    desc: "Penerbangan balon saat matahari terbit, pasar kuliner, dan konser akustik sore hari." },
  { id: "Talkkshow-Literasi", org: "Talkshow Hub ID", title: "Talkshow Literasi Digital", artist: "Nitya Descha, Hariqo Wibawa Satrio, Claudia Hapsari Priyono ",
    category: "Talkshow", series: "Inspirasi",
    dateLabel: "SAT, JAN 16 · 1:00PM", dateShort: "16 JAN", dateISO: "2027-01-16T13:00:00+07:00",
    venue: "Alun-Alun Tangerang", city: "Tangerang",
    img: "assets/talkshow.jpeg", alt: "Panggung talkshow inspiratif dengan sorot lampu dinamis",
    badge: null, priceFrom: 175000,
    desc: "Bincang inspiratif bersama praktisi industri kreatif terdepan tentang tren seni, teknologi, dan inovasi masa depan." },
  { id: "MASTER PIGMA", org: "Design Society", title: "MASTER PIGMA THE ULTIMATE UI/UX DESIGN TOOL", artist: "Manoj Kumar",
    category: "Workshop", series: "Pelatihan",
    dateLabel: "SUN, JAN 24 · 9:00AM", dateShort: "24 JAN", dateISO: "2027-01-24T09:00:00+07:00",
    venue: "Bandung Creative Hub", city: "Bandung",
    img: "assets/manoj.jpeg", alt: "Suasana workshop desain interaktif",
    badge: "Tinggal Sedikit", priceFrom: 250000,
    desc: "Workshop intensif praktik langsung mendesain antarmuka modern dengan bantuan tools kecerdasan buatan." },
  { id: "esports-championship", org: "Universitas Putra Bangsa", title: "Rektor Cup Table Tennis Competition Season 2", artist: "Tyas,Panji",
    category: "Kompetisi", series: "Turnamen",
    dateLabel: "SAT, JAN 30 · 11:00AM", dateShort: "30 JAN", dateISO: "2027-01-30T11:00:00+07:00",
    venue: "Gor Universitas Putra Bangsa", city: "Kebumen",
    img: "assets/tennis.jpeg", alt: "Arena kompetisi Tennis yang sangat sengit dengan sorak penonton",
    badge: "HOT", priceFrom: 100000,
    desc: "Pertarungan pro player tenis memperebutkan piala Turnamen Rektor Cup. Saksikan aksi seru secara langsung!" }
];

/* Tier tiket generik (dipakai semua kategori, sesuai brief event.php) */
window.NOVA.TICKET_TYPES = [
  { id: "vip", name: "VIP", price: 350000,
    desc: "Area terdepan, jalur masuk prioritas, dan merchandise eksklusif.",
    stock: "Tersedia", max: 6 },
  { id: "regular", name: "Regular", price: 200000,
    desc: "Area standar dengan pandangan panggung/arena yang jelas.",
    stock: "Tersedia", max: 6 },
  { id: "festival", name: "Festival", price: 150000,
    desc: "Area umum/festival. Paling hemat, tetap seru.",
    stock: "Tinggal Sedikit", max: 4 }
];
window.NOVA.SERVICE_FEE_RATE = 0.05;

window.NOVA.formatIDR = function (n) {
  return "Rp " + Number(n).toLocaleString("id-ID");
};
window.NOVA.getEvent = function (id) {
  return window.NOVA.EVENTS.find(function (e) { return e.id === id; }) || window.NOVA.EVENTS[0];
};
window.NOVA.getTicketType = function (id) {
  return window.NOVA.TICKET_TYPES.find(function (t) { return t.id === id; });
};
window.NOVA.loadCart = function () {
  try { return JSON.parse(sessionStorage.getItem("nova_cart") || "null"); } catch (e) { return null; }
};
window.NOVA.saveCart = function (cart) {
  sessionStorage.setItem("nova_cart", JSON.stringify(cart));
};
window.NOVA.cartCount = function () {
  var c = window.NOVA.loadCart();
  if (!c) return 0;
  return Object.values(c.items || {}).reduce(function (a, b) { return a + b; }, 0);
};
window.NOVA.calcTotals = function (items) {
  var subtotal = 0;
  Object.keys(items || {}).forEach(function (id) {
    var t = window.NOVA.getTicketType(id);
    if (t) subtotal += t.price * items[id];
  });
  var fee = Math.round(subtotal * window.NOVA.SERVICE_FEE_RATE);
  return { subtotal: subtotal, fee: fee, total: subtotal + fee };
};
