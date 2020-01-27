$(function(){
// Header
  const menuToggle = document.querySelector('#menu-togle');
  const mobileNavContainer = document.querySelector('#mobile-nav');

  menuToggle.onclick = function(){
  menuToggle.classList.toggle('menu-icon-active');
  mobileNavContainer.classList.toggle('mobile-nav--active');
  }
// Header
// Slider
$('.header-slider').slick({
  arrows: false,
  vertical: false,
  dots: true,
  dotsClass: 'header_dots',
  // autoplay: 2000,  
});
// Slider
// AOS
AOS.init({
  disable: 'mobile'
});
// AOS
});


