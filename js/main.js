// IIFE
(function(){
  
  'use strict';

  addInteractions();
  
  function addInteractions(){
    const btnHamburguer = document.querySelector('.btn-hamburguer');
    const menuMobile = document.querySelector('.menu-mobile');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    addHamburguerBtnClickToShowMobileMenu(btnHamburguer, menuMobile);
    addMenuLinksClickToSimulateHamburguerClick(menuLinks, btnHamburguer);
  }

  function addHamburguerBtnClickToShowMobileMenu(btnHamburguer, menuMobile){
    btnHamburguer.addEventListener('click', () => {
      btnHamburguer.classList.toggle('open');
      menuMobile.classList.toggle('show');
    });
  }

  function addMenuLinksClickToSimulateHamburguerClick(menuLinks, btnHamburguer){
    for(let menuLink of menuLinks){
      menuLink.addEventListener('click', () => {
        btnHamburguer.click();
      });
    }
  }
  
})();