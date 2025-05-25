// script.js

function kampanyayiBaslat() {
  // Kullanıcıdan verileri al
  const filmAdi = document.getElementById("filmAdi").value.trim();
  const aciklama = document.getElementById("aciklama").value.trim();

  // Kontrol: boş alan var mı?
  if (!filmAdi || !aciklama) {
    alert("Lütfen tüm alanları eksiksiz doldurun!");
    return;
  }

  // Verileri tarayıcı belleğine kaydet
  localStorage.setItem("filmAdi", filmAdi);
  localStorage.setItem("aciklama", aciklama);

  // Kullanıcıyı sonuç sayfasına yönlendir
  window.location.href = "sonuc.html";
}
