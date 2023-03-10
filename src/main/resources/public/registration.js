let username = document.querySelector('#username');
let usernameError = document.querySelector('span.name_error');
let regEmail = document.querySelector('#reg_email')
let regEmailError = document.querySelector('span.email_error')
let regTel = document.querySelector('#reg_tel');
let regTelError = document.querySelector('span.tel_error');
let regPassword = document.querySelector('#reg_password');
let regPasswordError = document.querySelector('span.password_error');
let regPasswordConfirmation = document.querySelector('#reg_password_confirmation');
let regPasswordConfirmationError = document.querySelector('span.password_confirmation_error');
let form = document.querySelector('form');

let reg_only_latters = /[^a-zA-Zа-яА-Я]/g
let reg_eng_ru_number = /[^0-9a-zA-Zа-яА-Я]/g
let reg_only_Numbers = /[^0-9\-()]/g
let reg_email = /[^0-9a-zA-Zа-яА-Я\-@_.]/g
let reg_password = /[^0-9a-zA-Zа-яА-Я\-@_.]/g

username.addEventListener('input', function () {
    this.value = this.value.replace(reg_only_latters, '');
});
regTel.addEventListener('input', function () {
    this.value = this.value.replace(reg_only_Numbers, '');
});
regEmail.addEventListener('input', function () {
    this.value = this.value.replace(reg_email, '');
});
regPassword.addEventListener('input', function () {
    this.value = this.value.replace(reg_eng_ru_number, '');
});
regPasswordConfirmation.addEventListener('input', function () {
    this.value = this.value.replace(reg_eng_ru_number, '');
});




form.addEventListener('submit', function (submit_valid) {
    submit_valid.preventDefault();
    if (username.value == null || username.value == "") {
        usernameError.classList.add('error--active');
        usernameError.textContent = 'Это поле не должно быть пустым';
        username.classList.remove('form_place--valid');
        username.classList.add('form_place--invalid');
        return false;
    } else {
        this.submit()
        window.location.href = 'http://safg13.ddns.net:8080/index.html';
    }
})

