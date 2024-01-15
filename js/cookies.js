window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 30) {
    navbar.classList.add('sticky-nav');
  } else {
    navbar.classList.remove('sticky-nav');
  }
});

let navBtn = document.querySelector('.mbl-nav-btn');
let navbar = document.querySelector('.menu-list');
let closeNav = document.querySelector('.nav-close');

navBtn.addEventListener('click', () => {
  navbar.classList.add('show-nav');
});

closeNav.addEventListener('click', () => {
  navbar.classList.remove('show-nav');
});

window.addEventListener('scroll', () => {
  navbar.classList.remove('show-nav');
});

// window.addEventListener('click', (event) => {
//   if (!event.target.closest('.mbl-nav-btn') && !event.target.closest('.menu-list')) {
//     navbar.classList.remove('show-nav');
//   }
// });

let dropMblBtn = document.querySelector('.dropdown-btn-mbl');
let dropSubMenu = document.querySelector('.dropdown-mbl-sub-menu');


let cartBtn = document.querySelector('.cart-btn');
let miniCart = document.querySelector('.mini-cart-popup');

cartBtn.onclick = () => {
  miniCart.classList.toggle('open-mini-cart');
};

// Function to handle the scroll event
function handleScroll() {
  miniCart.classList.remove('open-mini-cart');
}

// Attach the scroll event to the window
window.addEventListener('scroll', handleScroll);
