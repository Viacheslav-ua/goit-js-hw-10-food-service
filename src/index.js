const ObjJSON = require('./menu.json');
import templateFunction from './templates/template.hbs';

const markup = ObjJSON.map(item => templateFunction(item)).join('');

const containerEl = document.querySelector('.js-menu');
containerEl.insertAdjacentHTML('afterbegin', markup);