let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
    if (index === slideIndex) {
      slide.style.display = 'block';
    }
  });
}

function showNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

showSlide(currentSlide); // Show first slide by default
