import './sass/main.scss';
import menuTpl from './templates/menu.hbs'
import dishes from './menu.json'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;
let currentTheme = localStorage.getItem('currentTheme') || LIGHT;

const menuRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
if (currentTheme === DARK) { checkboxRef.checked = true;}

bodyRef.classList.add(currentTheme);

menuRef.insertAdjacentHTML('beforeend', createMenuItem(dishes));
checkboxRef.addEventListener('change', onChangeFunc);

function createMenuItem(dishes) {
  return menuTpl(dishes);
}
function onChangeFunc(e) {
    bodyRef.classList.toggle(LIGHT);
  bodyRef.classList.toggle(DARK);
  checkboxRef.toggleAttribute('checked')
  localStorage.setItem('currentTheme',bodyRef.className);
}


