fetch('http://localhost:5432/user/list')

    .then(response => response.json())
    .then(data => {
        let output = '';

        data.forEach(function (object) {

            output += `<tr>
                  <td>${object.id}</td>
                  <td>${object.name}</td>
                  <td>${object.email}</td>
                  <td>${object.phone}</td>
                  <td>${object.password}</td>
                </tr>`;

        });

        document.getElementById('table').innerHTML = output;
    });
