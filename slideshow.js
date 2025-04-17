let slideIndex = 1;
let autoPlayInterval;
let resumeTimeout;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  clearInterval(autoPlayInterval);
  clearTimeout(resumeTimeout);
  slideIndex += n;
  showSlides(slideIndex);

  resumeTimeout = setTimeout(() => {
    autoPlayInterval = setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 5000);
  }, 5000);
}

function currentSlide(n) {
  clearInterval(autoPlayInterval);
  clearTimeout(resumeTimeout);
  slideIndex = n;
  showSlides(slideIndex);

  resumeTimeout = setTimeout(() => {
    autoPlayInterval = setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 5000);
  }, 5000);
}

window.addEventListener("load", () => {
  showSlides(slideIndex);
  autoPlayInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
});
