// IIFE
(function(){
  
  'use strict';

  addHamburguerAnimation();

  function addHamburguerAnimation(){
    const menuBtn = document.querySelector('.menu');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      menuOpen = !menuOpen;
    });
  }

})();