const url = 'https://jsonplaceholder.typicode.com/posts'; //testURL
const GETusersUrl = 'http://safg13.ddns.net:8080/user/list'
const DELETEUserUrl = 'http://safg13.ddns.net:8080/user/'

fetch(GETusersUrl)
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
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
                userItemUpdateBtn.addEventListener('click', function() {
                    console.log(id.innerHTML + ' ' + name.innerHTML + ' ' + email.innerHTML + ' ' + phone.innerHTML + ' ' + password.innerHTML);
                })
            
            
                const userItemDeleteBtn = document.createElement('button');
                userItemDeleteBtn.className = "user_item_btn user_item_delete_btn";
                userItemDeleteBtn.textContent = "Удалить";
                userItemRight.appendChild(userItemDeleteBtn);
                userItemDeleteBtn.addEventListener('click', function(){
                    document.querySelector('.users_conteiner').removeChild(userItem);
                    fetch((DELETEUserUrl + userData.id), {
                        method: 'DELETE'
                    })
                });           
            });
        } else {
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
            userItemUpdateBtn.addEventListener('click', function() {
                console.log(id.innerHTML + ' ' + name.innerHTML + ' ' + email.innerHTML + ' ' + phone.innerHTML + ' ' + password.innerHTML);
            })
        
        
            const userItemDeleteBtn = document.createElement('button');
            userItemDeleteBtn.className = "user_item_btn user_item_delete_btn";
            userItemDeleteBtn.textContent = "Удалить";
            userItemRight.appendChild(userItemDeleteBtn);
            userItemDeleteBtn.addEventListener('click', function(){
                document.querySelector('.users_conteiner').removeChild(userItem);
                fetch((deleteUserUrl + '/' + userData.id), {
                    method: 'DELETE'
                })
            });        
        }
    })
    .catch(error => {
        console.error('хуйня какая-то:', error);
    });

let user = {
    userId: 1,
    id: 1,
    title: 'гомосеки рулят',
    body: 'brawlhalla супер'
};


console.log(userItem.dataset)




