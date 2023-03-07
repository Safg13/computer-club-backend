const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            data.forEach(data => {
                let userJSONData = JSON.stringify(data);
                let userData = JSON.parse(userJSONData)


                const userItem = document.createElement('div');
                userItem.classList = "user_item flex";


                const userItemInfo = document.createElement('div');
                userItemInfo.classList = "user_item_info flex";


                document.querySelector('.users_conteiner').appendChild(userItem);
                userItem.appendChild(userItemInfo);
                // userItemText.innerHTML = (
                //     "userId: " + userData.userId + "<br>" +
                //     "id: " + userData.id + "<br>" +
                //     "title: " + userData.title + "<br>" +
                //     "body: " + userData.body
                // );

                

                const userItemRight = document.createElement('div');
                userItemRight.className = "user_item_buttons flex";
                userItem.appendChild(userItemRight);


                const userItemUpdateBtn = document.createElement('button');
                userItemUpdateBtn.classList.add('user_item_btn');
                userItemUpdateBtn.textContent = "Редактировать";
                userItemRight.appendChild(userItemUpdateBtn);
                userItemUpdateBtn.addEventListener('click', function() {
                    console.log(userItemInfo);
                })


                const userItemDeleteBtn = document.createElement('button');
                userItemDeleteBtn.className = "user_item_btn user_item_delete_btn";
                userItemDeleteBtn.textContent = "Удалить";
                userItemRight.appendChild(userItemDeleteBtn);
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

