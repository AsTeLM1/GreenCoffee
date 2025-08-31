let currentIndex = 0;
const cartes = document.querySelectorAll(".carte");

function changeCarte(direction) {
  cartes[currentIndex].classList.add("hidden");
  currentIndex = (currentIndex + direction + cartes.length) % cartes.length;
  cartes[currentIndex].classList.remove("hidden");
}