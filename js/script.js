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

const onTogglePrice = (event) => {
    const detailsOpen = document.querySelectorAll('.price__wrapper > details[open]');

    if (event.target.open) {
        detailsOpen.forEach((el) => {
            if (el !== event.target) {
                el.open = false;
            }
        });
    }
};

details.forEach((el) => el.addEventListener('toggle', onTogglePrice));

// ----------------- dropdowns prices -----------------

const cityCards = [
    {
        city: ' Canandaigua, NY',
        phone: '+1 585 393 0001',
        address: '151 Charlotte Street',
        data: 'canandaigua'
    },
    {
        city: ' New York City',
        phone: '+1 212 456 0002',
        address: '9 East 91st Street',
        data: 'newYork'
    },
    {
        city: ' Yonkers, NY',
        phone: '+1 914 678 0003',
        address: '511 Warburton Ave',
        data: 'yonkers'
    },
    {
        city: ' Sherrill, NY',
        phone: '+1 315 908 0004',
        address: '14 WEST Noyes BLVD',
        data: 'sherrill'
    }
];
const deactivateSelect = (select, arrow) => {
    if (!select.classList.contains('active-list')) return;

    const optList = select.querySelector('.menu');

    optList.classList.add('hidden-list');
    // select.classList.remove('active-list');
    arrow.classList.remove('select__arrow-rotate');
};

const activeSelect = (select) => {
    if (select.classList.contains('active-list')) return;

    deactivateSelect(select);
    select.classList.add('active-list');
};

const toggleOptList = (select, arrow) => {
    const menu = select.querySelector('.menu');

    menu.classList.toggle('hidden-list');
    arrow.classList.toggle('select__arrow-rotate');
};

const clickOptList = (option, value, event) => {
    const dropdownCards = document.querySelectorAll('.dropdown__card');

    value.innerText = option.innerText;

    const dataList = event.target.dataset.value;

    dropdownCards.forEach((card) => {
        card.classList.add('show-card');
        // if (!card.classList.contains(dataList))
        if (card.getAttribute('data-card') !== dataList) {
            card.classList.remove('show-card');
        }
    });

    mediaQuery();
};

const mediaQuery = () => {
    const mediaQueryTablet = window.matchMedia('(max-width: 1439px)');
    const mediaQueryMobile = window.matchMedia('(max-width: 767px)');
    const dropdown = document.querySelector('.dropdown');
    const contactsImg = document.querySelector('.contacts__img');

    const handleTabletChange = (e) => {
        if (e.matches) {
            dropdown.classList.add('media');
        } else {
            dropdown.classList.remove('media');
        }
    };

    const handleMobileChange = (e) => {
        if (e.matches) {
            contactsImg.style.visibility = 'hidden';
        } else {
            contactsImg.style.visibility = 'visible';
        }
    };

    if (mediaQueryTablet.matches) {
        dropdown.classList.add('media');
    } else {
        dropdown.classList.remove('media');
    }

    if (mediaQueryMobile.matches) {
        contactsImg.style.visibility = 'hidden';
    } else {
        contactsImg.style.visibility = 'visible';
    }

    mediaQueryTablet.addEventListener('change', (e) => handleTabletChange(e));
    mediaQueryMobile.addEventListener('change', (e) => handleMobileChange(e));
};

window.addEventListener('load', () => {
    const select = document.querySelector('.select');
    const arrow = document.querySelector('.select__arrow');
    const dropdownCardRoot = document.querySelector('.dropdown__card-root');
    const dropdown = document.querySelector('.dropdown');
    const optionList = select.querySelectorAll('.option');
    const value = select.querySelector('.value');

    cityCards.forEach(
        ({ city, phone, address, data }) =>
            (dropdownCardRoot.innerHTML += `
                                 <div class="dropdown__card" data-card=${data}>
                                        <div class="card">
                                            <div class="city">
                                                <p>City:</p>
                                                <p>${city}</p>
                                            </div>
                                            <div class="phone">
                                                <p>Phone:</p>
                                                <p>${phone}</p>
                                            </div>
                                            <div class="address">
                                                <p>Office adress:</p>
                                                <p>${address}</p>
                                            </div>
                                            <a href="tel:${phone}" class="call-btn">Call us</a>
                                        </div>
                                    </div>
`)
    );

    optionList.forEach((option) => {
        option.addEventListener('click', (event) => {
            clickOptList(option, value, event);
        });
    });

    select.addEventListener('click', () => {
        toggleOptList(select, arrow, dropdown);
    });

    select.addEventListener('focus', (event) => {
        activeSelect(select, arrow, event);
    });

    select.addEventListener('blur', () => {
        deactivateSelect(select, arrow);
    });
});

// ----------------- service -----------------

const buttons = document.querySelectorAll('.service__button');
const cards = document.querySelectorAll('.item-service');
const cardsState = {};
cards.forEach((el) => {
    cardsState[el.dataset.card] = true;
});

const toggleButtons = (event) => {
    buttons.forEach((el) => {
        if (event.target === el) {
            if (!el.classList.contains('active')) {
                el.classList.add('active');
                cardsState[el.dataset.btn] = false;
            } else {
                el.classList.remove('active');
                cardsState[el.dataset.btn] = true;
            }
        }
    });
    blurCards();
};

const blurCards = () => {
    let activeButtons = 0;

    Object.entries(cardsState).forEach((item) => {
        if (item[1] === false) {
            activeButtons += 1;
            cards.forEach((el) => {
                if (el.dataset.card === item[0]) {
                    el.classList.remove('blur');
                }
            });
        } else {
            cards.forEach((el) => {
                if (el.dataset.card === item[0]) {
                    el.classList.add('blur');
                }
            });
        }
    });

    if (activeButtons >= 2) {
        Object.entries(cardsState).forEach((item) => {
            if (item[1] === true) {
                buttons.forEach((el) => {
                    if (el.dataset.btn === item[0]) {
                        el.disabled = true;
                    }
                });
            }
        });
    } else {
        buttons.forEach((el) => {
            el.disabled = false;
        });
    }

    if (activeButtons === 0) {
        cards.forEach((el) => {
            el.classList.remove('blur');
        });
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        toggleButtons(event);
    });
});
