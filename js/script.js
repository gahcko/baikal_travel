
const burger = document.querySelector('.burger');
const activeBurger = document.querySelector('.menu_burger');
const close = document.querySelector('.close');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    activeBurger.classList.add('active');
    body.classList.add('bodyfixed')
});

close.addEventListener('click', () => {
    activeBurger.classList.remove('active');
    body.classList.remove('bodyfixed')
});