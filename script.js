document.addEventListener('DOMContentLoaded', function() {
    
    // Эффект при фокусе на email поле
    var emailInput = document.getElementById('contact-email');
    if (emailInput) {
        emailInput.addEventListener('focus', function() {
            this.style.backgroundColor = '#e6f7ff';
            this.style.borderColor = '#16b6ec';
        });
        emailInput.addEventListener('blur', function() {
            this.style.backgroundColor = '';
            this.style.borderColor = '';
        });
    }

    // Плавная прокрутка по якорным ссылкам
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Обработка отправки формы
    var contactForm = document.getElementById('contact-form');
    var modal = document.getElementById('modal');
    var closeBtn = document.querySelector('.modal-close');
    var closeModalBtn = document.querySelector('.modal-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            contactForm.reset();
        });
    }

    // Закрытие модального окна
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Закрытие при клике вне окна
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Простая анимация появления карточек
    var cards = document.querySelectorAll('.card, .about-block');
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '0';
        cards[i].style.transform = 'translateY(20px)';
    }

    function showCards() {
        for (var i = 0; i < cards.length; i++) {
            setTimeout(function(index) {
                return function() {
                    if (cards[index]) {
                        cards[index].style.transition = 'all 0.5s ease';
                        cards[index].style.opacity = '1';
                        cards[index].style.transform = 'translateY(0)';
                    }
                };
            }(i), i * 100);
        }
    }

    setTimeout(showCards, 300);

});