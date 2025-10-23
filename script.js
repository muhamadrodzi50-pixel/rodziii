var tombolMenu = document.querySelector('.tombol-menu');
var menu = document.querySelector('.menu');

tombolMenu.onclick = function() {
  menu.classList.toggle('active');
  
};
AOS.init({
  duration: 1000,
  once: true
});