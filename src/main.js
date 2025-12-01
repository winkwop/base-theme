// NPM'den paket import edebilir
import confetti from "canvas-confetti";

// Kendi yazdığı modülü import edebilir
// import { initMenu } from './components/menu';

console.log("🚀 Winkwop Tema JS Yüklendi!");

// Örnek: Sepete ekle butonuna basınca konfeti patlat
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-add-to-cart");

  if (btn) {
    btn.addEventListener("click", () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      console.log("Ürün sepete eklendi!");
    });
  }
});
