let testUsers = document.querySelector('.js_sosing')
let url = 'http://localhost:5432/user/list'



async function f() {
    let response = await fetch(url);

    if (response.ok) {
        // let json = await response.json();
        testUsers.textContent = response.text();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
}

















// fetch()
//     .then(response => response.json())
//     .then(data => {
//         let output = '';
//         data.forEach(function (object) {
//             output += `<tr>
//         <td>${object.id}</td>
//         <td>${object.name}</td>
//         <td>${object.email}</td>
//         <td>${object.phone}</td>
//         <td>${object.password}</td>
//       </tr>`;
//         });
//         document.getElementById('table').innerHTML = output;
//     });