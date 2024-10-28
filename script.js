// Toggle Burger Menu
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu');

burger.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('opaque');
    } else {
        navbar.classList.remove('opaque');
    }
});
