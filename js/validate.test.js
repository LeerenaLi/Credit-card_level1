import {validateHolder, validateNumber, validateCvv} from './validate.js';

describe('Валидация данных карты', () => {

    it('Валидация имени владельца, правильный ввод', () => {
        expect(validateHolder('Sergey Ivanov')).toBe(true);
    });

    it('Валидация имени владельца, неправильный ввод', () => {
        expect(validateHolder('Sergey')).toBe(false);
        expect(validateHolder('Сергей Иванов')).toBe(false);
        expect(validateHolder('12354')).toBe(false);
    });

    it('Валидация номера карты, правильный ввод', () => {
        expect(validateNumber('2525 6565 2525 8585')).toBe(true);
    });

    it('Валидация номера карты, неправильный ввод', () => {
        expect(validateNumber('проанвыапроплш')).toBe(false);
        expect(validateNumber('hkjgjfdgsg')).toBe(false);
        expect(validateNumber('8789&*(())+*^&')).toBe(false);
        expect(validateNumber('2525 6565 2525')).toBe(false);
        expect(validateNumber('2525 6565 2525 2525 2525')).toBe(false);
    });

    it('Валидация CVV карты, правильный ввод', () => {
        expect(validateCvv('145')).toBe(true);
    });

    it('Валидация CVV карты, неправильный ввод', () => {
        expect(validateCvv('14')).toBe(false);
        expect(validateCvv('142524')).toBe(false);
        expect(validateCvv('ghj')).toBe(false);
        expect(validateCvv('абв')).toBe(false);
        expect(validateCvv(',.;')).toBe(false);
    });
});
