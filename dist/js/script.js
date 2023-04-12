'use strict';

const hamburger = document.querySelector('.hamburger'),
      hamburgerMenu = document.querySelector('.menu'),
      behind = document.querySelector('.behind');

hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('menu_active');
});

behind.addEventListener('click', (e) => {
    if (e.target.className != hamburgerMenu.className && e.target.className != 'menu__nav' && hamburgerMenu.classList.contains('menu_active')) {
        hamburgerMenu.classList.remove('menu_active');
    } 
});


