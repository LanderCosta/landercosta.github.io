// IIFE
(function(){
  
  'use strict';

  addInteractions();
  
  function addInteractions(){
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuMobile = document.querySelector('.menu-mobile');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    addHamburguerMenuClickToShowMobileMenu(menuHamburguer, menuMobile);
    addMenuLinksClickToSimulateHamburguerClick(menuLinks, menuHamburguer);
  }

  function addHamburguerMenuClickToShowMobileMenu(menuHamburguer, menuMobile){
    menuHamburguer.addEventListener('click', () => {
      menuHamburguer.classList.toggle('open');
      menuMobile.classList.toggle('show');
    });
  }

  function addMenuLinksClickToSimulateHamburguerClick(menuLinks, menuHamburguer){
    for(let menuLink of menuLinks){
      menuLink.addEventListener('click', () => {
        menuHamburguer.click();
      });
    }
  }
  
})();