let sliderInterval;

function startSlideAnimation() {
    const slider = document.querySelector('.slider-inner');
    sliderInterval = setInterval(() => {
        slider.scrollBy({ left: 20, behavior: 'smooth' }); // Vitesse du défilement
    }, 100); // Répète tous les 100ms
}

function stopSlideAnimation() {
    clearInterval(sliderInterval);
}

