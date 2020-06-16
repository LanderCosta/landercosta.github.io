// IIFE
(function(){
  
  'use strict';

  addInteractions();
  
  function addInteractions(){
    const menuBtn = document.querySelector('.menu-hamburguer');
    const menuMobile = document.querySelector('.menu-mobile');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    addHamburguerMenuClickToShowMobileMenu(menuBtn, menuMobile);
    addMenuLinksClickToRemoveMobileMenu(menuLinks, menuBtn);
  }

  function addHamburguerMenuClickToShowMobileMenu(menuBtn, menuMobile){
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      menuMobile.classList.toggle('show');
    });
  }

  function addMenuLinksClickToRemoveMobileMenu(menuLinks, menuBtn){
    for(let menuLink of menuLinks){
      menuLink.addEventListener('click', () => {
        menuBtn.click();
      });
    }
  }
  
})();