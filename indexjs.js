let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides; // Bir sonraki slayta geç
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // Önceki slayta geç
    showSlides();
}

// Otomatik geçiş
setInterval(nextSlide, 8000); // 10 saniyede bir geçiş

// Başlangıçta slaytları göster
showSlides();

// Butonları seç ve tıklama olayını ekle
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
