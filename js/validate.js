export const validateHolder = (str) => {
    const holderRegexp = /^[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    return holderRegexp.test(str);
};

export const validateNumber = (str) => {
    const numberRegexp = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    return numberRegexp.test(str);
};

export const validateCvv = (str) => {
    const cvvRegexp = /^\d{3,4}$/;
    return cvvRegexp.test(str);
};

