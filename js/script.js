const burger = document.querySelector('.header__burger');
const menyBurger = document.querySelector('.header__menu');
const bodyLock = document.querySelector('body');
const links = document.querySelectorAll('.nav__item');

burger.addEventListener('click', toggleMenu);

[...links].forEach((link) => {
    link.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    burger.classList.toggle('active');
    menyBurger.classList.toggle('active');
    bodyLock.classList.toggle('lock');
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach((option) => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach((option) => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

console.group('%cPlants#1', 'color: red');
console.log('Вёрстка валидная. ' + '%c+10', 'color: red');
console.log('Вёрстка семантическая. ' + '%c+20', 'color: red');
console.log('Вёрстка соответствует макету. ' + '%c+48', 'color: red');
console.log('Требования к css. ' + '%c+12', 'color: red');
console.log('Интерактивность, реализуемая через css. ' + '%c+20', 'color: red');
console.log('%cВСЕГО: +110', 'color: red');
console.groupEnd();
