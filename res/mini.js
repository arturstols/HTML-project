const textElement = document.querySelector('.fade-out');
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

const menuLink = document.querySelector('.projects-toggle');
const menuDiv = document.querySelector('.projects');
const divLeft = document.querySelector('.div-left');
const overlay = document.querySelector('.overlay');

overlay.innerHTML = divLeft.innerHTML;

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