document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;
    const itemWidth = carouselItems[0].offsetWidth; // Ширина одного элемента

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    // Бургер-меню (простой пример)
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const menuCloseButton = document.querySelector('.menu-close-button'); // Находим кнопку закрытия

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-active'); // Добавьте класс menu-active в CSS для показа меню
    });

    menuCloseButton.addEventListener('click', () => {
        menu.classList.remove('menu-active'); // Убираем класс menu-active
    });

    const cont = document.querySelector('.container-line'); 
    const line = document.getElementById('line');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cont.classList.add('line-animated'); 
            } else {
                cont.classList.remove('line-animated');
            }
        });
    });

    observer.observe(cont); 
});


