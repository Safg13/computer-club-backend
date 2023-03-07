// let userJSONData = JSON.stringify(data);
// let userData = JSON.parse(userJSONData)
//  console.log(userData.userId);


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            data.forEach(data => {
                let userJSONData = JSON.stringify(data);
                let userData = JSON.parse(userJSONData)

                const userItem = document.createElement('div');
                userItem.classList = "user_item flex";

                const userItemText = document.createElement('p');
                userItemText.classList.add('user_item_paragraph');

                document.querySelector('.users_conteiner').appendChild(userItem);
                userItem.appendChild(userItemText);
                userItemText.innerHTML = (
                    "userId: " + userData.userId + '\n' +
                    "id: " + userData.id + "<br>" +
                    "title: " + userData.title + "<br>" +
                    "body: " + userData.body
                );

                const userItemRight = document.createElement('div');
                userItemRight.className = "user_item_buttons flex";
                userItem.appendChild(userItemRight);

                const userItemUpdateBtn = document.createElement('button');
                userItemUpdateBtn.classList.add('user_item_btn');
                userItemUpdateBtn.textContent = "Редактировать";
                userItemRight.appendChild(userItemUpdateBtn);

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

