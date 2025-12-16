// Array of all images
const imageFiles = [
  'images/1000077605.jpg',
  'images/1000077603d.jpg',
  'images/1000077601.jpg'
];

const container = document.querySelector('.slideshow-container');

// Preload images and create img elements
const slides = imageFiles.map((src, index) => {
  const img = document.createElement('img');
  img.src = src;
  if (index === 0) img.classList.add('active'); // first image visible
  container.appendChild(img);
  return img;
});

let currentIndex = 0;

function nextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(nextSlide, 3000);

// Optional: autoplay audio after user interaction
const audio = document.getElementById('audio');
document.body.addEventListener('click', () => {
  if (audio.paused) audio.play();
}, { once: true });
