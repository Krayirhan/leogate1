document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Formun varsayılan şekilde gönderilmesini engelle

        // Form verilerini al
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basit bir uyarı göster (Gerçek uygulamada form verilerini göndermeniz gerekir)
        alert(`Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`);
        
        // Formu temizle
        contactForm.reset();
    });
});
