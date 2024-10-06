const carousel = document.getElementById("carousel");
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  const totalItems = carousel.children.length;
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  const totalItems = carousel.children.length;
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = translateX(${offset}%);
}