form.addEventListener('input', function (input_valid) {
    input_valid.preventDefault();

    username.addEventListener('input', function () {
        if (username.value == null || username.value == "") {
            usernameError.classList.add('error--active');
            usernameError.textContent = 'Это поле не должно быть пустым';
            username.classList.remove('form_place--valid');
            username.classList.add('form_place--invalid');
            return;
        } else if (username.value.length < 2) {
            usernameError.classList.add('error--active');
            usernameError.textContent = 'В этом поле не должно быть меньше 2-х символов';
            username.classList.remove('form_place--valid');
            username.classList.add('form_place--invalid');
            return;
        } else if (username.value.length > 16) {
            usernameError.classList.add('error--active');
            usernameError.textContent = 'В этом поле не должно быть больше 16 символов';
            username.classList.remove('form_place--valid');
            username.classList.add('form_place--invalid');
            return
        } else {
            username.classList.remove('form_place--invalid');
            username.classList.add('form_place--valid');
            usernameError.classList.remove('error--active');
        }
    })
 
    regEmail.addEventListener('input', function () {
        if (regEmail.value == null || regEmail.value == "") {
            regEmailError.classList.add('error--active');
            regEmailError.textContent = 'Это поле не должно быть пустым';
            regEmail.classList.remove('form_place--valid');
            regEmail.classList.add('form_place--invalid');
            return;
        } else if (regEmail.value.length < 6) {
            regEmailError.classList.add('error--active');
            regEmailError.textContent = 'В этом поле не должно быть меньше 6 символов';
            regEmail.classList.remove('form_place--valid');
            regEmail.classList.add('form_place--invalid');
            return;
        } else if (regEmail.value.length > 128) {
            regEmailError.classList.add('error--active');
            regEmailError.textContent = 'В этом поле не должно быть больше 128 символов';
            regEmail.classList.remove('form_place--valid');
            regEmail.classList.add('form_place--invalid');
            return
        } else {
            regEmail.classList.remove('form_place--invalid');
            regEmail.classList.add('form_place--valid');
            regEmailError.classList.remove('error--active');
        }
    })

    regTel.addEventListener('input', function () {
        
        if (regTel.value == null || regTel.value == "") {
            regTelError.classList.add('error--active');
            regTelError.textContent = 'Это поле не должно быть пустым';
            regTel.classList.remove('form_place--valid');
            regTel.classList.add('form_place--invalid');
            return;
        } else if (regTel.value.length < 11) {
            regTelError.classList.add('error--active');
            regTelError.textContent = 'В этом поле не должно быть меньше 11 символов';
            regTel.classList.remove('form_place--valid');
            regTel.classList.add('form_place--invalid');
            return;
        } else if (regTel.value.length > 11) {
            regTelError.classList.add('error--active');
            regTelError.textContent = 'В этом поле не должно быть больше 11 символов';
            regTel.classList.remove('form_place--valid');
            regTel.classList.add('form_place--invalid');
            return
        } else {
            regTel.classList.remove('form_place--invalid');
            regTel.classList.add('form_place--valid');
            regTelError.classList.remove('error--active');
        }
    })

    regPassword.addEventListener('input', function () {
        
        if (regPassword.value == null || regPassword.value == "") {
            regPasswordError.classList.add('error--active');
            regPasswordError.textContent = 'Это поле не должно быть пустым';
            regPassword.classList.remove('form_place--valid');
            regPassword.classList.add('form_place--invalid');
            return;
        } else if (regPassword.value.length < 8) {
            regPasswordError.classList.add('error--active');
            regPasswordError.textContent = 'В этом поле не должно быть меньше 8 символов';
            regPassword.classList.remove('form_place--valid');
            regPassword.classList.add('form_place--invalid');
            return;
        } else if (regPassword.value.length > 36) {
            regPasswordError.classList.add('error--active');
            regPasswordError.textContent = 'В этом поле не должно быть больше 36 символов';
            regPassword.classList.remove('form_place--valid');
            regPassword.classList.add('form_place--invalid');
            return
        } else {
            regPassword.classList.remove('form_place--invalid');
            regPassword.classList.add('form_place--valid');
            regPasswordError.classList.remove('error--active');
        }
    })

    regPasswordConfirmation.addEventListener('input', function () {
        
        if (regPasswordConfirmation.value == null || regPasswordConfirmation.value == "") {
            regPasswordConfirmationError.classList.add('error--active');
            regPasswordConfirmationError.textContent = 'Это поле не должно быть пустым';
            regPasswordConfirmation.classList.remove('form_place--valid');
            regPasswordConfirmation.classList.add('form_place--invalid');
            return;
        } else if (regPasswordConfirmation.value.length < 8) {
            regPasswordConfirmationError.classList.add('error--active');
            regPasswordConfirmationError.textContent = 'В этом поле не должно быть меньше 8 символов';
            regPasswordConfirmation.classList.remove('form_place--valid');
            regPasswordConfirmation.classList.add('form_place--invalid');
            return;
        } else if (regPasswordConfirmation.value.length > 36) {
            regPasswordConfirmationError.classList.add('error--active');
            regPasswordConfirmationError.textContent = 'В этом поле не должно быть больше 36 символов';
            regPasswordConfirmation.classList.remove('form_place--valid');
            regPasswordConfirmation.classList.add('form_place--invalid');
            return
        } else if (regPassword.value != regPasswordConfirmation.value) {
            regPasswordConfirmationError.classList.add('error--active');
            regPasswordConfirmationError.textContent = 'Пароли не совпадают';
            regPasswordConfirmation.classList.remove('form_place--valid');
            regPasswordConfirmation.classList.add('form_place--invalid');
        } else {
            regPasswordConfirmation.classList.remove('form_place--invalid');
            regPasswordConfirmation.classList.add('form_place--valid');
            regPasswordConfirmationError.classList.remove('error--active');
        }
    })
})

