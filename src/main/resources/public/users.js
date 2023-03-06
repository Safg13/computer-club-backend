let sample = '';

// sample +=     <div class="conteiner users_conteiner">
// <p>qeporqp;elr</p>
// <button>Нажать отправить</button>
// </div>

let testParagraph = document.querySelector('.xui');

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            data.forEach(json => {
                // const div = document.createElement('div');
                // div.innerHTML = JSON.stringify(json);
                testParagraph.innerHTML = JSON.stringify(json);
                // document.querySelector('.users_conteiner').appendChild(div);
            });
        } else {
                 // const div = document.createElement('div');
                // div.innerHTML = JSON.stringify(json);
                testParagraph.innerHTML = JSON.stringify(json);
                // document.querySelector('.users_conteiner').appendChild(div);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

