
// Örneğin, ekran boyutuna göre dinamik içerik yüklemesi
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        document.body.style.backgroundColor = '#333'; // Küçük ekranlarda arka plan rengini değiştirir
    } else {
        document.body.style.backgroundColor = '#1e1e1e'; // Büyük ekranlarda arka plan rengini geri döndürür
    }
});
