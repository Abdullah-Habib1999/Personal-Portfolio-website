const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItem0 = document.querySelector('.menu-item-0');
const menuItem1 = document.querySelector('.menu-item-1');
const menuItem2 = document.querySelector('.menu-item-2');
const menuItem3 = document.querySelector('.menu-item-3');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItem0.addEventListener('click', close);
menuItem1.addEventListener('click', close);
menuItem2.addEventListener('click', close);
menuItem3.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}