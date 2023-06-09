import {el, setChildren} from 'redom';
import CreditCardInputMask from 'credit-card-input-mask';

const createForm = () => {
    const form = el('form', {className: 'form', id: 'form', action: '#'},
        el('div', {className: 'form__input-wrap form__input-wrap_holder'},
            el('label', {className: 'form__label form__holder-label'}, 'Card Holder'),
            el('input', {className: 'input input__holder', type: 'text', id: 'cardHolder'})),
        el('div', {className: 'form__input-wrap form__input-wrap_number'},
            el('label', {className: 'form__label form__number-label'}, 'Card Number'),
            el('input', {className: 'input input__number', id: 'cardNumber'})),
        el('div', {className: 'form__input-wrap form__input-wrap_date'},
            el('label', {className: 'form__label form__date-label'}, 'Card Expiry'),
            el('input', {className: 'input input__date', type: 'text', id: 'cardDate'})),
        el('div', {className: 'form__input-wrap form__input-wrap_cvv'},
            el('label', {className: 'form__label form__cvv-label'}, 'CVV'),
            el('input', {className: 'input input__cvv', type: 'text'})),
        el('button', {className: 'form__button'}, 'CHECK OUT'),
    );

    return form;
};

const createCard = () => {
    const wrapper = el('div', {className: 'wrapper'});

    const card = el('div', {className: 'card'},
        el('p', {className: 'secure'}, 'Secure Checkout'),
        el('div', {className: 'credit-card'},
            el('span', {className: 'card__number'}, 'xxxx xxxx xxxx xxxx'),
            el('div', {className: 'card__personal'},
                el('span', {className: 'card__name'}, 'John Doe'),
                el('span', {className: 'card__date'}, '04/24'),
            ),
        ),
        createForm(),
    );

    setChildren(wrapper, card);
    return wrapper;
};


const formControl = () => {
    const form = document.querySelector('#form');
    const outputNumber = document.querySelector('.card__number');
    const outputPersone = document.querySelector('.card__name');
    const outputDate = document.querySelector('.card__date');
    const inputHolder = document.querySelector('#cardHolder');
    const inputNumber = document.querySelector('#cardNumber');
    const inputDate = document.querySelector('#cardDate');

    const numberMask = new CreditCardInputMask({
        element: inputNumber,
        pattern: '{{9999}} {{9999}} {{9999}} {{9999}}',
    });

    const dateMask = new CreditCardInputMask({
        element: inputDate,
        pattern: '{{1}}{{2}} / {{99}}',
    });

    const cvvMask = new CreditCardInputMask({
        element: document.querySelector('.input__cvv'),
        pattern: '{{9}}{{9}}{{9}}',
    });

    form.addEventListener('input', () => {
        outputNumber.textContent = inputNumber.value;
        outputPersone.textContent = inputHolder.value;
        outputDate.textContent = inputDate.value;
    });
};

const init = () => {
    setChildren(document.body, createCard());
    formControl();
};

init();
