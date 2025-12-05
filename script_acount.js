
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
      
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
      
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }
      
    if (password.length < 8) {
        alert('Пароль должен содержать минимум 8 символов!');
        return;
    }
      
    alert('Регистрация успешна! Добро пожаловать в Racing World!');
    this.reset();
});

    
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    let strength = 'Слабый';
    let color = '#ff6b35';
      
    if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        strength = 'Сильный';
        color = '#4CAF50';
    } else if (password.length >= 8) {
        strength = 'Средний';
        color = '#FF9800';
    }
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