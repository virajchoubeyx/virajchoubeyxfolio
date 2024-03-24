let slideIndex = 0;

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const slides = document.querySelector('.slides');
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
