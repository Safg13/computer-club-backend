const url = 'https://jsonplaceholder.typicode.com/posts';
const deleteUserUrl = 'https://jsonplaceholder.typicode.com'

fetch(url)
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

                const userId = document.createElement('div');
                userId.classList = "item_info_userId";
                userId.innerHTML = "<mark>userId: </mark>" + userData.userId
                userItemInfo.appendChild(userId);

                const id = document.createElement('div');
                id.classList = "item_info_userId";
                id.innerHTML = "<mark>id: </mark>" + userData.id
                userItemInfo.appendChild(id);

                const title = document.createElement('div');
                title.classList = "item_info_userId";
                title.innerHTML = "<mark>title: </mark>" + userData.title
                userItemInfo.appendChild(title);

                const body = document.createElement('div');
                body.classList = "item_info_userId";
                body.innerHTML = "<mark>body: </mark>" + userData.body
                userItemInfo.appendChild(body);

                const userItemRight = document.createElement('div');
                userItemRight.className = "user_item_buttons flex";
                userItem.appendChild(userItemRight);

                const userItemUpdateBtn = document.createElement('button');
                userItemUpdateBtn.classList.add('user_item_btn');
                userItemUpdateBtn.textContent = "Отправить в консоль";
                userItemRight.appendChild(userItemUpdateBtn);
                userItemUpdateBtn.addEventListener('click', function() {
                    console.log(userId.innerHTML + ' ' + id.innerHTML + ' ' + title.innerHTML + ' ' + body.innerHTML);
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


            });
        } else {
            let userJSONData = JSON.stringify(data);
            let userData = JSON.parse(userJSONData)

            const userItem = document.createElement('div');
            userItem.classList.add('user_item')
            userItem.innerHTML = JSON.stringify(data);
            document.querySelector('.users_conteiner').appendChild(userItem);
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


function getUserId(){
    let gettedId = document.querySelector('.item_info_id');
    return gettedId
}




