const btn = document.querySelector('.contact__form--submit');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const subjectError = document.querySelector('.subjectError');
const messageError = document.querySelector('.messageError');

btn.onclick = function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (testLength(fullName, 5)) {
        nameError.classList.add('hide');
        nameError.classList.remove('show');
    } else {
        nameError.classList.add('show');
        nameError.classList.remove('hide');
    }
    if (validateEmail(email)) {
        emailError.classList.add('hide');
        emailError.classList.remove('show');
    } else {
        emailError.classList.add('show');
        emailError.classList.remove('hide');
    }
    if (testLength(subject, 15)) {
        subjectError.classList.add('hide');
        subjectError.classList.remove('show');
    } else {
        subjectError.classList.add('show');
        subjectError.classList.remove('hide');
    }
    if (testLength(message, 25)) {
        messageError.classList.add('hide');
        messageError.classList.remove('show');
    } else {
        messageError.classList.add('show');
        messageError.classList.remove('hide');
    }

    function testLength(element, length) {
        if (element.length > length) {
            return true;
        } else {
            return false;
        };
    };
    function validateEmail(emailVal) {
        const expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-])/;
        const isValid = expression.test(emailVal);
        return isValid;
    };
};