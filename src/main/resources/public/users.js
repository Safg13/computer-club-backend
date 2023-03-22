var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = 'https://jsonplaceholder.typicode.com/posts'; //testURL
var htmlBody = document.querySelector('.users_body');
var htmlContainer = document.querySelector('.users_conteiner');

var usersContainer = ReactDOM.createRoot(document.querySelector('.users_conteiner'));

var pageEventsDiv = ReactDOM.createRoot(document.querySelector('.page_events'));

var pageEventsDiv2 = ReactDOM.createRoot(document.querySelector('.page_events2'));

var UserItemCreator = function (_React$Component) {
    _inherits(UserItemCreator, _React$Component);

    function UserItemCreator(props) {
        _classCallCheck(this, UserItemCreator);

        var _this = _possibleConstructorReturn(this, (UserItemCreator.__proto__ || Object.getPrototypeOf(UserItemCreator)).call(this, props));

        _this.pageBlockerOn = _this.pageBlockerOn.bind(_this);
        _this.pageBlockerOff = _this.pageBlockerOff.bind(_this);
        _this.openUpdateWindow = _this.openUpdateWindow.bind(_this);
        _this.deleteUser = _this.deleteUser.bind(_this);
        _this.closeUpdateWindow = _this.closeUpdateWindow.bind(_this);
        _this.confirmUpdate = _this.confirmUpdate.bind(_this);

        _this.state = { pageBlockerState: false };
        return _this;
    }

    _createClass(UserItemCreator, [{
        key: 'pageBlockerOn',
        value: function pageBlockerOn() {
            this.setState({ pageBlockerState: true });
            var pageBlock = React.createElement('div', { className: 'page_blocker' });
            pageEventsDiv2.render(pageBlock);
        }
    }, {
        key: 'pageBlockerOff',
        value: function pageBlockerOff() {
            this.setState({ pageBlockerState: false });
            pageEventsDiv2.render(null);
        }
    }, {
        key: 'confirmUpdate',
        value: function confirmUpdate() {
            user = {
                id: this.props.id,
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                password: document.getElementById("password").value
            };

            var requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };

            fetch(PUTUserUrl + this.props.id, requestOptions);

            this.closeUpdateWindow();
        }
    }, {
        key: 'closeUpdateWindow',
        value: function closeUpdateWindow() {
            this.pageBlockerOff();
            pageEventsDiv.render(null);
        }
    }, {
        key: 'openUpdateWindow',
        value: function openUpdateWindow() {
            this.pageBlockerOn();

            var editorWindow = React.createElement(
                'div',
                { className: 'editor_window flex' },
                React.createElement(
                    'a',
                    { className: 'editor_window_close', onClick: this.closeUpdateWindow, tabIndex: '1' },
                    React.createElement(
                        'svg',
                        { width: '25px', height: '25px', viewBox: '0 0 1024 1024',
                            xmlns: 'http://www.w3.org/2000/svg' },
                        React.createElement('path', {
                            d: 'M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z' })
                    )
                ),
                React.createElement(
                    'h2',
                    { className: 'editor_window_title' },
                    '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435'
                ),
                React.createElement(
                    'div',
                    { className: 'editor_window_place_div' },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { className: 'editor_window_label' },
                            'id'
                        ),
                        React.createElement('input', { type: 'text', id: 'id', value: this.props.id, className: 'form_place editor_window_place--non-active', readOnly: true })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { className: 'editor_window_label' },
                            'name'
                        ),
                        React.createElement('input', { type: 'text', id: 'name', defaultValue: this.props.name, className: 'form_place editor_window_place' })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { className: 'editor_window_label' },
                            'email'
                        ),
                        React.createElement('input', { type: 'text', id: 'email', defaultValue: this.props.email, className: 'form_place editor_window_place' })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { className: 'editor_window_label' },
                            'phone'
                        ),
                        React.createElement('input', { type: 'text', id: 'phone', defaultValue: this.props.phone, className: 'form_place editor_window_place' })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { className: 'editor_window_label' },
                            'password'
                        ),
                        React.createElement('input', { type: 'text', id: 'password', defaultValue: this.props.password, className: 'form_place editor_window_place' })
                    )
                ),
                React.createElement(
                    'button',
                    { onClick: this.confirmUpdate, className: 'editor_window_submit' },
                    '\u041F\u0440\u0438\u043D\u044F\u0442\u044C'
                )
            );

            pageEventsDiv.render(editorWindow);
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser() {
            fetch(DELETEUserUrl + this.props.id, {
                method: 'DELETE'
            });
            document.querySelector('.users_conteiner').removeChild(document.querySelector('.user_item'));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'user_item flex', userid: this.props.id },
                React.createElement(
                    'div',
                    { className: 'user_item_info flex' },
                    React.createElement(
                        'div',
                        { className: 'item_info_userId' },
                        React.createElement(
                            'mark',
                            null,
                            'id: '
                        ),
                        this.props.id
                    ),
                    React.createElement(
                        'div',
                        { className: 'item_info_userId' },
                        React.createElement(
                            'mark',
                            null,
                            'name: '
                        ),
                        this.props.name
                    ),
                    React.createElement(
                        'div',
                        { className: 'item_info_userId' },
                        React.createElement(
                            'mark',
                            null,
                            'email: '
                        ),
                        this.props.email
                    ),
                    React.createElement(
                        'div',
                        { className: 'item_info_userId' },
                        React.createElement(
                            'mark',
                            null,
                            'phone: '
                        ),
                        this.props.phone
                    ),
                    React.createElement(
                        'div',
                        { className: 'item_info_userId' },
                        React.createElement(
                            'mark',
                            null,
                            'password: '
                        ),
                        this.props.password
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'user_item_buttons flex' },
                    React.createElement(
                        'button',
                        { className: 'user_item_btn', onClick: this.openUpdateWindow },
                        '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C'
                    ),
                    React.createElement(
                        'button',
                        { className: 'user_item_btn user_item_delete_btn', onClick: this.deleteUser },
                        '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
                    )
                )
            );
        }
    }]);

    return UserItemCreator;
}(React.Component);

function getUsers() {
    fetch(GETusersUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        var userItems = data.map(function (user) {
            return React.createElement(UserItemCreator, {
                key: user.id,
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password
            });
        });

        usersContainer.render(React.createElement(
            React.StrictMode,
            null,
            React.createElement(
                'div',
                null,
                userItems
            )
        ));
    }).catch(function (error) {
        console.error('Error:', error);
    });
}

getUsers();