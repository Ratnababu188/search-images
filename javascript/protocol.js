
let data={
    Name:"ratnababu",
    age:24,
    gender:"male",
    status:"active"
    
}
options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer b720ef3e414087cad4c23b1018918e29b8ab1acf209b9f4c4c08d91f132e510a "
    },
    body: JSON.stringify(data)
  };
  
  fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      console.log(jsonData);
    });