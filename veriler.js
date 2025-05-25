// veriler.js

window.onload = function () {
  // Formdan gelen bilgileri al ve yerleştir
  document.getElementById("filmAdi").textContent = localStorage.getItem("filmAdi") || "Bilinmeyen Film";
  document.getElementById("aciklama").textContent = localStorage.getItem("aciklama") || "Açıklama bulunamadı.";

  // Performans verilerini rastgele oluştur
  const gosterim = Math.floor(Math.random() * 10000) + 5000; // 5000-15000 arası gösterim
  const tiklama = Math.floor(gosterim * (Math.random() * 0.2 + 0.05)); // %5-%25 arası tıklama
  const donusum = Math.floor(tiklama * (Math.random() * 0.4 + 0.1));  // %10-%50 arası dönüşüm

  // ROI hesaplama: kazanç = dönüşüm * 25 TL, maliyet = gösterim * 0.02 TL
  const kazanc = donusum * 25;
  const maliyet = gosterim * 0.02;
  const roi = ((kazanc - maliyet) / maliyet * 100).toFixed(2) + " %";

  // Verileri HTML'de göster
  document.getElementById("gosterim").textContent = gosterim.toLocaleString("tr-TR");
  document.getElementById("tiklama").textContent = tiklama.toLocaleString("tr-TR");
  document.getElementById("donusum").textContent = donusum.toLocaleString("tr-TR");
  document.getElementById("roi").textContent = roi;
};
