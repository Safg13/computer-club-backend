fetch('http://localhost:5432/user/list')
  .then(response => response.json())
  .then(data => {
    // Create an empty string to hold the HTML output
    let output = '';

    // Loop through the JSON objects
    data.forEach(function(object) {
      // Append each object as a row to the output
      output += `<tr>
                  <td>${object.id}</td>
                  <td>${object.name}</td>
                  <td>${object.email}</td>
                  <td>${object.phone}</td>
                  <td>${object.password}</td>
                </tr>`;
    });

    // Add the output to the HTML table
    document.getElementById('table').innerHTML = output;
  });