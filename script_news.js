const categoryButtons = document.querySelectorAll('.category-btn');
const newsCards = document.querySelectorAll('.news-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        // 1. Убираем active со всех кнопок
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // 2. Добавляем active к нажатой
        this.classList.add('active');

        // 3. Получаем выбранную категорию (текст кнопки)
        const selectedCategory = this.textContent.trim();

        // 4. Проходим по всем карточкам
        newsCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (selectedCategory === 'Все новости') {
                // Показываем все карточки
                card.style.display = 'block';
            } else if (cardCategory === selectedCategory) {
                // Показываем карточку, если категория совпадает
                card.style.display = 'block';
            } else {
                // Скрываем остальные
                card.style.display = 'none';
            }   
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu')

    hamburger.addEventListener('click', (e) => {
        mobileMenu.classList.add('active');
    })

    closeMenu.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.remove('active'); 
    })

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    })
})