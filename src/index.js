import templateFunction from './templates/template.hbs';
const arrData = require('./menu.json');

// Рендеринг
const markup = arrData.map(item => templateFunction(item)).join('');

const containerEl = document.querySelector('.js-menu');
containerEl.insertAdjacentHTML('afterbegin', markup);

// Функционал выбора темы
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeSwitchEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

themeSwitchEl.addEventListener('change', onChangeTheme);

selectTheme();

function selectTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === Theme.DARK) {
        themeSwitchEl.checked = true;
        bodyEl.classList.remove(Theme.LIGHT);
        bodyEl.classList.add(Theme.DARK);
    } else {
        themeSwitchEl.checked = false;
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
    }
}

function onChangeTheme() {
    if (themeSwitchEl.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
    }
    selectTheme();
}