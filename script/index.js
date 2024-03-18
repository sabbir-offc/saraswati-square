const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (images[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = images.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = images.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const closeBtn = document.getElementsByClassName('close')[0];
const sliderItems = document.querySelectorAll('.slider-item');

sliderItems.forEach(item => {
    const plusButton = item.querySelector('.plus-button');
    const img = item.querySelector('img');

    plusButton.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});