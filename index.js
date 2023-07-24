import {createCard} from './js/createElements.js';
import {setChildren} from 'redom';
import {formControl} from './js/formControl.js';

const init = () => {
    setChildren(document.body, createCard());
    formControl();
};

init();
