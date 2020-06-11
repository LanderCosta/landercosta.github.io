// IIFE
(function(){
  
  'use strict';

  addHamburguerAnimation();

  function addHamburguerAnimation(){
    const menuBtn = document.querySelector('.menu-hamburguer');
    const menuMobile = document.querySelector('.menu-mobile');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      menuMobile.classList.toggle('show');
      menuOpen = !menuOpen;
    });
  }

})();