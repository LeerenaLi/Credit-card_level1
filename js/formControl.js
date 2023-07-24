import CreditCardInputMask from 'credit-card-input-mask';
import { validateCvv, validateHolder, validateNumber } from './validate.js';

export const formControl = () => {
    const form = document.querySelector('#form');
    const outputNumber = document.querySelector('.card__number');
    const outputPersone = document.querySelector('.card__name');
    const outputDate = document.querySelector('.card__date');
    const inputHolder = document.querySelector('#cardHolder');
    const inputNumber = document.querySelector('#cardNumber');
    const inputDate = document.querySelector('#cardDate');
    const inputSvv = document.querySelector('.input__cvv');
    const validatoinButton = document.querySelector('#valid-btn');
    const title = document.querySelector('.form__title');

    inputHolder.addEventListener('input', () => {
        inputHolder.maxLength = 24;
        inputHolder.value = inputHolder.value.replace(/[^a-zа-я\s]/gi, '');
        outputPersone.textContent = inputHolder.value;
    });

    inputNumber.addEventListener('input', () => {
        const numberMask = new CreditCardInputMask({
            element: inputNumber,
            pattern: '{{9999}} {{9999}} {{9999}} {{9999}}',
        });

        outputNumber.textContent = inputNumber.value;
    });

    inputDate.addEventListener('input', () => {
        inputDate.dataset.mask = 'mm/yy';
        inputDate.maxLength = 5;
        outputDate.textContent = inputDate.value;
    });

    inputSvv.addEventListener('input', () => {
        const cvvMask = new CreditCardInputMask({
            element: inputSvv,
            pattern: '{{9}}{{9}}{{9}}',
        });
    });

    validatoinButton.addEventListener('click', () => {
        if (validateHolder(inputHolder.value) &&
            validateNumber(inputNumber.value) &&
            validateCvv(inputSvv.value)) {
            title.textContent = 'the Сard data is valid';
            title.style.color = 'green';
            setTimeout(() => {
                title.textContent = '';
                form.reset();
            }, 2000);
        } else {
            title.textContent = 'the Card data is not valid';
            title.style.color = 'red';
            setTimeout(() => {
                title.textContent = '';
                form.reset();
            }, 2000);
        }
    });
};
