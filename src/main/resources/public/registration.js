import _regeneratorRuntime from 'babel-runtime/regenerator';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var lox = ReactDOM.createRoot(document.querySelector('#like_button_container'));
var element = React.createElement(
    'h1',
    null,
    'Hello, pidors'
);
lox.render(element);

var username = document.querySelector('#username');
var usernameError = document.querySelector('span.name_error');
var regEmail = document.querySelector('#reg_email');
var regEmailError = document.querySelector('span.email_error');
var regTel = document.querySelector('#reg_tel');
var regTelError = document.querySelector('span.tel_error');
var regPassword = document.querySelector('#reg_password');
var regPasswordError = document.querySelector('span.password_error');
var regPasswordConfirmation = document.querySelector('#reg_password_confirmation');
var regPasswordConfirmationError = document.querySelector('span.password_confirmation_error');
var form = document.querySelector('form');

var reg_only_latters = /[^a-zA-Zа-яА-Я]/g;
var reg_eng_ru_number = /[^0-9a-zA-Zа-яА-Я]/g;
var reg_only_Numbers = /[^0-9\-()]/g;
var reg_email = /[^0-9a-zA-Zа-яА-Я\-@_.]/g;
var reg_password = /[^0-9a-zA-Zа-яА-Я\-@_.]/g;

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
});

function usernameValidate() {
    if (username.value == null || username.value == "") {
        usernameError.classList.add('error--active');
        usernameError.textContent = 'Это поле не должно быть пустым';
        username.classList.remove('form_place--valid');
        username.classList.add('form_place--invalid');
        return false;
    } else if (username.value.length < 2) {
        usernameError.classList.add('error--active');
        usernameError.textContent = 'В этом поле не должно быть меньше 2-х символов';
        username.classList.remove('form_place--valid');
        username.classList.add('form_place--invalid');
        return false;
    } else if (username.value.length > 16) {
        usernameError.classList.add('error--active');
        usernameError.textContent = 'В этом поле не должно быть больше 16 символов';
        username.classList.remove('form_place--valid');
        username.classList.add('form_place--invalid');
        return false;
    } else {
        username.classList.remove('form_place--invalid');
        username.classList.add('form_place--valid');
        usernameError.classList.remove('error--active');
        return true;
    }
}

function emailValidate() {
    if (regEmail.value == null || regEmail.value == "") {
        regEmailError.classList.add('error--active');
        regEmailError.textContent = 'Это поле не должно быть пустым';
        regEmail.classList.remove('form_place--valid');
        regEmail.classList.add('form_place--invalid');
        return false;
    } else if (regEmail.value.length < 6) {
        regEmailError.classList.add('error--active');
        regEmailError.textContent = 'В этом поле не должно быть меньше 6 символов';
        regEmail.classList.remove('form_place--valid');
        regEmail.classList.add('form_place--invalid');
        return false;
    } else if (regEmail.value.length > 128) {
        regEmailError.classList.add('error--active');
        regEmailError.textContent = 'В этом поле не должно быть больше 128 символов';
        regEmail.classList.remove('form_place--valid');
        regEmail.classList.add('form_place--invalid');
        return false;
    } else {
        regEmail.classList.remove('form_place--invalid');
        regEmail.classList.add('form_place--valid');
        regEmailError.classList.remove('error--active');
        return true;
    }
}

function phoneValidate() {
    if (regTel.value == null || regTel.value == "") {
        regTelError.classList.add('error--active');
        regTelError.textContent = 'Это поле не должно быть пустым';
        regTel.classList.remove('form_place--valid');
        regTel.classList.add('form_place--invalid');
        return false;
    } else if (regTel.value.length < 11) {
        regTelError.classList.add('error--active');
        regTelError.textContent = 'В этом поле не должно быть меньше 11 символов';
        regTel.classList.remove('form_place--valid');
        regTel.classList.add('form_place--invalid');
        return false;
    } else if (regTel.value.length > 11) {
        regTelError.classList.add('error--active');
        regTelError.textContent = 'В этом поле не должно быть больше 11 символов';
        regTel.classList.remove('form_place--valid');
        regTel.classList.add('form_place--invalid');
        return false;
    } else {
        regTel.classList.remove('form_place--invalid');
        regTel.classList.add('form_place--valid');
        regTelError.classList.remove('error--active');
        return true;
    }
}

function passwordValidate() {
    if (regPassword.value == null || regPassword.value == "") {
        regPasswordError.classList.add('error--active');
        regPasswordError.textContent = 'Это поле не должно быть пустым';
        regPassword.classList.remove('form_place--valid');
        regPassword.classList.add('form_place--invalid');
        return false;
    } else if (regPassword.value.length < 8) {
        regPasswordError.classList.add('error--active');
        regPasswordError.textContent = 'В этом поле не должно быть меньше 8 символов';
        regPassword.classList.remove('form_place--valid');
        regPassword.classList.add('form_place--invalid');
        return false;
    } else if (regPassword.value.length > 36) {
        regPasswordError.classList.add('error--active');
        regPasswordError.textContent = 'В этом поле не должно быть больше 36 символов';
        regPassword.classList.remove('form_place--valid');
        regPassword.classList.add('form_place--invalid');
        return false;
    } else {
        regPassword.classList.remove('form_place--invalid');
        regPassword.classList.add('form_place--valid');
        regPasswordError.classList.remove('error--active');
        return true;
    }
}

