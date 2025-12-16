// Array of all images
const imageFiles = [
  'images/1000077605.jpg',
  'images/1000077603.jpg',
  'images/1000077601.jpg',
  'images/1000077599.jpg',
  'images/1000077597.jpg',
  'images/1000077595.jpg'
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

  // Optional: play audio
  let audios = slides[slideIndex-1].getElementsByTagName("audio");
  if(audios.length){ audios[0].play(); }
}
