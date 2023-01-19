const textElement = document.querySelector('.fade-out');
const scrollPosition = window.scrollY;
const threshold = 300;
const links = document.querySelectorAll('.link');
var menu = 0;

links.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
        event.preventDefault();
    });
});

//SWIPER
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    zoom: {
        maxRatio: 3,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '/' +
                '<span class="' + totalClass + '"></span>';
        },
    },

});
const menuLink = document.querySelector('.projects-toggle');
const menuDiv = document.querySelector('.projects');
const descriptionText = document.querySelector('.description');
const divLeft = document.querySelector('.div-left');
const divRight = document.querySelector('.div-right');
const gallery = document.querySelector('.swiper');
const overlay = document.querySelector('.overlay');
const introOverlay = document.querySelector('.intro-overlay');

swiper.on('transitionEnd', function () {
    var currentIndex = swiper.realIndex;
    var currentSlide = swiper.slides[currentIndex];
    var imgElement = currentSlide.querySelector('img');
    var altText = currentSlide.getElementsByClassName("hidden-description")[0].innerHTML;
    var imgAltText = imgElement.getAttribute('alt');

    descriptionText.innerHTML = imgAltText;
    overlay.innerHTML = altText;

});
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    divRight.addEventListener('click', function (event) {
        event.preventDefault();
        swiper.zoom.in();
        if (overlay.style.visibility == 'visible') {
            overlay.style.visibility = 'hidden';
        } else {
            overlay.style.visibility = 'visible';
        }

    });
}


menuLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (menu == 0) {
        menuDiv.style.height = '30px';
        menu = 1;
    } else if (menu == 1) {
        menuDiv.style.height = '0px';
        menu = 0;
    }

});
