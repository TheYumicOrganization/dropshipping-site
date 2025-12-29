const images = [
  "assets/images/p1.jpg",
  "assets/images/p2.jpg",
  "assets/images/p3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  slide.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 500);

}, 3000);
