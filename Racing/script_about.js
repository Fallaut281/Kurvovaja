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