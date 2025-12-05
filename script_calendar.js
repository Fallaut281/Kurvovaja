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

const filterButtons = document.querySelectorAll('.filter-btn');
const raceCards = document.querySelectorAll('.race-card');

    filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Переключаем активный стиль
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

      // Получаем выбранную серию
        const selectedSeries = this.textContent.trim();

      // Фильтруем карточки
        raceCards.forEach(card => {
            const cardSeries = card.getAttribute('data-series');

            if (selectedSeries === 'Все серии') {
            card.style.display = 'block'; // Показываем все
            } else if (cardSeries === selectedSeries) {
            card.style.display = 'block'; // Показываем совпадающие
            } else {
            card.style.display = 'none'; // Скрываем остальные
            }
        });
    });
});

  // Переключение года (без фильтрации, только стиль)
const yearSelectors = document.querySelectorAll('.year-selector');
yearSelectors.forEach(button => {
    button.addEventListener('click', function () {
        yearSelectors.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});