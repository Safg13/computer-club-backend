const url = 'https://jsonplaceholder.typicode.com/posts'; //testURL
const GETusersUrl = 'http://safg13.ddns.net:8080/user/list'
const DELETEUserUrl = 'http://safg13.ddns.net:8080/user/'
const PUTUserUrl = 'http://safg13.ddns.net:8080/user/'

fetch(GETusersUrl)
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data) || !Array.isArray(data)) {
            data.forEach(data => {
                let userJSONData = JSON.stringify(data);
                let userData = JSON.parse(userJSONData)


                const userItem = document.createElement('div');
                userItem.classList = "user_item flex";
                document.querySelector('.users_conteiner').appendChild(userItem);
                userItem.dataset.userid = userData.id; // Присваивание Data-UserId

                const userItemInfo = document.createElement('div');
                userItemInfo.classList = "user_item_info flex";
                userItem.appendChild(userItemInfo);

                const id = document.createElement('div');
                id.classList = "item_info_userId";
                id.innerHTML = "<mark>id: </mark>" + userData.id
                userItemInfo.appendChild(id);

                const name = document.createElement('div');
                name.classList = "item_info_userId";
                name.innerHTML = "<mark>name: </mark>" + userData.name
                userItemInfo.appendChild(name);

                const email = document.createElement('div');
                email.classList = "item_info_userId";
                email.innerHTML = "<mark>email: </mark>" + userData.email
                userItemInfo.appendChild(email);

                const phone = document.createElement('div');
                phone.classList = "item_info_userId";
                phone.innerHTML = "<mark>phone: </mark>" + userData.phone
                userItemInfo.appendChild(phone);

                const password = document.createElement('div');
                password.classList = "item_info_userId";
                password.innerHTML = "<mark>password: </mark>" + userData.password
                userItemInfo.appendChild(password);

                const userItemRight = document.createElement('div');
                userItemRight.className = "user_item_buttons flex";
                userItem.appendChild(userItemRight);

                const userItemUpdateBtn = document.createElement('button');
                userItemUpdateBtn.classList.add('user_item_btn');
                userItemUpdateBtn.textContent = "Отправить в консоль";
                userItemRight.appendChild(userItemUpdateBtn);
                userItemUpdateBtn.addEventListener('click', function () {

                    const editorWindow = document.createElement('div');
                    editorWindow.classList = "editor_window flex";
                    document.querySelector('.users_body').appendChild(editorWindow);

                    const editorWindowTitle = document.createElement('h2');
                    editorWindowTitle.classList = "editor_window_title";
                    editorWindowTitle.innerHTML = "Редактирование";
                    editorWindow.appendChild(editorWindowTitle);

                    const editorMainDiv = document.createElement('div');
                    editorMainDiv.classList = "editor_window_place_div";
                    editorWindow.appendChild(editorMainDiv);

                    function createEditorId() {
                        const editorDiv = document.createElement('div');
                        editorMainDiv.appendChild(editorDiv);

                        const spanId = document.createElement('span');
                        spanId.classList = "editor_window_label";
                        spanId.innerHTML = "id";
                        editorDiv.appendChild(spanId);

                        const inputId = document.createElement('input');
                        inputId.classList = "form_place editor_window_place--non-active";
                        inputId.type = "text";
                        inputId.value = userData.id;
                        inputId.readOnly = true;
                        editorDiv.appendChild(inputId);
                    }
                    createEditorId();

                    const inputName = document.createElement('input');
                    inputName.value = userData.name;

                    function createEditorName() {
                        const editorDiv = document.createElement('div');
                        editorMainDiv.appendChild(editorDiv);

                        const spanName = document.createElement('span');
                        spanName.classList = "editor_window_label";
                        spanName.innerHTML = "name";
                        editorDiv.appendChild(spanName);

                        inputName.classList = "form_place editor_window_place";
                        inputName.type = "text";
                        editorDiv.appendChild(inputName);
                    }
                    createEditorName();

                    const inputEmail = document.createElement('input');
                    inputEmail.value = userData.email;

                    function createEditorEmail() {
                        const editorDiv = document.createElement('div');
                        editorMainDiv.appendChild(editorDiv);

                        const spanEmail = document.createElement('span');
                        spanEmail.classList = "editor_window_label";
                        spanEmail.innerHTML = "email";
                        editorDiv.appendChild(spanEmail);

                        inputEmail.classList = "form_place editor_window_place";
                        inputEmail.type = "text";
                        editorDiv.appendChild(inputEmail);
                    }
                    createEditorEmail();

                    const inputPhone = document.createElement('input');
                    inputPhone.value = userData.phone;

                    function createEditorPhone() {
                        const editorDiv = document.createElement('div');
                        editorMainDiv.appendChild(editorDiv);

                        const spanPhone = document.createElement('span');
                        spanPhone.classList = "editor_window_label";
                        spanPhone.innerHTML = "phone";
                        editorDiv.appendChild(spanPhone);

                        inputPhone.classList = "form_place editor_window_place";
                        inputPhone.type = "text";
                        editorDiv.appendChild(inputPhone);
                    }
                    createEditorPhone();

                    const inputPassword = document.createElement('input');
                    inputPassword.value = userData.password;

                    function createEditorPassword() {
                        const editorDiv = document.createElement('div');
                        editorMainDiv.appendChild(editorDiv);

                        const spanPassword = document.createElement('span');
                        spanPassword.classList = "editor_window_label";
                        spanPassword.innerHTML = "password";
                        editorDiv.appendChild(spanPassword);

                        inputPassword.classList = "form_place editor_window_place";
                        inputPassword.type = "text";
                        editorDiv.appendChild(inputPassword);
                    }
                    createEditorPassword();

                    const editorWindowSubmitButton = document.createElement('button');
                    editorWindowSubmitButton.classList = "editor_window_submit";
                    editorWindowSubmitButton.innerHTML = "Подтвердить";
                    editorWindow.appendChild(editorWindowSubmitButton);

                    editorWindowSubmitButton.addEventListener('click', function() {
                        user = {
                            id: userData.id,
                            name: inputName.value,
                            email: inputEmail.value,
                            phone: inputPhone.value,
                            password: inputPassword.value
                        }

                        fetch(PUTUserUrl + userData.id), {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                              },
                              body: JSON.stringify(user)
                        }

                        console.log(user);
                        document.querySelector('.users_body').removeChild(editorWindow);
                    })
                })
                const userItemDeleteBtn = document.createElement('button');
                userItemDeleteBtn.className = "user_item_btn user_item_delete_btn";
                userItemDeleteBtn.textContent = "Удалить";
                userItemRight.appendChild(userItemDeleteBtn);
                userItemDeleteBtn.addEventListener('click', function () {
                    document.querySelector('.users_conteiner').removeChild(userItem);
                    fetch((DELETEUserUrl + userData.id), {
                        method: 'DELETE'
                    })
                });
            });
        }
    })
    .catch(error => {
        console.error('хуйня какая-то:', error);
    });





