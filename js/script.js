// ----------------- Burger -----------------
const burger = document.querySelector('.header__burger');
const menyBurger = document.querySelector('.header__menu');
const htmlLock = document.querySelector('html');
const links = document.querySelectorAll('.nav__item');

burger.addEventListener('click', toggleMenu);

[...links].forEach((link) => {
    link.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    burger.classList.toggle('active-burg');
    menyBurger.classList.toggle('active-menu');
    htmlLock.classList.toggle('lock');
}

document.addEventListener('click', outsideClickMenu);
function outsideClickMenu(e) {
    const clickMenu = e.composedPath().includes(menyBurger);
    const clickBurger = e.composedPath().includes(burger);

    if (!clickMenu && !clickBurger) {
        burger.classList.remove('active-burg');
        menyBurger.classList.remove('active-menu');
        htmlLock.classList.remove('lock');
    }
}

// ----------------- prices__accordion -----------------

const details = document.querySelectorAll('.price__wrapper > details');

function onTogglePrice(event) {
    const detailsOpen = document.querySelectorAll('.price__wrapper > details[open]');

    if (event.target.open) {
        detailsOpen.forEach((el) => {
            if (el !== event.target) {
                el.open = false;
            }
        });
    }
}

details.forEach((el) => el.addEventListener('toggle', onTogglePrice));

// ----------------- dropdowns prices -----------------

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

console.group('%cPlants#2', 'color: red');
console.log('Вёрстка соответствует макету. Ширина экрана 768px ' + '%c+24', 'color: red');
console.log('Вёрстка соответствует макету. Ширина экрана 380px ' + '%c+24', 'color: red');
console.log(
    'Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.\nВесь контент страницы при этом сохраняется: не обрезается и не удаляется ' +
        '%c+15',
    'color: red'
);
console.log('На ширине экрана 380рх и меньше реализовано адаптивное меню ' + '%c+22', 'color: red');
console.groupEnd();