function passwordConfirmationValidate() {
    if (regPasswordConfirmation.value == null || regPasswordConfirmation.value == "") {
        regPasswordConfirmationError.classList.add('error--active');
        regPasswordConfirmationError.textContent = 'Это поле не должно быть пустым';
        regPasswordConfirmation.classList.remove('form_place--valid');
        regPasswordConfirmation.classList.add('form_place--invalid');
        return false;
    } else if (regPasswordConfirmation.value.length < 8) {
        regPasswordConfirmationError.classList.add('error--active');
        regPasswordConfirmationError.textContent = 'В этом поле не должно быть меньше 8 символов';
        regPasswordConfirmation.classList.remove('form_place--valid');
        regPasswordConfirmation.classList.add('form_place--invalid');
        return false;
    } else if (regPasswordConfirmation.value.length > 36) {
        regPasswordConfirmationError.classList.add('error--active');
        regPasswordConfirmationError.textContent = 'В этом поле не должно быть больше 36 символов';
        regPasswordConfirmation.classList.remove('form_place--valid');
        regPasswordConfirmation.classList.add('form_place--invalid');
        return false;
    } else if (regPassword.value != regPasswordConfirmation.value) {
        regPasswordConfirmationError.classList.add('error--active');
        regPasswordConfirmationError.textContent = 'Пароли не совпадают';
        regPasswordConfirmation.classList.remove('form_place--valid');
        regPasswordConfirmation.classList.add('form_place--invalid');
    } else {
        regPasswordConfirmation.classList.remove('form_place--invalid');
        regPasswordConfirmation.classList.add('form_place--valid');
        regPasswordConfirmationError.classList.remove('error--active');
        return true;
    }
}

form.addEventListener('input', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(input_valid) {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        input_valid.preventDefault();

                        username.addEventListener('input', _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                            return _regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            usernameValidate();

                                        case 1:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        })));

                        regEmail.addEventListener('input', _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
                            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            emailValidate();

                                        case 1:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        })));

                        regTel.addEventListener('input', _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
                            return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                    switch (_context3.prev = _context3.next) {
                                        case 0:
                                            phoneValidate();

                                        case 1:
                                        case 'end':
                                            return _context3.stop();
                                    }
                                }
                            }, _callee3, this);
                        })));

                        regPassword.addEventListener('input', _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
                            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                    switch (_context4.prev = _context4.next) {
                                        case 0:
                                            passwordValidate();

                                        case 1:
                                        case 'end':
                                            return _context4.stop();
                                    }
                                }
                            }, _callee4, this);
                        })));

                        regPasswordConfirmation.addEventListener('input', _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
                            return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                    switch (_context5.prev = _context5.next) {
                                        case 0:
                                            passwordConfirmationValidate();

                                        case 1:
                                        case 'end':
                                            return _context5.stop();
                                    }
                                }
                            }, _callee5, this);
                        })));

                    case 6:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

var submitButton = document.querySelector('.form_btn');
submitButton.addEventListener('click', function () {
    usernameValidate();
    emailValidate();
    phoneValidate();
    passwordValidate();
    passwordConfirmationValidate();

    if (usernameValidate() == true && emailValidate() == true && phoneValidate() == true && passwordValidate() == true && passwordConfirmationValidate() == true) {
        var testPOST = function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
                var response, mainDiv, div, responseMsg, data, responseCode, booleanResult;
                return _regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.next = 2;
                                return fetch(POSTUserUrl, requestOptions);

                            case 2:
                                response = _context8.sent;
                                _context8.prev = 3;
                                mainDiv = document.querySelector('.form_bottom');
                                div = document.createElement('div');

                                mainDiv.appendChild(div);
                                responseMsg = document.createElement('span');

                                responseMsg.classList = "response_error_messege";

                                _context8.next = 11;
                                return response.json();

                            case 11:
                                data = _context8.sent;
                                responseCode = data.response;

                                booleanResult = function () {
                                    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
                                        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                                            while (1) {
                                                switch (_context7.prev = _context7.next) {
                                                    case 0:
                                                        if (!(responseCode == 'email exists')) {
                                                            _context7.next = 10;
                                                            break;
                                                        }

                                                        if (!(document.querySelector('.response_error_messege') == null)) {
                                                            _context7.next = 7;
                                                            break;
                                                        }

                                                        responseMsg.innerHTML = 'Такой e-mail уже существует';
                                                        div.appendChild(responseMsg);
                                                        return _context7.abrupt('return', false);

                                                    case 7:
                                                        return _context7.abrupt('return', false);

                                                    case 8:
                                                        _context7.next = 11;
                                                        break;

                                                    case 10:
                                                        return _context7.abrupt('return', true);

                                                    case 11:
                                                    case 'end':
                                                        return _context7.stop();
                                                }
                                            }
                                        }, _callee7, this);
                                    }));

                                    return function booleanResult() {
                                        return _ref8.apply(this, arguments);
                                    };
                                }();

                                return _context8.abrupt('return', booleanResult());

                            case 17:
                                _context8.prev = 17;
                                _context8.t0 = _context8['catch'](3);

                                alert('error ', response.status);

                            case 20:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this, [[3, 17]]);
            }));

            return function testPOST() {
                return _ref7.apply(this, arguments);
            };
        }();

        newUser = {
            id: '1',
            name: username.value,
            email: regEmail.value,
            phone: regTel.value,
            password: regPassword.value
        };

        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };

        testPOST().then(function (result) {
            console.log(result);

            if (result == true) {
                window.location.href = MAINURL;
            }
        });
    }
});