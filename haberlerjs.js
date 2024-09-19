document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news_item');

    newsItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Haber: ${item.querySelector('h2').textContent}`);
        });
    });
});
